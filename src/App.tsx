import { ErrorBoundary } from "@/components/ErrorBoundary";
import LoaderOverlay from "@/components/ui/LoaderOverlay";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

// Lazy load all major pages for code splitting
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const SecurityServices = lazy(() => import("./pages/SecurityServices"));
const CleaningServices = lazy(() => import("./pages/CleaningServices"));
const PestControl = lazy(() => import("./pages/PestControl"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    // Hide loader after initial mount or after Suspense fallback
    if (!showLoader) return;
    const timer = setTimeout(() => setShowLoader(false), 900);
    return () => clearTimeout(timer);
  }, [showLoader]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LoaderOverlay show={showLoader} />
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<LoaderOverlay show={true} />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/security" element={<SecurityServices />} />
                <Route path="/services/cleaning" element={<CleaningServices />} />
                <Route path="/services/pest-control" element={<PestControl />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
