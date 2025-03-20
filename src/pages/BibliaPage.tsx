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
    { name: 'Históricos', count: 13 },
    { name: 'Poéticos', count: 5 },
    { name: 'Profetas mayores', count: 5 },
    { name: 'Profetas menores', count: 12 },
    { name: 'Evangelios', count: 4 },
    { name: 'Epístolas paulinas', count: 13 },
    { name: 'Epístolas generales', count: 8 },
    { name: 'Apocalíptico', count: 1 },
  ];

  const COLORS = ['#7B1D1D', '#BE123C', '#E11D48', '#F43F5E', '#FB7185', 
                  '#881337', '#9F1239', '#D70040', '#A3154D', '#C8326B'];

  return (
    <div className="container mx-auto px-4 py-8">

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
                  <span>Palabras:</span>
                  <span className="font-medium">~783,137</span>
                </li>
                <li className="flex justify-between">
                  <span>Letras:</span>
                  <span className="font-medium">~3,566,480</span>
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
                  <span className="font-medium">Éxodo 20:13 ("No matarás")</span>
                </li>
                <li className="flex justify-between">
                  <span>Ecuador de la Biblia:</span>
                  <span className="font-medium">Salmo 118</span>
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
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="text-lg flex items-center text-burgundy">
                  <Book className="h-5 w-5 mr-2" />
                  Reina Valera 1960 (RV60)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <p><span className="font-semibold">Año:</span> 1960</p>
                  <p><span className="font-semibold">Historia:</span> Revisión de la traducción clásica de Casiodoro de Reina (1569) y Cipriano de Valera (1602). Realizada por un comité de eruditos bíblicos bajo los auspicios de las Sociedades Bíblicas Unidas.</p>
                  <p><span className="font-semibold">Enfoque de traducción:</span> Equivalencia formal (más literal) que busca preservar la estructura gramatical y sintáctica del texto original.</p>
                  <p><span className="font-semibold">Características:</span> Lenguaje clásico y formal con uso del "tú", vocabulario tradicional, conserva términos teológicos históricos.</p>
                  <p><span className="font-semibold">Uso principal:</span> Es la versión más utilizada en iglesias evangélicas hispanohablantes por su precisión y fidelidad a los textos originales.</p>
                  <div className="mt-2 bg-gray-50 p-3 rounded text-sm italic">
                    "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." <span className="font-medium">— Juan 3:16 (RV60)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="text-lg flex items-center text-burgundy">
                  <Book className="h-5 w-5 mr-2" />
                  Nueva Versión Internacional (NVI)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <p><span className="font-semibold">Año:</span> 1999 (edición en español)</p>
                  <p><span className="font-semibold">Historia:</span> Proyecto de la Sociedad Bíblica Internacional (ahora Biblica) que buscaba crear una traducción contemporánea equivalente a la NIV en inglés. Realizada por un equipo internacional de eruditos evangélicos.</p>
                  <p><span className="font-semibold">Enfoque de traducción:</span> Equilibrio entre equivalencia formal y dinámica, busca precisión y claridad al mismo tiempo.</p>
                  <p><span className="font-semibold">Características:</span> Lenguaje contemporáneo accesible pero no coloquial, buenas notas al pie, clara separación entre párrafos y coherencia en la traducción de términos.</p>
                  <p><span className="font-semibold">Uso principal:</span> Muy usada para estudio bíblico serio y predicación por su equilibrio entre fidelidad y claridad.</p>
                  <div className="mt-2 bg-gray-50 p-3 rounded text-sm italic">
                    "Porque tanto amó Dios al mundo que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna." <span className="font-medium">— Juan 3:16 (NVI)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="text-lg flex items-center text-burgundy">
                  <Book className="h-5 w-5 mr-2" />
                  Nueva Traducción Viviente (NTV)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <p><span className="font-semibold">Año:</span> 2010 (edición en español)</p>
                  <p><span className="font-semibold">Historia:</span> Adaptación al español de la "New Living Translation", realizada por un equipo de traductores bajo la dirección de Tyndale House Publishers.</p>
                  <p><span className="font-semibold">Enfoque de traducción:</span> Equivalencia dinámica (funcional) que prioriza la comunicación del significado sobre la estructura lingüística original.</p>
                  <p><span className="font-semibold">Características:</span> Lenguaje natural, fluidez de lectura, términos contemporáneos, excelente legibilidad, evita ambigüedades y usa expresiones actuales.</p>
                  <p><span className="font-semibold">Uso principal:</span> Ideal para nuevos lectores, devocionales, y lectura continua por su claridad y fluidez. También usada en evangelismo por su accesibilidad.</p>
                  <div className="mt-2 bg-gray-50 p-3 rounded text-sm italic">
                    "Pues Dios amó tanto al mundo que dio a su único Hijo, para que todo el que crea en Él, no se pierda, mas tenga vida eterna." <span className="font-medium">— Juan 3:16 (NTV)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="text-lg flex items-center text-burgundy">
                  <Book className="h-5 w-5 mr-2" />
                  La Biblia de las Américas (LBLA)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <p><span className="font-semibold">Año:</span> 1986</p>
                  <p><span className="font-semibold">Historia:</span> Desarrollada por La Fundación Lockman como una traducción literal actualizada en español. Basada en los mismos principios que su versión en inglés (NASB).</p>
                  <p><span className="font-semibold">Enfoque de traducción:</span> Equivalencia formal (muy literal) con alta fidelidad a los textos originales en hebreo, arameo y griego.</p>
                  <p><span className="font-semibold">Características:</span> Alta precisión académica, uso de cursivas para palabras añadidas para claridad, notas marginales con traducciones alternativas, retiene matices del lenguaje original.</p>
                  <p><span className="font-semibold">Uso principal:</span> Excelente para estudios bíblicos profundos, exégesis, y formación teológica. Preferida por estudiosos y pastores para preparación de sermones.</p>
                  <div className="mt-2 bg-gray-50 p-3 rounded text-sm italic">
                    "Porque de tal manera amó Dios al mundo, que dio a su Hijo unigénito, para que todo aquel que cree en Él, no se pierda, mas tenga vida eterna." <span className="font-medium">— Juan 3:16 (LBLA)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold mb-3">¿Cómo elegir una traducción?</h3>
            <p className="mb-3">La elección de una traducción bíblica depende de varios factores:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Propósito de lectura:</span> Para estudio profundo, considere traducciones más literales (RV60, LBLA). Para lectura devocional, versiones más dinámicas (NTV).</li>
              <li><span className="font-medium">Nivel de familiaridad con lenguaje bíblico:</span> Nuevos lectores pueden beneficiarse de versiones como NTV, mientras que lectores experimentados pueden preferir RV60 o LBLA.</li>
              <li><span className="font-medium">Equilibrio:</span> La NVI ofrece un buen balance entre precisión y claridad.</li>
              <li><span className="font-medium">Uso complementario:</span> Muchos estudiosos recomiendan comparar varias traducciones para obtener una comprensión más rica del texto.</li>
            </ul>
          </div>
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

