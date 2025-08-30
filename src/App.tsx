import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useScrollToTop } from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
            <Helmet>
              <title>Andréa Matias - Psicóloga TCC em Nova Iguaçu | Ansiedade e Depressão</title>
              <meta name="description" content="Psicóloga especializada em TCC em Nova Iguaçu. Tratamento para ansiedade, depressão e relacionamentos. Atendimento presencial e online. Agende sua consulta." />
              <meta name="keywords" content="psicóloga Nova Iguaçu, TCC, ansiedade, depressão, terapia cognitivo comportamental, psicologia RJ" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="canonical" href="https://andreamatiaspsi.com" />
              <meta property="og:title" content="Andréa Matias - Psicóloga TCC em Nova Iguaçu" />
              <meta property="og:description" content="Especialista em TCC para ansiedade, depressão e relacionamentos. Atendimento humanizado em Nova Iguaçu e online." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://andreamatiaspsi.com" />
              <meta property="og:locale" content="pt_BR" />
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": ["ProfessionalService", "MedicalBusiness"],
                    "name": "Andréa Matias - Psicóloga",
                    "alternateName": "Consultório de Psicologia Andréa Matias",
                    "description": "Psicóloga especializada em Terapia Cognitivo-Comportamental (TCC) oferecendo tratamento para ansiedade, depressão, relacionamentos e saúde mental em Nova Iguaçu e online.",
                    "url": "https://andreamatiaspsi.com",
                    "telephone": "+55-21-98765-4321",
                    "email": "contato@andreamatiaspsi.com",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Nova Iguaçu",
                      "addressRegion": "RJ",
                      "addressCountry": "BR",
                      "postalCode": "26000-000"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": "-22.7592",
                      "longitude": "-43.4518"
                    },
                    "areaServed": [
                      {
                        "@type": "State",
                        "name": "Rio de Janeiro"
                      },
                      {
                        "@type": "Country",
                        "name": "Brasil"
                      }
                    ],
                    "serviceType": ["Terapia Cognitivo-Comportamental", "Psicoterapia", "Atendimento Psicológico"],
                    "medicalSpecialty": "Psychology",
                    "availableService": [
                      {
                        "@type": "MedicalTherapy",
                        "name": "Tratamento para Ansiedade",
                        "description": "Terapia especializada para transtornos de ansiedade usando técnicas de TCC"
                      },
                      {
                        "@type": "MedicalTherapy", 
                        "name": "Tratamento para Depressão",
                        "description": "Psicoterapia para depressão com abordagem cognitivo-comportamental"
                      },
                      {
                        "@type": "MedicalTherapy",
                        "name": "Terapia para Relacionamentos",
                        "description": "Terapia de casal e relacionamentos usando TCC"
                      },
                      {
                        "@type": "MedicalTherapy",
                        "name": "Psicologia Materno-Infantil",
                        "description": "Atendimento especializado para mães e famílias"
                      }
                    ],
                    "provider": {
                      "@type": "Person",
                      "name": "Andréa Matias",
                      "jobTitle": "Psicóloga",
                      "description": "Psicóloga formada há mais de 8 anos, especializada em Terapia Cognitivo-Comportamental",
                      "memberOf": {
                        "@type": "ProfessionalService",
                        "name": "Conselho Regional de Psicologia - CRP 05/56720"
                      },
                      "alumniOf": {
                        "@type": "EducationalOrganization",
                        "name": "Universidade de Psicologia"
                      }
                    },
                    "openingHours": "Mo-Fr 08:00-18:00",
                    "paymentAccepted": ["Cash", "Credit Card", "PIX"],
                    "priceRange": "$",
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "87"
                    }
                  }
                `}
              </script>
            </Helmet>
            <Header />
            <main className="flex-1" role="main">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
