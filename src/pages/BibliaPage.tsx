
import { Book, BookOpen, BookText, Info } from "lucide-react";
import { bibliaHero, antiguoTestamento, nuevoTestamento, bibliaApologetica, scrolls } from "../assets/images";

export default function BibliaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src={bibliaHero} 
            alt="Biblia abierta" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50 dark:from-gray-900/90 dark:to-gray-900/60"></div>
        </div>
        
        <div className="relative z-10 py-16 px-6 text-center">
          <h1 className="text-3xl font-bold text-burgundy mb-4">La Biblia</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            La Biblia es el libro sagrado del cristianismo, una colección de textos religiosos que 
            contiene enseñanzas, historias, profecías y revelaciones divinas. A continuación encontrarás 
            información sobre su estructura y composición.
          </p>
        </div>
      </header>

      <section className="mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading mb-6 text-center">Estructura de la Biblia</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 z-0">
                <img 
                  src={antiguoTestamento} 
                  alt="Antiguo Testamento" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-burgundy mr-2" />
                  <h3 className="text-xl font-semibold">Antiguo Testamento</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Contiene 39 libros que narran la historia del pueblo de Israel, desde la creación 
                  hasta aproximadamente el siglo IV a.C. Incluye la ley, historia, poesía y profecía.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Pentateuco (5 libros):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Génesis, Éxodo, Levítico, Números, Deuteronomio</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Históricos (12 libros):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Josué, Jueces, Rut, 1 y 2 Samuel, 1 y 2 Reyes, etc.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Poéticos (5 libros):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Job, Salmos, Proverbios, Eclesiastés, Cantares</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Profetas mayores (5 libros):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Profetas menores (12 libros):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Oseas, Joel, Amós, etc.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 z-0">
                <img 
                  src={nuevoTestamento} 
                  alt="Nuevo Testamento" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <BookText className="h-6 w-6 text-burgundy mr-2" />
                  <h3 className="text-xl font-semibold">Nuevo Testamento</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Contiene 27 libros que relatan la vida, muerte y resurrección de Jesús, el establecimiento 
                  de la iglesia primitiva y enseñanzas para los creyentes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Evangelios (4 libros):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Mateo, Marcos, Lucas, Juan</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Historia (1 libro):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Hechos de los Apóstoles</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Epístolas paulinas (13 libros):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Romanos, 1 y 2 Corintios, Gálatas, etc.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Epístolas generales (8 libros):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Hebreos, Santiago, 1 y 2 Pedro, etc.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <div>
                      <span className="font-medium">Apocalíptico (1 libro):</span> 
                      <span className="text-gray-600 dark:text-gray-400"> Apocalipsis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Book className="h-6 w-6 text-burgundy mr-2" />
              Composición de la Biblia
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Autoría</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  La Biblia fue escrita por aproximadamente 40 autores diferentes a lo largo de un período 
                  de unos 1,500 años (desde 1400 a.C. hasta 100 d.C.). Entre los autores se encuentran reyes, 
                  profetas, pescadores, médicos, recaudadores de impuestos y eruditos.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={scrolls} 
                  alt="Manuscritos antiguos" 
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                <div className="absolute bottom-3 left-3 text-white text-xs">Manuscritos antiguos</div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Idiomas Originales</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  • <span className="font-medium">Hebreo:</span> La mayor parte del Antiguo Testamento.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  • <span className="font-medium">Arameo:</span> Pequeñas porciones del Antiguo Testamento.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  • <span className="font-medium">Griego:</span> Todo el Nuevo Testamento.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Versiones y Traducciones</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                  Existen numerosas traducciones de la Biblia a diferentes idiomas. En español, algunas de las 
                  más conocidas son:
                </p>
                <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc pl-5">
                  <li>Reina-Valera (1960, 1995)</li>
                  <li>Nueva Versión Internacional (NVI)</li>
                  <li>Biblia de Jerusalén</li>
                  <li>Nueva Traducción Viviente (NTV)</li>
                  <li>La Biblia de las Américas (LBLA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-6 justify-center">
            <Info className="h-6 w-6 text-burgundy mr-2" />
            <h2 className="section-heading">Apologética Bíblica</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/4 h-full opacity-10 z-0">
              <img 
                src={bibliaApologetica} 
                alt="Apologética Bíblica" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4">Evidencias de la Autoridad Bíblica</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-2 text-burgundy">Evidencias Internas</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span><strong>Unidad temática:</strong> A pesar de ser escrita por diferentes autores durante más de 1.500 años, la Biblia mantiene una coherencia interna sorprendente.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span><strong>Profecías cumplidas:</strong> Numerosas profecías del Antiguo Testamento se cumplieron de manera precisa, incluyendo detalles específicos sobre la vida de Jesús.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span><strong>Afirmaciones de autoridad:</strong> La Biblia se refiere a sí misma como la Palabra de Dios (2 Timoteo 3:16, 2 Pedro 1:20-21).</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-burgundy">Evidencias Externas</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span><strong>Evidencia arqueológica:</strong> Descubrimientos arqueológicos han confirmado repetidamente la precisión histórica de la Biblia.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span><strong>Manuscritos antiguos:</strong> Existen miles de manuscritos antiguos que confirman la integridad textual de la Biblia.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span><strong>Fuentes históricas no bíblicas:</strong> Historiadores como Josefo, Tácito y Plinio el Joven corroboran eventos y personajes bíblicos.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-burgundy">Inerrancia Bíblica</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    La doctrina de la inerrancia sostiene que la Biblia, en sus manuscritos originales, está libre de error en todo lo que afirma. Esto incluye:
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span>Hechos históricos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span>Enseñanzas doctrinales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span>Asuntos éticos y morales</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-burgundy">Inspiración Divina</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    La Biblia enseña que Dios inspiró a los autores humanos para que escribieran su Palabra:
                  </p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span>2 Timoteo 3:16-17 - "Toda Escritura es inspirada por Dios..."</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-burgundy mr-2">•</span>
                      <span>2 Pedro 1:20-21 - "Ninguna profecía de la Escritura es de interpretación privada, porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo."</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
