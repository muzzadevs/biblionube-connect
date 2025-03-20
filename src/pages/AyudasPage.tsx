
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Book, BookText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getBooksByTestament } from '../data/bibleBooks';

export default function AyudasPage() {
  const [activeTab, setActiveTab] = useState<'antiguo' | 'nuevo'>('antiguo');
  
  const antiguoTestamento = getBooksByTestament('antiguo');
  const nuevoTestamento = getBooksByTestament('nuevo');

  const categorias = (testamento: 'antiguo' | 'nuevo') => {
    if (testamento === 'antiguo') {
      return ['Pentateuco', 'Históricos', 'Poéticos', 'Profetas mayores', 'Profetas menores'];
    } else {
      return ['Evangelios', 'Historia', 'Epístolas paulinas', 'Epístolas generales', 'Apocalíptico'];
    }
  };

  // Función para obtener los libros de una categoría específica
  const getBooksByCategory = (categoria: string) => {
    if (activeTab === 'antiguo') {
      return antiguoTestamento.filter(book => book.categoria === categoria);
    } else {
      return nuevoTestamento.filter(book => book.categoria === categoria);
    }
  };

  // Color de borde para cada categoría
  const getCategoryColor = (categoria: string) => {
    const colorMap: Record<string, string> = {
      'Pentateuco': 'border-blue-500',
      'Históricos': 'border-green-500',
      'Poéticos': 'border-purple-500',
      'Profetas mayores': 'border-red-500',
      'Profetas menores': 'border-orange-500',
      'Evangelios': 'border-teal-500',
      'Historia': 'border-indigo-500',
      'Epístolas paulinas': 'border-pink-500',
      'Epístolas generales': 'border-yellow-500',
      'Apocalíptico': 'border-red-600'
    };
    
    return colorMap[categoria] || 'border-gray-300';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-burgundy mb-2">Ayudas Bíblicas</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explora información detallada sobre cada libro de la Biblia, incluyendo resúmenes, bosquejos, 
          contexto histórico, teología y más.
        </p>
      </header>

      <Tabs defaultValue="antiguo" className="max-w-5xl mx-auto" onValueChange={(value) => setActiveTab(value as 'antiguo' | 'nuevo')}>
        <div className="flex justify-center mb-6">
          <TabsList className="grid grid-cols-2 w-full max-w-md">
            <TabsTrigger value="antiguo" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Antiguo Testamento</span>
            </TabsTrigger>
            <TabsTrigger value="nuevo" className="flex items-center gap-2">
              <BookText className="h-4 w-4" />
              <span>Nuevo Testamento</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="antiguo" className="animate-fade-in">
          <div className="space-y-8">
            {categorias('antiguo').map((categoria) => (
              <div key={categoria} className="space-y-4">
                <h2 className="text-xl font-semibold text-burgundy">{categoria}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {getBooksByCategory(categoria).map((book) => (
                    <Link
                      key={book.id}
                      to={`/ayudas/antiguo/${book.id}`}
                      className={`bible-card ${getCategoryColor(categoria)}`}
                    >
                      <div className="flex flex-col items-center">
                        <Book className="h-6 w-6 text-burgundy mb-2" />
                        <h3 className="font-medium text-center">{book.nombre}</h3>
                        <p className="text-xs text-gray-500 mt-1">{book.capitulos} capítulos</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="nuevo" className="animate-fade-in">
          <div className="space-y-8">
            {categorias('nuevo').map((categoria) => (
              <div key={categoria} className="space-y-4">
                <h2 className="text-xl font-semibold text-burgundy">{categoria}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {getBooksByCategory(categoria).map((book) => (
                    <Link
                      key={book.id}
                      to={`/ayudas/nuevo/${book.id}`}
                      className={`bible-card ${getCategoryColor(categoria)}`}
                    >
                      <div className="flex flex-col items-center">
                        <Book className="h-6 w-6 text-burgundy mb-2" />
                        <h3 className="font-medium text-center">{book.nombre}</h3>
                        <p className="text-xs text-gray-500 mt-1">{book.capitulos} capítulos</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
