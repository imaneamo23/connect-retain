import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import SentimentAnalysis from "./pages/SentimentAnalysis";
import ChurnPredictions from "./pages/ChurnPredictions";
import CustomerFeedback from "./pages/CustomerFeedback";
import UserSegmentation from "./pages/UserSegmentation";

import ConversionFunnel from "./pages/ConversionFunnel";
import ContentPerformance from "./pages/ContentPerformance";
import PageOverview from "./pages/PageOverview";
import Profile from "./pages/Profile";
import BusinessLayout from "./components/BusinessLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AuthRedirect() {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>;
  if (!user) return <Auth />;
  return <Navigate to="/dashboard" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<AuthRedirect />} />

            {/* Business owner routes */}
            <Route path="/dashboard" element={<ProtectedRoute><BusinessLayout /></ProtectedRoute>}>
              <Route index element={<Dashboard />} />
              <Route path="sentiment" element={<SentimentAnalysis />} />
              <Route path="churn" element={<ChurnPredictions />} />
              <Route path="feedback" element={<CustomerFeedback />} />
              <Route path="segmentation" element={<UserSegmentation />} />
              
              <Route path="funnel" element={<ConversionFunnel />} />
              <Route path="content" element={<ContentPerformance />} />
              <Route path="page-overview" element={<PageOverview />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
