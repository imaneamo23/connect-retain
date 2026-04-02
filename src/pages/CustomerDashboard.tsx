import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, ShoppingBag, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Wireless Headphones Pro", price: "$129.99", rating: 4.8, reviews: 2340, category: "Electronics", sentiment: "92% positive", image: "🎧" },
  { id: 2, name: "Smart Fitness Tracker", price: "$79.99", rating: 4.5, reviews: 1856, category: "Wearables", sentiment: "87% positive", image: "⌚" },
  { id: 3, name: "Organic Coffee Blend", price: "$24.99", rating: 4.9, reviews: 3120, category: "Food & Drink", sentiment: "95% positive", image: "☕" },
  { id: 4, name: "Ergonomic Office Chair", price: "$349.99", rating: 4.3, reviews: 987, category: "Furniture", sentiment: "78% positive", image: "🪑" },
  { id: 5, name: "Portable Bluetooth Speaker", price: "$59.99", rating: 4.6, reviews: 1543, category: "Electronics", sentiment: "89% positive", image: "🔊" },
  { id: 6, name: "Yoga Mat Premium", price: "$39.99", rating: 4.7, reviews: 2210, category: "Fitness", sentiment: "91% positive", image: "🧘" },
  { id: 7, name: "Noise Cancelling Earbuds", price: "$89.99", rating: 4.4, reviews: 1120, category: "Electronics", sentiment: "85% positive", image: "🎵" },
  { id: 8, name: "Standing Desk Converter", price: "$199.99", rating: 4.2, reviews: 654, category: "Furniture", sentiment: "82% positive", image: "🖥️" },
];

export default function CustomerDashboard() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Browse Products</h1>
          <p className="text-muted-foreground text-sm mt-1">Explore products with real-time sentiment insights</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <Card key={product.id} className="glass-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="h-36 gradient-hero flex items-center justify-center">
              <span className="text-5xl">{product.image}</span>
            </div>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                <span className="text-xs text-success font-medium">{product.sentiment}</span>
              </div>
              <h3 className="font-semibold mb-1 line-clamp-1">{product.name}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                <span>{product.rating}</span>
                <span>·</span>
                <span>{product.reviews.toLocaleString()} reviews</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{product.price}</span>
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg"
                  onClick={() => navigate(`/customer/product/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No products found matching "{search}"</p>
        </div>
      )}
    </div>
  );
}
