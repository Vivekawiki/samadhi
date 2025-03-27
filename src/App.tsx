
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About/AboutPage";
import OurCentre from "./pages/About/OurCentre";
import Vedanta from "./pages/About/Vedanta";
import HolyTrinity from "./pages/About/HolyTrinity";
import PresenceInSA from "./pages/About/PresenceInSA";
import ContactPage from "./pages/Contact/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Index />} />
          
          {/* About Section */}
          <Route path="/about" element={<AboutPage />}>
            <Route path="/about/our-centre" element={<OurCentre />} />
            <Route path="/about/vedanta" element={<Vedanta />} />
            <Route path="/about/holy-trinity" element={<HolyTrinity />} />
            <Route path="/about/presence-in-sa" element={<PresenceInSA />} />
          </Route>
          
          {/* Services Section */}
          {/* Will be implemented in next phase */}
          
          {/* Gallery Section */}
          {/* Will be implemented in next phase */}
          
          {/* New Ashram Project Section */}
          {/* Will be implemented in next phase */}
          
          {/* Learn Section */}
          {/* Will be implemented in next phase */}
          
          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
