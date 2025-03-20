
import { Link, useLocation } from "react-router-dom";
import { 
  BookOpen, Book, HelpCircle, Wrench, Home, 
  ScrollText, BookText, Library, Compass
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const location = useLocation();
  
  const navItems = [
    { 
      name: "Inicio", 
      href: "/", 
      icon: <Home className="h-4 w-4" />,
      description: "Página principal"
    },
    { 
      name: "Biblia", 
      href: "/biblia", 
      icon: <BookOpen className="h-4 w-4" />,
      description: "Explorando la Palabra"
    },
    { 
      name: "Ayudas", 
      href: "/ayudas", 
      icon: <HelpCircle className="h-4 w-4" />,
      description: "Material de apoyo"
    },
    { 
      name: "Herramientas", 
      href: "/herramientas", 
      icon: <Wrench className="h-4 w-4" />,
      description: "Recursos para estudio"
    },
  ];

  const bibliaSubItems = [
    { 
      name: "Traducciones", 
      href: "/biblia#traducciones", 
      icon: <Book className="h-4 w-4" /> 
    },
    { 
      name: "Recursos", 
      href: "/biblia#recursos", 
      icon: <Library className="h-4 w-4" /> 
    },
    { 
      name: "Apologética", 
      href: "/biblia#apologetica", 
      icon: <ScrollText className="h-4 w-4" /> 
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center px-2 py-3">
          <BookText className="h-6 w-6 text-burgundy mr-2" />
          <h1 className="text-burgundy font-bold text-xl tracking-tighter">
            biblionube
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.href}
                    tooltip={item.description}
                  >
                    <Link to={item.href} className="flex items-center">
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Recursos Bíblicos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {bibliaSubItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link to={item.href} className="flex items-center">
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2">
          <p className="text-xs text-gray-500 text-center">© {new Date().getFullYear()} biblionube</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
