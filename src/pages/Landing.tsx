import { ArrowRight, BarChart3, Brain, MessageSquare, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Brain, title: "AI Sentiment Analysis", desc: "Automatically analyze customer emotions from social media, reviews, and feedback using advanced NLP." },
  { icon: TrendingUp, title: "Churn Prediction", desc: "Predict which customers are at risk of leaving with machine learning-powered behavior analysis." },
  { icon: MessageSquare, title: "Smart Chatbot", desc: "AI chatbot that understands customer issues and suggests personalized retention solutions." },
  { icon: Shield, title: "Retention Strategies", desc: "Get data-driven recommendations to improve customer satisfaction and reduce churn." },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 animate-fade-up">
            <BarChart3 className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent">AI-Powered Customer Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up-delay">
            Understand Your Customers.
            <br />
            <span className="text-gradient">Predict Their Next Move.</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            SentiMind uses advanced AI to analyze customer sentiment, predict churn, and deliver intelligent solutions that keep your customers happy and loyal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
            <Button size="lg" onClick={() => navigate("/dashboard")} className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold rounded-xl">
              Open Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/products")} className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base rounded-xl">
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Features</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to understand, predict, and improve your customer relationships.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "95%", label: "Prediction Accuracy" },
            { value: "40%", label: "Churn Reduction" },
            { value: "10K+", label: "Customers Analyzed" },
            { value: "24/7", label: "AI Monitoring" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-gradient">{s.value}</div>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t text-center text-sm text-muted-foreground">
        © 2026 SentiMind. AI-Powered Customer Intelligence Platform.
      </footer>
    </div>
  );
}
