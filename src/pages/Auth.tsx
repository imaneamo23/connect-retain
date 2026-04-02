import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { BarChart3, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function Auth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"customer" | "business_owner">("customer");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName, role },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        toast.success("Account created! Check your email to verify.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        // Navigation handled by auth state change in App
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </button>

        <Card className="glass-elevated">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-2">
              <BarChart3 className="h-6 w-6 text-accent-foreground" />
            </div>
            <CardTitle className="text-2xl">{isSignUp ? "Create Account" : "Welcome Back"}</CardTitle>
            <CardDescription>{isSignUp ? "Join SentiMind to get started" : "Sign in to your SentiMind account"}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label>I am a...</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setRole("customer")}
                        className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                          role === "customer" ? "border-accent bg-accent/10 text-accent" : "border-border hover:border-accent/50"
                        }`}
                      >
                        🛒 Customer
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole("business_owner")}
                        className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                          role === "business_owner" ? "border-accent bg-accent/10 text-accent" : "border-border hover:border-accent/50"
                        }`}
                      >
                        📊 Business Owner
                      </button>
                    </div>
                  </div>
                </>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={6} />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
                {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button onClick={() => setIsSignUp(!isSignUp)} className="text-accent hover:underline font-medium">
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
