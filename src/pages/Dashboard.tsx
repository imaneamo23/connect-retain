import { Eye, MousePointer, ShoppingCart, Heart, TrendingUp, AlertTriangle, MessageSquare, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const metricCategories = [
  {
    title: "Awareness",
    icon: Eye,
    metrics: [
      { label: "Reach", value: "—", note: "Unique users who saw content" },
      { label: "Impressions", value: "—", note: "Total views" },
      { label: "Follower Growth", value: "—", note: "Growth rate" },
    ],
  },
  {
    title: "Engagement",
    icon: MousePointer,
    metrics: [
      { label: "Engagement Rate", value: "—", note: "Interactions ÷ Reach" },
      { label: "Comments", value: "—", note: "Total comments" },
      { label: "Shares & Saves", value: "—", note: "Content saves" },
    ],
  },
  {
    title: "Conversion",
    icon: ShoppingCart,
    metrics: [
      { label: "CTR", value: "—", note: "Click-through rate" },
      { label: "Conversion Rate", value: "—", note: "Click → Purchase" },
      { label: "CPA", value: "—", note: "Cost per acquisition" },
    ],
  },
  {
    title: "Customer",
    icon: Heart,
    metrics: [
      { label: "CAC", value: "—", note: "Customer acq. cost" },
      { label: "LTV", value: "—", note: "Lifetime value" },
      { label: "Retention Rate", value: "—", note: "Returning customers" },
    ],
  },
];

const quickLinks = [
  { label: "Sentiment Analysis", path: "/dashboard/sentiment", icon: TrendingUp },
  { label: "Churn Predictions", path: "/dashboard/churn", icon: AlertTriangle },
  { label: "User Segmentation", path: "/dashboard/segmentation", icon: Database },
  { label: "Conversion Funnel", path: "/dashboard/funnel", icon: ShoppingCart },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Monitor social media intelligence and customer behavior metrics across all categories
        </p>
      </div>

      {/* Metric categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {metricCategories.map((cat) => (
          <Card key={cat.title} className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <cat.icon className="h-4 w-4 text-accent" />
                </div>
                {cat.title} Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {cat.metrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{m.label}</p>
                    <p className="text-xs text-muted-foreground">{m.note}</p>
                  </div>
                  <span className="text-lg font-semibold text-muted-foreground">{m.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Sentiment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Connect data source</p>
                <p className="text-xs">Sentiment chart will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">CAC vs LTV</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
              <div className="text-center text-muted-foreground">
                <Heart className="h-8 w-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Connect data source</p>
                <p className="text-xs">CAC vs LTV comparison will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick links */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Quick Access</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                className="h-auto py-4 flex flex-col gap-2"
                onClick={() => navigate(link.path)}
              >
                <link.icon className="h-5 w-5 text-accent" />
                <span className="text-xs">{link.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
