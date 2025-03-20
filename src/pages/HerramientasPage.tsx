
import { ExternalLink, BookOpen, BookText, Globe, Computer, Search, Crown, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { digitalTools, studyTools } from '../assets/images';

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
    description: 'Sitio web dedicado al estudio inductivo de la palabra y mucho más.',
    url: 'https://www.indubiblia.org/',
    icon: <BookOpen className="h-8 w-8" />,
    category: 'estudio'
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
    name: 'Google Workspace',
    description: 'Suite de aplicaciones de Google para organizar documentos, predicaciones, estudios, presentaciones y calendarios.',
    url: 'https://workspace.google.com',
    icon: <Computer className="h-8 w-8" />,
    category: 'software'
  },
  {
    name: 'ChatGPT',
    description: 'Herramienta de IA para ayudar en la investigación bíblica y la preparación de estudios o predicaciones.',
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
    name: 'BibleGateway',
    description: 'Acceso a múltiples traducciones de la Biblia.',
    url: 'https://www.biblegateway.com/versions/Reina-Valera-1960-RVR1960-Biblia/',
    icon: <Globe className="h-8 w-8" />,
    category: 'estudio'
  },
  {
    name: 'Canva',
    description: 'Plataforma de diseño para crear presentaciones y gráficos para predicaciones.',
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
  }
];

export default function HerramientasPage() {
  // Filtrar herramientas por categoría
  const estudioTools = tools.filter(tool => tool.category === 'estudio');
  const predicacionTools = tools.filter(tool => tool.category === 'predicacion');
  const softwareTools = tools.filter(tool => tool.category === 'software');

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src={digitalTools} 
            alt="Herramientas digitales" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50 dark:from-gray-900/90 dark:to-gray-900/60"></div>
        </div>
        
        <div className="relative z-10 py-16 px-6 text-center">
          <h1 className="text-3xl font-bold text-burgundy mb-2">Herramientas para Predicadores</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Descubre recursos digitales, software y herramientas que te ayudarán en tu ministerio 
            de predicación y estudio bíblico.
          </p>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="section-heading mb-6 flex items-center justify-center">
          <BookOpen className="h-6 w-6 mr-2" />
          Recursos para Estudio Bíblico
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {estudioTools.map((tool) => (
            <Card key={tool.name} className="animate-fade-in relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 z-0">
                <img 
                  src={studyTools} 
                  alt="Herramientas de estudio" 
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="text-burgundy bg-gray-50 dark:bg-gray-700 p-3 rounded-full">
                    {tool.icon}
                  </div>
                </div>
                <CardTitle className="mt-4">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter className="relative z-10">
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
            <Card key={tool.name} className="animate-fade-in relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 z-0">
                <img 
                  src={digitalTools} 
                  alt="Software" 
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="text-burgundy bg-gray-50 dark:bg-gray-700 p-3 rounded-full">
                    {tool.icon}
                  </div>
                </div>
                <CardTitle className="mt-4">{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter className="relative z-10">
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

      <section className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-burgundy mb-4">Recomendaciones para Predicadores</h2>
        <ul className="space-y-3">
          <li className="flex">
            <div className="mr-3 text-burgundy">
              <BookOpen className="h-5 w-5" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Estudio constante:</strong> Dedica tiempo regularmente al estudio de la Palabra, 
              utilizando las herramientas mencionadas para profundizar.
            </p>
          </li>
          <li className="flex">
            <div className="mr-3 text-burgundy">
              <Search className="h-5 w-5" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Investigación diligente:</strong> Utiliza múltiples fuentes y recursos para 
              obtener una comprensión más completa de los textos bíblicos.
            </p>
          </li>
          <li className="flex">
            <div className="mr-3 text-burgundy">
              <Computer className="h-5 w-5" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Organización digital:</strong> Mantén tus notas, sermones y recursos organizados 
              utilizando herramientas digitales para acceder a ellos fácilmente.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
