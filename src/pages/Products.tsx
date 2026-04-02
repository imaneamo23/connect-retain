import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const products = [
  { id: 1, name: "Wireless Headphones Pro", price: "$129.99", rating: 4.8, reviews: 2340, category: "Electronics", sentiment: "92% positive" },
  { id: 2, name: "Smart Fitness Tracker", price: "$79.99", rating: 4.5, reviews: 1856, category: "Wearables", sentiment: "87% positive" },
  { id: 3, name: "Organic Coffee Blend", price: "$24.99", rating: 4.9, reviews: 3120, category: "Food & Drink", sentiment: "95% positive" },
  { id: 4, name: "Ergonomic Office Chair", price: "$349.99", rating: 4.3, reviews: 987, category: "Furniture", sentiment: "78% positive" },
  { id: 5, name: "Portable Bluetooth Speaker", price: "$59.99", rating: 4.6, reviews: 1543, category: "Electronics", sentiment: "89% positive" },
  { id: 6, name: "Yoga Mat Premium", price: "$39.99", rating: 4.7, reviews: 2210, category: "Fitness", sentiment: "91% positive" },
];

export default function Products() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b px-4 bg-card/50 backdrop-blur-sm">
            <SidebarTrigger className="mr-4" />
            <h2 className="text-sm font-medium text-muted-foreground">Customer Portal</h2>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-6xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold">Browse Products</h1>
                <p className="text-muted-foreground text-sm mt-1">Explore our products with real-time sentiment insights</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="glass-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="h-40 gradient-hero flex items-center justify-center">
                      <ShoppingBag className="h-12 w-12 text-accent/40" />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                        <span className="text-xs text-success font-medium">{product.sentiment}</span>
                      </div>
                      <h3 className="font-semibold mb-1">{product.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                        <span>{product.rating}</span>
                        <span>·</span>
                        <span>{product.reviews.toLocaleString()} reviews</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">{product.price}</span>
                        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
