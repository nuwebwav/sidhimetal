import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RoundBars from "./pages/products/RoundBars";
import WireRods from "./pages/products/WireRods";
import PipesTubes from "./pages/products/PipesTubes";
import SheetsPlates from "./pages/products/SheetsPlates";
import Angles from "./pages/products/Angles";
import Channels from "./pages/products/Channels";
import Valves from "./pages/products/Valves";
import FlatBars from "./pages/products/FlatBars";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/round-bars" element={<RoundBars />} />
          <Route path="/products/wire-rods" element={<WireRods />} />
          <Route path="/products/pipes-tubes" element={<PipesTubes />} />
          <Route path="/products/sheets-plates" element={<SheetsPlates />} />
          <Route path="/products/angles" element={<Angles />} />
          <Route path="/products/channels" element={<Channels />} />
          <Route path="/products/valves" element={<Valves />} />
          <Route path="/products/flat-bars" element={<FlatBars />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
