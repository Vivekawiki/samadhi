
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Import pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About/AboutPage";
import OurCentre from "./pages/About/OurCentre";
import Vedanta from "./pages/About/Vedanta";
import HolyTrinity from "./pages/About/HolyTrinity";
import PresenceInSA from "./pages/About/PresenceInSA";
import ContactPage from "./pages/Contact/ContactPage";

// Import Services pages
import ServicesPage from "./pages/Services/ServicesPage";
import Satsangs from "./pages/Services/Satsangs";
import HinduismForChildren from "./pages/Services/HinduismForChildren";
import SpecialFunctions from "./pages/Services/SpecialFunctions";
import CommunityOutreach from "./pages/Services/CommunityOutreach";

// Import Gallery pages
import GalleryPage from "./pages/Gallery/GalleryPage";
import GalleryAlbum from "./components/gallery/GalleryAlbum";
import GalleryPhotoGrid from "./components/gallery/GalleryPhotoGrid";

// Import New Ashram Project pages
import NewAshramProjectPage from "./pages/NewAshramProject/NewAshramProjectPage";
import VisionPage from "./pages/NewAshramProject/VisionPage";
import TimelinePage from "./pages/NewAshramProject/TimelinePage";
import FundraisingPage from "./pages/NewAshramProject/FundraisingPage";

// Import Learn pages
import LearnPage from "./pages/Learn/LearnPage";
import MantrasPage from "./pages/Learn/MantrasPage";
import TopicPage from "./pages/Learn/TopicPage";

// Import Auth pages
import AuthPage from "./pages/Auth/AuthPage";
import ProfilePage from "./pages/User/ProfilePage";
import AdminDashboard from "./pages/Admin/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
            <Route path="/services" element={<ServicesPage />}>
              <Route path="/services/satsangs" element={<Satsangs />} />
              <Route path="/services/hinduism-for-children" element={<HinduismForChildren />} />
              <Route path="/services/special-functions" element={<SpecialFunctions />} />
              <Route path="/services/community-outreach" element={<CommunityOutreach />} />
            </Route>
            
            {/* Gallery Section */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:categoryId" element={<GalleryAlbum />} />
            <Route path="/gallery/:categoryId/:albumId" element={<GalleryPhotoGrid />} />
            
            {/* New Ashram Project Section */}
            <Route path="/new-ashram-project" element={<NewAshramProjectPage />} />
            <Route path="/new-ashram-project/vision" element={<VisionPage />} />
            <Route path="/new-ashram-project/timeline" element={<TimelinePage />} />
            <Route path="/new-ashram-project/fundraising" element={<FundraisingPage />} />
            
            {/* Learn Section */}
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/mantras" element={<MantrasPage />} />
            <Route path="/learn/topics/:topicId" element={<TopicPage />} />
            <Route path="/learn/topics/:topicId/:subtopicId" element={<TopicPage />} />
            
            {/* Authentication and User Routes */}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute requireAdmin>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
