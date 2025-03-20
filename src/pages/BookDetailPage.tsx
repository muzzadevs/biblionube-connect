
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, User, CalendarDays, LayoutList, History, BookText, Cross } from 'lucide-react';
import { getBookById } from '../data/bibleBooks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { antiguoTestamento, nuevoTestamento, scrolls, jerusalemTemple } from '../assets/images';

export default function BookDetailPage() {
  const { testamento, libro } = useParams<{ testamento: string; libro: string }>();
  const book = libro ? getBookById(libro) : undefined;

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-burgundy mb-4">Libro no encontrado</h1>
        <p className="mb-6">Lo sentimos, no pudimos encontrar información sobre este libro.</p>
        <Link to="/ayudas">
          <Button variant="default">Volver a Ayudas Bíblicas</Button>
        </Link>
      </div>
    );
  }

  // Elegir imagen de fondo basada en el testamento
  const backgroundImage = testamento === 'antiguo' ? antiguoTestamento : nuevoTestamento;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/ayudas" 
          className="inline-flex items-center text-burgundy hover:text-burgundy-dark transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Ayudas Bíblicas
        </Link>

        <header className="mb-8 relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 z-0">
            <img 
              src={backgroundImage} 
              alt={book.nombre} 
              className="w-full h-full object-cover opacity-20 dark:opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 dark:from-gray-900/90 dark:to-gray-900/60"></div>
          </div>
          
          <div className="relative z-10 p-6">
            <h1 className="text-3xl font-bold text-burgundy mb-2 flex items-center">
              {book.nombre}
              <span className="ml-2 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-400">
                {book.abreviatura}
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <span className="inline-flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {book.capitulos} capítulos
              </span>
              <span>•</span>
              <span className="inline-flex items-center">
                <BookText className="h-4 w-4 mr-1" />
                {book.categoria}
              </span>
              <span>•</span>
              <span className="inline-flex items-center">
                <User className="h-4 w-4 mr-1" />
                {book.autor}
              </span>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 z-0">
              <img 
                src={scrolls} 
                alt="Manuscritos" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="text-lg flex items-center text-burgundy">
                <BookOpen className="h-5 w-5 mr-2" />
                Resumen
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300">{book.resumen}</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 z-0">
              <img 
                src={jerusalemTemple} 
                alt="Jerusalén" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="text-lg flex items-center text-burgundy">
                <History className="h-5 w-5 mr-2" />
                Contexto Histórico
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300">{book.contexto}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center text-burgundy">
                <User className="h-5 w-5 mr-2" />
                Autor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{book.autor}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center text-burgundy">
                <CalendarDays className="h-5 w-5 mr-2" />
                Fecha Aproximada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{book.fecha}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center text-burgundy">
                <BookText className="h-5 w-5 mr-2" />
                Categoría
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{book.categoria}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {book.testamento === 'antiguo' ? 'Antiguo Testamento' : 'Nuevo Testamento'}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center text-burgundy">
              <LayoutList className="h-5 w-5 mr-2" />
              Bosquejo del Libro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {book.bosquejo.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-burgundy font-medium mr-2">{index + 1}.</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center text-burgundy">
                <BookText className="h-5 w-5 mr-2" />
                Teología del Libro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{book.teologia}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center text-burgundy">
                <Cross className="h-5 w-5 mr-2" />
                Jesús en {book.nombre}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{book.jesus}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
