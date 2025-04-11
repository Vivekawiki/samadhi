
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PageLayout from "./components/layout/PageLayout";
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
import NutritionProgramme from "./pages/Services/NutritionProgramme";
import FullSizeImage from "./pages/Services/FullSizeImage";

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
// MantrasPage import removed
// TopicPage import removed
import LessonPage from "./pages/Learn/LessonPage";
import LessonsPage from "./pages/Learn/LessonsPage";
import CommunityLearningPage from "./pages/Learn/CommunityLearningPage";
import QuizPage from "./pages/Learn/QuizPage";
import GamesPage from "./pages/Learn/GamesPage";
import GamesPageSimple from "./pages/Learn/GamesPageSimple";
import GuessThePictureGame from "./components/games/GuessThePictureGame";
import SubmitQuestionPage from "./pages/Learn/SubmitQuestionPage";
import GuessThePicturePage from "./pages/Learn/GuessThePicturePage";

// Import Auth pages
import AuthPage from "./pages/Auth/AuthPage";
import ProfilePage from "./pages/User/ProfilePage";
import AdminDashboard from "./pages/Admin/AdminDashboard";

// Import Dashboard pages
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import AdminDashboardNew from "./pages/Dashboard/AdminDashboard";

// Import Donation pages
import DonatePage from "./pages/Donate/DonatePage";
import ThankYouPage from "./pages/Donate/ThankYouPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageLayout>
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
              <Route path="/services/nutrition-programme" element={<NutritionProgramme />} />
              <Route path="/services/nutrition-programme/image/:imageId" element={<FullSizeImage />} />
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
            {/* Mantras page removed */}
            {/* Topics pages removed */}
            <Route path="/learn/lessons" element={<LessonsPage />} />
            <Route path="/learn/lessons/:topicId/:lessonId" element={<LessonPage />} />
            <Route path="/learn/community" element={<CommunityLearningPage />} />
            <Route path="/learn/quizzes" element={<QuizPage />} />
            <Route path="/learn/submit" element={<SubmitQuestionPage />} />
            <Route path="/learn/games" element={<GamesPage />} />
            <Route path="/learn/games/guess-picture" element={<GuessThePicturePage />} />

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

            {/* Dashboard Routes */}
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboardNew />} />

            {/* Donation Routes */}
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/donate/thank-you" element={<ThankYouPage />} />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageLayout>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
