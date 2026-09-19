import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BrijSurabhiPage from "./pages/BrijSurabhiPage";
import BrijHunarPage from "./pages/BrijHunarPage";
import BrijNipunPage from "./pages/BrijNipunPage";
import ProjectsPage from "./pages/ProjectsPage";
import KLAPage from "./pages/KLAPage";
import DigiShalaPage from "./pages/DigiShalaPage";
import EdudakshPage from "./pages/EdudakshPage";
import BrijAnshumanPage from "./pages/BrijAnshumanPage";
import BrijSurabhiCowWelfarePage from "./pages/BrijSurabhiCowWelfarePage";
import BrijSurabhiTempleWastePage from "./pages/BrijSurabhiTempleWastePage";
import BrijSanginiPage from "./pages/BrijSanginiPage";
import BrijSevaPage from "./pages/BrijSevaPage";
import BrijDirectoryPage from "./pages/BrijDirectoryPage";
import ShaktiEkAdhaarPage from "./pages/ShaktiEkAdhaarPage";
import RadhaKrishnaPoshakPage from "./pages/RadhaKrishnaPoshakPage";
import RoyalSanjhiPage from "./pages/RoyalSanjhiPage";
import SHGFederationPage from "./pages/SHGFederationPage";
import UPSDMTrainingPage from "./pages/UPSDMTrainingPage";
import SanitaryNapkinPage from "./pages/SanitaryNapkinPage";
import MediaPage from "./pages/MediaPage";
import GIRecognitionPage from "./pages/GIRecognitionPage";
import CampaignsPage from "./pages/CampaignsPage";
import CollaborationsPage from "./pages/CollaborationsPage";
import PartnershipInquiryPage from "./pages/PartnershipInquiryPage";
import DonatePage from "./pages/DonatePage";
import VolunteerPage from "./pages/VolunteerPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import ContactPage from "./pages/ContactPage";
import CulturePage from "./pages/CulturePage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppFloatingButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-work" element={<ProjectsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/brij-surabhi" element={<BrijSurabhiPage />} />
          <Route path="/brij-surabhi" element={<BrijSurabhiPage />} />
          <Route path="/projects/brij-hunar" element={<BrijHunarPage />} />
          <Route path="/brij-hunar" element={<BrijHunarPage />} />
          <Route path="/projects/brij-nipun" element={<BrijNipunPage />} />
          <Route path="/brij-nipun" element={<BrijNipunPage />} />
          <Route path="/projects/kla" element={<KLAPage />} />
          <Route path="/kla" element={<KLAPage />} />
          <Route path="/projects/digi-shala" element={<DigiShalaPage />} />
          <Route path="/digi-shala" element={<DigiShalaPage />} />
          <Route path="/projects/edudaksh" element={<EdudakshPage />} />
          <Route path="/projects/brij-anshuman" element={<BrijAnshumanPage />} />
          <Route path="/brij-anshuman" element={<BrijAnshumanPage />} />
          <Route path="/projects/brij-surabhi-cow-welfare" element={<BrijSurabhiCowWelfarePage />} />
          <Route path="/projects/brij-surabhi-temple-waste" element={<BrijSurabhiTempleWastePage />} />
          <Route path="/projects/brij-sangini" element={<BrijSanginiPage />} />
          <Route path="/brij-sangini" element={<BrijSanginiPage />} />
          <Route path="/projects/brij-seva" element={<BrijSevaPage />} />
          <Route path="/brij-seva" element={<BrijSevaPage />} />
          <Route path="/projects/brij-directory" element={<BrijDirectoryPage />} />
          <Route path="/brij-directory" element={<BrijDirectoryPage />} />
          <Route path="/brij-business-women-directory" element={<BrijDirectoryPage />} />
          <Route path="/directory" element={<BrijDirectoryPage />} />
          <Route path="/projects/shakti-ek-adhaar" element={<ShaktiEkAdhaarPage />} />
          <Route path="/projects/radha-krishna-poshak" element={<RadhaKrishnaPoshakPage />} />
          <Route path="/projects/mathura-zari-poshak" element={<RadhaKrishnaPoshakPage />} />
          <Route path="/mathura-zari-poshak" element={<RadhaKrishnaPoshakPage />} />
          <Route path="/projects/royal-sanjhi" element={<RoyalSanjhiPage />} />
          <Route path="/royal-sanjhi" element={<RoyalSanjhiPage />} />
          <Route path="/projects/sanjhi-art" element={<RoyalSanjhiPage />} />
          <Route path="/projects/shg-federation" element={<SHGFederationPage />} />
          <Route path="/projects/upsdm-training" element={<UPSDMTrainingPage />} />
          <Route path="/projects/sanitary-napkin" element={<SanitaryNapkinPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<MediaPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/culture-and-heritage" element={<CulturePage />} />
          <Route path="/heritage" element={<CulturePage />} />
          <Route path="/gi-recognition" element={<GIRecognitionPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/collaborations" element={<Navigate to="/get-involved" replace />} />
          <Route path="/partner" element={<Navigate to="/get-involved" replace />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/volunteer" element={<GetInvolvedPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
