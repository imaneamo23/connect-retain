import { useState } from "react";
import { FeedbackList } from "@/components/FeedbackList";
import { usePages } from "@/contexts/PagesContext";
import { Button } from "@/components/ui/button";
import { AddPageDialog } from "@/components/AddPageDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Plus } from "lucide-react";

export default function CustomerFeedback() {
  const { pages } = usePages();
  const [dialogOpen, setDialogOpen] = useState(false);
  const hasPages = pages.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Customer Feedback</h1>
          <p className="text-muted-foreground text-sm mt-1">Review and analyze customer comments and feedback</p>
        </div>
        {!hasPages && (
          <>
            <Button onClick={() => setDialogOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" /> Add Page
            </Button>
            <AddPageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          </>
        )}
      </div>
      {hasPages ? (
        <FeedbackList />
      ) : (
        <Card className="glass-card">
          <CardContent className="py-16 text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-accent" />
            </div>
            <p className="text-muted-foreground text-sm">Add a page to start seeing customer feedback here.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
