
import { BookOpen, FileCheck, Bookmark, Scale, History, Globe, Archive, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ApologeticaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-center text-burgundy mb-8">Apologética Bíblica</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="mb-4 text-gray-700">
              La apologética bíblica es la defensa razonada de la fe cristiana, particularmente enfocada en la confiabilidad, 
              autoridad e inspiración de las Escrituras. Esta disciplina aporta evidencias históricas, arqueológicas, 
              proféticas y textuales que apoyan la veracidad de la Biblia como revelación divina.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card className="shadow-sm">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-lg flex items-center text-burgundy">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Autoridad Bíblica
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">¿Por qué creemos que la Biblia tiene autoridad?</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><span className="font-medium">Testimonio de Jesús:</span> Jesús afirmó repetidamente la autoridad de las Escrituras, citándolas como "la Palabra de Dios" (Juan 10:35) y declarando que "la Escritura no puede ser quebrantada" (Juan 10:35).</li>
                      <li><span className="font-medium">Unidad temática:</span> A pesar de ser escrita por aproximadamente 40 autores en un período de 1,500 años, la Biblia mantiene una asombrosa coherencia temática, lo que sugiere una mente unificadora detrás de sus diversos autores.</li>
                      <li><span className="font-medium">Impacto histórico:</span> La influencia transformadora de la Biblia en individuos, culturas y civilizaciones a lo largo de los siglos testifica de su poder único.</li>
                      <li><span className="font-medium">Testimonio interno:</span> La Biblia afirma ser "inspirada por Dios" (2 Timoteo 3:16) y ser "útil para enseñar, reprender, corregir e instruir en justicia".</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-lg flex items-center text-burgundy">
                    <FileCheck className="h-5 w-5 mr-2" />
                    Inerrancia Bíblica
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">¿Es la Biblia libre de errores?</h4>
                    <p className="text-gray-700">La doctrina de la inerrancia sostiene que la Biblia, en sus manuscritos originales, está libre de error en todo lo que afirma, incluidas áreas históricas, científicas y morales.</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><span className="font-medium">Precisión histórica:</span> Descubrimientos arqueológicos confirman repetidamente la precisión histórica de la Biblia, validando lugares, personas y eventos antiguamente cuestionados.</li>
                      <li><span className="font-medium">Coherencia interna:</span> A pesar de la diversidad de autores y contextos, la Biblia mantiene una coherencia doctrinal notable.</li>
                      <li><span className="font-medium">Desafíos y respuestas:</span> Las aparentes contradicciones pueden explicarse mediante una exégesis cuidadosa, considerando el contexto, género literario y propósito de los pasajes.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-lg flex items-center text-burgundy">
                    <Bookmark className="h-5 w-5 mr-2" />
                    Inspiración Divina
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">¿Cómo fue inspirada la Biblia?</h4>
                    <p className="text-gray-700">La doctrina de la inspiración afirma que Dios supervisó la composición de las Escrituras, guiando a sus autores humanos para comunicar exactamente lo que Él quería, mientras respetaba sus personalidades, estilos y contextos.</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><span className="font-medium">Testimonios bíblicos:</span> "Toda Escritura es inspirada por Dios" (2 Timoteo 3:16); "Los hombres hablaron de parte de Dios impulsados por el Espíritu Santo" (2 Pedro 1:21).</li>
                      <li><span className="font-medium">Cumplimiento profético:</span> Más de 300 profecías detalladas sobre el Mesías fueron cumplidas en Jesús, un testimonio de la inspiración divina.</li>
                      <li><span className="font-medium">Compatibilidad con la ciencia:</span> Cuando se interpreta correctamente, la Biblia no contradice los hallazgos científicos confirmados, a menudo anticipando conocimientos que serían descubiertos siglos después.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-lg flex items-center text-burgundy">
                    <Archive className="h-5 w-5 mr-2" />
                    Evidencia Manuscrita
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">¿Qué tan confiables son los textos bíblicos?</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><span className="font-medium">Abundancia de manuscritos:</span> Existen más de 5,800 manuscritos griegos del Nuevo Testamento, muy por encima de cualquier otro texto antiguo (las obras de Homero tienen unos 600 manuscritos).</li>
                      <li><span className="font-medium">Proximidad a los eventos:</span> El intervalo entre los eventos del Nuevo Testamento y los primeros manuscritos es notablemente breve comparado con otras obras históricas antiguas.</li>
                      <li><span className="font-medium">Consistencia textual:</span> Las variaciones entre manuscritos son menores (principalmente ortográficas) y no afectan ninguna doctrina cristiana fundamental.</li>
                      <li><span className="font-medium">Descubrimientos de Qumrán:</span> Los Rollos del Mar Muerto (descubiertos en 1947) confirmaron la precisión de la transmisión textual del Antiguo Testamento, mostrando una fidelidad asombrosa después de más de mil años de copiado.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4 flex items-center text-burgundy">
                <History className="h-5 w-5 mr-2" />
                Evidencias Extrabíblicas
              </h3>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-3">Confirmaciones Históricas y Arqueológicas</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-medium block">Los Cilindros de Ciro (539 a.C.):</span>
                    Confirman el relato bíblico del rey persa Ciro y su política de permitir a los pueblos cautivos regresar a sus tierras, como se describe en Esdras 1:1-4.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-medium block">La Estela de Tel Dan (850 a.C.):</span>
                    Primera referencia extrabíblica a la "Casa de David", confirmando la existencia histórica de la dinastía davídica mencionada en la Biblia.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-medium block">La Inscripción de Poncio Pilato:</span>
                    Descubierta en Cesarea Marítima en 1961, confirma la existencia del gobernador romano que presidió el juicio de Jesús.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-medium block">Osario de Caifás:</span>
                    Descubierto en 1990, este recipiente funerario lleva la inscripción de "José, hijo de Caifás", probablemente perteneciente al sumo sacerdote que participó en el juicio de Jesús.
                  </li>
                  <li>
                    <span className="font-medium block">Referencias de Flavio Josefo (93 d.C.):</span>
                    El historiador judío menciona a Jesús, Santiago (hermano de Jesús), Juan el Bautista y otros personajes bíblicos en sus escritos históricos.
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-3">Testimonios de Historiadores Antiguos</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-medium block">Tácito (c. 56-120 d.C.):</span>
                    Historiador romano que menciona la crucifixión de Cristo bajo Poncio Pilato y la expansión del cristianismo.
                  </li>
                  <li className="pb-2 border-b border-gray-100">
                    <span className="font-medium block">Plinio el Joven (c. 61-113 d.C.):</span>
                    En sus cartas al emperador Trajano, describe las prácticas de los primeros cristianos, incluyendo su adoración a Cristo "como a un dios".
                  </li>
                  <li>
                    <span className="font-medium block">Talud Babilónico:</span>
                    Aunque polémico hacia Jesús, este texto judío reconoce su existencia histórica y algunos aspectos de su ministerio.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="font-semibold mb-3 flex items-center text-burgundy">
                <Globe className="h-5 w-5 mr-2" />
                Impacto Cultural e Histórico
              </h3>
              <p className="mb-3 text-gray-700">El impacto transformador de la Biblia en la historia, el arte, la literatura, la ética y las estructuras sociales proporciona un testimonio indirecto de su origen divino:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Desarrollo científico:</span> La cosmovisión bíblica de un universo ordenado y comprensible creado por un Dios racional sentó las bases filosóficas para el desarrollo de la ciencia moderna.</li>
                <li><span className="font-medium">Derechos humanos:</span> La enseñanza bíblica de que todos los seres humanos son creados a imagen de Dios influyó profundamente en el desarrollo de conceptos de dignidad humana e igualdad.</li>
                <li><span className="font-medium">Educación y alfabetización:</span> El deseo de leer las Escrituras impulsó movimientos de alfabetización masiva en muchas culturas.</li>
                <li><span className="font-medium">Transformación personal:</span> A lo largo de la historia, innumerables testimonios dan cuenta del poder transformador de la Biblia en vidas individuales, incluso entre sus antiguos críticos.</li>
              </ul>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-medium mb-2">Conclusión</h4>
              <p className="text-gray-700">
                La evidencia acumulada de la autoridad, inerrancia e inspiración de la Biblia proviene de múltiples fuentes: su cohesión interna a pesar de la diversidad de autores, su precisión histórica confirmada por la arqueología, su asombrosa preservación textual, su capacidad profética, su compatibilidad con los descubrimientos científicos cuando se interpreta adecuadamente, y su poder transformador en vidas e instituciones. Estos elementos, considerados en conjunto, proporcionan una base racional sólida para la confianza en las Escrituras como revelación divina.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
