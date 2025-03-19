import { Book, BookOpen, FileText, LibraryBig, ChevronRight, BookText, BarChart2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function BibliaPage() {
  // Data for Bible statistics chart
  const bookCountData = [
    { name: 'Ant. Test.', value: 39, color: '#7B1D1D' },
    { name: 'Nuevo Test.', value: 27, color: '#BE123C' },
  ];

  const booksByTypeData = [
    { name: 'Pentateuco', count: 5 },
    { name: 'Históricos', count: 12 },
    { name: 'Poéticos', count: 5 },
    { name: 'Profetas mayores', count: 5 },
    { name: 'Profetas menores', count: 12 },
    { name: 'Evangelios', count: 4 },
    { name: 'Historia', count: 1 },
    { name: 'Epístolas paulinas', count: 13 },
    { name: 'Epístolas generales', count: 8 },
    { name: 'Apocalíptico', count: 1 },
  ];

  const COLORS = ['#7B1D1D', '#BE123C', '#E11D48', '#F43F5E', '#FB7185', 
                  '#881337', '#9F1239', '#D70040', '#A3154D', '#C8326B'];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-burgundy mb-2">La Biblia</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explora información sobre la Biblia, sus subdivisiones, capítulos, versículos y más.
        </p>
      </header>

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
        <h2 className="section-heading text-center mb-6">Estadísticas y Visualizaciones Bíblicas</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-burgundy">
                <BarChart2 className="h-5 w-5 mr-2" />
                Distribución de Libros por Tipo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={booksByTypeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      angle={-45} 
                      textAnchor="end" 
                      height={70} 
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#BE123C" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-burgundy">
                <BarChart2 className="h-5 w-5 mr-2" />
                Libros por Testamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={bookCountData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {bookCountData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} libros`, 'Cantidad']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading text-center mb-6">Estadísticas Bíblicas Detalladas</h2>
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
                  <span className="font-medium">31,102</span>
                </li>
                <li className="flex justify-between">
                  <span>Palabras (aproximadamente):</span>
                  <span className="font-medium">783,137</span>
                </li>
                <li className="flex justify-between">
                  <span>Letras (aproximadamente):</span>
                  <span className="font-medium">3,566,480</span>
                </li>
                <li className="flex justify-between">
                  <span>Idiomas originales:</span>
                  <span className="font-medium">3 (Hebreo, Arameo, Griego)</span>
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
                  <span className="font-medium">Juan 11:35 ("Jesús lloró")</span>
                </li>
                <li className="flex justify-between">
                  <span>Versículo del medio:</span>
                  <span className="font-medium">Salmo 118:8</span>
                </li>
                <li className="flex justify-between">
                  <span>Período de escritura:</span>
                  <span className="font-medium">~1,500 años</span>
                </li>
                <li className="flex justify-between">
                  <span>Autores humanos:</span>
                  <span className="font-medium">~40</span>
                </li>
                <li className="flex justify-between">
                  <span>Palabra más repetida:</span>
                  <span className="font-medium">"Señor" (~7,000 veces)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-heading text-center mb-6">Traducciones y Versiones en Español</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="py-3 px-4 font-semibold text-burgundy">Versión</th>
                <th className="py-3 px-4 font-semibold text-burgundy">Año</th>
                <th className="py-3 px-4 font-semibold text-burgundy">Características</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-medium">Reina Valera 1960 (RV60)</td>
                <td className="py-3 px-4">1960</td>
                <td className="py-3 px-4">Revisión muy usada en iglesias evangélicas hispanohablantes, fiel a los textos originales</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Nueva Versión Internacional (NVI)</td>
                <td className="py-3 px-4">1999</td>
                <td className="py-3 px-4">Equilibrio entre fidelidad y claridad, lenguaje contemporáneo, muy usada para estudio</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Reina Valera Contemporánea (RVC)</td>
                <td className="py-3 px-4">2011</td>
                <td className="py-3 px-4">Actualización moderna de la Reina Valera con lenguaje contemporáneo</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Nueva Traducción Viviente (NTV)</td>
                <td className="py-3 px-4">2010</td>
                <td className="py-3 px-4">Traducción dinámica con lenguaje claro y accesible para nuevos lectores</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">La Biblia de las Américas (LBLA)</td>
                <td className="py-3 px-4">1986</td>
                <td className="py-3 px-4">Traducción literal, muy apreciada para estudio bíblico profundo</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Dios Habla Hoy (DHH)</td>
                <td className="py-3 px-4">1979</td>
                <td className="py-3 px-4">Enfoque en equivalencia dinámica para transmitir sentido en lenguaje cotidiano</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Palabra de Dios para Todos (PDT)</td>
                <td className="py-3 px-4">2005</td>
                <td className="py-3 px-4">Diseñada para ser fácil de entender, usa vocabulario básico de 1000-2000 palabras</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Reina Valera Gómez (RVG)</td>
                <td className="py-3 px-4">2010</td>
                <td className="py-3 px-4">Revisión conservadora basada en el Textus Receptus, usada en iglesias tradicionales</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Biblia Textual (BTX)</td>
                <td className="py-3 px-4">1999/2010</td>
                <td className="py-3 px-4">Apego estricto a los textos originales, incluye aparato crítico para estudio</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">La Biblia de Jerusalén</td>
                <td className="py-3 px-4">1998/2009</td>
                <td className="py-3 px-4">Traducción con abundantes notas explicativas, apreciada por su valor académico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
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

