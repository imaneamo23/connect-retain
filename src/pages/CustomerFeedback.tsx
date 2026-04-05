import { FeedbackList } from "@/components/FeedbackList";
import { usePages } from "@/contexts/PagesContext";
import { AnalyticsEmptyState } from "@/components/AnalyticsEmptyState";

export default function CustomerFeedback() {
  const { pages } = usePages();

  if (pages.length === 0) {
    return <AnalyticsEmptyState title="Customer Feedback" description="Review and analyze customer comments and feedback" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Customer Feedback</h1>
        <p className="text-muted-foreground text-sm mt-1">Review and analyze customer comments and feedback</p>
      </div>
      <FeedbackList />
    </div>
  );
}
