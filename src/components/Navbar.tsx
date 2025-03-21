
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Book, BookOpen, HelpCircle, Wrench, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Inicio", href: "/", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: "Biblia", href: "/biblia", icon: <Book className="h-4 w-4 mr-2" /> },
    { name: "Ayudas", href: "/ayudas", icon: <HelpCircle className="h-4 w-4 mr-2" /> },
    { name: "Apologética", href: "/apologetica", icon: <Shield className="h-4 w-4 mr-2" /> },
    { name: "Herramientas", href: "/herramientas", icon: <Wrench className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-burgundy font-bold text-xl tracking-tighter">
                biblionube
              </h1>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center text-gray-900 hover:text-burgundy px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="Main menu"
              className="-mr-2"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center text-gray-900 hover:bg-gray-50 hover:text-burgundy block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
