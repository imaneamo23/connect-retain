import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { BarChart3, LogOut, User, Home } from "lucide-react";

export default function CustomerLayout() {
  const { signOut, profile } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-14 flex items-center justify-between border-b px-4 sm:px-6 bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-accent-foreground" />
          </div>
          <span className="font-bold text-foreground hidden sm:inline">SentiMind</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => navigate("/customer")} className="gap-1.5">
            <Home className="h-4 w-4" /> <span className="hidden sm:inline">Products</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/customer/profile")} className="gap-1.5">
            <User className="h-4 w-4" /> <span className="hidden sm:inline">Profile</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-1.5 text-destructive hover:text-destructive">
            <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
