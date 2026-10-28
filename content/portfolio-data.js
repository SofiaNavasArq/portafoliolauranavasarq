/* Contenido del portafolio de Laura Sofía Navas Castañeda.
   Para agregar o editar proyectos, modifica este archivo (las rutas son relativas a la raíz del sitio).
   - categoria: res | ins | com | fin (ver "categorias")
   - hero: imagen principal · renders: en orden (el primero es el hero) · planos: dibujos técnicos */
window.LSN_PORTFOLIO = {
  "perfil": {
    "nombre": "Laura Sofía Navas Castañeda",
    "titulo": "Arquitecta · Arquitectura y Diseño Interior",
    "email": "laura.sofianavas@gmail.com",
    "telefono": "311 877 8973",
    "bio": "Arquitecta con sólida trayectoria en el desarrollo de proyectos de interiorismo, especificación técnica de acabados y gestión comercial de alto nivel. Con experiencia comprobada en asesoría consultiva B2B/B2C, conceptualización de espacios tridimensionales y articulación de requerimientos con clientes, proveedores y equipos interdisciplinarios. Destacada por un riguroso dominio de herramientas digitales de vanguardia para la visualización fotorrealista y por una sólida capacidad para liderar proyectos desde la fase creativa hasta su ejecución logística y presupuestal. Interesada en aportar visión estratégica, sensibilidad estética y rigor técnico en la estructuración y coordinación de proyectos de arquitectura y diseño interior de alta gama.",
    "retrato": "content/00_perfil/laura-navas_retrato.png",
    "educacion": [
      {
        "periodo": "2019 - 2024",
        "titulo": "Profesional en Arquitectura",
        "institucion": "Facultad de Artes y Diseño, Universidad Jorge Tadeo Lozano (Programa de Arquitectura y Hábitat)"
      },
      {
        "periodo": "2023",
        "titulo": "Introducción al Diseño Interior",
        "institucion": "Conocimientos fundamentales para el diseño interior"
      },
      {
        "periodo": "2024",
        "titulo": "Generación de ideas innovadoras y design thinking",
        "institucion": "Instituto SENA, Colombia"
      }
    ],
    "competencias": {
      "Modelado y BIM": [
        "AutoCAD",
        "Revit",
        "Sketchup",
        "Rhinoceros"
      ],
      "Renderizado y visualización": [
        "Enscape",
        "Lumion",
        "Twinmotion",
        "D5",
        "Blender",
        "Grasshopper"
      ],
      "Postproducción y gráfica": [
        "Photoshop",
        "Illustrator",
        "After Effects",
        "Premiere"
      ]
    }
  },
  "categorias": [
    {
      "id": "res",
      "n": "01",
      "name": "Residencial",
      "short": "Residencial",
      "bg": "#D8BBA2",
      "fg": "#2A1F1A",
      "accent": "#A9512F"
    },
    {
      "id": "ins",
      "n": "02",
      "name": "Institucional",
      "short": "Institucional",
      "bg": "#5A3424",
      "fg": "#F5EFE6",
      "accent": "#D8BBA2"
    },
    {
      "id": "com",
      "n": "03",
      "name": "Comercial",
      "short": "Comercial",
      "bg": "#A9512F",
      "fg": "#F5EFE6",
      "accent": "#F5EFE6"
    },
    {
      "id": "fin",
      "n": "04",
      "name": "Sector financiero e inmobiliario",
      "short": "Financiero",
      "bg": "#2A1F1A",
      "fg": "#F5EFE6",
      "accent": "#C9A88F"
    }
  ],
  "proyectos": [
    {
      "id": "casa-marazul",
      "nombre": "Casa Marazul",
      "ubicacion": "Cartagena",
      "categoria": "res",
      "tipo": "Diseño interior",
      "descripcion": "Proyecto de diseño interior enfocado en la selección y combinación de materiales, revestimientos y acabados para una vivienda de estilo contemporáneo. La propuesta abarca las zonas sociales y privadas, cocina, baños, cuarto de ropas y áreas exteriores, incluyendo la piscina. A través de la visualización 3D, se exploraron diferentes paletas de materiales, texturas y ambientes, buscando una estética equilibrada, cálida y elegante, en armonía con la arquitectura de la vivienda.",
      "hero": {
        "file": "content/01_residencial/01_casa-marazul/render/01_piscina-fachada.jpg",
        "alt": "Render exterior: piscina y volúmenes blancos de la casa, cielo despejado",
        "w": 1573,
        "h": 1000
      },
      "renders": [
        {
          "file": "content/01_residencial/01_casa-marazul/render/01_piscina-fachada.jpg",
          "alt": "Render exterior: piscina y volúmenes blancos de la casa, cielo despejado",
          "w": 1573,
          "h": 1000
        },
        {
          "file": "content/01_residencial/01_casa-marazul/render/02_sala-social.jpg",
          "alt": "Render de sala social amplia con ventanales y lámpara dorada",
          "w": 1096,
          "h": 704
        },
        {
          "file": "content/01_residencial/01_casa-marazul/render/03_bano.jpg",
          "alt": "Render de baño con lavamanos en piedra, ducha y revestimiento en tonos tierra",
          "w": 1162,
          "h": 867
        },
        {
          "file": "content/01_residencial/01_casa-marazul/render/04_sala-cocina-comedor.jpg",
          "alt": "Render de sala, cocina y comedor integrados con vista a jardín (usado en la página de contenido del PDF)",
          "w": 1536,
          "h": 1024
        },
        {
          "file": "content/01_residencial/01_casa-marazul/render/05_cocina-comedor.jpg",
          "alt": "Render de cocina con barra, comedor y sala abiertos al exterior (usado en el divisor Residencial del PDF)",
          "w": 1536,
          "h": 1024
        }
      ],
      "planos": [
        {
          "file": "content/01_residencial/01_casa-marazul/plano/planta-general.png",
          "alt": "Planta arquitectónica general de la vivienda y zonas exteriores",
          "w": 805,
          "h": 405
        }
      ]
    },
    {
      "id": "casa-gaia",
      "nombre": "Casa Gaia",
      "ubicacion": "Barichara",
      "categoria": "res",
      "tipo": "Diseño interior residencial",
      "descripcion": "Proyecto residencial que integra una estética contemporánea con elementos tradicionales de la arquitectura regional. La propuesta combina materiales naturales, texturas cálidas, tonos tierra y detalles en madera, creando espacios acogedores que dialogan con el entorno y resaltan la esencia del lugar. La propuesta busca crear una experiencia habitable que combine confort, identidad y sensibilidad estética, evocando la calidez y el encanto arquitectónico de Barichara.",
      "hero": {
        "file": "content/01_residencial/02_casa-gaia/render/01_terraza-horno.jpg",
        "alt": "Render de terraza con puerta azul, horno de leña y comedor en madera al atardecer",
        "w": 1458,
        "h": 1079
      },
      "renders": [
        {
          "file": "content/01_residencial/02_casa-gaia/render/01_terraza-horno.jpg",
          "alt": "Render de terraza con puerta azul, horno de leña y comedor en madera al atardecer",
          "w": 1458,
          "h": 1079
        },
        {
          "file": "content/01_residencial/02_casa-gaia/render/02_sala-doble-altura.jpg",
          "alt": "Render de sala de doble altura con cocina y comedor, madera y tonos tierra",
          "w": 1288,
          "h": 782
        },
        {
          "file": "content/01_residencial/02_casa-gaia/render/03_habitacion-persianas-azules.jpg",
          "alt": "Render de habitación con techo en madera y persianas azules",
          "w": 1085,
          "h": 711
        }
      ],
      "planos": [
        {
          "file": "content/01_residencial/02_casa-gaia/plano/plantas-implantacion.png",
          "alt": "Plantas arquitectónicas, implantación y cuadro de áreas",
          "w": 827,
          "h": 636
        }
      ]
    },
    {
      "id": "biblioteca-residencial",
      "nombre": "Biblioteca Residencial",
      "ubicacion": "La Calera",
      "categoria": "res",
      "tipo": "Renovación y ampliación de terraza",
      "descripcion": "El proyecto consistió en la renovación y ampliación de una terraza existente para transformarla en una biblioteca privada, concebida como un espacio de lectura, trabajo y descanso integrado a la vivienda. La intervención buscó aprovechar el potencial del área mediante una nueva configuración espacial que favorece la iluminación natural, las visuales hacia el entorno exterior y la conexión entre interior y paisaje. El diseño incorpora mobiliario de líneas contemporáneas, estanterías integradas, una zona de lectura y un área de trabajo, creando un ambiente funcional, cálido y confortable.",
      "hero": {
        "file": "content/01_residencial/03_biblioteca-residencial/render/01_biblioteca-general.jpg",
        "alt": "Render de biblioteca privada con estanterías integradas, zona de lectura y escritorio",
        "w": 1407,
        "h": 1118
      },
      "renders": [
        {
          "file": "content/01_residencial/03_biblioteca-residencial/render/01_biblioteca-general.jpg",
          "alt": "Render de biblioteca privada con estanterías integradas, zona de lectura y escritorio",
          "w": 1407,
          "h": 1118
        },
        {
          "file": "content/01_residencial/03_biblioteca-residencial/render/02_zona-lectura.jpg",
          "alt": "Render de zona de lectura con sofá curvo y estanterías",
          "w": 985,
          "h": 784
        },
        {
          "file": "content/01_residencial/03_biblioteca-residencial/render/03_zona-trabajo.jpg",
          "alt": "Render de zona de trabajo con claraboya y ventanal al paisaje",
          "w": 1266,
          "h": 1008
        }
      ],
      "planos": [
        {
          "file": "content/01_residencial/03_biblioteca-residencial/plano/planta-detalle.png",
          "alt": "Planta técnica de la intervención",
          "w": 767,
          "h": 421
        }
      ]
    },
    {
      "id": "unidad-cuidado-animal",
      "nombre": "Unidad de Cuidado Animal",
      "ubicacion": "Engativá, Bogotá",
      "categoria": "ins",
      "tipo": "Renovación arquitectónica",
      "descripcion": "Proyecto de renovación arquitectónica de las instalaciones de la Unidad de Cuidado Animal de Engativá, enfocado en el mejoramiento de las condiciones espaciales y funcionales de las áreas destinadas al alojamiento de perros. La intervención contempló la remodelación de las perreras mediante superficies cerámicas de fácil limpieza, cerramientos metálicos y una configuración espacial que favorece la organización, la ventilación y el ingreso de iluminación natural. La selección de materiales resistentes y de bajo mantenimiento responde a las necesidades de higiene, durabilidad y uso intensivo propias de este tipo de equipamientos.",
      "hero": {
        "file": "content/02_institucional/01_unidad-cuidado-animal/render/01_pasillo-perreras.jpg",
        "alt": "Render de pasillo central de perreras con cerramientos metálicos y estructura verde",
        "w": 1412,
        "h": 1114
      },
      "renders": [
        {
          "file": "content/02_institucional/01_unidad-cuidado-animal/render/01_pasillo-perreras.jpg",
          "alt": "Render de pasillo central de perreras con cerramientos metálicos y estructura verde",
          "w": 1412,
          "h": 1114
        },
        {
          "file": "content/02_institucional/01_unidad-cuidado-animal/render/02_perreras-frente.jpg",
          "alt": "Render de perreras con perros, cerramientos metálicos y luz natural",
          "w": 1278,
          "h": 999
        },
        {
          "file": "content/02_institucional/01_unidad-cuidado-animal/render/03_interior-perrera.jpg",
          "alt": "Render de interior de perrera con cerámica clara y un perro pastor alemán",
          "w": 1178,
          "h": 856
        }
      ],
      "planos": []
    },
    {
      "id": "banos-institucionales",
      "nombre": "Remodelación Baños Institucionales",
      "ubicacion": "",
      "categoria": "ins",
      "tipo": "Renovación de baños",
      "descripcion": "Proyecto de renovación de baños institucionales orientado al mejoramiento de las condiciones funcionales, estéticas y de mantenimiento de los espacios sanitarios. La propuesta contempla la actualización de acabados mediante revestimientos cerámicos en tonos grises, divisiones sanitarias de líneas limpias y mobiliario de lavamanos de diseño contemporáneo. La selección de materiales resistentes y de fácil limpieza responde a las exigencias de uso frecuente propias de este tipo de espacios.",
      "hero": {
        "file": "content/02_institucional/02_banos-institucionales/render/01_lavamanos-cubiculos.jpg",
        "alt": "Render de baño institucional con lavamanos corrido y divisiones sanitarias",
        "w": 1503,
        "h": 1046
      },
      "renders": [
        {
          "file": "content/02_institucional/02_banos-institucionales/render/01_lavamanos-cubiculos.jpg",
          "alt": "Render de baño institucional con lavamanos corrido y divisiones sanitarias",
          "w": 1503,
          "h": 1046
        },
        {
          "file": "content/02_institucional/02_banos-institucionales/render/02_divisiones-sanitarias.jpg",
          "alt": "Render de cubículos sanitarios con revestimiento cerámico gris",
          "w": 1593,
          "h": 801
        },
        {
          "file": "content/02_institucional/02_banos-institucionales/render/03_area-lavamanos.jpg",
          "alt": "Render de zona de lavamanos y cubículo con revestimiento gris",
          "w": 1200,
          "h": 840
        }
      ],
      "planos": [
        {
          "file": "content/02_institucional/02_banos-institucionales/plano/planta-bano-mujeres.png",
          "alt": "Planta tipo del baño de mujeres con medidas",
          "w": 567,
          "h": 376
        }
      ]
    },
    {
      "id": "gimnasio-reps",
      "nombre": "Gimnasio REPS",
      "ubicacion": "",
      "categoria": "com",
      "tipo": "Diseño interior",
      "descripcion": "Proyecto de diseño interior para un gimnasio, enfocado en la creación de un ambiente contemporáneo, dinámico y funcional, que integra las áreas de entrenamiento con espacios complementarios de atención, exhibición y consumo. La propuesta se desarrolla a partir de una paleta de materiales y colores que combina tonos neutros, acabados tipo madera y acentos en púrpura, generando una identidad visual distintiva y coherente con el carácter deportivo del establecimiento. La selección de revestimientos, mobiliario, iluminación suspendida y elementos gráficos contribuye a consolidar una atmósfera moderna, energética y atractiva para los usuarios.",
      "hero": {
        "file": "content/03_comercial/01_gimnasio-reps/render/01_zona-entrenamiento.jpg",
        "alt": "Render de zona de entrenamiento con equipos morados y acabados tipo madera",
        "w": 1581,
        "h": 995
      },
      "renders": [
        {
          "file": "content/03_comercial/01_gimnasio-reps/render/01_zona-entrenamiento.jpg",
          "alt": "Render de zona de entrenamiento con equipos morados y acabados tipo madera",
          "w": 1581,
          "h": 995
        },
        {
          "file": "content/03_comercial/01_gimnasio-reps/render/02_recepcion-tienda.jpg",
          "alt": "Render de área de atención y exhibición con gráficos \"Your fitness journey starts here\"",
          "w": 1422,
          "h": 897
        },
        {
          "file": "content/03_comercial/01_gimnasio-reps/render/03_banos-marmol-negro.jpg",
          "alt": "Render de baños con mármol negro, espejos ovalados e iluminación LED",
          "w": 1103,
          "h": 914
        }
      ],
      "planos": []
    },
    {
      "id": "lisan-motors",
      "nombre": "Concesionario Lisan Motors",
      "ubicacion": "",
      "categoria": "com",
      "tipo": "Remodelación arquitectónica",
      "descripcion": "Propuesta de remodelación arquitectónica para el concesionario Lisan Motors, enfocada en la modernización de la fachada y la renovación de los espacios interiores. El diseño incorpora una envolvente contemporánea, amplias superficies acristaladas y acentos en rojo que refuerzan la identidad corporativa, integrando iluminación arquitectónica y espacios de exhibición para taxis.",
      "hero": {
        "file": "content/03_comercial/02_concesionario-lisan-motors/render/01_fachada-esquina.jpg",
        "alt": "Render de fachada del concesionario con acento rojo y vidrio al atardecer",
        "w": 1606,
        "h": 979
      },
      "renders": [
        {
          "file": "content/03_comercial/02_concesionario-lisan-motors/render/01_fachada-esquina.jpg",
          "alt": "Render de fachada del concesionario con acento rojo y vidrio al atardecer",
          "w": 1606,
          "h": 979
        },
        {
          "file": "content/03_comercial/02_concesionario-lisan-motors/render/02_sala-exhibicion.jpg",
          "alt": "Render de sala de exhibición con taxis y estructura roja",
          "w": 1232,
          "h": 817
        },
        {
          "file": "content/03_comercial/02_concesionario-lisan-motors/render/03_fachada-panoramica.jpg",
          "alt": "Render panorámico de la fachada (formato muy ancho 3:1)",
          "w": 2171,
          "h": 724
        }
      ],
      "planos": []
    },
    {
      "id": "banco-finandina",
      "nombre": "Banco Finandina - Sala de Atención Av Chile",
      "ubicacion": "Bogotá",
      "categoria": "fin",
      "tipo": "Remodelación integral",
      "descripcion": "Proyecto de remodelación integral de la sucursal de Banco Finandina, enfocado en la optimización de la distribución espacial y la renovación de la imagen interior y exterior. Mi aporte profesional comprendió el levantamiento arquitectónico, la propuesta de redistribución de los espacios, la selección de acabados y el desarrollo de la visualización 3D. La propuesta integra funcionalidad, identidad corporativa y diseño contemporáneo para crear ambientes acogedores, eficientes y acordes con las necesidades de atención al público.",
      "hero": {
        "file": "content/04_financiero-inmobiliario/01_banco-finandina-av-chile/render/01_exterior-sucursal.jpg",
        "alt": "Render exterior de la sucursal en entorno urbano con árboles",
        "w": 1663,
        "h": 946
      },
      "renders": [
        {
          "file": "content/04_financiero-inmobiliario/01_banco-finandina-av-chile/render/01_exterior-sucursal.jpg",
          "alt": "Render exterior de la sucursal en entorno urbano con árboles",
          "w": 1663,
          "h": 946
        },
        {
          "file": "content/04_financiero-inmobiliario/01_banco-finandina-av-chile/render/02_sala-atencion-asesores.jpg",
          "alt": "Render de sala de atención con módulos de asesores y publicidad",
          "w": 1195,
          "h": 844
        },
        {
          "file": "content/04_financiero-inmobiliario/01_banco-finandina-av-chile/render/03_sala-espera.jpg",
          "alt": "Render de sala de espera con puffs rojos y grises y público",
          "w": 1196,
          "h": 843
        }
      ],
      "planos": []
    },
    {
      "id": "prestauto-bima",
      "nombre": "Prestauto - Bima",
      "ubicacion": "",
      "categoria": "fin",
      "tipo": "Adecuación y ampliación",
      "descripcion": "Proyecto de adecuación y ampliación de las instalaciones existentes de PRESTAUTO, orientado a renovar la imagen corporativa y optimizar los espacios interiores. Mi aporte profesional se centró en la selección de acabados y el desarrollo de la presentación visual arquitectónica mediante modelado y renders 3D, buscando una propuesta contemporánea, funcional y coherente con la identidad de la empresa.",
      "hero": {
        "file": "content/04_financiero-inmobiliario/02_prestauto-bima/render/01_fachada-verde.jpg",
        "alt": "Render de fachada verde PrestAuto con acceso peatonal en madera",
        "w": 1689,
        "h": 931
      },
      "renders": [
        {
          "file": "content/04_financiero-inmobiliario/02_prestauto-bima/render/01_fachada-verde.jpg",
          "alt": "Render de fachada verde PrestAuto con acceso peatonal en madera",
          "w": 1689,
          "h": 931
        },
        {
          "file": "content/04_financiero-inmobiliario/02_prestauto-bima/render/02_oficina-interior.jpg",
          "alt": "Render de interior de oficina con escritorios y vista a la fachada",
          "w": 1456,
          "h": 875
        },
        {
          "file": "content/04_financiero-inmobiliario/02_prestauto-bima/render/03_fachada-vertical.jpg",
          "alt": "Render vertical de la fachada verde PrestAuto (formato 9:16)",
          "w": 789,
          "h": 1277
        }
      ],
      "planos": []
    }
  ]
};
