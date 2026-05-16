import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Clock, Activity, TrendingUp, TrendingDown, Eye, Heart, Share2, MessageCircle, ChevronRight, ArrowLeft, Plus } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { usePages } from "@/contexts/PagesContext";
import { Button } from "@/components/ui/button";
import { AddPageDialog } from "@/components/AddPageDialog";

const pageStats = [
  { icon: Users, label: "Subscribers", value: "8,412", emptyValue: "—", change: "+234", trend: "up" },
  { icon: FileText, label: "Total Posts", value: "156", emptyValue: "—", change: "+12", trend: "up" },
  { icon: Clock, label: "Avg. Engagement", value: "2m 34s", emptyValue: "—", change: "+18s", trend: "up" },
  { icon: Activity, label: "Total Interactions", value: "45.2K", emptyValue: "—", change: "-1.2K", trend: "down" },
];

const subscriberGrowth = [
  { month: "Jan", subscribers: 6200 },
  { month: "Feb", subscribers: 6450 },
  { month: "Mar", subscribers: 6800 },
  { month: "Apr", subscribers: 7100 },
  { month: "May", subscribers: 7500 },
  { month: "Jun", subscribers: 7850 },
  { month: "Jul", subscribers: 8100 },
  { month: "Aug", subscribers: 8412 },
];

const emptySubscriberGrowth = subscriberGrowth.map(d => ({ ...d, subscribers: 0 }));

interface PostItem {
  id: string;
  title: string;
  date: string;
  type: string;
  views: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  sentiment: { positive: number; negative: number; neutral: number };
}

const posts: PostItem[] = [
  { id: "1", title: "Summer Collection Launch", date: "Aug 12, 2025", type: "Video", views: "24.5K", likes: 1842, comments: 234, shares: 156, saves: 89, sentiment: { positive: 68, negative: 14, neutral: 18 } },
  { id: "2", title: "Behind the Scenes Video", date: "Aug 10, 2025", type: "Video", views: "18.2K", likes: 1456, comments: 178, shares: 102, saves: 67, sentiment: { positive: 72, negative: 10, neutral: 18 } },
  { id: "3", title: "Customer Testimonial", date: "Aug 8, 2025", type: "Image", views: "12.1K", likes: 987, comments: 145, shares: 78, saves: 45, sentiment: { positive: 81, negative: 6, neutral: 13 } },
  { id: "4", title: "Product Tutorial Reel", date: "Aug 5, 2025", type: "Video", views: "31.4K", likes: 2341, comments: 312, shares: 198, saves: 134, sentiment: { positive: 64, negative: 20, neutral: 16 } },
  { id: "5", title: "Tips & Tricks Thread", date: "Aug 3, 2025", type: "Text", views: "8.7K", likes: 654, comments: 98, shares: 45, saves: 32, sentiment: { positive: 55, negative: 25, neutral: 20 } },
  { id: "6", title: "New Arrivals Story", date: "Aug 1, 2025", type: "Story", views: "15.3K", likes: 1123, comments: 89, shares: 67, saves: 51, sentiment: { positive: 70, negative: 12, neutral: 18 } },
];

const SENTIMENT_COLORS: Record<string, string> = {
  Positive: "hsl(152, 56%, 45%)",
  Negative: "hsl(0, 84%, 60%)",
  Neutral: "hsl(220, 9%, 60%)",
};

export default function PageOverview() {
  const { pages } = usePages();
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const hasPages = pages.length > 0;

  if (selectedPost) {
    return (
      <div className="space-y-6 animate-in fade-in-0 slide-in-from-right-5 duration-300">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setSelectedPost(null)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{selectedPost.title}</h1>
            <p className="text-muted-foreground text-sm mt-1">{selectedPost.date} · {selectedPost.type}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="glass-card">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                  <p className="text-3xl font-bold">{selectedPost.views}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Interactions</p>
                  <p className="text-3xl font-bold">{(selectedPost.likes + selectedPost.comments + selectedPost.shares + selectedPost.saves).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Interaction Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <Heart className="h-5 w-5 text-destructive" />
                <div>
                  <p className="text-xl font-bold">{selectedPost.likes.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Likes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <MessageCircle className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xl font-bold">{selectedPost.comments.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Comments</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <Share2 className="h-5 w-5 text-success" />
                <div>
                  <p className="text-xl font-bold">{selectedPost.shares.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Shares</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <Eye className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-xl font-bold">{selectedPost.saves.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Saves</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Comments Sentiment</CardTitle>
            <p className="text-xs text-muted-foreground">Sentiment breakdown for this post's comments</p>
          </CardHeader>
          <CardContent>
            {(() => {
              const data = [
                { name: "Positive", value: selectedPost.sentiment.positive },
                { name: "Negative", value: selectedPost.sentiment.negative },
                { name: "Neutral", value: selectedPost.sentiment.neutral },
              ];
              const total = data.reduce((sum, d) => sum + d.value, 0);
              if (selectedPost.comments === 0 || total === 0) {
                return (
                  <div className="py-12 text-center text-muted-foreground text-sm">
                    لا يوجد معلومات
                  </div>
                );
              }
              const renderLabel = ({ name, value }: { name: string; value: number }) =>
                `${name}: ${value}%`;
              return (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      label={renderLabel}
                      labelLine={{ stroke: "hsl(var(--muted-foreground))" }}
                    >
                      {data.map((entry) => (
                        <Cell key={entry.name} fill={SENTIMENT_COLORS[entry.name]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              );
            })()}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Page Information</h1>
          <p className="text-muted-foreground text-sm mt-1">View subscribers, posts, engagement and interaction metrics</p>
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pageStats.map((s) => (
          <Card key={s.label} className="glass-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                {hasPages && (s.trend === "up" ? <TrendingUp className="h-4 w-4 text-success" /> : <TrendingDown className="h-4 w-4 text-destructive" />)}
              </div>
              <p className={`text-2xl font-bold ${!hasPages ? "text-muted-foreground" : ""}`}>{hasPages ? s.value : s.emptyValue}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                {hasPages && <span className={`text-xs font-medium ${s.trend === "up" ? "text-success" : "text-destructive"}`}>{s.change}</span>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Subscriber Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={hasPages ? subscriberGrowth : emptySubscriberGrowth}>
              <defs>
                <linearGradient id="subGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} formatter={(value: number) => value.toLocaleString()} />
              <Area type="monotone" dataKey="subscribers" stroke="hsl(var(--accent))" fill="url(#subGrad)" strokeWidth={2} name="Subscribers" />
            </AreaChart>
          </ResponsiveContainer>
          {!hasPages && <p className="text-center text-muted-foreground text-xs mt-2">No data available</p>}
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Posts</CardTitle>
        </CardHeader>
        <CardContent>
          {hasPages ? (
            <div className="space-y-2">
              {posts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="w-full flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors text-left"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{post.title}</p>
                    <p className="text-xs text-muted-foreground">{post.date} · {post.type}</p>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-medium">{post.views}</p>
                      <p className="text-xs text-muted-foreground">views</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-medium">{(post.likes + post.comments + post.shares).toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">interactions</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-muted-foreground text-sm">No posts available</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
