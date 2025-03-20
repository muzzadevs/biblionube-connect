
import { Book, HelpCircle, Wrench, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
                Explora la <span className="text-burgundy dark:text-burgundy-light">Biblia</span> en la nube
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Recursos de alta calidad para el estudio bíblico, accesibles para todos los predicadores y estudiantes de las Escrituras.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="bg-burgundy hover:bg-burgundy-light dark:bg-burgundy-light dark:hover:bg-burgundy text-white">
                  <Link to="/biblia">Comenzar ahora</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ayudas">Explorar ayudas</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-full bg-burgundy/10 dark:bg-burgundy-dark/20 blur-3xl"></div>
                <div className="relative glass-card rounded-2xl overflow-hidden p-6 flex items-center justify-center">
                  <BookOpen className="h-32 w-32 text-burgundy dark:text-burgundy-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Recursos a tu alcance</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Descubre todas las herramientas y recursos que ofrecemos para profundizar en tu conocimiento bíblico.
            </p>
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
        </div>
      </section>
      
      {/* Why Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-heading mb-4">¿Por qué biblionube?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nuestro objetivo es proporcionar recursos accesibles y de calidad para el estudio bíblico, 
              ayudando a los predicadores a profundizar en su conocimiento de las Escrituras.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="glass-card p-8 flex flex-col">
              <BookOpen className="h-10 w-10 text-burgundy dark:text-burgundy-light mb-5" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Estudio Bíblico Organizado</h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">Recursos estructurados para facilitar el estudio sistemático de la Biblia.</p>
              <Link to="/biblia" className="mt-4 inline-flex items-center text-burgundy dark:text-burgundy-light hover:underline">
                Explorar más <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="glass-card p-8 flex flex-col">
              <Book className="h-10 w-10 text-burgundy dark:text-burgundy-light mb-5" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Contenido de Calidad</h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">Información verificada y de calidad para un estudio bíblico serio y confiable.</p>
              <Link to="/ayudas" className="mt-4 inline-flex items-center text-burgundy dark:text-burgundy-light hover:underline">
                Descubrir más <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="glass-card p-8 flex flex-col">
              <Wrench className="h-10 w-10 text-burgundy dark:text-burgundy-light mb-5" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Herramientas Prácticas</h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">Acceso a recursos digitales modernos para complementar tu estudio.</p>
              <Link to="/herramientas" className="mt-4 inline-flex items-center text-burgundy dark:text-burgundy-light hover:underline">
                Ver herramientas <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Comienza tu viaje bíblico hoy</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Accede a todos nuestros recursos gratuitos y mejora tu comprensión de las Escrituras.
            </p>
            <Button asChild size="lg" className="bg-burgundy hover:bg-burgundy-light dark:bg-burgundy-light dark:hover:bg-burgundy text-white">
              <Link to="/biblia">Explorar la Biblia</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
