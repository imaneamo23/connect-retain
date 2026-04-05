import { useState } from "react";
import { usePages } from "@/contexts/PagesContext";
import { AddPageDialog } from "@/components/AddPageDialog";
import { Globe, ChevronDown, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

export function PageSelector() {
  const { pages, currentPage, loading, selectPage, deletePage, canAddMore } = usePages();
  const [dialogOpen, setDialogOpen] = useState(false);

  if (loading) return <Skeleton className="h-9 w-40" />;

  if (pages.length === 0) {
    return (
      <>
        <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setDialogOpen(true)}>
          <Plus className="h-4 w-4" /> Add Page
        </Button>
        <AddPageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1.5 max-w-[200px]">
            <Globe className="h-4 w-4 shrink-0" />
            <span className="truncate">{currentPage?.page_name ?? "Select Page"}</span>
            <ChevronDown className="h-3 w-3 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {pages.map((page) => (
            <DropdownMenuItem
              key={page.id}
              className="flex items-center justify-between gap-2 group"
              onSelect={(e) => {
                e.preventDefault();
                selectPage(page);
              }}
            >
              <span className={`truncate ${currentPage?.id === page.id ? "font-semibold" : ""}`}>
                {page.page_name}
              </span>
              <button
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-destructive/10"
                onClick={(e) => {
                  e.stopPropagation();
                  deletePage(page.id);
                }}
                aria-label={`Delete ${page.page_name}`}
              >
                <Trash2 className="h-3.5 w-3.5 text-destructive" />
              </button>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            disabled={!canAddMore}
            onSelect={() => {
              if (canAddMore) setDialogOpen(true);
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            {canAddMore ? "Add New Page" : "Limit reached (3)"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AddPageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
