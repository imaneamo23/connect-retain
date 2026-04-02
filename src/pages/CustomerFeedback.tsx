import { FeedbackList } from "@/components/FeedbackList";

export default function CustomerFeedback() {
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
