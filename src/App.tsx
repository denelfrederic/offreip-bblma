
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CommentTravaillonsNous from "./pages/CommentTravaillonsNous";
import SavoirFaire from "./pages/SavoirFaire";
import NosAtouts from "./pages/NosAtouts";
import Equipe from "./pages/Equipe";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RechercheAnteriorite from "./pages/services/RechercheAnteriorite";
import DepotRenouvellement from "./pages/services/DepotRenouvellement";
import Surveillance from "./pages/services/Surveillance";
import AuditPortefeuilles from "./pages/services/AuditPortefeuilles";
import RGPD from "./pages/services/RGPD";
import Cybersecurite from "./pages/services/Cybersecurite";
import Contrats from "./pages/services/Contrats";
import LitigesContentieux from "./pages/services/LitigesContentieux";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comment-travaillons-nous" element={<CommentTravaillonsNous />} />
          <Route path="/savoir-faire" element={<SavoirFaire />} />
          <Route path="/savoir-faire/recherche-anteriorite" element={<RechercheAnteriorite />} />
          <Route path="/savoir-faire/depot-renouvellement" element={<DepotRenouvellement />} />
          <Route path="/savoir-faire/surveillance" element={<Surveillance />} />
          <Route path="/savoir-faire/audit-portefeuilles" element={<AuditPortefeuilles />} />
          <Route path="/savoir-faire/rgpd" element={<RGPD />} />
          <Route path="/savoir-faire/cybersecurite" element={<Cybersecurite />} />
          <Route path="/savoir-faire/contrats" element={<Contrats />} />
          <Route path="/savoir-faire/litiges-contentieux" element={<LitigesContentieux />} />
          <Route path="/nos-atouts" element={<NosAtouts />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
