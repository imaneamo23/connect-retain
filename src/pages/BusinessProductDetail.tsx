import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, MessageSquare, AlertTriangle, ThumbsUp, ThumbsDown } from "lucide-react";
import { SentimentChart } from "@/components/SentimentChart";

const productData: Record<string, any> = {
  "1": { name: "Wireless Headphones Pro", sentiment: 92, reviews: 2340, churnRisk: "Low", image: "🎧", category: "Electronics" },
  "2": { name: "Smart Fitness Tracker", sentiment: 87, reviews: 1856, churnRisk: "Medium", image: "⌚", category: "Wearables" },
  "3": { name: "Organic Coffee Blend", sentiment: 95, reviews: 3120, churnRisk: "Low", image: "☕", category: "Food & Drink" },
  "4": { name: "Ergonomic Office Chair", sentiment: 78, reviews: 987, churnRisk: "High", image: "🪑", category: "Furniture" },
  "5": { name: "Portable Bluetooth Speaker", sentiment: 89, reviews: 1543, churnRisk: "Low", image: "🔊", category: "Electronics" },
  "6": { name: "Yoga Mat Premium", sentiment: 91, reviews: 2210, churnRisk: "Low", image: "🧘", category: "Fitness" },
};

const recentFeedback = [
  { user: "Sarah M.", text: "Absolutely love this! Great quality.", sentiment: "positive", date: "2 hours ago" },
  { user: "James K.", text: "Good but delivery was slow.", sentiment: "neutral", date: "5 hours ago" },
  { user: "Emily R.", text: "Not worth the price. Disappointed.", sentiment: "negative", date: "1 day ago" },
  { user: "Michael P.", text: "Best purchase this year!", sentiment: "positive", date: "2 days ago" },
];

export default function BusinessProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id || ""];

  if (!product) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">Product not found.</p>
        <Button variant="outline" onClick={() => navigate("/dashboard/products")} className="mt-4">Go Back</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button onClick={() => navigate("/dashboard/products")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </button>

      <div className="flex items-center gap-4">
        <span className="text-5xl">{product.image}</span>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground text-sm">{product.category}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">{product.sentiment}%</p>
              <p className="text-xs text-muted-foreground">Positive Sentiment</p>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">{product.reviews.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Reviews</p>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">{Math.floor(product.reviews * 0.7)}</p>
              <p className="text-xs text-muted-foreground">Active Customers</p>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${product.churnRisk === "High" ? "bg-destructive/10" : product.churnRisk === "Medium" ? "bg-warning/10" : "bg-success/10"}`}>
              <AlertTriangle className={`h-5 w-5 ${product.churnRisk === "High" ? "text-destructive" : product.churnRisk === "Medium" ? "text-warning" : "text-success"}`} />
            </div>
            <div>
              <p className="text-2xl font-bold">{product.churnRisk}</p>
              <p className="text-xs text-muted-foreground">Churn Risk</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <SentimentChart />

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Recent Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentFeedback.map((fb, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{fb.user}</span>
                    <span className="text-xs text-muted-foreground">{fb.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{fb.text}</p>
                </div>
                {fb.sentiment === "positive" ? (
                  <ThumbsUp className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                ) : fb.sentiment === "negative" ? (
                  <ThumbsDown className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                ) : null}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
