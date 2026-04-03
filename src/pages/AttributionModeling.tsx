import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

// TODO: Replace with API call — e.g. fetch("/api/attribution/platforms")
const platforms = [
  { name: "Instagram", role: "High conversion", icon: "📸", revenue: "$34,200", pct: "38%" },
  { name: "TikTok", role: "High awareness", icon: "🎵", revenue: "$22,800", pct: "25%" },
  { name: "Twitter/X", role: "Engagement driver", icon: "🐦", revenue: "$18,100", pct: "20%" },
  { name: "Facebook", role: "Broad reach", icon: "📘", revenue: "$15,400", pct: "17%" },
];

// TODO: Replace with API call — e.g. fetch("/api/attribution/revenue-by-platform")
const revenueData = [
  { platform: "Instagram", awareness: 15000, engagement: 22000, conversion: 34200 },
  { platform: "TikTok", awareness: 38000, engagement: 18000, conversion: 22800 },
  { platform: "Twitter/X", awareness: 12000, engagement: 28000, conversion: 18100 },
  { platform: "Facebook", awareness: 25000, engagement: 14000, conversion: 15400 },
];

// TODO: Replace with API call — e.g. fetch("/api/attribution/funnel-flow")
const flowData = [
  { stage: "TikTok Traffic", value: 38000, fill: "hsl(var(--accent))" },
  { stage: "Insta Traffic", value: 22000, fill: "hsl(152, 56%, 45%)" },
  { stage: "Engaged Users", value: 28000, fill: "hsl(45, 93%, 47%)" },
  { stage: "Conversions", value: 8400, fill: "hsl(0, 84%, 60%)" },
];

export default function AttributionModeling() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Attribution Modeling</h1>
        <p className="text-muted-foreground text-sm mt-1">Discover which social media platforms drive awareness, engagement, and revenue</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.map((p) => (
          <Card key={p.name} className="glass-card">
            <CardContent className="p-5 text-center">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-semibold text-sm">{p.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{p.role}</p>
              <div className="mt-3 text-xl font-bold">{p.revenue}</div>
              <p className="text-xs text-muted-foreground">Revenue attributed ({p.pct})</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Platform Revenue Attribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="platform" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
                <Bar dataKey="awareness" stackId="a" fill="hsl(var(--accent))" name="Awareness" />
                <Bar dataKey="engagement" stackId="a" fill="hsl(45, 93%, 47%)" name="Engagement" />
                <Bar dataKey="conversion" stackId="a" fill="hsl(152, 56%, 45%)" name="Conversion" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Traffic → Conversion Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={flowData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis dataKey="stage" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={100} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {flowData.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
