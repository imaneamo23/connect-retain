import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, BarChart3, Plus } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { usePages } from "@/contexts/PagesContext";
import { PostSelector } from "@/components/PostSelector";
import { Button } from "@/components/ui/button";
import { AddPageDialog } from "@/components/AddPageDialog";

const demoPosts = [
  { id: "p1", title: "Summer Collection Launch" },
  { id: "p2", title: "Behind the Scenes Video" },
  { id: "p3", title: "Customer Testimonial" },
  { id: "p4", title: "Product Tutorial Reel" },
];

const pageEngagement = { rate: "6.8%", change: "+1.2%", trend: "up", total: "45.2K", avgPerPost: "1,842" };
const emptyEngagement = { rate: "—", change: "", trend: "up", total: "—", avgPerPost: "—" };

const postEngagement: Record<string, typeof pageEngagement> = {
  p1: { rate: "9.2%", change: "+3.1%", trend: "up", total: "12.4K", avgPerPost: "—" },
  p2: { rate: "7.5%", change: "+0.8%", trend: "up", total: "8.7K", avgPerPost: "—" },
  p3: { rate: "5.1%", change: "-0.4%", trend: "down", total: "3.2K", avgPerPost: "—" },
  p4: { rate: "8.3%", change: "+2.0%", trend: "up", total: "10.1K", avgPerPost: "—" },
};

const engagementData = [
  { week: "W1", engagement: 5.2 },
  { week: "W2", engagement: 5.8 },
  { week: "W3", engagement: 5.5 },
  { week: "W4", engagement: 6.1 },
  { week: "W5", engagement: 6.4 },
  { week: "W6", engagement: 6.0 },
  { week: "W7", engagement: 6.5 },
  { week: "W8", engagement: 6.8 },
];

const emptyEngagementData = [
  { week: "W1", engagement: 0 },
  { week: "W2", engagement: 0 },
  { week: "W3", engagement: 0 },
  { week: "W4", engagement: 0 },
  { week: "W5", engagement: 0 },
  { week: "W6", engagement: 0 },
  { week: "W7", engagement: 0 },
  { week: "W8", engagement: 0 },
];

export default function ChurnPredictions() {
  const { pages } = usePages();
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const hasPages = pages.length > 0;
  const data = !hasPages ? emptyEngagement : selectedPost ? (postEngagement[selectedPost] ?? pageEngagement) : pageEngagement;
  const isUp = data.trend === "up";
  const chartData = hasPages ? engagementData : emptyEngagementData;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Churn Prediction</h1>
          <p className="text-muted-foreground text-sm mt-1">Track engagement growth and performance across your page</p>
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
        <Card className="glass-card">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Engagement Rate</span>
              <Activity className="h-4 w-4 text-accent" />
            </div>
            <p className={`text-3xl font-bold ${!hasPages ? "text-muted-foreground" : ""}`}>{data.rate}</p>
            {data.change && (
              <div className="flex items-center gap-1 mt-2">
                {isUp ? <TrendingUp className="h-4 w-4 text-success" /> : <TrendingDown className="h-4 w-4 text-destructive" />}
                <span className={`text-sm font-medium ${isUp ? "text-success" : "text-destructive"}`}>{data.change}</span>
                <span className="text-xs text-muted-foreground ml-1">vs last period</span>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Total Interactions</span>
              <BarChart3 className="h-4 w-4 text-accent" />
            </div>
            <p className={`text-3xl font-bold ${!hasPages ? "text-muted-foreground" : ""}`}>{data.total}</p>
            <p className="text-xs text-muted-foreground mt-2">Likes, comments, shares, saves</p>
          </CardContent>
        </Card>
        {!selectedPost && (
          <Card className="glass-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Avg. Per Post</span>
                <TrendingUp className="h-4 w-4 text-accent" />
              </div>
              <p className={`text-3xl font-bold ${!hasPages ? "text-muted-foreground" : ""}`}>{data.avgPerPost}</p>
              <p className="text-xs text-muted-foreground mt-2">Average interactions per post</p>
            </CardContent>
          </Card>
        )}
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Engagement Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="engGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} formatter={(value: number) => `${value}%`} />
              <Area type="monotone" dataKey="engagement" stroke="hsl(var(--accent))" fill="url(#engGrad)" strokeWidth={2} name="Engagement Rate" />
            </AreaChart>
          </ResponsiveContainer>
          {!hasPages && <p className="text-center text-muted-foreground text-xs mt-2">No data available</p>}
        </CardContent>
      </Card>
    </div>
  );
}
