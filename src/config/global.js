export default {
  global: {
    componenteFormativo: 'Aspectos técnicos de los sistemas de aguas',
    descripcionCurso:
      'La operación de sistemas de tratamiento de aguas tanto potables como residuales, tienen un rol importante en cuanto a la disminución de los impactos proferidos por uso, es por ello que este programa de formación busca afianzar conocimientos para mejorar los procesos de tratamiento y el uso eficiente del recurso hídrico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistemas de tratamiento de aguas de consumo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Captación y tratamiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Distribución',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Saneamiento básico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: ' Características del sistema',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de tratamiento',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis DOFA',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Equipos e insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Costos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Manejo de sustancias químicas',
            hash: 't_4_2',
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
      tema: 'Sistemas de tratamiento de aguas de consumo',
      referencia:
        'Instituto Costarricense de acueductos y alcantarillados. (2021). Conozca el proceso de potabilización del agua.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jMaV8EASe48',
    },
    {
      tema: 'Sistemas de tratamiento de aguas de consumo',
      referencia:
        'Instituto Costarricense de acueductos y alcantarillados. (2018). Planta de Tratamiento de Aguas Residuales LOS TAJOS.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=i5tOXm96VGg',
    },
    {
      tema: 'Sistemas de tratamiento de aguas de consumo',
      referencia: 'Sandoval Erazo, W.R.  (2017). Tomas de Agua.',
      tipo: 'Documento',
      link:
        'https://www.researchgate.net/profile/Washington-Sandoval-Erazo/publication/317946721_Tomas_de_Agua/links/59525919aca272a343db39ce/Tomas-de-Agua.pdf',
    },
    {
      tema: 'Manejo de sustancias químicas',
      referencia:
        'Carl Roth.  (2019).  Formato de ficha de datos de seguridad conforme al. Reglamento (CE) n.º 1907/2006 (REACH). Sulfato de aluminio y potasio dodecahidrato ≥99 %, Ph.Eur.',
      tipo: 'Documento',
      link:
        'https://www.carlroth.com/medias/SDB-CN78-ES-ES.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wyMzYwNTZ8YXBwbGljYXRpb24vcGRmfHNlY3VyaXR5RGF0YXNoZWV0cy9oNDkvaGI2LzkwNjkxNzk0MDQzMTgucGRmfDQ1MDk1ZWNlMjUwMjA1YTVhZTdkZjEzMzhkZjJkODQ0MzQzNmY1YmNjN2ZhOTExMDdhNTZmNmQxMGZkMTczNDg',
    },
  ],
  glosario: [
    {
      termino: 'Coloide',
      significado:
        'Es un sistema físico-químico compuesto por dos fases: una continua, normalmente fluida, y otra dispersa en forma de partículas; por lo general sólidas, de tamaño mesoscópico (a medio camino entre los mundos macroscópico y microscópico). Así, se trata de partículas que no son apreciables a simple vista, pero mucho más grandes que cualquier molécula.',
    },
    {
      termino: 'Cuenca hidrográfica',
      significado:
        'Es un sistema, es una unidad geográfica e hidrológica, formada por un río principal y todos sus territorios asociados entre el origen del río y su desembocadura.',
    },
    {
      termino: 'DOFA',
      significado:
        'El análisis DOFA permite elaborar una matriz que identifica unos factores internos externos que intervienen en el desempeño de una empresa. Las variables internas  son Fortalezas y Debilidades, las externas son Oportunidades y Amenazas.',
    },
    {
      termino: 'Gradiente de velocidad',
      significado:
        'Es una media de la intensidad de mezclado en los procesos de dispersión de coagulante y de floculación.',
    },
    {
      termino: 'PTAP',
      significado: 'Planta de tratamiento de agua potable.',
    },
    {
      termino: 'PTAR',
      significado: 'Planta de tratamiento de aguas residuales.',
    },
    {
      termino: 'Saneamiento Básico',
      significado:
        'Es el conjunto de técnicas que permite eliminar higiénicamente residuos sólidos, excretas y aguas residuales, para tener un ambiente limpio y sano.',
    },
    {
      termino: 'Vertimientos ',
      significado:
        'Es la descarga final a un cuerpo de agua, a un alcantarillado o al suelo, de elementos, sustancias o compuestos contendidos en un medio líquido.',
    },
  ],
  referencias: [
    {
      referencia:
        'Apéndice -9. 2016. Pantas de Tratamiento de Aguas Residuales. Volumen III: Informe Auxiliar.',
      link: 'https://openjicareport.jica.go.jp/pdf/11685211_09.PDF',
    },
    {
      referencia:
        'Hotmart. 2021. ¿Qué es el análisis FODA y cómo utilizarlo a tu favor?.',
      link: 'https://blog.hotmart.com/es/analisis-dofa/#',
    },
    {
      referencia:
        'Merino, M., Pérez, J. 2021. Definición de DOFA. Publicado: 2017. Actualizado: 2021.',
      link: 'https://definicion.de/dofa/',
    },
    {
      referencia: 'SANDOVAL, W. 2017. Tomas de agua.',
      link:
        'https://www.researchgate.net/profile/Washington-Sandoval-Erazo/publication/317946721_Tomas_de_Agua/links/59525919aca272a343db39ce/Tomas-de-Agua.pdf',
    },
    {
      referencia:
        'Troconos, A. 2010. Tratamiento de Aguas Residuales. Belzona Inc. Primera Edición.',
      link: 'https://www.belzona.com/es/solution_maps/wastewater/money_map.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Karly Cediel',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Adriana Arcelia López López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Daniel Polanco Muñoz',
        cargo: 'Validación de diseño',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
