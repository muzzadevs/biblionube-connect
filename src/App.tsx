
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BibliaPage from "./pages/BibliaPage";
import AyudasPage from "./pages/AyudasPage";
import BookDetailPage from "./pages/BookDetailPage";
import HerramientasPage from "./pages/HerramientasPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Analytics />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/biblia" element={<BibliaPage />} />
                <Route path="/ayudas" element={<AyudasPage />} />
                <Route path="/ayudas/:testamento/:libro" element={<BookDetailPage />} />
                <Route path="/herramientas" element={<HerramientasPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <footer className="py-4 px-6 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
              <p>© {new Date().getFullYear()} biblionube. Todos los derechos reservados.</p>
            </footer>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
