import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, MousePointer, Eye, Plus } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { usePages } from "@/contexts/PagesContext";
import { Button } from "@/components/ui/button";
import { AddPageDialog } from "@/components/AddPageDialog";

const funnelSteps = [
  { icon: Eye, label: "Impressions", value: "342.1K", emptyValue: "—", note: "Total content views", conversion: "100%" },
  { icon: MousePointer, label: "Clicks", value: "10,947", emptyValue: "—", note: "CTR: 3.2%", conversion: "3.2%" },
  { icon: ShoppingCart, label: "Conversions", value: "2,299", emptyValue: "—", note: "Conv Rate: 2.1%", conversion: "21%" },
];

const funnelData = [
  { stage: "Impressions", value: 342100, fill: "hsl(var(--accent))" },
  { stage: "Clicks", value: 10947, fill: "hsl(45, 93%, 47%)" },
  { stage: "Conversions", value: 2299, fill: "hsl(152, 56%, 45%)" },
];

const emptyFunnelData = [
  { stage: "Impressions", value: 0, fill: "hsl(var(--accent))" },
  { stage: "Clicks", value: 0, fill: "hsl(45, 93%, 47%)" },
  { stage: "Conversions", value: 0, fill: "hsl(152, 56%, 45%)" },
];

const topContent = [
  { title: "Summer Sale Video", type: "Video", ctr: "5.2%", conversions: 342, impressions: "48.2K" },
  { title: "Product Tutorial Reel", type: "Video", ctr: "4.8%", conversions: 287, impressions: "39.7K" },
  { title: "Customer Story Post", type: "Image", ctr: "3.9%", conversions: 198, impressions: "28.1K" },
  { title: "Behind the Scenes", type: "Image", ctr: "3.4%", conversions: 156, impressions: "22.5K" },
  { title: "Tips & Tricks Thread", type: "Text", ctr: "2.8%", conversions: 124, impressions: "18.3K" },
];

export default function ConversionFunnel() {
  const { pages } = usePages();
  const [dialogOpen, setDialogOpen] = useState(false);
  const hasPages = pages.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Conversion Funnel</h1>
          <p className="text-muted-foreground text-sm mt-1">Track CTR, conversion rates, subscribers and posts across content and platforms</p>
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

      <div className="grid sm:grid-cols-3 gap-4">
        {funnelSteps.map((step) => (
          <Card key={step.label} className="glass-card">
            <CardContent className="p-5">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <step.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground">{step.note}</p>
              <p className={`text-2xl font-bold mt-1 ${!hasPages ? "text-muted-foreground" : ""}`}>
                {hasPages ? step.value : step.emptyValue}
              </p>
              <p className="text-sm font-medium mt-1">{step.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Funnel Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={hasPages ? funnelData : emptyFunnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis dataKey="stage" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={100} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} formatter={(value: number) => value.toLocaleString()} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {(hasPages ? funnelData : emptyFunnelData).map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          {!hasPages && <p className="text-center text-muted-foreground text-xs mt-2">No data available</p>}
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Best-Performing Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Content</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Type</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">CTR</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Conversions</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Impressions</th>
                </tr>
              </thead>
              <tbody>
                {hasPages ? (
                  topContent.map((c) => (
                    <tr key={c.title} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="py-3 px-2 font-medium">{c.title}</td>
                      <td className="py-3 px-2 text-muted-foreground">{c.type}</td>
                      <td className="py-3 px-2 text-right">{c.ctr}</td>
                      <td className="py-3 px-2 text-right">{c.conversions}</td>
                      <td className="py-3 px-2 text-right font-medium">{c.impressions}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
