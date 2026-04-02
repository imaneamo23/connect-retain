import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Video, Image, FileText, TrendingUp } from "lucide-react";

const contentTypes = [
  { icon: Video, label: "Videos", note: "Higher CTR typically", value: "—" },
  { icon: Image, label: "Images", note: "Strong engagement", value: "—" },
  { icon: FileText, label: "Text Posts", note: "Comment-driven", value: "—" },
];

export default function ContentPerformance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Content Performance</h1>
        <p className="text-muted-foreground text-sm mt-1">Analyze which content types and topics drive the best business outcomes</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {contentTypes.map((ct) => (
          <Card key={ct.label} className="glass-card">
            <CardContent className="p-5">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <ct.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-sm">{ct.label}</h3>
              <p className="text-xs text-muted-foreground">{ct.note}</p>
              <div className="mt-3 text-2xl font-bold text-muted-foreground">{ct.value}</div>
              <p className="text-xs text-muted-foreground">Avg. engagement rate</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Content Type Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Connect data source</p>
                <p className="text-xs">Video vs Image vs Text performance comparison</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base">Trending Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Connect data source</p>
                <p className="text-xs">Topic trends and hashtag performance here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base">Time Series Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center border-2 border-dashed border-border rounded-xl">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">Connect data source</p>
              <p className="text-xs">Content performance trends over time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
