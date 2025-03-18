
import { ExternalLink, BookOpen, BookText, Globe, Computer, Briefcase, Search, Crown, Youtube, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface Tool {
  name: string;
  description: string;
  url: string;
  icon: JSX.Element;
  category: 'estudio' | 'software' | 'predicacion';
}

const tools: Tool[] = [
  {
    name: 'Indubiblia',
    description: 'Índice bíblico para predicadores con más de 2.000 temas y esquemas de predicación.',
    url: 'https://indubiblia.org',
    icon: <BookOpen className="h-8 w-8" />,
    category: 'predicacion'
  },
  {
    name: 'LogosK',
    description: 'Software gratuito para el estudio bíblico con múltiples traducciones, comentarios y herramientas.',
    url: 'https://logosk.com',
    icon: <BookText className="h-8 w-8" />,
    category: 'estudio'
  },
  {
    name: 'Enduring Word',
    description: 'Comentario bíblico versículo por versículo por David Guzik.',
    url: 'https://enduringword.com',
    icon: <BookOpen className="h-8 w-8" />,
    category: 'estudio'
  },
  {
    name: 'Proyecto Biblia',
    description: 'Recurso en español con comentarios, guías de estudio y herramientas para el estudio bíblico.',
    url: 'https://www.proyectobiblia.org',
    icon: <Globe className="h-8 w-8" />,
    category: 'estudio'
  },
  {
    name: 'Google Workspace',
    description: 'Suite de aplicaciones de Google para organizar documentos, presentaciones y calendarios.',
    url: 'https://workspace.google.com',
    icon: <Computer className="h-8 w-8" />,
    category: 'software'
  },
  {
    name: 'ChatGPT',
    description: 'Herramienta de IA para ayudar en la investigación bíblica y la preparación de estudios.',
    url: 'https://chat.openai.com',
    icon: <Search className="h-8 w-8" />,
    category: 'software'
  },
  {
    name: 'Bible Project',
    description: 'Videos ilustrativos sobre libros y temas bíblicos.',
    url: 'https://bibleproject.com/spanish',
    icon: <Video className="h-8 w-8" />,
    category: 'estudio'
  },
  {
    name: 'Blue Letter Bible',
    description: 'Herramienta de estudio bíblico con textos originales y recursos de referencia.',
    url: 'https://www.blueletterbible.org',
    icon: <BookText className="h-8 w-8" />,
    category: 'estudio'
  },
  {
    name: 'BibleGateway',
    description: 'Acceso a múltiples traducciones de la Biblia y herramientas de búsqueda.',
    url: 'https://www.biblegateway.com/versions/Reina-Valera-1960-RVR1960-Biblia/',
    icon: <Globe className="h-8 w-8" />,
    category: 'estudio'
  },
  {
    name: 'Canva',
    description: 'Plataforma de diseño para crear presentaciones y gráficos para sermones.',
    url: 'https://www.canva.com',
    icon: <Computer className="h-8 w-8" />,
    category: 'software'
  },
  {
    name: 'Logos Bible Software',
    description: 'Software profesional para el estudio bíblico con una extensa biblioteca digital.',
    url: 'https://www.logos.com',
    icon: <Crown className="h-8 w-8" />,
    category: 'software'
  },
  {
    name: 'Bible.is',
    description: 'Audio Biblias en múltiples idiomas y traducciones.',
    url: 'https://www.bible.is/es',
    icon: <Youtube className="h-8 w-8" />,
    category: 'predicacion'
  }
];

export default function HerramientasPage() {
  // Filtrar herramientas por categoría
  const estudioTools = tools.filter(tool => tool.category === 'estudio');
  const predicacionTools = tools.filter(tool => tool.category === 'predicacion');
  const softwareTools = tools.filter(tool => tool.category === 'software');

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-burgundy mb-2">Herramientas para Predicadores</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre recursos digitales, software y herramientas que te ayudarán en tu ministerio 
          de predicación y estudio bíblico.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="section-heading mb-6 flex items-center justify-center">
          <BookOpen className="h-6 w-6 mr-2" />
          Recursos para Estudio Bíblico
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {estudioTools.map((tool) => (
            <Card key={tool.name} className="animate-fade-in">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="text-burgundy bg-gray-50 p-3 rounded-full">
                    {tool.icon}
                  </div>
                </div>
                <CardTitle className="mt-4">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    Visitar Sitio
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading mb-6 flex items-center justify-center">
          <Briefcase className="h-6 w-6 mr-2" />
          Herramientas para Predicación
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {predicacionTools.map((tool) => (
            <Card key={tool.name} className="animate-fade-in">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="text-burgundy bg-gray-50 p-3 rounded-full">
                    {tool.icon}
                  </div>
                </div>
                <CardTitle className="mt-4">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    Visitar Sitio
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading mb-6 flex items-center justify-center">
          <Computer className="h-6 w-6 mr-2" />
          Software para Predicadores
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareTools.map((tool) => (
            <Card key={tool.name} className="animate-fade-in">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="text-burgundy bg-gray-50 p-3 rounded-full">
                    {tool.icon}
                  </div>
                </div>
                <CardTitle className="mt-4">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    Visitar Sitio
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-burgundy mb-4">Recomendaciones para Predicadores</h2>
        <ul className="space-y-3">
          <li className="flex">
            <div className="mr-3 text-burgundy">
              <BookOpen className="h-5 w-5" />
            </div>
            <p className="text-gray-700">
              <strong>Estudio constante:</strong> Dedica tiempo regularmente al estudio de la Palabra, 
              utilizando las herramientas mencionadas para profundizar.
            </p>
          </li>
          <li className="flex">
            <div className="mr-3 text-burgundy">
              <Search className="h-5 w-5" />
            </div>
            <p className="text-gray-700">
              <strong>Investigación diligente:</strong> Utiliza múltiples fuentes y recursos para 
              obtener una comprensión más completa de los textos bíblicos.
            </p>
          </li>
          <li className="flex">
            <div className="mr-3 text-burgundy">
              <Computer className="h-5 w-5" />
            </div>
            <p className="text-gray-700">
              <strong>Organización digital:</strong> Mantén tus notas, sermones y recursos organizados 
              utilizando herramientas digitales para acceder a ellos fácilmente.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
