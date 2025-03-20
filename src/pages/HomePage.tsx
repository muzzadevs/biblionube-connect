
import { Book, HelpCircle, Wrench, BookOpen } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-burgundy mb-4 tracking-tighter">
            Bienvenido a <span className="text-black tracking-tighter">biblionube</span>
          </h1>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <FeatureCard
            title="Biblia"
            description="Explora recursos para entender la Biblia, sus subdivisiones, capítulos, versículos y más."
            icon={<Book className="h-8 w-8" />}
            to="/biblia"
          />
          
          <FeatureCard
            title="Ayudas Bíblicas"
            description="Accede a información detallada de cada libro bíblico, con resúmenes, contexto histórico y más."
            icon={<HelpCircle className="h-8 w-8" />}
            to="/ayudas"
          />
          
          <FeatureCard
            title="Herramientas"
            description="Descubre enlaces a herramientas y software útil para predicadores y estudiantes de la Biblia."
            icon={<Wrench className="h-8 w-8" />}
            to="/herramientas"
          />
        </div>
      </section>
      
      <section className="mb-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="section-heading mb-4">¿Por qué biblionube?</h2>
          <p className="text-gray-700">
            Nuestro objetivo es proporcionar recursos accesibles y de calidad para el estudio bíblico, 
            ayudando a los predicadores a profundizar en su conocimiento de las Escrituras.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <BookOpen className="h-8 w-8 text-burgundy mb-3" />
            <h3 className="text-lg font-medium mb-2">Estudio Bíblico Organizado</h3>
            <p className="text-gray-600 text-sm">Recursos estructurados para facilitar el estudio sistemático de la Biblia.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <Book className="h-8 w-8 text-burgundy mb-3" />
            <h3 className="text-lg font-medium mb-2">Contenido de Calidad</h3>
            <p className="text-gray-600 text-sm">Información verificada y de calidad para un estudio bíblico serio y confiable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <Wrench className="h-8 w-8 text-burgundy mb-3" />
            <h3 className="text-lg font-medium mb-2">Herramientas Prácticas</h3>
            <p className="text-gray-600 text-sm">Acceso a recursos digitales modernos para complementar tu estudio.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
