import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

const feedbacks = [
  { id: 1, customer: "Anna Lee", text: "Great product quality! Will buy again.", sentiment: "positive", date: "2h ago" },
  { id: 2, customer: "James Wilson", text: "Shipping was delayed by 3 days, very frustrating.", sentiment: "negative", date: "4h ago" },
  { id: 3, customer: "Lisa Park", text: "The product is okay, nothing special.", sentiment: "neutral", date: "6h ago" },
  { id: 4, customer: "Robert Kim", text: "Customer support was incredibly helpful!", sentiment: "positive", date: "8h ago" },
  { id: 5, customer: "Maria Garcia", text: "Product broke after one week of use.", sentiment: "negative", date: "12h ago" },
];

const sentimentColors: Record<string, string> = {
  positive: "bg-success/10 text-success border-success/20",
  negative: "bg-destructive/10 text-destructive border-destructive/20",
  neutral: "bg-muted text-muted-foreground border-muted",
};

export function FeedbackList() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-accent" />
          Recent Feedback
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="p-3 rounded-lg border bg-card hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm">{fb.customer}</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={sentimentColors[fb.sentiment]}>
                  {fb.sentiment}
                </Badge>
                <span className="text-xs text-muted-foreground">{fb.date}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{fb.text}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
