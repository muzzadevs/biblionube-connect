
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BiblioliogiaPage from "./pages/BiblioliogiaPage";
import AyudasPage from "./pages/AyudasPage";
import BookDetailPage from "./pages/BookDetailPage";
import HerramientasPage from "./pages/HerramientasPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bibliologia" element={<BiblioliogiaPage />} />
              <Route path="/ayudas" element={<AyudasPage />} />
              <Route path="/ayudas/:testamento/:libro" element={<BookDetailPage />} />
              <Route path="/herramientas" element={<HerramientasPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="py-4 px-6 text-center text-gray-500 text-sm border-t border-gray-200">
            <p>© {new Date().getFullYear()} biblionube. Todos los derechos reservados.</p>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
