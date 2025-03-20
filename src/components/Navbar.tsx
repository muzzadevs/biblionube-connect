
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export default function Navbar() {
  const { openMobile, setOpenMobile } = useSidebar();

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center md:hidden">
            <SidebarTrigger />
          </div>
          
          <div className="flex-1 flex justify-end items-center">
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link 
                to="/biblia" 
                className="hidden md:flex items-center text-foreground hover:text-burgundy px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Rápido acceso a Biblia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
