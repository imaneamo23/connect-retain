import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown } from "lucide-react";

const atRiskCustomers = [
  { name: "Sarah Johnson", risk: 87, reason: "Negative sentiment spike", lastActive: "2 days ago" },
  { name: "Mike Chen", risk: 74, reason: "Declining engagement", lastActive: "5 days ago" },
  { name: "Emily Davis", risk: 68, reason: "Multiple complaints", lastActive: "1 day ago" },
  { name: "Alex Thompson", risk: 61, reason: "Reduced purchase frequency", lastActive: "3 days ago" },
];

export function ChurnRiskList() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          Churn Risk Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {atRiskCustomers.map((customer) => (
          <div key={customer.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
            <div className="flex-1">
              <p className="font-medium text-sm">{customer.name}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingDown className="h-3 w-3" />
                {customer.reason}
              </p>
            </div>
            <div className="text-right">
              <Badge variant={customer.risk > 75 ? "destructive" : "secondary"} className="text-xs">
                {customer.risk}% risk
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">{customer.lastActive}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
