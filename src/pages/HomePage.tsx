
import { Book, HelpCircle, Wrench, BookOpen } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import { homeHero, openBible, studyTools } from "../assets/images";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-12 relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 z-0">
          <img 
            src={homeHero} 
            alt="Biblia abierta" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 dark:from-gray-900/90 dark:to-gray-900/50"></div>
        </div>
        
        <div className="relative z-10 py-16 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-burgundy mb-6 tracking-tighter">
              Bienvenido a <span className="text-black dark:text-white tracking-tighter">biblionube</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Recursos accesibles para predicadores y estudiantes de la Biblia, 
              diseñados para profundizar en el conocimiento de las Escrituras.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <FeatureCard
            title="Biblia"
            description="Explora recursos para entender la Biblia, sus subdivisiones, capítulos, versículos y más."
            icon={<Book className="h-8 w-8" />}
            to="/biblia"
            image={openBible}
          />
          
          <FeatureCard
            title="Ayudas Bíblicas"
            description="Accede a información detallada de cada libro bíblico, con resúmenes, contexto histórico y más."
            icon={<HelpCircle className="h-8 w-8" />}
            to="/ayudas"
            image={studyTools}
          />
          
          <FeatureCard
            title="Herramientas"
            description="Descubre enlaces a herramientas y software útil para predicadores y estudiantes de la Biblia."
            icon={<Wrench className="h-8 w-8" />}
            to="/herramientas"
            image={digitalTools}
          />
        </div>
      </section>
      
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="section-heading mb-4">¿Por qué biblionube?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Nuestro objetivo es proporcionar recursos accesibles y de calidad para el estudio bíblico, 
            ayudando a los predicadores a profundizar en su conocimiento de las Escrituras.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <BookOpen className="h-8 w-8 text-burgundy mb-3" />
            <h3 className="text-lg font-medium mb-2">Estudio Bíblico Organizado</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Recursos estructurados para facilitar el estudio sistemático de la Biblia.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <Book className="h-8 w-8 text-burgundy mb-3" />
            <h3 className="text-lg font-medium mb-2">Contenido de Calidad</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Información verificada y de calidad para un estudio bíblico serio y confiable.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <Wrench className="h-8 w-8 text-burgundy mb-3" />
            <h3 className="text-lg font-medium mb-2">Herramientas Prácticas</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Acceso a recursos digitales modernos para complementar tu estudio.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
