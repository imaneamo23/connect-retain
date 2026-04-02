import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Crown, Eye, ShoppingCart } from "lucide-react";

const segments = [
  { icon: Crown, title: "High-Value Customers", desc: "Frequent buyers with high LTV. Engage regularly and drive revenue.", color: "text-accent", bg: "bg-accent/10" },
  { icon: Eye, title: "Passive Users", desc: "Low engagement, rarely interact. At risk of becoming inactive.", color: "text-warning", bg: "bg-warning/10" },
  { icon: ShoppingCart, title: "Potential Buyers", desc: "High engagement but no purchase yet. Strong conversion candidates.", color: "text-success", bg: "bg-success/10" },
  { icon: Users, title: "Churned Users", desc: "Previously active users who stopped engaging. Reactivation targets.", color: "text-destructive", bg: "bg-destructive/10" },
];

export default function UserSegmentation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">User Segmentation</h1>
        <p className="text-muted-foreground text-sm mt-1">AI-powered customer clustering using K-Means and behavioral features</p>
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
              <div className="mt-4 text-2xl font-bold text-muted-foreground">—</div>
              <p className="text-xs text-muted-foreground">Connect data source</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Cluster Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
            <div className="text-center text-muted-foreground">
              <Users className="h-8 w-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">Connect data source</p>
              <p className="text-xs">K-Means cluster scatter plot will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Behavioral Patterns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
            <div className="text-center text-muted-foreground">
              <Eye className="h-8 w-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">Connect data source</p>
              <p className="text-xs">Users who comment → 3x more likely to buy, and more insights here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
