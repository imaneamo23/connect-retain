import { ArrowRight, BarChart3, Brain, Shield, TrendingUp, Layers, Database, Cpu, LineChart, ChevronRight, Eye, MousePointer, ShoppingCart, Heart, Target, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const features = [
  { icon: Brain, title: "AI Sentiment Analysis", desc: "Analyze customer emotions from social media comments and reviews using advanced NLP models." },
  { icon: TrendingUp, title: "Churn Prediction", desc: "Predict which customers are at risk of leaving using ML-powered behavior and engagement analysis." },
  { icon: Target, title: "User Segmentation", desc: "Cluster customers into high-value, passive, and potential buyers using K-Means and behavioral features." },
  { icon: Globe, title: "Attribution Modeling", desc: "Discover which social media platforms drive the most awareness, engagement, and revenue." },
  { icon: LineChart, title: "Conversion Funnel", desc: "Track CTR, conversion rates, and CPA to understand how content translates into business results." },
  { icon: Shield, title: "Retention Strategies", desc: "Get AI-powered recommendations to reduce churn and improve customer lifetime value." },
];

const pipelineSteps = [
  { icon: Database, title: "Data Collection", desc: "Gather social media posts, engagement metrics, user behavior data, and purchase history via APIs and scrapers." },
  { icon: Cpu, title: "Preprocessing & Feature Engineering", desc: "Clean data, normalize metrics, and extract engagement rates, sentiment scores, interaction frequency, and NLP features." },
  { icon: Brain, title: "AI Model Training", desc: "Build predictive models — conversion prediction, churn analysis, sentiment classification, and user clustering." },
  { icon: LineChart, title: "Evaluation & Optimization", desc: "Evaluate with accuracy, precision/recall, confusion matrices. Optimize for real business outcomes, not vanity metrics." },
  { icon: Target, title: "Segmentation & Attribution", desc: "Segment users into behavioral clusters. Attribute revenue to specific platforms and content types." },
  { icon: Zap, title: "Actionable Insights", desc: "Generate dashboards with CAC vs LTV, conversion funnels, best-performing content, and strategic recommendations." },
];

const stakeholders = [
  { emoji: "🏢", title: "Business Owners", desc: "Monitor customer sentiment in real-time. Predict churn before it happens. Optimize marketing spend with data-driven attribution." },
  { emoji: "📊", title: "Data & Marketing Teams", desc: "Access comprehensive analytics — from awareness to conversion — and power business intelligence with predictive models." },
];

const metricsCategories = [
  { icon: Eye, title: "Awareness", items: ["Reach", "Impressions", "Follower Growth Rate"], insight: "Are people discovering your brand?" },
  { icon: MousePointer, title: "Engagement", items: ["Likes", "Comments", "Shares", "Saves", "Engagement Rate"], insight: "Does your content resonate?" },
  { icon: ShoppingCart, title: "Conversion", items: ["Click-Through Rate", "Conversion Rate", "Cost per Acquisition"], insight: "Does content generate business results?" },
  { icon: Heart, title: "Customer", items: ["Customer Acquisition Cost", "Lifetime Value", "Retention Rate"], insight: "Are you building a sustainable business?" },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-accent-foreground" />
          </div>
          <span className="font-bold text-lg text-primary-foreground">SentiMind</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-primary-foreground/70">
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary-foreground transition-colors">About</button>
          <button onClick={() => document.getElementById("metrics")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary-foreground transition-colors">Metrics</button>
          <button onClick={() => document.getElementById("pipeline")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary-foreground transition-colors">Pipeline</button>
          <button onClick={() => document.getElementById("stakeholders")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary-foreground transition-colors">Stakeholders</button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate("/auth")} className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
            Sign In
          </Button>
          <Button onClick={() => navigate("/auth")} className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
            Get Started
          </Button>
        </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 animate-fade-up">
            <Brain className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent">AI-Powered Social Media Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up-delay">
            From Social Data to
            <br />
            <span className="text-gradient">Business Decisions.</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            SentiMind collects social media data, analyzes customer behavior using AI, and transforms insights into actionable strategies — focusing on acquisition, conversion, retention, and revenue impact.
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
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            SentiMind is an AI-driven system that goes beyond vanity metrics. Instead of tracking likes and views,
            we focus on predicting real business outcomes — customer conversion, churn risk, and revenue impact.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            By combining NLP sentiment analysis, ML-powered behavior modeling, user segmentation, and attribution analytics,
            we help businesses understand their customers deeply and make data-driven decisions that drive growth.
          </p>
        </div>
      </section>

      {/* Metrics Categories */}
      <section id="metrics" className="py-24 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Social Media Metrics That Matter</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We track metrics across four key categories to give you a complete picture of business performance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsCategories.map((cat) => (
              <div key={cat.title} className="glass-card rounded-2xl p-6 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <cat.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{cat.title}</h3>
                <ul className="space-y-1 mb-4">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-accent font-medium italic">💡 {cat.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Features</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to understand, predict, and improve customer relationships.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section id="stakeholders" className="py-24 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Who It's For</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">SentiMind serves key stakeholders in the business intelligence ecosystem.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      <section id="pipeline" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Analytical Pipeline</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">How our AI processes raw social media data into actionable business intelligence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipelineSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="glass-card rounded-2xl p-6 h-full hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
                  <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture diagram text */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">System Architecture</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            {["APIs / Scrapers", "Data Storage", "Preprocessing", "Feature Engineering", "AI Models", "Dashboard", "Business Insights"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-xl bg-accent/10 text-accent border border-accent/20">{step}</span>
                {i < arr.length - 1 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final insight */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Beyond Vanity Metrics</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border-destructive/20">
              <p className="text-destructive font-semibold mb-2">❌ What most do</p>
              <p className="text-muted-foreground text-sm">Predict likes, count followers, track impressions without business context.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 border-accent/20">
              <p className="text-accent font-semibold mb-2">✅ What we do</p>
              <p className="text-muted-foreground text-sm">Predict business outcomes — conversion probability, churn risk, revenue attribution, and customer lifetime value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "95%", label: "Prediction Accuracy" },
            { value: "40%", label: "Churn Reduction" },
            { value: "3x", label: "Comment→Purchase Lift" },
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
        © 2026 SentiMind. AI-Powered Social Media Intelligence Platform.
      </footer>
    </div>
  );
}
