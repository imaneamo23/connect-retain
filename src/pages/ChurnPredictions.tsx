import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChurnRiskList } from "@/components/ChurnRiskList";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Users, ShieldCheck } from "lucide-react";

const stats = [
  { icon: AlertTriangle, label: "High Risk", value: "23", color: "text-destructive", bg: "bg-destructive/10" },
  { icon: TrendingDown, label: "Medium Risk", value: "45", color: "text-warning", bg: "bg-warning/10" },
  { icon: ShieldCheck, label: "Low Risk", value: "187", color: "text-success", bg: "bg-success/10" },
  { icon: Users, label: "Total Tracked", value: "255", color: "text-accent", bg: "bg-accent/10" },
];

export default function ChurnPredictions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Churn Predictions</h1>
        <p className="text-muted-foreground text-sm mt-1">AI-powered customer churn risk analysis and prevention</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="glass-card">
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${s.bg} flex items-center justify-center`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ChurnRiskList />
    </div>
  );
}
