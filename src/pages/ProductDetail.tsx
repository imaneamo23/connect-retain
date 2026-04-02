import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";

const products: Record<string, any> = {
  "1": { name: "Wireless Headphones Pro", price: "$129.99", rating: 4.8, reviews: 2340, category: "Electronics", sentiment: "92% positive", image: "🎧", desc: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and high-fidelity audio." },
  "2": { name: "Smart Fitness Tracker", price: "$79.99", rating: 4.5, reviews: 1856, category: "Wearables", sentiment: "87% positive", image: "⌚", desc: "Track your fitness goals with heart rate monitoring, sleep tracking, and GPS." },
  "3": { name: "Organic Coffee Blend", price: "$24.99", rating: 4.9, reviews: 3120, category: "Food & Drink", sentiment: "95% positive", image: "☕", desc: "Ethically sourced, smooth dark roast coffee blend from premium organic farms." },
  "4": { name: "Ergonomic Office Chair", price: "$349.99", rating: 4.3, reviews: 987, category: "Furniture", sentiment: "78% positive", image: "🪑", desc: "Adjustable lumbar support, breathable mesh, perfect for long work sessions." },
  "5": { name: "Portable Bluetooth Speaker", price: "$59.99", rating: 4.6, reviews: 1543, category: "Electronics", sentiment: "89% positive", image: "🔊", desc: "Waterproof portable speaker with 360° sound and 12-hour battery life." },
  "6": { name: "Yoga Mat Premium", price: "$39.99", rating: 4.7, reviews: 2210, category: "Fitness", sentiment: "91% positive", image: "🧘", desc: "Non-slip, eco-friendly yoga mat with alignment markers and carrying strap." },
  "7": { name: "Noise Cancelling Earbuds", price: "$89.99", rating: 4.4, reviews: 1120, category: "Electronics", sentiment: "85% positive", image: "🎵", desc: "Compact earbuds with advanced noise cancellation and transparency mode." },
  "8": { name: "Standing Desk Converter", price: "$199.99", rating: 4.2, reviews: 654, category: "Furniture", sentiment: "82% positive", image: "🖥️", desc: "Easy sit-to-stand converter with adjustable height and sturdy build." },
};

const mockReviews = [
  { user: "Sarah M.", rating: 5, text: "Absolutely love this product! Exceeded all my expectations.", sentiment: "positive" },
  { user: "James K.", rating: 4, text: "Great quality but shipping took a bit longer than expected.", sentiment: "positive" },
  { user: "Emily R.", rating: 2, text: "Not as described. Quality doesn't match the price point.", sentiment: "negative" },
  { user: "Michael P.", rating: 5, text: "Best purchase I've made this year. Highly recommend!", sentiment: "positive" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[id || ""];

  if (!product) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">Product not found.</p>
        <Button variant="outline" onClick={() => navigate(-1)} className="mt-4">Go Back</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl h-64 gradient-hero flex items-center justify-center">
          <span className="text-8xl">{product.image}</span>
        </div>
        <div className="space-y-4">
          <Badge variant="secondary">{product.category}</Badge>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground">{product.desc}</p>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-warning text-warning" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">{product.price}</span>
            <Badge className="bg-success text-success-foreground">{product.sentiment}</Badge>
          </div>
        </div>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" /> Customer Reviews
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockReviews.map((review, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl bg-secondary/50">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{review.user}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
                <div className="mt-2">
                  {review.sentiment === "positive" ? (
                    <span className="inline-flex items-center gap-1 text-xs text-success"><ThumbsUp className="h-3 w-3" /> Positive</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-destructive"><ThumbsDown className="h-3 w-3" /> Negative</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
