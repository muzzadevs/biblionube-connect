
export interface BibleBook {
  id: string;
  testamento: 'antiguo' | 'nuevo';
  nombre: string;
  abreviatura: string;
  capitulos: number;
  categoria: string;
  resumen: string;
  bosquejo: string[];
  contexto: string;
  autor: string;
  fecha: string;
  teologia: string;
  jesus: string;
}

export const bibleBooks: BibleBook[] = [
  // Antiguo Testamento - Pentateuco
  {
    id: 'genesis',
    testamento: 'antiguo',
    nombre: 'Génesis',
    abreviatura: 'Gn',
    capitulos: 50,
    categoria: 'Pentateuco',
    resumen: 'El libro de los comienzos: creación, caída, diluvio, patriarcas y la formación del pueblo de Israel.',
    bosquejo: [
      'La creación y la caída (1-11)',
      'Abraham (12-25)',
      'Isaac y Jacob (26-36)',
      'José (37-50)'
    ],
    contexto: 'Escrito durante el período del Éxodo, cuando Israel necesitaba entender sus orígenes y su relación única con Dios.',
    autor: 'Moisés (tradicionalmente)',
    fecha: 'Aprox. 1440 a.C.',
    teologia: 'Establece temas fundamentales como la creación, la caída, el pecado, el juicio, la gracia, la elección, el pacto y la redención.',
    jesus: 'Prefigurado en el "simiente de la mujer" (3:15), en Melquisedec (14), en el sacrificio de Isaac (22), y en José como el salvador rechazado.'
  },
  {
    id: 'exodo',
    testamento: 'antiguo',
    nombre: 'Éxodo',
    abreviatura: 'Ex',
    capitulos: 40,
    categoria: 'Pentateuco',
    resumen: 'La liberación de Israel de la esclavitud en Egipto, el establecimiento del pacto en el Sinaí y la construcción del Tabernáculo.',
    bosquejo: [
      'Israel en Egipto y el llamado de Moisés (1-4)',
      'Las plagas y el Éxodo (5-15)',
      'Viaje al Sinaí (16-18)',
      'El pacto y la ley (19-24)',
      'El Tabernáculo: instrucciones y construcción (25-40)'
    ],
    contexto: 'Israel está formándose como nación después de siglos de esclavitud, aprendiendo a vivir bajo el gobierno de Dios.',
    autor: 'Moisés (tradicionalmente)',
    fecha: 'Aprox. 1440-1400 a.C.',
    teologia: 'La redención, el pacto, la presencia de Dios, la santidad y la adoración.',
    jesus: 'Prefigurado en Moisés como libertador y mediador, en el cordero pascual (12), en el maná (16), y en el tabernáculo que simboliza su encarnación.'
  },
  {
    id: 'levitico',
    testamento: 'antiguo',
    nombre: 'Levítico',
    abreviatura: 'Lv',
    capitulos: 27,
    categoria: 'Pentateuco',
    resumen: 'Instrucciones para el culto y la santidad personal, centradas en el sistema sacrificial y las leyes de pureza.',
    bosquejo: [
      'Leyes sobre los sacrificios (1-7)',
      'Consagración de los sacerdotes (8-10)',
      'Leyes de pureza (11-15)',
      'Día de la Expiación (16)',
      'Código de santidad (17-27)'
    ],
    contexto: 'Escrito para Israel en el desierto, estableciendo el sistema de adoración y las leyes sociales y sanitarias para la nación.',
    autor: 'Moisés (tradicionalmente)',
    fecha: 'Aprox. 1440-1400 a.C.',
    teologia: 'La santidad de Dios, la expiación del pecado, la pureza ritual y moral, y la separación para Dios.',
    jesus: 'Prefigurado en el sistema sacrificial, especialmente en el Día de la Expiación, como el sacrificio perfecto y final por el pecado.'
  },
  {
    id: 'numeros',
    testamento: 'antiguo',
    nombre: 'Números',
    abreviatura: 'Nm',
    capitulos: 36,
    categoria: 'Pentateuco',
    resumen: 'El viaje de Israel por el desierto durante 40 años, incluidos los censos, rebeliones y preparación para entrar a Canaán.',
    bosquejo: [
      'Preparación para salir del Sinaí (1-10)',
      'De Sinaí a Cades (11-12)',
      'En Cades: rebelión y juicio (13-20)',
      'De Cades a Moab (21-36)'
    ],
    contexto: 'Cubre los 40 años de vagar por el desierto debido a la incredulidad de Israel después de salir de Egipto.',
    autor: 'Moisés (tradicionalmente)',
    fecha: 'Aprox. 1400 a.C.',
    teologia: 'La fidelidad de Dios a pesar de la desobediencia humana, el juicio, la disciplina divina y la preparación para cumplir las promesas.',
    jesus: 'Prefigurado en la serpiente de bronce (21:4-9), en la estrella de Jacob (24:17), y como el agua de la roca (20:1-13).'
  },
  {
    id: 'deuteronomio',
    testamento: 'antiguo',
    nombre: 'Deuteronomio',
    abreviatura: 'Dt',
    capitulos: 34,
    categoria: 'Pentateuco',
    resumen: 'Los discursos finales de Moisés, repasando la ley, renovando el pacto y preparando a Israel para entrar a la Tierra Prometida.',
    bosquejo: [
      'Primer discurso: repaso histórico (1-4)',
      'Segundo discurso: repaso de la ley (5-26)',
      'Tercer discurso: bendiciones y maldiciones (27-30)',
      'Últimos actos de Moisés (31-34)'
    ],
    contexto: 'En las llanuras de Moab, antes de entrar a Canaán, con una nueva generación que necesitaba renovar el compromiso con Dios.',
    autor: 'Moisés (tradicionalmente)',
    fecha: 'Aprox. 1400 a.C.',
    teologia: 'El amor de Dios, la obediencia como respuesta al amor, el pacto, las consecuencias de la fidelidad e infidelidad.',
    jesus: 'Prefigurado en el profeta venidero (18:15-19) y como el cumplimiento de la ley.'
  },
  // Libros Históricos
  {
    id: 'josue',
    testamento: 'antiguo',
    nombre: 'Josué',
    abreviatura: 'Jos',
    capitulos: 24,
    categoria: 'Históricos',
    resumen: 'La conquista y división de la Tierra Prometida bajo el liderazgo de Josué, sucesor de Moisés.',
    bosquejo: [
      'Entrada en la Tierra Prometida (1-5)',
      'Conquista de Canaán (6-12)',
      'División de la tierra (13-21)',
      'Últimas palabras de Josué (22-24)'
    ],
    contexto: 'El período de la conquista de Canaán, aproximadamente entre 1400-1350 a.C.',
    autor: 'Posiblemente Josué y editores posteriores',
    fecha: 'Aprox. 1350 a.C.',
    teologia: 'La fidelidad de Dios en cumplir sus promesas, la importancia de la obediencia, y las consecuencias del pecado.',
    jesus: 'Prefigurado en Josué como líder que lleva al pueblo a la tierra prometida, un tipo del verdadero Salvador.'
  },
  {
    id: 'jueces',
    testamento: 'antiguo',
    nombre: 'Jueces',
    abreviatura: 'Jue',
    capitulos: 21,
    categoria: 'Históricos',
    resumen: 'El ciclo de apostasía, opresión, clamor y liberación durante el período de los jueces antes de la monarquía.',
    bosquejo: [
      'Introducción: fracaso en completar la conquista (1-2)',
      'Los ciclos de los jueces (3-16)',
      'Apéndices de depravación moral (17-21)'
    ],
    contexto: 'Período de aproximadamente 350 años entre la conquista y el establecimiento de la monarquía (1350-1050 a.C.).',
    autor: 'Tradicionalmente atribuido a Samuel',
    fecha: 'Aprox. 1050 a.C.',
    teologia: 'Las consecuencias de la apostasía, la misericordia de Dios en respuesta al arrepentimiento, y la necesidad de un liderazgo justo.',
    jesus: 'Prefigurado en los jueces como liberadores imperfectos que señalan la necesidad de un Salvador perfecto.'
  },
  {
    id: 'rut',
    testamento: 'antiguo',
    nombre: 'Rut',
    abreviatura: 'Rt',
    capitulos: 4,
    categoria: 'Históricos',
    resumen: 'La historia de una moabita que se une al pueblo de Dios y se convierte en antepasada del rey David y de Jesús.',
    bosquejo: [
      'Noemí y Rut regresan a Belén (1)',
      'Rut conoce a Booz (2)',
      'Rut y Booz en la era (3)',
      'Booz redime a Rut (4)'
    ],
    contexto: 'Durante el período de los jueces, en un tiempo de hambre seguido por una bendición.',
    autor: 'Desconocido, posiblemente Samuel',
    fecha: 'Aprox. 1050-1000 a.C.',
    teologia: 'La providencia divina, la redención, la inclusión de los gentiles en el plan de Dios, y la fidelidad en tiempos difíciles.',
    jesus: 'Booz como redentor es tipo de Cristo; la inclusión de Rut en la genealogía de David apunta a la inclusión de los gentiles en el plan mesiánico.'
  },
  {
    id: '1samuel',
    testamento: 'antiguo',
    nombre: '1 Samuel',
    abreviatura: '1 S',
    capitulos: 31,
    categoria: 'Históricos',
    resumen: 'La transición de Israel de los jueces a la monarquía, centrada en Samuel, Saúl y el ascenso de David.',
    bosquejo: [
      'Samuel: el último juez (1-7)',
      'Saúl: el primer rey (8-15)',
      'Declive de Saúl y ascenso de David (16-31)'
    ],
    contexto: 'El final del período de los jueces y el comienzo de la monarquía (1100-1010 a.C.).',
    autor: 'Probablemente Samuel, Natán y Gad (1 Crónicas 29:29)',
    fecha: 'Aprox. 1000 a.C.',
    teologia: 'El rechazo divino ante la desobediencia, la importancia de la obediencia sobre el ritual, y la elección soberana de Dios.',
    jesus: 'David como tipo de Cristo, el rey ideal según el corazón de Dios que sufre antes de reinar.'
  },
  {
    id: '2samuel',
    testamento: 'antiguo',
    nombre: '2 Samuel',
    abreviatura: '2 S',
    capitulos: 24,
    categoria: 'Históricos',
    resumen: 'El reinado del rey David, desde su coronación hasta su vejez, incluyendo sus triunfos y fracasos.',
    bosquejo: [
      'Los triunfos de David (1-10)',
      'El pecado de David y sus consecuencias (11-20)',
      'Apéndices: reflexiones finales sobre el reinado (21-24)'
    ],
    contexto: 'El reinado de David sobre Judá y luego sobre todo Israel (1010-970 a.C.).',
    autor: 'Probablemente Natán y Gad',
    fecha: 'Aprox. 970 a.C.',
    teologia: 'El pacto davídico, las consecuencias del pecado aún después del perdón, y el establecimiento del reino.',
    jesus: 'El pacto davídico apunta a Cristo como el Hijo de David que reinará eternamente.'
  },
  {
    id: '1reyes',
    testamento: 'antiguo',
    nombre: '1 Reyes',
    abreviatura: '1 R',
    capitulos: 22,
    categoria: 'Históricos',
    resumen: 'Desde la sucesión de Salomón hasta la división del reino y los primeros reyes de Israel y Judá.',
    bosquejo: [
      'El reinado de Salomón (1-11)',
      'El reino dividido (12-16)',
      'El ministerio de Elías (17-22)'
    ],
    contexto: 'El período desde la muerte de David hasta el reinado de Josafat y Ocozías (970-853 a.C.).',
    autor: 'Tradicionalmente Jeremías u otro compilador profético',
    fecha: 'Durante o después del exilio babilónico',
    teologia: 'Las consecuencias de la obediencia e idolatría, el templo como lugar de adoración, y la fidelidad profética.',
    jesus: 'Salomón como tipo de Cristo en su sabiduría y gloria; Elías como precursor del ministerio profético de Cristo.'
  },
  {
    id: '2reyes',
    testamento: 'antiguo',
    nombre: '2 Reyes',
    abreviatura: '2 R',
    capitulos: 25,
    categoria: 'Históricos',
    resumen: 'La historia de los reinos de Israel y Judá desde Elías hasta la destrucción y el exilio.',
    bosquejo: [
      'El ministerio de Eliseo (1-8)',
      'Los reyes de Israel y Judá (9-17)',
      'Solo el reino de Judá (18-25)'
    ],
    contexto: 'Desde el reinado de Ocozías hasta la caída de Jerusalén y el exilio babilónico (853-586 a.C.).',
    autor: 'Tradicionalmente Jeremías u otro compilador profético',
    fecha: 'Durante o después del exilio babilónico',
    teologia: 'El juicio divino por la idolatría persistente, la paciencia de Dios, y las consecuencias nacionales del pecado.',
    jesus: 'Apunta a la necesidad de un rey perfecto que pueda librarnos del exilio espiritual y la cautividad del pecado.'
  },
  {
    id: '1cronicas',
    testamento: 'antiguo',
    nombre: '1 Crónicas',
    abreviatura: '1 Cr',
    capitulos: 29,
    categoria: 'Históricos',
    resumen: 'Genealogías desde Adán y el reinado de David, con énfasis en el templo y la adoración.',
    bosquejo: [
      'Genealogías de Adán a David (1-9)',
      'El reinado de David (10-29)'
    ],
    contexto: 'Escrito después del exilio para recordar al pueblo su herencia espiritual y real.',
    autor: 'Tradicionalmente Esdras',
    fecha: 'Aprox. 450-400 a.C.',
    teologia: 'La continuidad del pacto davídico, la centralidad de la adoración, y la fidelidad de Dios a su pueblo a través de la historia.',
    jesus: 'Las genealogías trazan la línea mesiánica; David como tipo de Cristo, el rey ideal y adorador perfecto.'
  },
  {
    id: '2cronicas',
    testamento: 'antiguo',
    nombre: '2 Crónicas',
    abreviatura: '2 Cr',
    capitulos: 36,
    categoria: 'Históricos',
    resumen: 'La historia del reino de Judá desde Salomón hasta el exilio, con énfasis en la adoración y la reforma.',
    bosquejo: [
      'El reinado de Salomón (1-9)',
      'El reino de Judá hasta el exilio (10-36)'
    ],
    contexto: 'Escrito después del exilio para animar al remanente que regresaba a mantener la adoración adecuada.',
    autor: 'Tradicionalmente Esdras',
    fecha: 'Aprox. 450-400 a.C.',
    teologia: 'Los ciclos de apostasía y reforma, la importancia de la verdadera adoración, y las consecuencias nacionales de la respuesta a Dios.',
    jesus: 'El templo como tipo de Cristo, el lugar definitivo del encuentro con Dios; la promesa de restauración que apunta a la obra redentora de Cristo.'
  },
  {
    id: 'esdras',
    testamento: 'antiguo',
    nombre: 'Esdras',
    abreviatura: 'Esd',
    capitulos: 10,
    categoria: 'Históricos',
    resumen: 'El regreso de los exiliados judíos de Babilonia y la reconstrucción del templo bajo el liderazgo de Esdras.',
    bosquejo: [
      'Primer retorno bajo Zorobabel (1-6)',
      'Segundo retorno bajo Esdras (7-10)'
    ],
    contexto: 'El período post-exílico durante el imperio persa (538-458 a.C.).',
    autor: 'Tradicionalmente Esdras',
    fecha: 'Aprox. 440 a.C.',
    teologia: 'La fidelidad de Dios en la restauración, la importancia de la pureza espiritual, y la centralidad de la Ley.',
    jesus: 'La restauración del templo anticipa la venida de Cristo como el verdadero templo; Esdras como sacerdote-escriba apunta a Cristo como el intérprete perfecto de la Ley.'
  },
  {
    id: 'nehemias',
    testamento: 'antiguo',
    nombre: 'Nehemías',
    abreviatura: 'Neh',
    capitulos: 13,
    categoria: 'Históricos',
    resumen: 'La reconstrucción de los muros de Jerusalén y la reforma religiosa bajo el liderazgo de Nehemías.',
    bosquejo: [
      'Reconstrucción de los muros (1-7)',
      'Renovación espiritual (8-10)',
      'Repoblación y reformas (11-13)'
    ],
    contexto: 'El período post-exílico durante el imperio persa (445-433 a.C.).',
    autor: 'Principalmente memorias de Nehemías, compiladas posiblemente por Esdras',
    fecha: 'Aprox. 430 a.C.',
    teologia: 'La importancia de un liderazgo piadoso, la restauración espiritual y física, y la separación del mundo.',
    jesus: 'Nehemías como restaurador y líder desinteresado es tipo de Cristo; la reconstrucción de Jerusalén anticipa la edificación de la Iglesia.'
  },
  {
    id: 'ester',
    testamento: 'antiguo',
    nombre: 'Ester',
    abreviatura: 'Est',
    capitulos: 10,
    categoria: 'Históricos',
    resumen: 'La historia de cómo Dios usó a Ester para salvar a los judíos de un complot de genocidio en el imperio persa.',
    bosquejo: [
      'Ester se convierte en reina (1-2)',
      'El complot de Amán (3-5)',
      'La liberación de los judíos (6-10)'
    ],
    contexto: 'Durante el reinado de Jerjes (Asuero) en Persia (486-465 a.C.).',
    autor: 'Desconocido, posiblemente Mardoqueo o un judío persa',
    fecha: 'Aprox. 460-350 a.C.',
    teologia: 'La providencia de Dios aun cuando no se le menciona explícitamente, el cuidado divino de su pueblo, y el coraje ante la persecución.',
    jesus: 'Ester como intercesora que arriesga su vida por su pueblo prefigura a Cristo; la liberación del genocidio anticipaba la salvación del juicio.'
  },
  // Libros Poéticos
  {
    id: 'job',
    testamento: 'antiguo',
    nombre: 'Job',
    abreviatura: 'Job',
    capitulos: 42,
    categoria: 'Poéticos',
    resumen: 'La prueba de fe de un hombre justo a través del sufrimiento y su búsqueda de entender a Dios en medio del dolor.',
    bosquejo: [
      'Prólogo: la prueba de Job (1-2)',
      'Diálogos con sus amigos (3-31)',
      'Discursos de Eliú (32-37)',
      'Respuesta de Dios (38-41)',
      'Epílogo: restauración de Job (42)'
    ],
    contexto: 'Probablemente durante la era patriarcal (2000-1800 a.C.).',
    autor: 'Desconocido, posiblemente Job, Moisés o Salomón',
    fecha: 'Desconocida, posiblemente escrito entre 2000-500 a.C.',
    teologia: 'La soberanía de Dios, el problema del sufrimiento, la limitación del entendimiento humano, y la justicia divina.',
    jesus: 'Job como justo sufriente prefigura a Cristo; su papel como intercesor y su restauración anticipan la obra y resurrección de Cristo.'
  },
  {
    id: 'salmos',
    testamento: 'antiguo',
    nombre: 'Salmos',
    abreviatura: 'Sal',
    capitulos: 150,
    categoria: 'Poéticos',
    resumen: 'Colección de himnos, oraciones, alabanzas y lamentos que expresan todo el rango de experiencias y emociones humanas ante Dios.',
    bosquejo: [
      'Libro 1: Salmos 1-41',
      'Libro 2: Salmos 42-72',
      'Libro 3: Salmos 73-89',
      'Libro 4: Salmos 90-106',
      'Libro 5: Salmos 107-150'
    ],
    contexto: 'Compuestos a lo largo de casi 1000 años, desde Moisés hasta el período post-exílico.',
    autor: 'Varios, incluyendo David (73), Asaf (12), hijos de Coré (11), Salomón (2), Moisés (1), Hemán (1), Etán (1), y anónimos',
    fecha: 'Aprox. 1400-450 a.C.',
    teologia: 'La adoración en todas las circunstancias, la alabanza, la lamentación, la soberanía de Dios, la confianza en tiempos difíciles, y el mesianismo.',
    jesus: 'Numerosos salmos son mesiánicos, prefigurando el sufrimiento (22), la ascensión (68), el reinado (2, 110), y la gloria de Cristo.'
  },
  {
    id: 'proverbios',
    testamento: 'antiguo',
    nombre: 'Proverbios',
    abreviatura: 'Pr',
    capitulos: 31,
    categoria: 'Poéticos',
    resumen: 'Colección de dichos sabios sobre la vida práctica, la moralidad y la relación con Dios y los demás.',
    bosquejo: [
      'Elogio a la sabiduría (1-9)',
      'Proverbios de Salomón (10-22)',
      'Dichos de los sabios (22-24)',
      'Más proverbios de Salomón (25-29)',
      'Palabras de Agur y del rey Lemuel (30-31)'
    ],
    contexto: 'Principalmente durante el reinado de Salomón, con adiciones posteriores.',
    autor: 'Principalmente Salomón, con contribuciones de Agur, Lemuel y "los sabios"',
    fecha: 'Principalmente siglo X a.C., con compilación final en el siglo VII a.C.',
    teologia: 'El temor del Señor como principio de la sabiduría, la sabiduría práctica para la vida diaria, y las consecuencias de nuestras elecciones.',
    jesus: 'Cristo como la Sabiduría personificada (1 Co. 1:30), la encarnación de la sabiduría perfecta de Dios.'
  },
  {
    id: 'eclesiastes',
    testamento: 'antiguo',
    nombre: 'Eclesiastés',
    abreviatura: 'Ec',
    capitulos: 12,
    categoria: 'Poéticos',
    resumen: 'Reflexión sobre la futilidad de la vida humana aparte de Dios y la búsqueda de significado en un mundo caído.',
    bosquejo: [
      'La vanidad de todos los esfuerzos humanos (1-2)',
      'La vanidad de la vida y trabajo (3-5)',
      'La vanidad de las riquezas y el honor (6-8)',
      'Viviendo sabiamente en un mundo caído (9-12)'
    ],
    contexto: 'Probablemente durante el reinado de Salomón o compuesto posteriormente desde su perspectiva.',
    autor: 'Tradicionalmente Salomón ("el Predicador")',
    fecha: 'Aprox. 940 a.C. o siglo III a.C. (según diferentes eruditos)',
    teologia: 'La insatisfacción de la vida sin Dios, la soberanía divina, los límites de la sabiduría humana, y la importancia de temer a Dios.',
    jesus: 'Apunta a la necesidad de Cristo para dar sentido y propósito a la vida, la única respuesta a la vanidad de todo lo demás.'
  },
  {
    id: 'cantares',
    testamento: 'antiguo',
    nombre: 'Cantares',
    abreviatura: 'Cnt',
    capitulos: 8,
    categoria: 'Poéticos',
    resumen: 'Poema de amor que celebra la belleza del amor conyugal, representando también el amor entre Dios y su pueblo.',
    bosquejo: [
      'El deseo mutuo de los amantes (1:1-2:7)',
      'Amor en primavera (2:8-3:5)',
      'La boda (3:6-5:1)',
      'Separación y reunión (5:2-6:3)',
      'Alabanzas mutuas y unión final (6:4-8:14)'
    ],
    contexto: 'Durante el reinado de Salomón, celebrando el amor matrimonial.',
    autor: 'Tradicionalmente Salomón',
    fecha: 'Siglo X a.C.',
    teologia: 'La belleza del amor humano como don divino, la intimidad en el matrimonio, y alegóricamente el amor entre Dios e Israel/Cristo y la Iglesia.',
    jesus: 'Interpretado alegóricamente, el esposo representa a Cristo en su amor apasionado por su novia, la Iglesia.'
  },
  // Profetas mayores
  {
    id: 'isaias',
    testamento: 'antiguo',
    nombre: 'Isaías',
    abreviatura: 'Is',
    capitulos: 66,
    categoria: 'Profetas mayores',
    resumen: 'Profecías sobre el juicio y la restauración de Judá, con visiones del Mesías sufriente y el reino futuro de paz.',
    bosquejo: [
      'Profecías de juicio y esperanza (1-35)',
      'Narrativa histórica: Ezequías (36-39)',
      'El libro de consuelo: restauración futura (40-66)'
    ],
    contexto: 'Durante los reinados de Uzías, Jotam, Acaz y Ezequías (740-700 a.C.).',
    autor: 'Isaías hijo de Amoz',
    fecha: 'Aprox. 700-680 a.C.',
    teologia: 'La santidad de Dios, el juicio por el pecado, la venida del Mesías, y la restauración futura de Israel y la creación.',
    jesus: 'Numerosas profecías mesiánicas, especialmente el Siervo Sufriente (53), el Príncipe de Paz (9), Emanuel (7), etc.'
  },
  {
    id: 'jeremias',
    testamento: 'antiguo',
    nombre: 'Jeremías',
    abreviatura: 'Jer',
    capitulos: 52,
    categoria: 'Profetas mayores',
    resumen: 'Las advertencias del profeta llorón sobre la inminente destrucción de Jerusalén y la promesa de un nuevo pacto.',
    bosquejo: [
      'El llamado de Jeremías (1)',
      'Profecías contra Judá y Jerusalén (2-25)',
      'Narrativas de Jeremías (26-45)',
      'Profecías contra las naciones (46-51)',
      'Apéndice histórico: caída de Jerusalén (52)'
    ],
    contexto: 'Los últimos años del reino de Judá hasta su caída y el exilio (627-586 a.C.).',
    autor: 'Jeremías, con la ayuda de Baruc como escriba',
    fecha: 'Aprox. 585-580 a.C.',
    teologia: 'Las consecuencias del pecado y la idolatría, la fidelidad en tiempos de crisis, el juicio divino, y la promesa del nuevo pacto.',
    jesus: 'La profecía del nuevo pacto (31:31-34) que Cristo establece; el profeta rechazado prefigura el rechazo de Cristo.'
  },
  {
    id: 'lamentaciones',
    testamento: 'antiguo',
    nombre: 'Lamentaciones',
    abreviatura: 'Lm',
    capitulos: 5,
    categoria: 'Profetas mayores',
    resumen: 'Poemas de lamento por la destrucción de Jerusalén, expresando dolor, arrepentimiento y esperanza en la misericordia de Dios.',
    bosquejo: [
      'Primera lamentación: la desolación de Jerusalén (1)',
      'Segunda lamentación: el enojo de Dios (2)',
      'Tercera lamentación: esperanza en la misericordia de Dios (3)',
      'Cuarta lamentación: contraste entre pasado y presente (4)',
      'Quinta lamentación: oración por restauración (5)'
    ],
    contexto: 'Después de la destrucción de Jerusalén por Babilonia en 586 a.C.',
    autor: 'Tradicionalmente Jeremías',
    fecha: 'Poco después de 586 a.C.',
    teologia: 'El justo juicio de Dios, el arrepentimiento, la fidelidad divina en medio del juicio, y la esperanza en la misericordia de Dios.',
    jesus: 'El hombre de dolores que lamenta sobre Jerusalén (Mt. 23:37-39) y sufre bajo el juicio divino por nuestros pecados.'
  },
  {
    id: 'ezequiel',
    testamento: 'antiguo',
    nombre: 'Ezequiel',
    abreviatura: 'Ez',
    capitulos: 48,
    categoria: 'Profetas mayores',
    resumen: 'Visiones y profecías dadas a los exiliados en Babilonia, anunciando el juicio de Jerusalén y la futura restauración.',
    bosquejo: [
      'Llamado de Ezequiel (1-3)',
      'Juicios contra Jerusalén (4-24)',
      'Profecías contra las naciones (25-32)',
      'La restauración de Israel (33-39)',
      'Visión del templo futuro (40-48)'
    ],
    contexto: 'Durante el exilio babilónico (593-571 a.C.).',
    autor: 'Ezequiel, sacerdote y profeta',
    fecha: 'Aprox. 570 a.C.',
    teologia: 'La gloria de Dios, la responsabilidad individual, la purificación del pecado, la presencia divina, y la restauración futura.',
    jesus: 'El Buen Pastor (34), el dador del nuevo corazón (36), el Príncipe (34:24), y aquel cuya presencia santifica el nuevo templo.'
  },
  {
    id: 'daniel',
    testamento: 'antiguo',
    nombre: 'Daniel',
    abreviatura: 'Dn',
    capitulos: 12,
    categoria: 'Profetas mayores',
    resumen: 'Historias de fidelidad en el exilio y visiones apocalípticas sobre el futuro de los reinos mundiales y la venida del reino de Dios.',
    bosquejo: [
      'Daniel y sus amigos en Babilonia (1-6)',
      'Visiones apocalípticas de Daniel (7-12)'
    ],
    contexto: 'Durante el exilio babilónico y el comienzo del dominio persa (605-530 a.C.).',
    autor: 'Daniel',
    fecha: 'Aprox. 530 a.C.',
    teologia: 'La soberanía de Dios sobre la historia y los reinos, la fidelidad en la persecución, y la victoria final del reino de Dios.',
    jesus: 'El Hijo del Hombre (7:13-14), la piedra no cortada por manos humanas (2), y el sacrificio que pone fin al sistema de sacrificios (9).'
  },
  // Profetas menores
  {
    id: 'oseas',
    testamento: 'antiguo',
    nombre: 'Oseas',
    abreviatura: 'Os',
    capitulos: 14,
    categoria: 'Profetas menores',
    resumen: 'El amor fiel de Dios por Israel infiel, ilustrado a través del matrimonio del profeta con una mujer infiel.',
    bosquejo: [
      'El matrimonio de Oseas como símbolo (1-3)',
      'El caso de Dios contra Israel (4-10)',
      'El amor redentor de Dios (11-14)'
    ],
    contexto: 'Los últimos días del reino del norte antes de su caída en 722 a.C.',
    autor: 'Oseas',
    fecha: 'Aprox. 750-725 a.C.',
    teologia: 'El amor inquebrantable de Dios a pesar de la infidelidad humana, la idolatría como adulterio espiritual, y la restauración por gracia.',
    jesus: 'El esposo fiel de la iglesia infiel, cuyo amor redentor llama de vuelta a su pueblo.'
  },
  {
    id: 'joel',
    testamento: 'antiguo',
    nombre: 'Joel',
    abreviatura: 'Jl',
    capitulos: 3,
    categoria: 'Profetas menores',
    resumen: 'Una plaga de langostas como señal del juicio inminente y la promesa del Espíritu Santo en los últimos días.',
    bosquejo: [
      'La plaga de langostas (1)',
      'El día del Señor (2:1-17)',
      'La promesa de restauración y el Espíritu (2:18-32)',
      'Juicio de las naciones (3)'
    ],
    contexto: 'Fecha incierta, posiblemente siglo IX a.C. o período post-exílico.',
    autor: 'Joel hijo de Petuel',
    fecha: 'Incierta, posiblemente 835-800 a.C. o 500-400 a.C.',
    teologia: 'El día del Señor, el juicio divino, el arrepentimiento, y la promesa del Espíritu Santo.',
    jesus: 'El dador del Espíritu Santo (2:28-32, cumplido en Pentecostés, Hechos 2) y el juez de las naciones.'
  },
  {
    id: 'amos',
    testamento: 'antiguo',
    nombre: 'Amós',
    abreviatura: 'Am',
    capitulos: 9,
    categoria: 'Profetas menores',
    resumen: 'Denuncias contra la injusticia social y la religiosidad superficial en Israel durante un tiempo de prosperidad.',
    bosquejo: [
      'Juicios contra las naciones (1-2)',
      'Mensajes de condenación a Israel (3-6)',
      'Cinco visiones de juicio (7:1-9:10)',
      'Promesa de restauración (9:11-15)'
    ],
    contexto: 'Durante los reinados de Jeroboam II en Israel y Uzías en Judá (760-750 a.C.).',
    autor: 'Amós, pastor de Tecoa',
    fecha: 'Aprox. 760-750 a.C.',
    teologia: 'La justicia social, el verdadero culto más allá del ritual, y el juicio divino sobre la opresión y la hiposresía.',
    jesus: 'El defensor de los pobres y oprimidos, y el restaurador de la "cabaña caída de David" (9:11-12, citado en Hechos 15:16-17).'
  },
  {
    id: 'abdias',
    testamento: 'antiguo',
    nombre: 'Abdías',
    abreviatura: 'Abd',
    capitulos: 1,
    categoria: 'Profetas menores',
    resumen: 'El libro más corto del AT, profetiza juicio contra Edom por su orgullo y hostilidad hacia Israel.',
    bosquejo: [
      'Juicio contra Edom (1-9)',
      'Los pecados de Edom contra Israel (10-14)',
      'El día del Señor y la restauración de Israel (15-21)'
    ],
    contexto: 'Posiblemente después de la caída de Jerusalén en 586 a.C., cuando Edom se regocijó por su desgracia.',
    autor: 'Abdías',
    fecha: 'Incierta, posiblemente 586-550 a.C.',
    teologia: 'El orgullo antes de la caída, la soberanía de Dios en el juicio, y la victoria final del pueblo de Dios.',
    jesus: 'El juez de las naciones que se oponen a su pueblo y el establecedor del reino de Dios (21).'
  },
  {
    id: 'jonas',
    testamento: 'antiguo',
    nombre: 'Jonás',
    abreviatura: 'Jon',
    capitulos: 4,
    categoria: 'Profetas menores',
    resumen: 'La historia del profeta reluctante enviado a predicar a Nínive, que revela el amor de Dios por todas las naciones.',
    bosquejo: [
      'La huida de Jonás (1)',
      'La oración de Jonás (2)',
      'La predicación de Jonás y el arrepentimiento de Nínive (3)',
      'El enfado de Jonás y la lección de Dios (4)'
    ],
    contexto: 'Durante el reinado de Jeroboam II de Israel (793-753 a.C.).',
    autor: 'Tradicionalmente Jonás mismo o un escritor posterior',
    fecha: 'Siglo VIII a.C. o posterior',
    teologia: 'La misericordia de Dios para todas las naciones, la naturaleza universal de su amor, y la obediencia a la voluntad divina.',
    jesus: 'La señal de Jonás prefigura la muerte y resurrección de Cristo (Mt. 12:39-41); ambos son enviados a predicar a los gentiles.'
  },
  {
    id: 'miqueas',
    testamento: 'antiguo',
    nombre: 'Miqueas',
    abreviatura: 'Mi',
    capitulos: 7,
    categoria: 'Profetas menores',
    resumen: 'Profecías de juicio contra la injusticia social y la corrupción, con promesas mesiánicas de restauración.',
    bosquejo: [
      'Juicio contra Samaria y Jerusalén (1-3)',
      'Promesa de restauración (4-5)',
      'El caso de Dios contra Israel y la esperanza futura (6-7)'
    ],
    contexto: 'Durante los reinados de Jotam, Acaz y Ezequías de Judá (750-686 a.C.).',
    autor: 'Miqueas de Moreset',
    fecha: 'Aprox. 735-700 a.C.',
    teologia: 'La justicia social, el verdadero culto que Dios desea, y la esperanza mesiánica.',
    jesus: 'Profetizado como el gobernante que nacería en Belén (5:2) y como el pastor de Israel (5:4).'
  },
  {
    id: 'nahum',
    testamento: 'antiguo',
    nombre: 'Nahúm',
    abreviatura: 'Nah',
    capitulos: 3,
    categoria: 'Profetas menores',
    resumen: 'Profecía de la destrucción de Nínive como juicio divino por su crueldad y opresión.',
    bosquejo: [
      'La majestad de Dios en juicio (1)',
      'La caída de Nínive descrita (2)',
      'El por qué de la destrucción de Nínive (3)'
    ],
    contexto: 'Entre la caída de Tebas (663 a.C.) y la caída de Nínive (612 a.C.).',
    autor: 'Nahúm de Elcos',
    fecha: 'Aprox. 630-612 a.C.',
    teologia: 'La justicia vindicativa de Dios, su soberanía sobre las naciones, y la retribución divina por la maldad.',
    jesus: 'Prefigurado en 1:15 como el que trae buenas nuevas de paz; el justo juez que triunfa sobre los enemigos de su pueblo.'
  },
  {
    id: 'habacuc',
    testamento: 'antiguo',
    nombre: 'Habacuc',
    abreviatura: 'Hab',
    capitulos: 3,
    categoria: 'Profetas menores',
    resumen: 'El diálogo del profeta con Dios sobre el problema del mal y la respuesta divina que el justo vivirá por fe.',
    bosquejo: [
      'Primera queja: ¿Por qué toleras el mal? (1:1-4)',
      'Respuesta de Dios: usaré a los caldeos (1:5-11)',
      'Segunda queja: ¿Por qué usas a los malvados? (1:12-2:1)',
      'Respuesta de Dios: el justo vivirá por fe (2:2-20)',
      'Oración y alabanza de Habacuc (3)'
    ],
    contexto: 'Justo antes de la invasión babilónica de Judá (605-600 a.C.).',
    autor: 'Habacuc',
    fecha: 'Aprox. 605 a.C.',
    teologia: 'La justificación por la fe, la soberanía de Dios en la historia, y la confianza en Dios a pesar de las circunstancias.',
    jesus: 'El objeto de la fe salvadora (el principio de Romanos 1:17, Gálatas 3:11, Hebreos 10:38).'
  },
  {
    id: 'sofonias',
    testamento: 'antiguo',
    nombre: 'Sofonías',
    abreviatura: 'Sof',
    capitulos: 3,
    categoria: 'Profetas menores',
    resumen: 'Advertencias sobre el inminente "día del Señor" y promesas de restauración para el remanente fiel.',
    bosquejo: [
      'El día del Señor: juicio universal (1)',
      'Llamado al arrepentimiento (2:1-3)',
      'Juicio sobre las naciones (2:4-15)',
      'Juicio y restauración de Jerusalén (3)'
    ],
    contexto: 'Durante el reinado de Josías de Judá, antes de su reforma (640-621 a.C.).',
    autor: 'Sofonías, descendiente del rey Ezequías',
    fecha: 'Aprox. 630-625 a.C.',
    teologia: 'El día del Señor, el juicio universal, el remanente fiel, y la restauración por amor.',
    jesus: 'El rey de Israel que habita en medio de su pueblo (3:15-17), trayendo salvación y gozo.'
  },
  {
    id: 'hageo',
    testamento: 'antiguo',
    nombre: 'Hageo',
    abreviatura: 'Hag',
    capitulos: 2,
    categoria: 'Profetas menores',
    resumen: 'Exhortación a los judíos que regresaron del exilio a reconstruir el templo y promesa de gloria futura.',
    bosquejo: [
      'Primer mensaje: llamado a reconstruir (1)',
      'Segundo mensaje: la gloria futura del templo (2:1-9)',
      'Tercer mensaje: bendición después de la obediencia (2:10-19)',
      'Cuarto mensaje: promesa a Zorobabel (2:20-23)'
    ],
    contexto: 'Después del regreso del exilio babilónico, cuando la reconstrucción del templo se había detenido (520 a.C.).',
    autor: 'Hageo',
    fecha: '520 a.C. (fechado con precisión: agosto a diciembre)',
    teologia: 'La prioridad del reino de Dios, la obediencia que trae bendición, y la restauración de la presencia divina.',
    jesus: 'El "deseado de todas las naciones" (2:7) que llena el templo con gloria; el sello de Dios (2:23) como elegido.'
  },
  {
    id: 'zacarias',
    testamento: 'antiguo',
    nombre: 'Zacarías',
    abreviatura: 'Zac',
    capitulos: 14,
    categoria: 'Profetas menores',
    resumen: 'Visiones apocalípticas y profecías mesiánicas dadas para animar a los judíos que regresaron a reconstruir el templo.',
    bosquejo: [
      'Llamado al arrepentimiento (1:1-6)',
      'Las ocho visiones nocturnas (1:7-6:15)',
      'Preguntas sobre el ayuno (7-8)',
      'Profecías sobre el futuro (9-14)'
    ],
    contexto: 'Después del regreso del exilio, contemporáneo con Hageo (520-518 a.C.).',
    autor: 'Zacarías hijo de Berequías',
    fecha: '520-470 a.C.',
    teologia: 'La venida del Mesías, la restauración de Israel, el juicio de las naciones, y el reino futuro.',
    jesus: 'Profetizado como rey humilde en un asno (9:9), pastor herido (13:7), traspasado (12:10), y purificador de su pueblo (13:1).'
  },
  {
    id: 'malaquias',
    testamento: 'antiguo',
    nombre: 'Malaquías',
    abreviatura: 'Mal',
    capitulos: 4,
    categoria: 'Profetas menores',
    resumen: 'El último profeta del AT confronta a Israel por su infidelidad y anuncia la venida del mensajero del pacto.',
    bosquejo: [
      'El amor de Dios por Israel (1:1-5)',
      'Reprensión a los sacerdotes (1:6-2:9)',
      'Infidelidad de Judá (2:10-16)',
      'El mensajero venidero y el día del juicio (2:17-4:6)'
    ],
    contexto: 'Durante la época de Nehemías o poco después (460-430 a.C.).',
    autor: 'Malaquías ("mi mensajero")',
    fecha: 'Aprox. 460-430 a.C.',
    teologia: 'La fidelidad al pacto, la importancia del culto sincero, el diezmo, y la venida del día del Señor.',
    jesus: 'El "mensajero del pacto" (3:1) precedido por un "Elías" (Juan el Bautista); el "sol de justicia" (4:2).'
  },
  // Nuevo Testamento - Evangelios
  {
    id: 'mateo',
    testamento: 'nuevo',
    nombre: 'Mateo',
    abreviatura: 'Mt',
    capitulos: 28,
    categoria: 'Evangelios',
    resumen: 'Presenta a Jesús como el Mesías Rey prometido que cumple las profecías del Antiguo Testamento.',
    bosquejo: [
      'Nacimiento e infancia de Jesús (1-2)',
      'Preparación para el ministerio (3-4)',
      'El Sermón del Monte (5-7)',
      'Ministerio en Galilea (8-18)',
      'Viaje a Jerusalén y ministerio final (19-25)',
      'Pasión, muerte y resurrección (26-28)'
    ],
    contexto: 'Escrito primordialmente para judíos para demostrar que Jesús es el Mesías prometido.',
    autor: 'Mateo (Leví), el ex-recaudador de impuestos y apóstol',
    fecha: 'Aprox. 60-70 d.C.',
    teologia: 'El reino de los cielos, el cumplimiento de las profecías mesiánicas, y la enseñanza ética de Jesús.',
    jesus: 'Presentado como el Rey Mesías, el Hijo de David, Emanuel (Dios con nosotros), y el cumplimiento de la ley y los profetas.'
  },
  {
    id: 'marcos',
    testamento: 'nuevo',
    nombre: 'Marcos',
    abreviatura: 'Mc',
    capitulos: 16,
    categoria: 'Evangelios',
    resumen: 'El relato más breve y directo de la vida de Jesús, enfatizando sus acciones más que sus enseñanzas.',
    bosquejo: [
      'Preparación para el ministerio (1:1-13)',
      'Ministerio en Galilea (1:14-7:23)',
      'Ministerio fuera de Galilea (7:24-10:52)',
      'Última semana en Jerusalén (11-15)',
      'Resurrección (16)'
    ],
    contexto: 'Escrito principalmente para una audiencia romana, enfatizando la acción y el servicio.',
    autor: 'Juan Marcos, compañero de Pedro y Pablo',
    fecha: 'Aprox. 55-65 d.C.',
    teologia: 'Jesús como el Siervo sufriente de Dios, el poder divino demostrado a través de milagros, y el discipulado como seguimiento en el camino de la cruz.',
    jesus: 'Presentado como el Hijo de Dios poderoso en obras y como el Siervo sufriente que da su vida en rescate por muchos.'
  },
  {
    id: 'lucas',
    testamento: 'nuevo',
    nombre: 'Lucas',
    abreviatura: 'Lc',
    capitulos: 24,
    categoria: 'Evangelios',
    resumen: 'Un relato histórico cuidadoso de la vida de Jesús, enfatizando su humanidad y preocupación por los marginados.',
    bosquejo: [
      'Prólogo (1:1-4)',
      'Nacimiento e infancia de Jesús (1:5-2:52)',
      'Preparación para el ministerio (3:1-4:13)',
      'Ministerio en Galilea (4:14-9:50)',
      'Viaje a Jerusalén (9:51-19:27)',
      'Ministerio en Jerusalén (19:28-21:38)',
      'Pasión, muerte y resurrección (22-24)'
    ],
    contexto: 'Escrito para gentiles, especialmente griegos, presentando a Jesús como el Salvador universal.',
    autor: 'Lucas, médico y compañero de Pablo',
    fecha: 'Aprox. 60-62 d.C.',
    teologia: 'La salvación universal, la compasión de Jesús por los marginados, el Espíritu Santo, y la oración.',
    jesus: 'Presentado como el Salvador perfecto, el Hijo del Hombre que vino a buscar y salvar lo que se había perdido.'
  },
  {
    id: 'juan',
    testamento: 'nuevo',
    nombre: 'Juan',
    abreviatura: 'Jn',
    capitulos: 21,
    categoria: 'Evangelios',
    resumen: 'Un evangelio teológico que enfatiza la divinidad de Jesús como el Verbo eterno y la necesidad de fe en él.',
    bosquejo: [
      'Prólogo: el Verbo se hizo carne (1:1-18)',
      'El libro de las señales (1:19-12:50)',
      'El libro de la gloria: última cena y discursos (13-17)',
      'Pasión y resurrección (18-20)',
      'Epílogo: el encuentro con Pedro (21)'
    ],
    contexto: 'Escrito para fortalecer la fe de los creyentes y alcanzar a los no creyentes con la verdad sobre Jesús.',
    autor: 'Juan, "el discípulo a quien Jesús amaba"',
    fecha: 'Aprox. 80-90 d.C.',
    teologia: 'La divinidad de Cristo, la necesidad de la fe, la vida eterna, y la obra del Espíritu Santo.',
    jesus: 'Presentado como el Verbo eterno, el unigénito Hijo de Dios, y revelado a través de los siete "Yo soy".'
  },
  // Libros históricos del NT
  {
    id: 'hechos',
    testamento: 'nuevo',
    nombre: 'Hechos',
    abreviatura: 'Hch',
    capitulos: 28,
    categoria: 'Historia',
    resumen: 'La historia de la iglesia primitiva y la expansión del evangelio desde Jerusalén hasta Roma.',
    bosquejo: [
      'Preparación para la misión (1:1-2:13)',
      'La iglesia en Jerusalén (2:14-8:3)',
      'La iglesia en Judea y Samaria (8:4-12:25)',
      'Los viajes misioneros de Pablo (13-21)',
      'El arresto de Pablo y viaje a Roma (22-28)'
    ],
    contexto: 'Continuación del evangelio de Lucas, cubriendo aproximadamente 30 años desde la ascensión hasta el cautiverio de Pablo en Roma.',
    autor: 'Lucas, médico y compañero de Pablo',
    fecha: 'Aprox. 62-64 d.C.',
    teologia: 'La obra del Espíritu Santo, la expansión de la iglesia, la inclusión de los gentiles, y la fidelidad en la persecución.',
    jesus: 'El Señor resucitado y ascendido que continúa su obra a través del Espíritu Santo y la iglesia.'
  },
  // Epístolas paulinas
  {
    id: 'romanos',
    testamento: 'nuevo',
    nombre: 'Romanos',
    abreviatura: 'Ro',
    capitulos: 16,
    categoria: 'Epístolas paulinas',
    resumen: 'La exposición más completa del evangelio, explicando la justificación por la fe y sus implicaciones.',
    bosquejo: [
      'Introducción (1:1-17)',
      'La condenación universal (1:18-3:20)',
      'La justificación por la fe (3:21-5:21)',
      'La santificación (6-8)',
      'La soberanía de Dios: Israel y los gentiles (9-11)',
      'Aplicaciones prácticas (12-15:13)',
      'Conclusión y saludos (15:14-16:27)'
    ],
    contexto: 'Escrita a la iglesia en Roma, compuesta por judíos y gentiles, preparando su visita planeada.',
    autor: 'Pablo',
    fecha: 'Aprox. 57 d.C.',
    teologia: 'La justificación por la fe, la condenación universal, el poder del evangelio, y la vida en el Espíritu.',
    jesus: 'La justicia de Dios revelada, el segundo Adán, y el cumplimiento de la ley para justicia a todo aquel que cree.'
  },
  {
    id: '1corintios',
    testamento: 'nuevo',
    nombre: '1 Corintios',
    abreviatura: '1 Co',
    capitulos: 16,
    categoria: 'Epístolas paulinas',
    resumen: 'Carta que aborda varios problemas en la iglesia de Corinto, incluyendo divisiones, inmoralidad y desorden en el culto.',
    bosquejo: [
      'Introducción (1:1-9)',
      'Divisiones en la iglesia (1:10-4:21)',
      'Problemas morales (5-6)',
      'Respuestas a preguntas: matrimonio, libertad, adoración, dones (7-14)',
      'La resurrección (15)',
      'Conclusión (16)'
    ],
    contexto: 'Escrita a una iglesia urbana y cosmopolita luchando con la influencia de la cultura pagana.',
    autor: 'Pablo',
    fecha: 'Aprox. 55 d.C.',
    teologia: 'La unidad de la iglesia, la sabiduría de Dios vs. la sabiduría humana, el uso apropiado de la libertad cristiana, y la importancia del amor.',
    jesus: 'La sabiduría de Dios, el fundamento de la iglesia, la Pascua sacrificada por nosotros, y las primicias de la resurrección.'
  },
  {
    id: '2corintios',
    testamento: 'nuevo',
    nombre: '2 Corintios',
    abreviatura: '2 Co',
    capitulos: 13,
    categoria: 'Epístolas paulinas',
    resumen: 'Defensa del apostolado de Pablo y llamamiento a la reconciliación con él y Dios, enfatizando el ministerio de la nueva alianza.',
    bosquejo: [
      'Saludo y acción de gracias (1:1-11)',
      'Explicación del ministerio y defensa apostólica (1:12-7:16)',
      'La colecta para los santos (8-9)',
      'Defensa de la autoridad apostólica (10-13)'
    ],
    contexto: 'Escrita después de 1 Corintios para responder a las críticas contra Pablo y restaurar su relación con la iglesia.',
    autor: 'Pablo',
    fecha: 'Aprox. 55-56 d.C.',
    teologia: 'El ministerio de reconciliación, el poder en la debilidad, la generosidad, y la autoridad apostólica.',
    jesus: 'El "sí" de Dios a todas sus promesas, el modelo de sufrimiento para el ministerio, y la fuente de consuelo en la aflicción.'
  },
  {
    id: 'galatas',
    testamento: 'nuevo',
    nombre: 'Gálatas',
    abreviatura: 'Gá',
    capitulos: 6,
    categoria: 'Epístolas paulinas',
    resumen: 'Defensa apasionada de la libertad cristiana y la justificación por la fe contra el legalismo judaizante.',
    bosquejo: [
      'Introducción (1:1-10)',
      'Defensa del apostolado de Pablo (1:11-2:21)',
      'Justificación por la fe vs. la ley (3-4)',
      'La vida en el Espíritu: libertad y responsabilidad (5-6)'
    ],
    contexto: 'Escrita a iglesias en Galacia que estaban siendo influenciadas por maestros judaizantes.',
    autor: 'Pablo',
    fecha: 'Aprox. 48-49 d.C. (si a Galacia del sur) o 53-55 d.C. (si a Galacia del norte)',
    teologia: 'La justificación por la fe sola, la libertad cristiana, y la vida guiada por el Espíritu vs. la ley.',
    jesus: 'El libertador de la esclavitud de la ley, cuya cruz es central para la justificación por la fe.'
  },
  {
    id: 'efesios',
    testamento: 'nuevo',
    nombre: 'Efesios',
    abreviatura: 'Ef',
    capitulos: 6,
    categoria: 'Epístolas paulinas',
    resumen: 'Exposición de la iglesia como cuerpo de Cristo y de la unidad entre judíos y gentiles, con aplicaciones prácticas.',
    bosquejo: [
      'Saludos (1:1-2)',
      'Las bendiciones espirituales en Cristo (1:3-3:21)',
      'La vida cristiana práctica (4-6)'
    ],
    contexto: 'Posiblemente una carta circular para las iglesias de Asia Menor durante el primer encarcelamiento de Pablo en Roma.',
    autor: 'Pablo',
    fecha: 'Aprox. 60-62 d.C.',
    teologia: 'La unidad de la iglesia, la naturaleza del cuerpo de Cristo, y la batalla espiritual del creyente.',
    jesus: 'La cabeza de la iglesia, quien unifica judíos y gentiles, y la piedra angular del templo de Dios.'
  },
  {
    id: 'filipenses',
    testamento: 'nuevo',
    nombre: 'Filipenses',
    abreviatura: 'Fil',
    capitulos: 4,
    categoria: 'Epístolas paulinas',
    resumen: 'Carta de agradecimiento y gozo, animando a la firmeza en la fe y la humildad a ejemplo de Cristo.',
    bosquejo: [
      'Saludo y acción de gracias (1:1-11)',
      'Circunstancias personales de Pablo (1:12-26)',
      'Exhortación a la unidad y humildad (1:27-2:18)',
      'Planes para Timoteo y Epafrodito (2:19-30)',
      'Advertencias contra falsos maestros (3)',
      'Exhortaciones finales (4:1-9)',
      'Agradecimiento y conclusión (4:10-23)'
    ],
    contexto: 'Escrita durante el primer encarcelamiento de Pablo a una iglesia por la que sentía especial afecto.',
    autor: 'Pablo',
    fecha: 'Aprox. 60-62 d.C.',
    teologia: 'El gozo cristiano independiente de las circunstancias, la humildad de Cristo, y la ciudadanía celestial.',
    jesus: 'El modelo supremo de humildad y servicio, quien se despojó a sí mismo para nuestra salvación.'
  },
  {
    id: 'colosenses',
    testamento: 'nuevo',
    nombre: 'Colosenses',
    abreviatura: 'Col',
    capitulos: 4,
    categoria: 'Epístolas paulinas',
    resumen: 'Defensa de la supremacía y suficiencia de Cristo contra herejías incipientes.',
    bosquejo: [
      'Saludo (1:1-14)',
      'La supremacía de Cristo (1:15-23)',
      'El ministerio de Pablo (1:24-2:7)',
      'Advertencias contra falsas enseñanzas (2:8-23)',
      'La vida en Cristo (3-4)'
    ],
    contexto: 'Escrita para combatir una herejía que mezclaba elementos judaicos, filosóficos griegos y prácticas ascéticas.',
    autor: 'Pablo',
    fecha: 'Aprox. 60-62 d.C.',
    teologia: 'La deidad de Cristo, su preeminencia en la creación y la redención, y la vida en él como antídoto al legalismo y misticismo.',
    jesus: 'La imagen del Dios invisible, creador y sustentador de todas las cosas, en quien habita toda la plenitud de la deidad.'
  },
  {
    id: '1tesalonicenses',
    testamento: 'nuevo',
    nombre: '1 Tesalonicenses',
    abreviatura: '1 Ts',
    capitulos: 5,
    categoria: 'Epístolas paulinas',
    resumen: 'Aliento a una joven iglesia perseguida, con enseñanzas sobre la vida santa y la segunda venida de Cristo.',
    bosquejo: [
      'Saludo y acción de gracias (1)',
      'El ministerio de Pablo en Tesalónica (2)',
      'Preocupación y consuelo de Pablo (3)',
      'Exhortaciones a la santidad (4:1-12)',
      'La venida del Señor (4:13-5:11)',
      'Instrucciones finales (5:12-28)'
    ],
    contexto: 'Posiblemente la primera carta de Pablo, escrita a una iglesia joven enfrentando persecución.',
    autor: 'Pablo, Silvano y Timoteo',
    fecha: 'Aprox. 50-51 d.C.',
    teologia: 'La segunda venida de Cristo, la santificación, y el consuelo en medio de la persecución.',
    jesus: 'El Señor que volverá para resucitar a los muertos y reunir a su iglesia.'
  },
  {
    id: '2tesalonicenses',
    testamento: 'nuevo',
    nombre: '2 Tesalonicenses',
    abreviatura: '2 Ts',
    capitulos: 3,
    categoria: 'Epístolas paulinas',
    resumen: 'Aclaración sobre la segunda venida de Cristo, corrección de malentendidos, y exhortación a la fidelidad.',
    bosquejo: [
      'Saludo y acción de gracias (1:1-12)',
      'El día del Señor (2)',
      'Exhortaciones prácticas (3)'
    ],
    contexto: 'Escrita poco después de 1 Tesalonicenses para corregir malentendidos sobre la venida del Señor.',
    autor: 'Pablo, Silvano y Timoteo',
    fecha: 'Aprox. 51-52 d.C.',
    teologia: 'El día del Señor, el hombre de pecado, y la importancia del trabajo diligente mientras se espera el retorno de Cristo.',
    jesus: 'El Señor que vendrá a juzgar y ser glorificado en sus santos.'
  },
  {
    id: '1timoteo',
    testamento: 'nuevo',
    nombre: '1 Timoteo',
    abreviatura: '1 Ti',
    capitulos: 6,
    categoria: 'Epístolas paulinas',
    resumen: 'Instrucciones pastorales a Timoteo sobre el liderazgo de la iglesia, la sana doctrina y los diversos ministerios.',
    bosquejo: [
      'Saludo (1:1-2)',
      'Advertencias contra falsa doctrina (1:3-20)',
      'Instrucciones sobre la adoración (2)',
      'Cualificaciones para líderes (3)',
      'Instrucciones personales a Timoteo (4)',
      'Trato a diferentes grupos (5:1-6:2)',
      'Exhortaciones finales (6:3-21)'
    ],
    contexto: 'Escrita a Timoteo, dejado por Pablo en Éfeso para supervisar la iglesia.',
    autor: 'Pablo',
    fecha: 'Aprox. 62-64 d.C.',
    teologia: 'El orden y liderazgo en la iglesia, la importancia de la sana doctrina, y la lucha contra la apostasía.',
    jesus: 'El único mediador entre Dios y los hombres, quien se dio a sí mismo en rescate por todos.'
  },
  {
    id: '2timoteo',
    testamento: 'nuevo',
    nombre: '2 Timoteo',
    abreviatura: '2 Ti',
    capitulos: 4,
    categoria: 'Epístolas paulinas',
    resumen: 'El testamento final de Pablo, exhortando a Timoteo a la fidelidad en el ministerio frente a la persecución y la apostasía.',
    bosquejo: [
      'Saludo (1:1-2)',
      'Exhortación a la fidelidad (1:3-18)',
      'El buen soldado de Cristo (2)',
      'Advertencias sobre los últimos días (3)',
      'La carga solemne y reflexiones personales (4)'
    ],
    contexto: 'Escrita durante el segundo encarcelamiento de Pablo en Roma, poco antes de su ejecución.',
    autor: 'Pablo',
    fecha: 'Aprox. 66-67 d.C.',
    teologia: 'La perseverancia en la fe, la inspiración de las Escrituras, y la recompensa de la fidelidad.',
    jesus: 'El juez justo que dará la corona de justicia a los fieles, y cuya resurrección es central para el evangelio.'
  },
  {
    id: 'tito',
    testamento: 'nuevo',
    nombre: 'Tito',
    abreviatura: 'Tit',
    capitulos: 3,
    categoria: 'Epístolas paulinas',
    resumen: 'Instrucciones a Tito sobre el establecimiento de iglesias en Creta, enfatizando la sana doctrina y las buenas obras.',
    bosquejo: [
      'Saludo (1:1-4)',
      'Nombramiento de ancianos (1:5-16)',
      'Instrucciones para diferentes grupos (2)',
      'Recordatorio sobre la conducta cristiana (3)'
    ],
    contexto: 'Escrita a Tito, dejado en Creta para organizar iglesias y nombrar líderes.',
    autor: 'Pablo',
    fecha: 'Aprox. 62-64 d.C.',
    teologia: 'La relación entre la sana doctrina y las buenas obras, la gracia como fundamento de la ética cristiana.',
    jesus: 'El Salvador que se dio a sí mismo para redimir y purificar un pueblo para sí, celoso de buenas obras.'
  },
  {
    id: 'filemon',
    testamento: 'nuevo',
    nombre: 'Filemón',
    abreviatura: 'Flm',
    capitulos: 1,
    categoria: 'Epístolas paulinas',
    resumen: 'Carta personal intercediendo por un esclavo fugitivo convertido, ilustrando la reconciliación cristiana.',
    bosquejo: [
      'Saludo (1-3)',
      'Acción de gracias por Filemón (4-7)',
      'Intercesión por Onésimo (8-22)',
      'Conclusión (23-25)'
    ],
    contexto: 'Escrita durante el primer encarcelamiento de Pablo a Filemón, dueño del esclavo fugitivo Onésimo.',
    autor: 'Pablo',
    fecha: 'Aprox. 60-62 d.C.',
    teologia: 'El perdón, la reconciliación, y las implicaciones sociales del evangelio.',
    jesus: 'Aquel cuyo amor transforma las relaciones sociales y cuya obra reconciliadora es modelo para nosotros.'
  },
  // Epístolas generales
  {
    id: 'hebreos',
    testamento: 'nuevo',
    nombre: 'Hebreos',
    abreviatura: 'He',
    capitulos: 13,
    categoria: 'Epístolas generales',
    resumen: 'Exposición de la superioridad de Cristo sobre la antigua alianza, exhortando a la perseverancia en la fe.',
    bosquejo: [
      'La superioridad de Cristo (1:1-10:18)',
      'Exhortaciones a la fe y perseverancia (10:19-13:17)',
      'Conclusión (13:18-25)'
    ],
    contexto: 'Escrito a creyentes judíos tentados a volver al judaísmo debido a la persecución.',
    autor: 'Desconocido (propuestas: Pablo, Bernabé, Apolos, Priscila)',
    fecha: 'Aprox. 60-70 d.C.',
    teologia: 'La superioridad de Cristo sobre todo lo del AT, el sacerdocio de Cristo, y la necesidad de perseverar en la fe.',
    jesus: 'El sumo sacerdote perfecto según el orden de Melquisedec, mediador de un mejor pacto, y autor y consumador de la fe.'
  },
  {
    id: 'santiago',
    testamento: 'nuevo',
    nombre: 'Santiago',
    abreviatura: 'Stg',
    capitulos: 5,
    categoria: 'Epístolas generales',
    resumen: 'Exhortación a vivir la fe mediante obras prácticas, con énfasis en la sabiduría, el habla y la justicia social.',
    bosquejo: [
      'Saludo (1:1)',
      'Pruebas, tentaciones y la Palabra (1:2-27)',
      'Fe y obras: contra el favoritismo (2)',
      'El control de la lengua (3)',
      'Conflictos y ambiciones (4)',
      'Advertencias a los ricos y exhortación a la paciencia (5)'
    ],
    contexto: 'Escrito a creyentes judíos dispersos, posiblemente antes del concilio de Jerusalén.',
    autor: 'Santiago (probablemente el hermano del Señor)',
    fecha: 'Aprox. 44-49 d.C.',
    teologia: 'La fe genuina demostrada por obras, la importancia del control del habla, y la ética social cristiana.',
    jesus: 'Apenas mencionado directamente, pero su enseñanza moral (especialmente del Sermón del Monte) permea la carta.'
  },
  {
    id: '1pedro',
    testamento: 'nuevo',
    nombre: '1 Pedro',
    abreviatura: '1 P',
    capitulos: 5,
    categoria: 'Epístolas generales',
    resumen: 'Aliento a creyentes sufriendo persecución, enfatizando la esperanza en Cristo y la conducta ejemplar.',
    bosquejo: [
      'Saludo (1:1-2)',
      'La esperanza viva de los creyentes (1:3-12)',
      'Exhortación a la santidad (1:13-2:10)',
      'Viviendo como extranjeros en el mundo (2:11-4:11)',
      'Sufriendo como cristianos (4:12-5:11)',
      'Conclusión (5:12-14)'
    ],
    contexto: 'Escrito a creyentes dispersos en Asia Menor enfrentando persecución creciente.',
    autor: 'Pedro el apóstol',
    fecha: 'Aprox. 62-64 d.C.',
    teologia: 'La esperanza en medio del sufrimiento, la identidad del pueblo de Dios, y el testimonio cristiano en una sociedad hostil.',
    jesus: 'El ejemplo supremo de sufrimiento injusto, portador de nuestros pecados, y la piedra viva rechazada por los hombres pero escogida por Dios.'
  },
  {
    id: '2pedro',
    testamento: 'nuevo',
    nombre: '2 Pedro',
    abreviatura: '2 P',
    capitulos: 3,
    categoria: 'Epístolas generales',
    resumen: 'Advertencia contra los falsos maestros y burladores, con énfasis en el crecimiento espiritual y la expectativa de la venida del Señor.',
    bosquejo: [
      'Saludo (1:1-2)',
      'La identidad y responsabilidad cristiana (1:3-21)',
      'Advertencia contra los falsos maestros (2)',
      'La certeza de la segunda venida (3)'
    ],
    contexto: 'Escrito como testamento final de Pedro, combatiendo el escepticismo sobre la segunda venida y la inmoralidad.',
    autor: 'Pedro el apóstol',
    fecha: 'Aprox. 65-68 d.C.',
    teologia: 'La verdad revelada contra la herejía, el crecimiento en conocimiento y virtud, y la esperanza escatológica.',
    jesus: 'El Señor que vendrá como ladrón en la noche, a cuyo regreso los elementos se derretirán con fuego ardiente.'
  },
  {
    id: '1juan',
    testamento: 'nuevo',
    nombre: '1 Juan',
    abreviatura: '1 Jn',
    capitulos: 5,
    categoria: 'Epístolas generales',
    resumen: 'Defensa de la verdadera fe cristológica, enfatizando el amor, la verdad y la seguridad de la salvación.',
    bosquejo: [
      'Prólogo: la Palabra de vida (1:1-4)',
      'Andar en la luz: comunión con Dios (1:5-2:29)',
      'Hijos de Dios: amor y obediencia (3-4)',
      'La fe victoriosa (5)'
    ],
    contexto: 'Escrito para contrarrestar herejías que negaban la humanidad de Cristo y para promover la comunión genuina.',
    autor: 'Juan el apóstol',
    fecha: 'Aprox. 85-95 d.C.',
    teologia: 'La encarnación, el amor como prueba de la salvación, y la vida eterna en Cristo.',
    jesus: 'La Palabra de vida encarnada, el Hijo de Dios venido en carne, y la propiciación por nuestros pecados.'
  },
  {
    id: '2juan',
    testamento: 'nuevo',
    nombre: '2 Juan',
    abreviatura: '2 Jn',
    capitulos: 1,
    categoria: 'Epístolas generales',
    resumen: 'Breve carta exhortando a andar en la verdad y el amor, y advirtiendo contra los falsos maestros.',
    bosquejo: [
      'Saludo (1-3)',
      'Andar en la verdad y el amor (4-6)',
      'Advertencia contra los engañadores (7-11)',
      'Conclusión (12-13)'
    ],
    contexto: 'Escrito a una "señora elegida" (posiblemente una iglesia local) enfrentando amenazas de falsos maestros.',
    autor: 'Juan el apóstol',
    fecha: 'Aprox. 85-95 d.C.',
    teologia: 'El equilibrio entre verdad y amor, y el discernimiento contra el error.',
    jesus: 'El Cristo venido en carne, cuya doctrina debe ser preservada contra los engañadores.'
  },
  {
    id: '3juan',
    testamento: 'nuevo',
    nombre: '3 Juan',
    abreviatura: '3 Jn',
    capitulos: 1,
    categoria: 'Epístolas generales',
    resumen: 'Carta personal alabando la hospitalidad de Gayo, criticando a Diótrefes, y recomendando a Demetrio.',
    bosquejo: [
      'Saludo a Gayo (1-4)',
      'Elogio de la hospitalidad de Gayo (5-8)',
      'Crítica a Diótrefes (9-10)',
      'Recomendación de Demetrio (11-12)',
      'Conclusión (13-15)'
    ],
    contexto: 'Escrito a Gayo, un creyente fiel que recibía misioneros a pesar de la oposición de un líder dominante.',
    autor: 'Juan el apóstol',
    fecha: 'Aprox. 85-95 d.C.',
    teologia: 'La importancia de la hospitalidad cristiana, el peligro del liderazgo egoísta, y el apoyo a los ministros del evangelio.',
    jesus: 'No mencionado directamente, pero su carácter se refleja en la ética y valores promovidos en la carta.'
  },
  {
    id: 'judas',
    testamento: 'nuevo',
    nombre: 'Judas',
    abreviatura: 'Jud',
    capitulos: 1,
    categoria: 'Epístolas generales',
    resumen: 'Vehemente advertencia contra falsos maestros que promueven la inmoralidad, exhortando a contender por la fe.',
    bosquejo: [
      'Saludo (1-2)',
      'Ocasión de la carta: falsos maestros (3-4)',
      'Ejemplos de juicio divino (5-7)',
      'Descripción de los falsos maestros (8-16)',
      'Exhortaciones a los creyentes (17-23)',
      'Doxología (24-25)'
    ],
    contexto: 'Escrito para advertir contra infiltrados libertinos que distorsionaban la gracia.',
    autor: 'Judas, hermano de Santiago (probablemente hermano del Señor)',
    fecha: 'Aprox. 65-80 d.C.',
    teologia: 'La importancia de defender la fe apostólica, el juicio divino contra la apostasía, y la perseverancia en la santidad.',
    jesus: 'El único Soberano y Señor que puede guardar a los creyentes de caer y presentarlos sin mancha ante su gloria.'
  },
  // Apocalíptico
  {
    id: 'apocalipsis',
    testamento: 'nuevo',
    nombre: 'Apocalipsis',
    abreviatura: 'Ap',
    capitulos: 22,
    categoria: 'Apocalíptico',
    resumen: 'Visión profética y apocalíptica que revela la victoria final de Cristo y su iglesia sobre todas las fuerzas del mal.',
    bosquejo: [
      'Prólogo (1:1-8)',
      'Visión de Cristo y mensajes a las siete iglesias (1:9-3:22)',
      'Visiones del trono celestial (4-5)',
      'Los siete sellos (6-8:1)',
      'Las siete trompetas (8:2-11:19)',
      'Conflicto cósmico (12-14)',
      'Las siete copas de ira (15-16)',
      'La caída de Babilonia (17-18)',
      'El retorno de Cristo y el juicio final (19-20)',
      'La nueva creación (21-22:5)',
      'Epílogo (22:6-21)'
    ],
    contexto: 'Escrito durante la persecución de Domiciano para animar a los creyentes con la certeza de la victoria final de Cristo.',
    autor: 'Juan el apóstol',
    fecha: 'Aprox. 95 d.C.',
    teologia: 'La soberanía de Dios en la historia, la victoria final de Cristo, el juicio divino, y la esperanza de la nueva creación.',
    jesus: 'El Cordero inmolado, el Rey de reyes y Señor de señores, el Alfa y la Omega, y el victorioso sobre todos sus enemigos.'
  }
];

// Obtener libros por testamento
export const getBooksByTestament = (testamento: 'antiguo' | 'nuevo'): BibleBook[] => {
  return bibleBooks.filter(book => book.testamento === testamento);
};

// Encontrar un libro por ID
export const getBookById = (id: string): BibleBook | undefined => {
  return bibleBooks.find(book => book.id === id);
};
