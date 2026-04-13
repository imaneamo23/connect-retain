import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SentimentChart } from "@/components/SentimentChart";
import { TrendingUp, TrendingDown, Minus, Plus } from "lucide-react";
import { usePages } from "@/contexts/PagesContext";
import { PostSelector } from "@/components/PostSelector";
import { Button } from "@/components/ui/button";
import { AddPageDialog } from "@/components/AddPageDialog";

const demoPosts = [
  { id: "p1", title: "Summer Collection Launch", caption: "Discover our vibrant new summer styles 🌞 Shop now!", coverUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop" },
  { id: "p2", title: "Behind the Scenes Video", caption: "Take a peek behind the curtain of our latest shoot 🎬", coverUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=100&h=100&fit=crop" },
  { id: "p3", title: "Customer Testimonial", caption: "Hear what our amazing customers have to say about us ❤️", coverUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop" },
  { id: "p4", title: "Product Tutorial Reel", caption: "Learn how to style our best sellers in 60 seconds ✨", coverUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&h=100&fit=crop" },
];

const allSentiment = [
  { label: "Positive", value: 68, color: "bg-success" },
  { label: "Neutral", value: 22, color: "bg-warning" },
  { label: "Negative", value: 10, color: "bg-destructive" },
];

const emptySentiment = [
  { label: "Positive", value: 0, color: "bg-success" },
  { label: "Neutral", value: 0, color: "bg-warning" },
  { label: "Negative", value: 0, color: "bg-destructive" },
];

const postSentiment: Record<string, typeof allSentiment> = {
  p1: [
    { label: "Positive", value: 82, color: "bg-success" },
    { label: "Neutral", value: 12, color: "bg-warning" },
    { label: "Negative", value: 6, color: "bg-destructive" },
  ],
  p2: [
    { label: "Positive", value: 55, color: "bg-success" },
    { label: "Neutral", value: 30, color: "bg-warning" },
    { label: "Negative", value: 15, color: "bg-destructive" },
  ],
  p3: [
    { label: "Positive", value: 91, color: "bg-success" },
    { label: "Neutral", value: 7, color: "bg-warning" },
    { label: "Negative", value: 2, color: "bg-destructive" },
  ],
  p4: [
    { label: "Positive", value: 74, color: "bg-success" },
    { label: "Neutral", value: 18, color: "bg-warning" },
    { label: "Negative", value: 8, color: "bg-destructive" },
  ],
};

const allTopics = [
  { topic: "Product Quality", sentiment: 91, trend: "up" as const },
  { topic: "Customer Service", sentiment: 84, trend: "up" as const },
  { topic: "Delivery Speed", sentiment: 62, trend: "down" as const },
  { topic: "Pricing", sentiment: 73, trend: "neutral" as const },
  { topic: "User Experience", sentiment: 88, trend: "up" as const },
];

const emptyTopics = [
  { topic: "Product Quality", sentiment: 0, trend: "neutral" as const },
  { topic: "Customer Service", sentiment: 0, trend: "neutral" as const },
  { topic: "Delivery Speed", sentiment: 0, trend: "neutral" as const },
  { topic: "Pricing", sentiment: 0, trend: "neutral" as const },
  { topic: "User Experience", sentiment: 0, trend: "neutral" as const },
];

export default function SentimentAnalysis() {
  const { pages } = usePages();
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const hasPages = pages.length > 0;
  const sentimentBreakdown = !hasPages
    ? emptySentiment
    : selectedPost
      ? (postSentiment[selectedPost] ?? allSentiment)
      : allSentiment;
  const topics = hasPages ? allTopics : emptyTopics;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Sentiment Analysis</h1>
          <p className="text-muted-foreground text-sm mt-1">Deep dive into customer sentiment trends and patterns</p>
        </div>
        {hasPages ? (
          <PostSelector posts={demoPosts} selectedPost={selectedPost} onSelectPost={setSelectedPost} />
        ) : (
          <>
            <Button onClick={() => setDialogOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" /> Add Page
            </Button>
            <AddPageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          </>
        )}
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {sentimentBreakdown.map((s) => (
          <Card key={s.label} className="glass-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <div className={`w-3 h-3 rounded-full ${s.color}`} />
              </div>
              <p className={`text-3xl font-bold ${!hasPages ? "text-muted-foreground" : ""}`}>
                {hasPages ? `${s.value}%` : "—"}
              </p>
              <div className="mt-3 h-2 rounded-full bg-secondary">
                <div className={`h-full rounded-full ${s.color} transition-all`} style={{ width: `${s.value}%` }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <SentimentChart />

      {!selectedPost && (
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Sentiment by Topic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topics.map((t) => (
                <div key={t.topic} className="flex items-center gap-4">
                  <span className="w-36 text-sm font-medium">{t.topic}</span>
                  <div className="flex-1 h-3 rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full transition-all ${t.sentiment >= 80 ? "bg-success" : t.sentiment >= 60 ? "bg-warning" : "bg-destructive"}`}
                      style={{ width: `${t.sentiment}%` }}
                    />
                  </div>
                  <span className={`text-sm font-medium w-12 text-right ${!hasPages ? "text-muted-foreground" : ""}`}>
                    {hasPages ? `${t.sentiment}%` : "—"}
                  </span>
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
      )}
    </div>
  );
}
