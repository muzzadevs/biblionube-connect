
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
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
    <TooltipProvider>
      <Analytics />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={true}>
          <div className="min-h-screen flex w-full bg-background text-foreground">
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-col h-full">
                <Navbar />
                <main className="flex-1 p-4">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/biblia" element={<BibliaPage />} />
                    <Route path="/ayudas" element={<AyudasPage />} />
                    <Route path="/ayudas/:testamento/:libro" element={<BookDetailPage />} />
                    <Route path="/herramientas" element={<HerramientasPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <footer className="py-4 px-6 text-center text-muted-foreground text-sm border-t border-border">
                  <p>© {new Date().getFullYear()} biblionube. Todos los derechos reservados.</p>
                </footer>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
