import { ArrowRight, BarChart3, Brain, MessageSquare, Shield, TrendingUp, Users, Layers, Database, Cpu, LineChart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Brain, title: "AI Sentiment Analysis", desc: "Automatically analyze customer emotions from social media, reviews, and feedback using advanced NLP." },
  { icon: TrendingUp, title: "Churn Prediction", desc: "Predict which customers are at risk of leaving with ML-powered behavior analysis." },
  { icon: MessageSquare, title: "Smart Chatbot", desc: "AI chatbot that understands customer issues and suggests personalized retention solutions." },
  { icon: Shield, title: "Retention Strategies", desc: "Get data-driven recommendations to improve satisfaction and reduce churn." },
];

const pipelineSteps = [
  { icon: Database, title: "Data Collection", desc: "Gather customer feedback, social media posts, reviews, and behavioral data from multiple sources." },
  { icon: Cpu, title: "NLP Processing", desc: "Analyze text using sentiment analysis, entity extraction, and topic modeling with transformer models." },
  { icon: Brain, title: "ML Prediction", desc: "Feed processed data into churn prediction models that learn from historical patterns." },
  { icon: LineChart, title: "Actionable Insights", desc: "Generate dashboards, alerts, and AI-powered recommendations for retention strategies." },
];

const stakeholders = [
  { emoji: "🏢", title: "Business Owners", desc: "Monitor customer sentiment in real-time. Predict churn before it happens. Make data-driven retention decisions." },
  { emoji: "🛒", title: "Customers", desc: "Browse products, leave feedback, and interact with AI-powered support that truly understands your needs." },
  { emoji: "📊", title: "Data Teams", desc: "Access comprehensive analytics, sentiment trends, and behavior models to power business intelligence." },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-accent-foreground" />
          </div>
          <span className="font-bold text-lg text-primary-foreground">SentiMind</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate("/auth")} className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
            Sign In
          </Button>
          <Button onClick={() => navigate("/auth")} className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-16">
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
            <Button size="lg" onClick={() => navigate("/auth")} className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold rounded-xl">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base rounded-xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About SentiMind</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            SentiMind is an AI-driven platform that analyzes customer sentiment and behavior from social media data.
            By combining Natural Language Processing and Machine Learning — including sentiment analysis, behavior modeling,
            and predictive analytics — we help businesses understand their customers deeply, detect churn risk early,
            and take proactive steps to improve retention and satisfaction.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Features</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to understand, predict, and improve customer relationships.</p>
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

      {/* Stakeholders */}
      <section id="stakeholders" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Who It's For</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">SentiMind serves multiple stakeholders in the customer experience ecosystem.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stakeholders.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-8 text-center hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section id="pipeline" className="py-24 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Analytical Pipeline</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">How our AI processes and transforms raw data into actionable business intelligence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-3 text-accent h-6 w-6 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
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
