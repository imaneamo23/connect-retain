import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, DollarSign, BarChart3 } from "lucide-react";

const platforms = [
  { name: "Instagram", role: "High conversion", icon: "📸" },
  { name: "TikTok", role: "High awareness", icon: "🎵" },
  { name: "Twitter/X", role: "Engagement driver", icon: "🐦" },
  { name: "Facebook", role: "Broad reach", icon: "📘" },
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
              <div className="mt-3 text-xl font-bold text-muted-foreground">—</div>
              <p className="text-xs text-muted-foreground">Revenue attributed</p>
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
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
              <div className="text-center text-muted-foreground">
                <DollarSign className="h-8 w-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Connect data source</p>
                <p className="text-xs">Revenue by platform chart will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Traffic → Conversion Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Connect data source</p>
                <p className="text-xs">TikTok → awareness, Instagram → selling insights here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
