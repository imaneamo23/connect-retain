import { useState } from "react";
import { BarChart3, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddPageDialog } from "@/components/AddPageDialog";

export function EmptyDashboard() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
          <BarChart3 className="h-10 w-10 text-accent" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">No data yet</h2>
          <p className="text-muted-foreground">
            Start by analyzing your first social media page. Add a page URL and we'll fetch the analytics for you.
          </p>
        </div>
        <Button size="lg" className="gap-2" onClick={() => setDialogOpen(true)}>
          <Plus className="h-5 w-5" /> Add Your First Page
        </Button>
        <AddPageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </div>
    </div>
  );
}
