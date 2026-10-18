import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

// Lazy-loaded pages for optimized code splitting and sub-2s initial load
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const BrijSurabhiPage = lazy(() => import("./pages/BrijSurabhiPage"));
const BrijHunarPage = lazy(() => import("./pages/BrijHunarPage"));
const BrijNipunPage = lazy(() => import("./pages/BrijNipunPage"));
const KLAPage = lazy(() => import("./pages/KLAPage"));
const DigiShalaPage = lazy(() => import("./pages/DigiShalaPage"));
const EdudakshPage = lazy(() => import("./pages/EdudakshPage"));
const BrijAnshumanPage = lazy(() => import("./pages/BrijAnshumanPage"));
const BrijSurabhiCowWelfarePage = lazy(() => import("./pages/BrijSurabhiCowWelfarePage"));
const BrijSurabhiTempleWastePage = lazy(() => import("./pages/BrijSurabhiTempleWastePage"));
const BrijSanginiPage = lazy(() => import("./pages/BrijSanginiPage"));
const BrijSevaPage = lazy(() => import("./pages/BrijSevaPage"));
const BrijDirectoryPage = lazy(() => import("./pages/BrijDirectoryPage"));
const ShaktiEkAdhaarPage = lazy(() => import("./pages/ShaktiEkAdhaarPage"));
const RadhaKrishnaPoshakPage = lazy(() => import("./pages/RadhaKrishnaPoshakPage"));
const RoyalSanjhiPage = lazy(() => import("./pages/RoyalSanjhiPage"));
const SHGFederationPage = lazy(() => import("./pages/SHGFederationPage"));
const UPSDMTrainingPage = lazy(() => import("./pages/UPSDMTrainingPage"));
const SanitaryNapkinPage = lazy(() => import("./pages/SanitaryNapkinPage"));
const UPITSTradeShowPage = lazy(() => import("./pages/UPITSTradeShowPage"));
const MediaPage = lazy(() => import("./pages/MediaPage"));
const CulturePage = lazy(() => import("./pages/CulturePage"));
const GIRecognitionPage = lazy(() => import("./pages/GIRecognitionPage"));
const CampaignsPage = lazy(() => import("./pages/CampaignsPage"));
const DonatePage = lazy(() => import("./pages/DonatePage"));
const GetInvolvedPage = lazy(() => import("./pages/GetInvolvedPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoading = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-background/50">
    <div className="w-8 h-8 rounded-full border-2 border-accent/20 border-t-accent animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppFloatingButton />
        <Suspense fallback={<PageLoading />}>
          <Routes>
            {/* Primary Canonical Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-work" element={<ProjectsPage />} />
            <Route path="/projects/brij-surabhi" element={<BrijSurabhiPage />} />
            <Route path="/projects/brij-hunar" element={<BrijHunarPage />} />
            <Route path="/projects/brij-nipun" element={<BrijNipunPage />} />
            <Route path="/projects/kla" element={<KLAPage />} />
            <Route path="/projects/digi-shala" element={<DigiShalaPage />} />
            <Route path="/projects/edudaksh" element={<EdudakshPage />} />
            <Route path="/projects/brij-anshuman" element={<BrijAnshumanPage />} />
            <Route path="/projects/brij-surabhi-cow-welfare" element={<BrijSurabhiCowWelfarePage />} />
            <Route path="/projects/brij-surabhi-temple-waste" element={<BrijSurabhiTempleWastePage />} />
            <Route path="/projects/brij-sangini" element={<BrijSanginiPage />} />
            <Route path="/projects/brij-seva" element={<BrijSevaPage />} />
            <Route path="/projects/brij-directory" element={<BrijDirectoryPage />} />
            <Route path="/projects/shakti-ek-adhaar" element={<ShaktiEkAdhaarPage />} />
            <Route path="/projects/mathura-zari-poshak" element={<RadhaKrishnaPoshakPage />} />
            <Route path="/projects/royal-sanjhi" element={<RoyalSanjhiPage />} />
            <Route path="/projects/shg-federation" element={<SHGFederationPage />} />
            <Route path="/projects/upsdm-training" element={<UPSDMTrainingPage />} />
            <Route path="/projects/sanitary-napkin" element={<SanitaryNapkinPage />} />
            <Route path="/our-work/up-international-trade-show-2026" element={<UPITSTradeShowPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/gi-recognition" element={<GIRecognitionPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />

            {/* Direct 301-style Canonical Route Redirects (Eliminates Duplicate Content) */}
            <Route path="/projects" element={<Navigate to="/our-work" replace />} />
            <Route path="/brij-surabhi" element={<Navigate to="/projects/brij-surabhi" replace />} />
            <Route path="/brij-hunar" element={<Navigate to="/projects/brij-hunar" replace />} />
            <Route path="/brij-nipun" element={<Navigate to="/projects/brij-nipun" replace />} />
            <Route path="/kla" element={<Navigate to="/projects/kla" replace />} />
            <Route path="/digi-shala" element={<Navigate to="/projects/digi-shala" replace />} />
            <Route path="/brij-anshuman" element={<Navigate to="/projects/brij-anshuman" replace />} />
            <Route path="/brij-sangini" element={<Navigate to="/projects/brij-sangini" replace />} />
            <Route path="/brij-seva" element={<Navigate to="/projects/brij-seva" replace />} />
            <Route path="/brij-directory" element={<Navigate to="/projects/brij-directory" replace />} />
            <Route path="/brij-business-women-directory" element={<Navigate to="/projects/brij-directory" replace />} />
            <Route path="/directory" element={<Navigate to="/projects/brij-directory" replace />} />
            <Route path="/projects/radha-krishna-poshak" element={<Navigate to="/projects/mathura-zari-poshak" replace />} />
            <Route path="/mathura-zari-poshak" element={<Navigate to="/projects/mathura-zari-poshak" replace />} />
            <Route path="/royal-sanjhi" element={<Navigate to="/projects/royal-sanjhi" replace />} />
            <Route path="/projects/sanjhi-art" element={<Navigate to="/projects/royal-sanjhi" replace />} />
            <Route path="/gallery" element={<Navigate to="/media" replace />} />
            <Route path="/work" element={<Navigate to="/our-work" replace />} />
            <Route path="/culture-and-heritage" element={<Navigate to="/culture" replace />} />
            <Route path="/culture-heritage" element={<Navigate to="/culture" replace />} />
            <Route path="/heritage" element={<Navigate to="/culture" replace />} />
            <Route path="/up-international-trade-show-2026" element={<Navigate to="/our-work/up-international-trade-show-2026" replace />} />
            <Route path="/projects/up-international-trade-show-2026" element={<Navigate to="/our-work/up-international-trade-show-2026" replace />} />
            <Route path="/volunteer" element={<Navigate to="/get-involved" replace />} />
            <Route path="/collaborations" element={<Navigate to="/get-involved" replace />} />
            <Route path="/partner" element={<Navigate to="/get-involved" replace />} />
            <Route path="/partnership-inquiry" element={<Navigate to="/get-involved" replace />} />
            <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
