import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SentimentChart } from "@/components/SentimentChart";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const sentimentBreakdown = [
  { label: "Positive", value: 68, color: "bg-success" },
  { label: "Neutral", value: 22, color: "bg-warning" },
  { label: "Negative", value: 10, color: "bg-destructive" },
];

const topTopics = [
  { topic: "Product Quality", sentiment: 91, trend: "up" },
  { topic: "Customer Service", sentiment: 84, trend: "up" },
  { topic: "Delivery Speed", sentiment: 62, trend: "down" },
  { topic: "Pricing", sentiment: 73, trend: "neutral" },
  { topic: "User Experience", sentiment: 88, trend: "up" },
];

export default function SentimentAnalysis() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Sentiment Analysis</h1>
        <p className="text-muted-foreground text-sm mt-1">Deep dive into customer sentiment trends and patterns</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {sentimentBreakdown.map((s) => (
          <Card key={s.label} className="glass-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <div className={`w-3 h-3 rounded-full ${s.color}`} />
              </div>
              <p className="text-3xl font-bold">{s.value}%</p>
              <div className="mt-3 h-2 rounded-full bg-secondary">
                <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.value}%` }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <SentimentChart />

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Sentiment by Topic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topTopics.map((t) => (
              <div key={t.topic} className="flex items-center gap-4">
                <span className="w-36 text-sm font-medium">{t.topic}</span>
                <div className="flex-1 h-3 rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full ${t.sentiment >= 80 ? "bg-success" : t.sentiment >= 60 ? "bg-warning" : "bg-destructive"}`}
                    style={{ width: `${t.sentiment}%` }}
                  />
                </div>
                <span className="text-sm font-medium w-12 text-right">{t.sentiment}%</span>
                {t.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : t.trend === "down" ? (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                ) : (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
