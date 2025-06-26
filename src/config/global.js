export default {
  global: {
    Name:
      'Monitoreo y verificación de la Implementación de BPG en Ganadería Bovina de Carne',
    Description:
      'El componente formativo capacita en la supervisión de Buenas Prácticas Ganaderas (BPG) en bovinos de carne, enfocándose en sanidad, bienestar animal, sostenibilidad, trazabilidad y normativas. Se abordan conceptos, planes de implementación, monitoreo, indicadores de gestión, crisis sanitarias y ambientales, y planes de contingencia. Incluye actividades didácticas, material complementario, glosario y referencias para reforzar el aprendizaje.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Buenas Prácticas Ganaderas de carne bovina (BPG)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de implementación de las BPG de carne bovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia del Plan de Implementación de BPG',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Normatividad del Plan de Implementación de BPG',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Tipos de monitoreo en las Buenas Prácticas Ganaderas de carne',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Procedimientos de monitoreo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Metodologías de monitoreo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Técnicas de monitoreo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de indicadores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características de los indicadores de gestión',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Crisis sanitarias y ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de crisis',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Enfermedades de control oficial en bovinos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Planes de emergencia',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Contingencia en el monitoreo de Buenas Prácticas Ganaderas (BPG)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Función principal de las contingencias',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Rutas de contingencia en el monitoreo de BPG en bovinos de carne',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Tipos de contingencia',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Protocolos de contingencia',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Acciones y estrategias',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72312177_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Seguimiento y evaluación',
      referencia:
        'Mtra. Marcia ATP. (2021). PEMC. Seguimiento y evaluación. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Nnz2yv27PCo',
    },
    {
      tema: 'Contingencia',
      referencia:
        'Procem Consultores. (2020). Cómo elaborar un plan de contingencia. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HOEPtwPPRaw',
    },
    {
      tema: 'Indicadores de gestión',
      referencia:
        'Procem Consultores. (2019). ¿Qué son los indicadores de gestión?. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ON2_v7GrDE0',
    },
    {
      tema: 'Trazabilidad',
      referencia:
        'La finca de hoy. (2019). Trazabilidad en producción cárnica. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y65Fr10l3NM',
    },
  ],
  glosario: [
    {
      termino: 'Contingencia',
      significado:
        'es un evento que podría acontecer en el futuro, con posibles consecuencias positivas o negativas para la empresa.',
    },
    {
      termino: 'Gestión',
      significado:
        'operaciones que se realizan para administrar un negocio o una empresa.',
    },
    {
      termino: 'ICA',
      significado:
        'Instituto Colombiano Agropecuario, entidad pública del orden nacional con personería jurídica, autonomía administrativa y patrimonio independiente, perteneciente al Sistema Nacional de Ciencia y Tecnología, adscrita al Ministerio de Agricultura y Desarrollo Rural.',
    },
    {
      termino: 'Impacto',
      significado:
        'consecuencia planeada o imprevista con efectos en un proyecto.',
    },
    {
      termino: 'Indicador',
      significado:
        'instrumento que suministra información sobre una condición o logro de una cierta situación, actividad o resultado.',
    },
    {
      termino: 'Inocuo',
      significado: 'que no hace daño físico o moral.',
    },
    {
      termino: 'Metodología',
      significado:
        'hace referencia al conjunto de procedimientos racionales utilizados para alcanzar el objetivo o la gama de objetivos.',
    },
    {
      termino: 'Riesgo',
      significado:
        'combinación de la probabilidad de que resulte un evento y sus consecuencias negativas.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'serie de procedimientos que permiten seguir el proceso de evolución de un producto en cada una de sus etapas de producción.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'es un análisis que tiene por finalidad conocer la probabilidad que existe de poder llevar a cabo un proyecto con éxito.',
    },
  ],
  referencias: [
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. (2019). Política nacional para mejorar la competitividad del sector lácteo colombiano. ',
      link:
        'https://www.minagricultura.gov.co/ministerio/direcciones/Documents/d.angie/conpes%203675.pdf',
    },
    {
      referencia:
        'Corrientes Portal Turístico Provincial. (s.f.). Ganadería de Corrientes. ',
      link: 'http://www.corrientes.com.ar/provincia/ganaderia.php',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos. (s.f.). Buenas prácticas ganaderas. ',
      link:
        'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas#:~:text=Las%20Buenas%20Pr%C3%A1cticas%20Ganaderas%20(BPG,que%20trabajan%20en%20la%20explotaci%C3%B3n',
    },
    {
      referencia: 'García, E. (2019). Ganadería de Sinaloa. Luz Noticias. ',
      link:
        'https://www.luznoticias.mx/agro/ganaderia-de-sinaloa-fuera-del-programa-creditos-a-la-palabra/57574',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s.f.). Reglamentación sobre las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y porcino. ',
      link:
        'https://www.ica.gov.co/getdoc/016f3c96-a458-4fa6-ae96-41d18b2221f5/requisitos-sanitarios-y-de-inocuidad-en-la-producc.aspx',
    },
    {
      referencia:
        'Metro Ecuador. (2019). La "ganadería climáticamente inteligente" se consolida en Ecuador. Contexto Ganadero. ',
      link:
        'https://www.contextoganadero.com/reportaje/la-ganaderia-climaticamente-inteligente-se-consolida-en-ecuador',
    },
    {
      referencia:
        'OnCuba. (2018). Ganadería cubana: más leche, pero muy lejos de satisfacer la demanda. OnCuba News. ',
      link:
        'https://oncubanews.com/cuba/ganaderia-cubana-mas-leche-pero-muy-lejos-de-satisfacer-la-demanda/',
    },
    {
      referencia:
        'Rangel, V. (2015). Gestión ambiental en el sector ganadero doble propósito de los pequeños productores en Maicao, Colombia. Revista Espacios, 41(27). ',
      link: 'https://www.revistaespacios.com/a20v41n27/a20v41n27p03.pdf',
    },
    {
      referencia:
        'Resolución 002341 de 2007. (2007, agosto 23). Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino destinado al sacrificio para consumo humano. Instituto Colombiano Agropecuario. ',
      link:
        'https://www.ica.gov.co/getattachment/0b5de556-cb4a-43a8-a27a-cd9a2064b1ab/2341.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Peéz',
          cargo: 'Experta Temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernandez Jaramillo',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
