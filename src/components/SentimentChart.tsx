import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", positive: 65, negative: 20, neutral: 15 },
  { month: "Feb", positive: 70, negative: 18, neutral: 12 },
  { month: "Mar", positive: 62, negative: 25, neutral: 13 },
  { month: "Apr", positive: 75, negative: 15, neutral: 10 },
  { month: "May", positive: 80, negative: 12, neutral: 8 },
  { month: "Jun", positive: 78, negative: 14, neutral: 8 },
  { month: "Jul", positive: 82, negative: 10, neutral: 8 },
];

export function SentimentChart() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg">Sentiment Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(152, 56%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(152, 56%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis dataKey="month" stroke="hsl(220, 9%, 46%)" fontSize={12} />
            <YAxis stroke="hsl(220, 9%, 46%)" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Area type="monotone" dataKey="positive" stroke="hsl(152, 56%, 45%)" fill="url(#colorPositive)" strokeWidth={2} />
            <Area type="monotone" dataKey="negative" stroke="hsl(0, 84%, 60%)" fill="url(#colorNegative)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
