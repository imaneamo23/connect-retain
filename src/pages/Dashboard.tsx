import { Users, TrendingUp, AlertTriangle, MessageSquare } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { SentimentChart } from "@/components/SentimentChart";
import { ChurnRiskList } from "@/components/ChurnRiskList";
import { FeedbackList } from "@/components/FeedbackList";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground text-sm mt-1">Monitor customer sentiment and churn risk in real-time</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Customers" value="12,847" change="+12% from last month" changeType="positive" icon={Users} />
        <StatCard title="Avg. Sentiment" value="78%" change="+5% improvement" changeType="positive" icon={TrendingUp} />
        <StatCard title="Churn Risk" value="4.2%" change="-2.1% from last month" changeType="positive" icon={AlertTriangle} />
        <StatCard title="Feedback Today" value="342" change="23 need attention" changeType="neutral" icon={MessageSquare} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <SentimentChart />
        <ChurnRiskList />
      </div>

      <FeedbackList />
    </div>
  );
}
