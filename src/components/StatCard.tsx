import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function StatCard({ title, value, change, changeType, icon: Icon }: StatCardProps) {
  return (
    <Card className="glass-card hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-accent" />
          </div>
        </div>
        <div className="text-3xl font-bold text-foreground">{value}</div>
        <p className={`text-sm mt-1 ${
          changeType === "positive" ? "text-success" : 
          changeType === "negative" ? "text-destructive" : 
          "text-muted-foreground"
        }`}>
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
