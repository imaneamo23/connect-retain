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
import BusinessProducts from "./pages/BusinessProducts";
import BusinessProductDetail from "./pages/BusinessProductDetail";
import ChatbotPage from "./pages/ChatbotPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import CustomerLayout from "./components/CustomerLayout";
import BusinessLayout from "./components/BusinessLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AuthRedirect() {
  const { user, role, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>;
  if (!user) return <Auth />;
  return <Navigate to={role === "business_owner" ? "/dashboard" : "/customer"} replace />;
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

            {/* Customer routes */}
            <Route path="/customer" element={<ProtectedRoute requiredRole="customer"><CustomerLayout /></ProtectedRoute>}>
              <Route index element={<CustomerDashboard />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            {/* Business owner routes */}
            <Route path="/dashboard" element={<ProtectedRoute requiredRole="business_owner"><BusinessLayout /></ProtectedRoute>}>
              <Route index element={<Dashboard />} />
              <Route path="sentiment" element={<SentimentAnalysis />} />
              <Route path="churn" element={<ChurnPredictions />} />
              <Route path="feedback" element={<CustomerFeedback />} />
              <Route path="products" element={<BusinessProducts />} />
              <Route path="products/:id" element={<BusinessProductDetail />} />
              <Route path="chatbot" element={<ChatbotPage />} />
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
