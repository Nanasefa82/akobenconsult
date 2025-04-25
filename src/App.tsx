import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "./components/chat/Chatbot";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Resources
import { Blog } from "./pages/resources";
import BlogPost from "./pages/resources/BlogPost";

// Capabilities
import HealthSolutions from "./pages/capabilities/HealthSolutions";
import DigitalTransformation from "./pages/capabilities/DigitalTransformation";
import DataInnovation from "./pages/capabilities/DataInnovation";
import BusinessOperations from "./pages/capabilities/BusinessOperations";

// Markets
import Government from "./pages/markets/Government";
import Healthcare from "./pages/markets/Healthcare";
import Finance from "./pages/markets/Finance";
import Enterprise from "./pages/markets/Enterprise";

// About Us
import AboutPage from "./pages/about/AboutPage";
import MissionVision from "./pages/about/MissionVision";
import Leadership from "./pages/about/Leadership";
import Certifications from "./pages/about/Certifications";
import Partners from "./pages/about/Partners";
import Awards from "./pages/about/Awards";
import Story from "./pages/about/Story";
import FederalBackground from "./pages/about/FederalBackground";

// Services
import ServicesPage from "./pages/services/ServicesPage";
import AcquisitionStrategyCapture from "./pages/services/AcquisitionStrategyCapture";
import ProposalBidding from "./pages/services/ProposalBidding";
import ComplianceRegulatory from "./pages/services/ComplianceRegulatory";
import GreatContent from "./pages/services/GreatContent";
import NegotiationsAdvisory from "./pages/services/NegotiationsAdvisory";
import ContractAdminLifecycle from "./pages/services/ContractAdminLifecycle";

// Work With Us
import WorkWithUsPartners from "./pages/work-with-us/Partners";
import Career from "./pages/work-with-us/Career";

// Case Studies
import CaseStudies from "./pages/CaseStudies";

// Admin Pages
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminMessages from "./pages/admin/Messages";
import AdminStats from "./pages/admin/Stats";
import AdminSettings from "./pages/admin/Settings";
import AdminProfile from "./pages/admin/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Capabilities */}
          <Route path="/capabilities/health-solutions" element={<HealthSolutions />} />
          <Route path="/capabilities/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/capabilities/data-innovation" element={<DataInnovation />} />
          <Route path="/capabilities/business-operations" element={<BusinessOperations />} />
          
          {/* Markets */}
          <Route path="/markets/government" element={<Government />} />
          <Route path="/markets/healthcare" element={<Healthcare />} />
          <Route path="/markets/finance" element={<Finance />} />
          <Route path="/markets/enterprise" element={<Enterprise />} />
          
          {/* About Us */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/certifications" element={<Certifications />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/about/awards" element={<Awards />} />
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/federal-background" element={<FederalBackground />} />
          
          {/* Work With Us */}
          <Route path="/work-with-us/partners" element={<WorkWithUsPartners />} />
          <Route path="/work-with-us/career" element={<Career />} />
          
          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudies />} />
          
          {/* Resources */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/:slug" element={<BlogPost />} />
          
          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/acquisition-strategy-capture" element={<AcquisitionStrategyCapture />} />
          <Route path="/services/proposal-bidding" element={<ProposalBidding />} />
          <Route path="/services/compliance-regulatory" element={<ComplianceRegulatory />} />
          <Route path="/services/great-content" element={<GreatContent />} />
          <Route path="/services/negotiations-advisory" element={<NegotiationsAdvisory />} />
          <Route path="/services/contract-admin-lifecycle" element={<ContractAdminLifecycle />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/stats" element={<AdminStats />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
