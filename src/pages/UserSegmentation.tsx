import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Crown, Eye, ShoppingCart, Plus } from "lucide-react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { usePages } from "@/contexts/PagesContext";
import { Button } from "@/components/ui/button";
import { AddPageDialog } from "@/components/AddPageDialog";

const segments = [
  { icon: Crown, title: "High-Value Customers", desc: "Frequent buyers with high LTV. Engage regularly and drive revenue.", color: "text-accent", bg: "bg-accent/10", count: 1243, pct: "31%" },
  { icon: Eye, title: "Passive Users", desc: "Low engagement, rarely interact. At risk of becoming inactive.", color: "text-warning", bg: "bg-warning/10", count: 892, pct: "22%" },
  { icon: ShoppingCart, title: "Potential Buyers", desc: "High engagement but no purchase yet. Strong conversion candidates.", color: "text-success", bg: "bg-success/10", count: 1056, pct: "26%" },
  { icon: Users, title: "Churned Users", desc: "Previously active users who stopped engaging. Reactivation targets.", color: "text-destructive", bg: "bg-destructive/10", count: 834, pct: "21%" },
];

const clusterData = [
  { x: 20, y: 80, cluster: "High-Value" }, { x: 25, y: 75, cluster: "High-Value" }, { x: 30, y: 90, cluster: "High-Value" }, { x: 15, y: 85, cluster: "High-Value" },
  { x: 60, y: 20, cluster: "Passive" }, { x: 65, y: 15, cluster: "Passive" }, { x: 70, y: 25, cluster: "Passive" }, { x: 55, y: 10, cluster: "Passive" },
  { x: 40, y: 60, cluster: "Potential" }, { x: 45, y: 55, cluster: "Potential" }, { x: 35, y: 65, cluster: "Potential" }, { x: 50, y: 50, cluster: "Potential" },
  { x: 80, y: 10, cluster: "Churned" }, { x: 85, y: 5, cluster: "Churned" }, { x: 90, y: 15, cluster: "Churned" }, { x: 75, y: 8, cluster: "Churned" },
];

const behaviorData = [
  { action: "Comment", conversionLift: 3.2 },
  { action: "Share", conversionLift: 2.8 },
  { action: "Save", conversionLift: 2.5 },
  { action: "Like", conversionLift: 1.4 },
  { action: "View Only", conversionLift: 0.3 },
];

const CLUSTER_COLORS = ["hsl(var(--accent))", "hsl(45, 93%, 47%)", "hsl(152, 56%, 45%)", "hsl(0, 84%, 60%)"];

export default function UserSegmentation() {
  const { pages } = usePages();
  const [dialogOpen, setDialogOpen] = useState(false);
  const hasPages = pages.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">User Segmentation</h1>
          <p className="text-muted-foreground text-sm mt-1">AI-powered customer clustering using K-Means and behavioral features</p>
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
        {segments.map((s) => (
          <Card key={s.title} className="glass-card">
            <CardContent className="p-5">
              <div className={`w-10 h-10 rounded-lg ${s.bg} flex items-center justify-center mb-3`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className={`text-2xl font-bold ${!hasPages ? "text-muted-foreground" : ""}`}>
                  {hasPages ? s.count.toLocaleString() : "—"}
                </span>
                {hasPages && <span className="text-xs text-muted-foreground">({s.pct})</span>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Cluster Visualization (K-Means)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="x" name="Recency" stroke="hsl(var(--muted-foreground))" fontSize={12} label={{ value: "Days Since Last Action", position: "insideBottom", offset: -5, fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis dataKey="y" name="Engagement" stroke="hsl(var(--muted-foreground))" fontSize={12} label={{ value: "Engagement Score", angle: -90, position: "insideLeft", fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              {hasPages && (
                <>
                  <Scatter data={clusterData.filter(d => d.cluster === "High-Value")} fill={CLUSTER_COLORS[0]} name="High-Value" />
                  <Scatter data={clusterData.filter(d => d.cluster === "Passive")} fill={CLUSTER_COLORS[1]} name="Passive" />
                  <Scatter data={clusterData.filter(d => d.cluster === "Potential")} fill={CLUSTER_COLORS[2]} name="Potential" />
                  <Scatter data={clusterData.filter(d => d.cluster === "Churned")} fill={CLUSTER_COLORS[3]} name="Churned" />
                </>
              )}
            </ScatterChart>
          </ResponsiveContainer>
          {!hasPages && <p className="text-center text-muted-foreground text-xs mt-2">No data available</p>}
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Behavioral Patterns — Conversion Lift by Action</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={hasPages ? behaviorData : behaviorData.map(b => ({ ...b, conversionLift: 0 }))} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} label={{ value: "Conversion Lift (x)", position: "insideBottom", offset: -5, fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis dataKey="action" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              <Bar dataKey="conversionLift" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
          {!hasPages && <p className="text-center text-muted-foreground text-xs mt-2">No data available</p>}
        </CardContent>
      </Card>
    </div>
  );
}
