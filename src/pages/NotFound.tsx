
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center p-6 max-w-md">
        <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-100 text-burgundy mb-6">
          <AlertTriangle className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold text-burgundy mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
        </p>
        <Link to="/">
          <Button className="flex items-center justify-center">
            <Home className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
