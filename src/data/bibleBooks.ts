
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
  }
  // Nota: Se incluirían todos los 66 libros de la Biblia en un caso real
];

// Obtener libros por testamento
export const getBooksByTestament = (testamento: 'antiguo' | 'nuevo'): BibleBook[] => {
  return bibleBooks.filter(book => book.testamento === testamento);
};

// Encontrar un libro por ID
export const getBookById = (id: string): BibleBook | undefined => {
  return bibleBooks.find(book => book.id === id);
};
