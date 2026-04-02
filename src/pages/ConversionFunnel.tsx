import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, MousePointer, Eye, DollarSign } from "lucide-react";

const funnelSteps = [
  { icon: Eye, label: "Impressions", value: "—", note: "Total content views" },
  { icon: MousePointer, label: "Clicks", value: "—", note: "CTR from content" },
  { icon: ShoppingCart, label: "Conversions", value: "—", note: "Click → Purchase" },
  { icon: DollarSign, label: "Revenue", value: "—", note: "Total revenue generated" },
];

export default function ConversionFunnel() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Conversion Funnel</h1>
        <p className="text-muted-foreground text-sm mt-1">Track CTR, conversion rates, and CPA across content and platforms</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {funnelSteps.map((step) => (
          <Card key={step.label} className="glass-card">
            <CardContent className="p-5">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <step.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground">{step.note}</p>
              <p className="text-2xl font-bold mt-1 text-muted-foreground">{step.value}</p>
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
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
            <div className="text-center text-muted-foreground">
              <ShoppingCart className="h-8 w-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">Connect data source</p>
              <p className="text-xs">Conversion funnel chart will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Best-Performing Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
            <div className="text-center text-muted-foreground">
              <Eye className="h-8 w-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">Connect data source</p>
              <p className="text-xs">Content performance ranking will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
