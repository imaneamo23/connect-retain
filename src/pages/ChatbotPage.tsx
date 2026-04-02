import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const botResponses = [
  "I understand your concern. Based on our sentiment analysis, here are some suggestions to improve the customer experience...",
  "Looking at the data, it seems like delivery speed is a common pain point. I recommend implementing expedited shipping options.",
  "Our analysis shows that customers who experienced this issue have a 40% higher churn risk. Let me suggest a personalized retention offer.",
  "Based on similar customer profiles, a discount coupon or loyalty reward has shown to reduce churn probability by 35%.",
  "I've analyzed the feedback patterns. The most effective retention strategy for this segment is proactive customer support outreach.",
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! I'm SentiMind's AI assistant. I can help you analyze customer issues and suggest retention strategies. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    const botMsg: Message = { role: "bot", content: botResponses[Math.floor(Math.random() * botResponses.length)] };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">AI Retention Chatbot</h1>
        <p className="text-muted-foreground text-sm mt-1">Interact with AI to understand customer issues and get retention solutions</p>
      </div>

      <Card className="glass-card h-[calc(100vh-16rem)]">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "bot" ? "gradient-accent" : "bg-secondary"}`}>
                  {msg.role === "bot" ? <Bot className="h-4 w-4 text-accent-foreground" /> : <User className="h-4 w-4" />}
                </div>
                <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${msg.role === "bot" ? "bg-secondary" : "bg-accent text-accent-foreground"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-4 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about customer issues, churn risk, retention strategies..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
