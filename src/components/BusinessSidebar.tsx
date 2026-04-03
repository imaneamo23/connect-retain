import { BarChart3, TrendingUp, AlertTriangle, MessageSquare, Users, Globe, ShoppingCart, FileBarChart } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Overview", url: "/dashboard", icon: BarChart3 },
];

const analyticsItems = [
  { title: "Sentiment Analysis", url: "/dashboard/sentiment", icon: TrendingUp },
  { title: "Churn Predictions", url: "/dashboard/churn", icon: AlertTriangle },
  { title: "User Segmentation", url: "/dashboard/segmentation", icon: Users },
  { title: "Conversion Funnel", url: "/dashboard/funnel", icon: ShoppingCart },
  { title: "Attribution", url: "/dashboard/attribution", icon: Globe },
  { title: "Content Performance", url: "/dashboard/content", icon: FileBarChart },
  { title: "Customer Feedback", url: "/dashboard/feedback", icon: MessageSquare },
];

export function BusinessSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const renderItems = (items: typeof mainItems) =>
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <NavLink to={item.url} end={item.url === "/dashboard"} className="hover:bg-sidebar-accent/50" activeClassName="bg-sidebar-accent text-sidebar-primary font-medium">
            <item.icon className="mr-2 h-4 w-4" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
            <BarChart3 className="h-4 w-4 text-accent-foreground" />
          </div>
          {!collapsed && <span className="font-bold text-lg text-sidebar-primary-foreground">SentiMind</span>}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderItems(mainItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderItems(analyticsItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
