
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Book, BookOpen, HelpCircle, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

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
    { name: "Herramientas", href: "/herramientas", icon: <Wrench className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-burgundy dark:text-burgundy-light font-bold text-xl tracking-tighter">
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
                className="flex items-center text-gray-900 dark:text-gray-200 hover:text-burgundy dark:hover:text-burgundy-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="Main menu"
              className="-mr-2"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-900 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900 dark:text-gray-200" />
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
              className="flex items-center text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-burgundy dark:hover:text-burgundy-light block px-3 py-2 rounded-md text-base font-medium transition-colors"
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
