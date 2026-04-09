import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Image, FileText, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Line } from "recharts";
import { usePages } from "@/contexts/PagesContext";
import { AnalyticsEmptyState } from "@/components/AnalyticsEmptyState";

const contentTypes = [
  { icon: Video, label: "Videos", note: "Higher CTR typically", value: "5.2%", engagement: "8.4%" },
  { icon: Image, label: "Images", note: "Strong engagement", value: "3.8%", engagement: "6.1%" },
  { icon: FileText, label: "Text Posts", note: "Comment-driven", value: "2.1%", engagement: "4.3%" },
  { icon: Clock, label: "Stories", note: "Time-sensitive reach", value: "4.5%", engagement: "7.2%" },
];

const comparisonData = [
  { metric: "CTR", video: 5.2, image: 3.8, text: 2.1, stories: 4.5 },
  { metric: "Eng. Rate", video: 8.4, image: 6.1, text: 4.3, stories: 7.2 },
  { metric: "Conv. Rate", video: 3.1, image: 2.4, text: 1.8, stories: 2.9 },
  { metric: "Save Rate", video: 4.5, image: 5.2, text: 2.0, stories: 3.1 },
];

const trendingTopics = [
  { topic: "#ProductReview", posts: 342, engagement: "7.2%", sentiment: 88 },
  { topic: "#HowTo", posts: 287, engagement: "6.8%", sentiment: 92 },
  { topic: "#BehindTheScenes", posts: 198, engagement: "8.1%", sentiment: 85 },
  { topic: "#CustomerStory", posts: 156, engagement: "9.3%", sentiment: 94 },
  { topic: "#SaleAlert", posts: 412, engagement: "5.4%", sentiment: 72 },
];

const timelineData = [
  { week: "W1", videos: 120, images: 85, text: 45, stories: 95 },
  { week: "W2", videos: 135, images: 92, text: 40, stories: 110 },
  { week: "W3", videos: 128, images: 98, text: 52, stories: 102 },
  { week: "W4", videos: 150, images: 88, text: 38, stories: 125 },
  { week: "W5", videos: 165, images: 105, text: 48, stories: 130 },
  { week: "W6", videos: 172, images: 110, text: 55, stories: 140 },
  { week: "W7", videos: 180, images: 102, text: 50, stories: 135 },
  { week: "W8", videos: 195, images: 115, text: 42, stories: 150 },
];

export default function ContentPerformance() {
  const { pages } = usePages();

  if (pages.length === 0) {
    return <AnalyticsEmptyState title="Content Performance" description="Analyze which content types and topics drive the best business outcomes" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Content Performance</h1>
        <p className="text-muted-foreground text-sm mt-1">Analyze which content types and topics drive the best business outcomes</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contentTypes.map((ct) => (
          <Card key={ct.label} className="glass-card">
            <CardContent className="p-5">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <ct.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-sm">{ct.label}</h3>
              <p className="text-xs text-muted-foreground">{ct.note}</p>
              <div className="mt-3 flex items-baseline gap-3">
                <div>
                  <div className="text-2xl font-bold">{ct.value}</div>
                  <p className="text-xs text-muted-foreground">Avg. CTR</p>
                </div>
                <div>
                  <div className="text-lg font-semibold text-success">{ct.engagement}</div>
                  <p className="text-xs text-muted-foreground">Eng. Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Content Type Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
                <Bar dataKey="video" fill="hsl(var(--accent))" name="Video" radius={[4, 4, 0, 0]} />
                <Bar dataKey="image" fill="hsl(152, 56%, 45%)" name="Image" radius={[4, 4, 0, 0]} />
                <Bar dataKey="text" fill="hsl(45, 93%, 47%)" name="Text" radius={[4, 4, 0, 0]} />
                <Bar dataKey="stories" fill="hsl(280, 67%, 55%)" name="Stories" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Trending Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {trendingTopics.map((t) => (
                <div key={t.topic} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div>
                    <p className="font-medium text-sm">{t.topic}</p>
                    <p className="text-xs text-muted-foreground">{t.posts} posts · {t.engagement} eng.</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <div className="w-16 h-2 rounded-full bg-secondary">
                        <div className={`h-full rounded-full ${t.sentiment >= 85 ? "bg-success" : t.sentiment >= 70 ? "bg-warning" : "bg-destructive"}`} style={{ width: `${t.sentiment}%` }} />
                      </div>
                      <span className="text-xs font-medium w-8">{t.sentiment}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">sentiment</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Time Series Analysis — Engagement by Content Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={timelineData}>
              <defs>
                <linearGradient id="videoGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="imageGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(152, 56%, 45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(152, 56%, 45%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="storiesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(280, 67%, 55%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(280, 67%, 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              <Area type="monotone" dataKey="videos" stroke="hsl(var(--accent))" fill="url(#videoGrad)" strokeWidth={2} name="Videos" />
              <Area type="monotone" dataKey="images" stroke="hsl(152, 56%, 45%)" fill="url(#imageGrad)" strokeWidth={2} name="Images" />
              <Area type="monotone" dataKey="stories" stroke="hsl(280, 67%, 55%)" fill="url(#storiesGrad)" strokeWidth={2} name="Stories" />
              <Line type="monotone" dataKey="text" stroke="hsl(45, 93%, 47%)" strokeWidth={2} dot={false} name="Text" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
