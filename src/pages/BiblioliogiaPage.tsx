
import { Book, BookOpen, FileText, LibraryBig, ChevronRight, BookText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function BiblioliogiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-burgundy mb-2">Bibliología</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explora recursos para entender la Bibliología, datos sobre la Biblia, sus subdivisiones, capítulos, versículos y más.
        </p>
      </header>

      <section className="mb-12 max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <Book className="h-6 w-6 text-burgundy mr-2" />
          <h2 className="text-xl font-semibold">¿Qué es la Bibliología?</h2>
        </div>
        <p className="text-gray-700 mb-4">
          La Bibliología es el estudio de la Biblia como libro, incluyendo su origen, estructura, idiomas originales, inspiración, 
          canonicidad, transmisión, preservación y autoridad. Es una disciplina que nos ayuda a entender cómo llegó la Biblia a nosotros 
          y por qué podemos confiar en ella.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h3 className="font-medium mb-2 text-burgundy">Aspectos principales de la Bibliología:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Revelación: Cómo Dios se ha dado a conocer a la humanidad</li>
            <li>Inspiración: Cómo Dios guió a los autores humanos</li>
            <li>Canonicidad: Cómo se determinaron los libros que componen la Biblia</li>
            <li>Transmisión textual: Cómo se ha preservado el texto a lo largo de los siglos</li>
            <li>Traducción: Principios para trasladar el texto a otros idiomas</li>
            <li>Interpretación: Métodos para entender correctamente el texto bíblico</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading text-center mb-6">Estructura de la Biblia</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-burgundy mr-2" />
              <h3 className="font-semibold">Antiguo Testamento</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Comprende 39 libros escritos principalmente en hebreo (con algunas secciones en arameo) 
              que narran la creación, el pacto de Dios con Israel y la historia del pueblo judío.
            </p>
            <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
              <h4 className="font-medium text-sm text-burgundy mb-2">Divisiones principales:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Pentateuco (5 libros):</span> Génesis a Deuteronomio
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Libros históricos (12 libros):</span> Josué a Ester
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Libros poéticos (5 libros):</span> Job a Cantar de los Cantares
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Profetas mayores (5 libros):</span> Isaías a Daniel
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Profetas menores (12 libros):</span> Oseas a Malaquías
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <BookText className="h-6 w-6 text-burgundy mr-2" />
              <h3 className="font-semibold">Nuevo Testamento</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Comprende 27 libros escritos en griego koiné que narran la vida, muerte y resurrección 
              de Jesús, así como la fundación y enseñanzas de la iglesia primitiva.
            </p>
            <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
              <h4 className="font-medium text-sm text-burgundy mb-2">Divisiones principales:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Evangelios (4 libros):</span> Mateo a Juan
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Historia (1 libro):</span> Hechos de los Apóstoles
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Epístolas paulinas (13 libros):</span> Romanos a Filemón
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Epístolas generales (8 libros):</span> Hebreos a Judas
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="h-5 w-5 text-burgundy flex-shrink-0" />
                  <div>
                    <span className="font-medium">Apocalíptico (1 libro):</span> Apocalipsis
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading text-center mb-6">Estadísticas Bíblicas</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <FileText className="h-5 w-5 text-burgundy mr-2" />
                Estadísticas Generales
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Total de libros:</span>
                  <span className="font-medium">66</span>
                </li>
                <li className="flex justify-between">
                  <span>Antiguo Testamento:</span>
                  <span className="font-medium">39 libros</span>
                </li>
                <li className="flex justify-between">
                  <span>Nuevo Testamento:</span>
                  <span className="font-medium">27 libros</span>
                </li>
                <li className="flex justify-between">
                  <span>Capítulos:</span>
                  <span className="font-medium">1,189</span>
                </li>
                <li className="flex justify-between">
                  <span>Versículos:</span>
                  <span className="font-medium">~31,102</span>
                </li>
                <li className="flex justify-between">
                  <span>Palabras (aproximadamente):</span>
                  <span className="font-medium">~783,137</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 flex items-center">
                <LibraryBig className="h-5 w-5 text-burgundy mr-2" />
                Datos Interesantes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Libro más largo:</span>
                  <span className="font-medium">Salmos (150 capítulos)</span>
                </li>
                <li className="flex justify-between">
                  <span>Libros más cortos:</span>
                  <span className="font-medium">2 Juan, 3 Juan, Judas (1 capítulo)</span>
                </li>
                <li className="flex justify-between">
                  <span>Capítulo más largo:</span>
                  <span className="font-medium">Salmo 119 (176 versículos)</span>
                </li>
                <li className="flex justify-between">
                  <span>Versículo más corto:</span>
                  <span className="font-medium">Juan 11:35</span>
                </li>
                <li className="flex justify-between">
                  <span>Período de escritura:</span>
                  <span className="font-medium">~1500 años</span>
                </li>
                <li className="flex justify-between">
                  <span>Autores humanos:</span>
                  <span className="font-medium">~40</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading text-center mb-6">Cronología Bíblica Simplificada</h2>
        <div className="overflow-x-auto max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="py-3 px-4 font-semibold text-burgundy">Periodo</th>
                <th className="py-3 px-4 font-semibold text-burgundy">Fecha Aproximada</th>
                <th className="py-3 px-4 font-semibold text-burgundy">Eventos Clave</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-medium">Creación y Patriarcas</td>
                <td className="py-3 px-4">No fechado con precisión - 1800 a.C.</td>
                <td className="py-3 px-4">Creación, Diluvio, Abraham, Isaac, Jacob, José</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Éxodo y Conquista</td>
                <td className="py-3 px-4">1446 - 1400 a.C.</td>
                <td className="py-3 px-4">Salida de Egipto, Ley de Moisés, Conquista de Canaán</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Jueces</td>
                <td className="py-3 px-4">1380 - 1050 a.C.</td>
                <td className="py-3 px-4">Ciclos de apostasía, opresión, arrepentimiento y liberación</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Reino Unido</td>
                <td className="py-3 px-4">1050 - 930 a.C.</td>
                <td className="py-3 px-4">Saúl, David y Salomón</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Reino Dividido</td>
                <td className="py-3 px-4">930 - 722 a.C.</td>
                <td className="py-3 px-4">Israel (Norte) y Judá (Sur), Profetas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Exilio y Regreso</td>
                <td className="py-3 px-4">722 - 400 a.C.</td>
                <td className="py-3 px-4">Caída de Israel, Exilio de Judá, Regreso del remanente</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Periodo Intertestamentario</td>
                <td className="py-3 px-4">400 - 4 a.C.</td>
                <td className="py-3 px-4">Dominio persa, griego y romano</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Vida de Jesús</td>
                <td className="py-3 px-4">4 a.C. - 30 d.C.</td>
                <td className="py-3 px-4">Nacimiento, ministerio, muerte y resurrección de Jesús</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Iglesia Primitiva</td>
                <td className="py-3 px-4">30 - 100 d.C.</td>
                <td className="py-3 px-4">Pentecostés, expansión, viajes de Pablo, escritura del NT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
