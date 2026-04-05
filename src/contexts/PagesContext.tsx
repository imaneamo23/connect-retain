import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface SocialPage {
  id: string;
  page_url: string;
  page_name: string;
  created_at: string;
}

interface PagesContextType {
  pages: SocialPage[];
  currentPage: SocialPage | null;
  loading: boolean;
  addPage: (url: string, name: string) => Promise<boolean>;
  deletePage: (id: string) => Promise<void>;
  selectPage: (page: SocialPage) => void;
  canAddMore: boolean;
}

const MAX_PAGES = 3;

const PagesContext = createContext<PagesContextType | undefined>(undefined);

export function PagesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [pages, setPages] = useState<SocialPage[]>([]);
  const [currentPage, setCurrentPage] = useState<SocialPage | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPages = useCallback(async () => {
    if (!user) {
      setPages([]);
      setCurrentPage(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from("social_pages")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching pages:", error);
      setLoading(false);
      return;
    }

    const fetched = (data ?? []) as SocialPage[];
    setPages(fetched);

    // Restore last selected page
    const lastId = localStorage.getItem(`selected_page_${user.id}`);
    const restored = fetched.find((p) => p.id === lastId);
    setCurrentPage(restored ?? fetched[0] ?? null);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  const selectPage = (page: SocialPage) => {
    setCurrentPage(page);
    if (user) localStorage.setItem(`selected_page_${user.id}`, page.id);
  };

  const addPage = async (url: string, name: string): Promise<boolean> => {
    if (!user) return false;
    if (pages.length >= MAX_PAGES) {
      toast.error("You've reached the maximum limit (3 pages).");
      return false;
    }

    const { data, error } = await supabase
      .from("social_pages")
      .insert({ user_id: user.id, page_url: url, page_name: name })
      .select()
      .single();

    if (error) {
      toast.error("Failed to add page. Please try again.");
      console.error(error);
      return false;
    }

    const newPage = data as SocialPage;
    setPages((prev) => [...prev, newPage]);
    selectPage(newPage);
    toast.success(`"${name}" added successfully!`);
    return true;
  };

  const deletePage = async (id: string) => {
    const { error } = await supabase.from("social_pages").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete page.");
      return;
    }
    setPages((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      if (currentPage?.id === id) {
        const next = updated[0] ?? null;
        setCurrentPage(next);
        if (user && next) localStorage.setItem(`selected_page_${user.id}`, next.id);
        else if (user) localStorage.removeItem(`selected_page_${user.id}`);
      }
      return updated;
    });
    toast.success("Page removed.");
  };

  return (
    <PagesContext.Provider
      value={{ pages, currentPage, loading, addPage, deletePage, selectPage, canAddMore: pages.length < MAX_PAGES }}
    >
      {children}
    </PagesContext.Provider>
  );
}

export function usePages() {
  const context = useContext(PagesContext);
  if (!context) throw new Error("usePages must be used within PagesProvider");
  return context;
}
