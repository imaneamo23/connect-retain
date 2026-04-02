import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, MessageSquare } from "lucide-react";

const products = [
  { id: 1, name: "Wireless Headphones Pro", category: "Electronics", sentiment: 92, reviews: 2340, churnRisk: "Low", trend: "up", image: "🎧" },
  { id: 2, name: "Smart Fitness Tracker", category: "Wearables", sentiment: 87, reviews: 1856, churnRisk: "Medium", trend: "up", image: "⌚" },
  { id: 3, name: "Organic Coffee Blend", category: "Food & Drink", sentiment: 95, reviews: 3120, churnRisk: "Low", trend: "up", image: "☕" },
  { id: 4, name: "Ergonomic Office Chair", category: "Furniture", sentiment: 78, reviews: 987, churnRisk: "High", trend: "down", image: "🪑" },
  { id: 5, name: "Portable Bluetooth Speaker", category: "Electronics", sentiment: 89, reviews: 1543, churnRisk: "Low", trend: "up", image: "🔊" },
  { id: 6, name: "Yoga Mat Premium", category: "Fitness", sentiment: 91, reviews: 2210, churnRisk: "Low", trend: "up", image: "🧘" },
];

export default function BusinessProducts() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Product Analytics</h1>
        <p className="text-muted-foreground text-sm mt-1">Click a product to view detailed sentiment and churn analytics</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <Card
            key={p.id}
            className="glass-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate(`/dashboard/products/${p.id}`)}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{p.image}</span>
                <Badge variant={p.churnRisk === "Low" ? "default" : p.churnRisk === "Medium" ? "secondary" : "destructive"} className={p.churnRisk === "Low" ? "bg-success text-success-foreground" : ""}>
                  {p.churnRisk} Risk
                </Badge>
              </div>
              <h3 className="font-semibold mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{p.category}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-secondary/50 p-2">
                  <div className="flex items-center justify-center gap-1">
                    {p.trend === "up" ? <TrendingUp className="h-3 w-3 text-success" /> : <TrendingDown className="h-3 w-3 text-destructive" />}
                    <span className="text-sm font-bold">{p.sentiment}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Sentiment</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-2">
                  <div className="flex items-center justify-center gap-1">
                    <MessageSquare className="h-3 w-3 text-accent" />
                    <span className="text-sm font-bold">{p.reviews}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Reviews</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-2">
                  <div className="flex items-center justify-center gap-1">
                    <Users className="h-3 w-3 text-accent" />
                    <span className="text-sm font-bold">{Math.floor(p.reviews * 0.7)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Customers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
