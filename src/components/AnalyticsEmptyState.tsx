import { BarChart3, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePages } from "@/contexts/PagesContext";
import { AddPageDialog } from "@/components/AddPageDialog";
import { useState } from "react";

interface AnalyticsEmptyStateProps {
  title: string;
  description: string;
}

export function AnalyticsEmptyState({ title, description }: AnalyticsEmptyStateProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in-0 duration-300">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
          <BarChart3 className="h-8 w-8 text-accent" />
        </div>
        <h2 className="text-xl font-semibold mb-2">No data yet</h2>
        <p className="text-muted-foreground text-sm max-w-md mb-6">
          Start by adding a social media page to see analytics and insights here.
        </p>
        <Button onClick={() => setDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Page
        </Button>
        <AddPageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </div>
    </div>
  );
}
