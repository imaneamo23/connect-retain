import { useState } from "react";
import { Eye, MousePointer, ShoppingCart, Heart, TrendingUp, AlertTriangle, Database, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { usePages } from "@/contexts/PagesContext";
import { Skeleton } from "@/components/ui/skeleton";
import { AddPageDialog } from "@/components/AddPageDialog";

const emptyMetricCategories = [
  {
    title: "Awareness",
    icon: Eye,
    metrics: [
      { label: "Reach", value: "—", change: "" },
      { label: "Impressions", value: "—", change: "" },
      { label: "Follower Growth", value: "—", change: "" },
    ],
  },
  {
    title: "Engagement",
    icon: MousePointer,
    metrics: [
      { label: "Engagement Rate", value: "—", change: "" },
      { label: "Comments", value: "—", change: "" },
      { label: "Shares & Saves", value: "—", change: "" },
    ],
  },
  {
    title: "Conversion",
    icon: ShoppingCart,
    metrics: [
      { label: "CTR", value: "—", change: "" },
      { label: "Conversion Rate", value: "—", change: "" },
      { label: "CPA", value: "—", change: "" },
    ],
  },
  {
    title: "Customer",
    icon: Heart,
    metrics: [
      { label: "CAC", value: "—", change: "" },
      { label: "LTV", value: "—", change: "" },
      { label: "Retention Rate", value: "—", change: "" },
    ],
  },
];

// TODO: Replace with API call — e.g. fetch("/api/metrics/overview")
const filledMetricCategories = [
  {
    title: "Awareness",
    icon: Eye,
    metrics: [
      { label: "Reach", value: "124.5K", change: "+12.3%" },
      { label: "Impressions", value: "342.1K", change: "+8.7%" },
      { label: "Follower Growth", value: "+2.4%", change: "+0.5%" },
    ],
  },
  {
    title: "Engagement",
    icon: MousePointer,
    metrics: [
      { label: "Engagement Rate", value: "4.8%", change: "+0.6%" },
      { label: "Comments", value: "3,241", change: "+15.2%" },
      { label: "Shares & Saves", value: "1,892", change: "+9.1%" },
    ],
  },
  {
    title: "Conversion",
    icon: ShoppingCart,
    metrics: [
      { label: "CTR", value: "3.2%", change: "+0.4%" },
      { label: "Conversion Rate", value: "2.1%", change: "+0.3%" },
      { label: "CPA", value: "$18.50", change: "-$2.10" },
    ],
  },
  {
    title: "Customer",
    icon: Heart,
    metrics: [
      { label: "CAC", value: "$42.30", change: "-$5.20" },
      { label: "LTV", value: "$284.00", change: "+$18.00" },
      { label: "Retention Rate", value: "78.5%", change: "+3.2%" },
    ],
  },
];

  return (
    <div className="space-y-6 animate-in fade-in-0 duration-300">
      <div>
        <h1 className="text-2xl font-bold">{currentPage?.page_name ?? "Dashboard Overview"}</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Monitor social media intelligence and customer behavior metrics for this page
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
                    <p className="text-xs text-success">{m.change}</p>
                  </div>
                  <span className="text-lg font-semibold">{m.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Sentiment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={sentimentTrendData}>
                <defs>
                  <linearGradient id="dashPositive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(152, 56%, 45%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(152, 56%, 45%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="dashNegative" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
                <Area type="monotone" dataKey="positive" stroke="hsl(152, 56%, 45%)" fill="url(#dashPositive)" strokeWidth={2} />
                <Area type="monotone" dataKey="negative" stroke="hsl(0, 84%, 60%)" fill="url(#dashNegative)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">CAC vs LTV</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={cacLtvData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
                <Bar dataKey="cac" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} name="CAC" />
                <Bar dataKey="ltv" fill="hsl(152, 56%, 45%)" radius={[4, 4, 0, 0]} name="LTV" />
              </BarChart>
            </ResponsiveContainer>
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
