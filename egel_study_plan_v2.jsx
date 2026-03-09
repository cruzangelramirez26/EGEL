import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const areas = [
  {
    id: 1,
    name: "Análisis de Sistemas de Software",
    color: "#2563EB",
    bg: "#EFF6FF",
    reactivos: 31,
    weeks: "8 Mar – 20 Mar",
    subareas: [
      { name: "1.1 Tipos de requerimientos", reactivos: 12 },
      { name: "1.2 Técnicas de obtención, análisis, priorización y validación", reactivos: 9 },
      { name: "1.3 Técnicas de documentación de requerimientos", reactivos: 10 },
    ],
    studyTips: "Enfócate en clasificar requerimientos funcionales vs no funcionales, técnicas como entrevistas, casos de uso, historias de usuario y diagramas UML. Practica haciendo matrices de trazabilidad.",
    bibliography: {
      oficial: [
        {
          title: "Análisis y requerimientos de software – Wong (2017)",
          author: "Wong, S. – Universidad Continental",
          url: "https://repositorio.continental.edu.pe/bitstream/20.500.12394/4281/1/DO_FIN_103_MAI_UC0939_2018.pdf",
          free: true,
          note: "PDF completo en español",
        },
        {
          title: "Técnicas de estimación – Cubero (s.f.)",
          author: "Cubero, E. – Blog Proyectum",
          url: "https://www.proyectum.com/sistema/blog/tecnicas-de-estimacion/",
          free: true,
          note: "Artículo web",
        },
        {
          title: "Code Complete Checklist: Requirements – McConell",
          author: "McConell, S.",
          url: "https://www.matthewjmiller.net/files/cc2e_checklists.pdf",
          free: true,
          note: "PDF checklist gratuito",
        },
        {
          title: "When to use which UX research methods – Rohrer (2014)",
          author: "Rohrer, C. – Nielsen Norman Group",
          url: "https://www.nngroup.com/articles/which-ux-research-methods/",
          free: true,
          note: "Artículo web",
        },
        {
          title: "What is User Story? – Visual Paradigm",
          author: "Visual Paradigm",
          url: "https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story/",
          free: true,
          note: "Artículo web con ejemplos",
        },
        {
          title: "What is SysML? – SysML.org",
          author: "SysML",
          url: "https://sysml.org/",
          free: true,
          note: "Sitio oficial",
        },
        {
          title: "Ingeniería de software (9a ed.) – Sommerville (2011)",
          author: "Sommerville, I. – Pearson",
          url: "https://www.pearson.com/en-us/subject-catalog/p/software-engineering/P200000003258",
          free: false,
          note: "Buscar en biblioteca universitaria (Cap. 4, 5, 6)",
        },
        {
          title: "Ingeniería de software (7a ed.) – Pressman (2010)",
          author: "Pressman, R. – McGraw Hill",
          url: "https://www.mheducation.com.mx/ingenieria-de-software-un-enfoque-practico-7-ed-9786071503145-mexico",
          free: false,
          note: "Buscar en biblioteca – Capítulos 5-7",
        },
        {
          title: "Software Requirements (3a ed.) – Wiegers & Beatty (2013)",
          author: "Wiegers, K. y Beatty, J. – Microsoft Press",
          url: "https://www.microsoftpressstore.com/store/software-requirements-9780735679665",
          free: false,
          note: "Referencia clave del área",
        },
        {
          title: "User Story Mapping – Patton (2014)",
          author: "Patton, J. – O'Reilly",
          url: "https://www.oreilly.com/library/view/user-story-mapping/9781491904893/",
          free: false,
          note: "Buscar en biblioteca",
        },
        {
          title: "Choosing the right prioritisation method – Hatton (2008)",
          author: "Hatton, S. – IEEE",
          url: "http://doi.ieeecomputersociety.org/10.1109/ASWEC.2008.22",
          free: false,
          note: "Paper académico IEEE",
        },
        {
          title: "Effort estimation in agile – Usman et al. (2015)",
          author: "Usman, M., Mendes, E. y Börstler, J.",
          url: "https://doi.org/10.1145/2745802.2745813",
          free: false,
          note: "Paper ACM",
        },
      ],
      extra: [
        {
          title: "🎥 Ingeniería de Requerimientos desde cero (Español)",
          url: "https://www.youtube.com/watch?v=q3BYFLMCKlg",
          type: "YouTube",
          note: "Explicación clara de tipos de requerimientos",
        },
        {
          title: "🎥 Casos de Uso UML completo (Español)",
          url: "https://www.youtube.com/watch?v=MZJA8dFrNpc",
          type: "YouTube",
          note: "Diagramas UML de casos de uso paso a paso",
        },
        {
          title: "🎥 Historias de Usuario vs Casos de Uso",
          url: "https://www.youtube.com/watch?v=apOvF9NVguA",
          type: "YouTube",
          note: "Diferencias clave para el examen",
        },
        {
          title: "🌐 SWEBOK v3.0 Cap.1 – Software Requirements (PDF gratuito)",
          url: "https://www.computer.org/education/bodies-of-knowledge/software-engineering/v3",
          type: "Web",
          note: "Referencia IEEE oficial, capítulo completo",
        },
        {
          title: "🌐 Guía IIBA – Técnicas de elicitación de requerimientos",
          url: "https://www.iiba.org/standards-and-resources/business-analysis-standards/",
          type: "Web",
          note: "Estándar internacional de análisis",
        },
        {
          title: "🎥 UML en español – Todos los diagramas (Playlist)",
          url: "https://www.youtube.com/watch?v=Z0yLerU0g-Q",
          type: "YouTube",
          note: "Serie completa de diagramas UML",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Diseño de Sistemas de Software",
    color: "#7C3AED",
    bg: "#F5F3FF",
    reactivos: 33,
    weeks: "23 Mar – 8 Abr",
    subareas: [
      { name: "2.1 Diseño arquitectónico de software", reactivos: 10 },
      { name: "2.2 Diseño de módulos, componentes y datos", reactivos: 16 },
      { name: "2.3 Diseño de interfaces", reactivos: 7 },
    ],
    studyTips: "Domina los estilos arquitectónicos (capas, MVC, microservicios), el modelo 4+1 de Kruchten, patrones GoF y principios SOLID. Para interfaces, estudia las 10 heurísticas de Nielsen.",
    bibliography: {
      oficial: [
        {
          title: "Modelo 4+1 de arquitectura – Kruchten (1995)",
          author: "Kruchten, P. – IEEE Software",
          url: "https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf",
          free: true,
          note: "Paper original gratuito (PDF)",
        },
        {
          title: "10 usability heuristics – Nielsen (1994)",
          author: "Nielsen, J. – Nielsen Norman Group",
          url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
          free: true,
          note: "Las 10 heurísticas fundamentales",
        },
        {
          title: "UX prototypes: Low vs. High fidelity – Pernice (2016)",
          author: "Pernice, K. – Nielsen Norman Group",
          url: "https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/",
          free: true,
          note: "Artículo web",
        },
        {
          title: "Task scenarios for usability testing – McCloskey (2014)",
          author: "McCloskey, M. – Nielsen Norman Group",
          url: "https://www.nngroup.com/articles/task-scenarios-usability-testing/",
          free: true,
          note: "Artículo web",
        },
        {
          title: "Acoplamiento y cohesión – Pascual (2019)",
          author: "Pascual, J. R. – Blog Disrupción Tecnológica",
          url: "https://www.disrupciontecnologica.com/acoplamiento-y-cohesion/",
          free: true,
          note: "Artículo en español",
        },
        {
          title: "Scenario-based assessment of SW Architecture usability – Folmer et al.",
          author: "Folmer, E., Van Gurp, J. y Bosch, J. – ResearchGate",
          url: "https://www.researchgate.net/publication/2940293_Scenario-based_Assessment_of_Software_Architecture_Usability",
          free: true,
          note: "Paper gratuito en ResearchGate",
        },
        {
          title: "Tipificación de dominios para patrones arquitectónicos – Suárez & Gutiérrez (2016)",
          author: "Suárez, J. y Gutiérrez, L. E. – Información Tecnológica",
          url: "https://scielo.conicyt.cl/scielo.php?pid=S0718-07642016000400021&script=sci_arttext&tlng=n",
          free: true,
          note: "Artículo SciELO en español",
        },
        {
          title: "How utterances affect intent-matching in Alexa – Sweeting (2017)",
          author: "Sweeting, C. – Medium / Voiceflow",
          url: "https://medium.com/voiceflow/how-utterances-slot-samples-affect-intent-matching-in-alexa-skills-dcb9b5f7a9ae",
          free: true,
          note: "Artículo Medium",
        },
        {
          title: "Arquitectura de software (ciclo de desarrollo) – Cervantes et al. (2016)",
          author: "Cervantes, H., Velasco-Elizondo, P. y Castro, L. – Cengage",
          url: "https://www.cengage.com.mx/",
          free: false,
          note: "Libro en español – buscar en biblioteca",
        },
        {
          title: "Software Architecture for Developers – Brown (2014)",
          author: "Brown, S. – Leanpub",
          url: "https://leanpub.com/software-architecture-for-developers",
          free: false,
          note: "Leanpub – precio libre desde $0",
        },
        {
          title: "Documenting Software Architectures – Clements et al. (2003)",
          author: "Clements et al. – Addison Wesley / IEEE",
          url: "https://ieeexplore.ieee.org/abstract/document/1201264/",
          free: false,
          note: "IEEE Xplore",
        },
        {
          title: "Introducción a los sistemas de bases de datos – Date (2001)",
          author: "Date, J. C. – Pearson / Prentice Hall",
          url: "https://www.pearson.com/",
          free: false,
          note: "Buscar en biblioteca",
        },
      ],
      extra: [
        {
          title: "🌐 Refactoring.Guru – Patrones de diseño en ESPAÑOL (GoF completo)",
          url: "https://refactoring.guru/es/design-patterns",
          type: "Web",
          note: "El mejor recurso gratuito para patrones GoF",
        },
        {
          title: "🎥 Design Patterns in Object Oriented Programming – Christopher Okhravi",
          url: "https://www.youtube.com/playlist?list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc",
          type: "YouTube",
          note: "Serie completa de patrones GoF (inglés, muy clara)",
        },
        {
          title: "🎥 Principios SOLID explicados en Español",
          url: "https://www.youtube.com/watch?v=2X50sKeBAcQ",
          type: "YouTube",
          note: "Todos los principios SOLID con ejemplos",
        },
        {
          title: "🎥 Estilos arquitectónicos – MVC, capas, microservicios",
          url: "https://www.youtube.com/watch?v=pTltXoLMJm8",
          type: "YouTube",
          note: "Comparación de estilos arquitectónicos",
        },
        {
          title: "🌐 SWEBOK v3.0 Cap.2 – Software Design",
          url: "https://www.computer.org/education/bodies-of-knowledge/software-engineering/v3",
          type: "Web",
          note: "Capítulo oficial IEEE sobre diseño",
        },
        {
          title: "🎥 Diagramas UML: Clases, Secuencia y Componentes",
          url: "https://www.youtube.com/watch?v=UI6lqHOVHic",
          type: "YouTube",
          note: "UML práctico para el EGEL",
        },
        {
          title: "🌐 USE-CASE 2.0 – Jacobson (PDF gratuito)",
          url: "https://www.ivarjacobson.com/publications/white-papers/use-case-ebook",
          type: "Web",
          note: "Guía oficial de casos de uso",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Desarrollo de Sistemas de Software",
    color: "#059669",
    bg: "#ECFDF5",
    reactivos: 49,
    weeks: "10 Abr – 27 Abr",
    subareas: [
      { name: "3.1 Lenguajes de desarrollo de software", reactivos: 10 },
      { name: "3.2 Paradigmas de programación", reactivos: 10 },
      { name: "3.3 Entornos de desarrollo", reactivos: 10 },
      { name: "3.4 Gestión de datos", reactivos: 9 },
      { name: "3.5 Plataformas de desarrollo", reactivos: 10 },
    ],
    studyTips: "Es el área con más reactivos (34%). Estudia paradigmas OOP/funcional/lógico, clasificación de lenguajes, Git/DevOps, SQL y NoSQL. Para plataformas cubre web, móvil y nube básico.",
    bibliography: {
      oficial: [
        {
          title: "Introducción a la programación – Juganaru (2021)",
          author: "Juganaru, M. – Editorial Patria",
          url: "http://www.editorialpatria.com.mx/mobile/pdffiles/9786074384154.pdf",
          free: true,
          note: "PDF completo gratuito en español",
        },
        {
          title: "Fundamentos de programación en Java – Ladrón de Guevara (2020)",
          author: "Ladrón de Guevara, J. – UCM",
          url: "https://www.tesuva.edu.co/phocadownloadpap/Fundamentos%20de%20programcion%20en%20Java.pdf",
          free: true,
          note: "PDF gratuito en español",
        },
        {
          title: "The C Book – Gbdirect",
          author: "Gbdirect",
          url: "https://publications.gbdirect.co.uk//c_book/",
          free: true,
          note: "Libro completo gratuito en línea",
        },
        {
          title: "Lenguaje de programación Haskell – EcuRed",
          author: "EcuRed",
          url: "https://www.ecured.cu/Lenguaje_de_programaci%C3%B3n_Haskell",
          free: true,
          note: "Artículo enciclopédico",
        },
        {
          title: "Comparing Python to other languages – Python.org",
          author: "Python Software Foundation",
          url: "https://www.python.org/doc/essays/comparisons/",
          free: true,
          note: "Sitio oficial de Python",
        },
        {
          title: "PHP vs JavaScript comparison – Scand",
          author: "Burets, A. – Scand",
          url: "https://scand.com/company/blog/php-vs-javascript-difference-between/",
          free: true,
          note: "Comparativa de lenguajes web",
        },
        {
          title: "C++ vs JavaScript vs PHP – StackShare",
          author: "StackShare",
          url: "https://stackshare.io/stackups/cplusplus-vs-javascript-vs-php",
          free: true,
          note: "Comparativa técnica",
        },
        {
          title: "Lenguajes de programación: conceptos y paradigmas – Ruiz (2001)",
          author: "Ruiz, E. – Industrial Data / UNMSM",
          url: "https://sisbib.unmsm.edu.pe/bibvirtual/publicaciones/indata/v04_n1/lenguajes.htm",
          free: true,
          note: "Artículo en español",
        },
        {
          title: "Lenguajes de programación – Ureña (2012)",
          author: "Ureña, C. – Universidad de Granada",
          url: "https://lsi2.ugr.es/curena/doce/lp/tr-11-12/lp-c01-impr.pdf",
          free: true,
          note: "PDF gratuito universitario",
        },
        {
          title: "Programación lógica – Serra (2011)",
          author: "Serra, S. – UTN",
          url: "https://labsys.frc.utn.edu.ar/ppr-2011/Unidad%20V%20-%20Paradigma%20L%C3%B3gico/Unidad%20V%20-%20Paradigma%20LOGICO.pdf",
          free: true,
          note: "PDF gratuito",
        },
        {
          title: "Estructura de datos – Sánchez & Martínez (2013)",
          author: "Sánchez, J. y Martínez, C. R. – IPN ESCOM",
          url: "https://www.escom.ipn.mx/docs/oferta/matDidacticoISC2009/EDts/Libro_EstructuraDatos.pdf",
          free: true,
          note: "PDF gratuito IPN",
        },
        {
          title: "Introducción a la programación con Java – Pereira et al. (2008)",
          author: "Pereira, E., Fontenia, O. y Fariña, A. – UDC",
          url: "https://vios.dc.fi.udc.es/tp/ficheiros/java08.pdf",
          free: true,
          note: "Diapositivas PDF gratuitas",
        },
        {
          title: "Fundamentos de bases de datos (6a ed.) – Silberschatz (2007)",
          author: "Silberschatz, A. – McGraw Hill",
          url: "https://www.mheducation.com/",
          free: false,
          note: "Buscar en biblioteca – referencia estándar de BD",
        },
        {
          title: "SQL & NoSQL Databases – Meier & Kaufmann (2019)",
          author: "Meier, A. y Kaufmann, M. – Springer",
          url: "https://link.springer.com/book/9783658245481",
          free: false,
          note: "Buscar en biblioteca",
        },
        {
          title: "Learning SQL – Beaulieu (2020)",
          author: "Beaulieu, A. – O'Reilly",
          url: "https://www.oreilly.com/library/view/learning-sql-3rd/9781492057604/",
          free: false,
          note: "Buscar en biblioteca",
        },
      ],
      extra: [
        {
          title: "🌐 db-book.com – Database System Concepts (diapositivas gratis)",
          url: "https://db-book.com/",
          type: "Web",
          note: "Diapositivas oficiales del libro de Silberschatz",
        },
        {
          title: "🎥 Paradigmas de programación explicados (Español)",
          url: "https://www.youtube.com/watch?v=EezmIKgFnZ4",
          type: "YouTube",
          note: "OOP, funcional, lógico comparados",
        },
        {
          title: "🎥 SQL desde cero en español – midudev",
          url: "https://www.youtube.com/watch?v=uUdKAYl-F7g",
          type: "YouTube",
          note: "SQL completo en 4 horas",
        },
        {
          title: "🎥 Git y GitHub para principiantes – Fazt",
          url: "https://www.youtube.com/watch?v=HiXLkL42tMU",
          type: "YouTube",
          note: "Control de versiones (subárea 3.3)",
        },
        {
          title: "🌐 MDN Web Docs en español – Plataformas web",
          url: "https://developer.mozilla.org/es/",
          type: "Web",
          note: "Referencia oficial de desarrollo web",
        },
        {
          title: "🎥 NoSQL vs SQL – ¿Cuándo usar cada una?",
          url: "https://www.youtube.com/watch?v=ZS_kXvOeQ5Y",
          type: "YouTube",
          note: "Comparativa para subárea 3.4",
        },
        {
          title: "🎥 100 conceptos de programación en 10 minutos – Fireship",
          url: "https://www.youtube.com/watch?v=VlbVIT16emg",
          type: "YouTube",
          note: "Repaso rápido de conceptos clave (inglés)",
        },
        {
          title: "🌐 Roadmap.sh – Rutas de aprendizaje por plataforma",
          url: "https://roadmap.sh/",
          type: "Web",
          note: "Frontend, Backend, DevOps – visual y gratuito",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Gestión de Proyectos de Software",
    color: "#DC2626",
    bg: "#FEF2F2",
    reactivos: 30,
    weeks: "29 Abr – 11 May",
    subareas: [
      { name: "4.1 Gestión de tiempos, costos, recursos humanos y riesgo", reactivos: 8 },
      { name: "4.2 Calidad de software", reactivos: 10 },
      { name: "4.3 Metodologías de desarrollo", reactivos: 12 },
    ],
    studyTips: "Domina Scrum, XP, RUP y Cascada. Comprende COCOMO para estimación, ISO 25010 para calidad y gestión de riesgos. Scrum es el más frecuente en el examen.",
    bibliography: {
      oficial: [
        {
          title: "La Guía de Scrum 2020 (en español)",
          author: "Schwaber, K. y Sutherland, J.",
          url: "https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf",
          free: true,
          note: "PDF oficial gratuito — LECTURA OBLIGATORIA",
        },
        {
          title: "Extreme Programming: A gentle introduction",
          author: "Extreme Programming (2009)",
          url: "http://www.extremeprogramming.org/",
          free: true,
          note: "Sitio oficial de XP",
        },
        {
          title: "Metodologías de desarrollo de software – Maida & Pacienzia (2015)",
          author: "Maida, E. y Pacienzia, J. – UCA",
          url: "https://repositorio.uca.edu.ar/bitstream/123456789/522/1/metodologias-desarrollo-software.pdf",
          free: true,
          note: "Tesis comparativa, PDF gratuito",
        },
        {
          title: "¿Qué son los artefactos de Scrum? – Kaizenia",
          author: "Kaizenia",
          url: "https://kzi.mx/que-son-los-artefactos-de-scrum/",
          free: true,
          note: "Artículo en español",
        },
        {
          title: "Normas y estándares de calidad para software – Arciniega (2017)",
          author: "Arciniega, F. – UNAM FCA",
          url: "http://fcaenlinea.unam.mx/anexos/1728/Unidad_2/u2_act2_1.pdf",
          free: true,
          note: "PDF gratuito UNAM",
        },
        {
          title: "Estudio comparativo de metodologías – García (2018)",
          author: "García, J. – UOC",
          url: "http://openaccess.uoc.edu/webapps/o2/bitstream/10609/73151/6/jgarcianavarroTFG0118memoria.pdf",
          free: true,
          note: "TFG completo, PDF gratuito",
        },
        {
          title: "Estimación de costo con COCOMO – Garita & Lizano (2018)",
          author: "Garita, G. y Lizano, F. – ResearchGate",
          url: "https://www.researchgate.net/publication/323333867_Estimacion_de_costo_de_software_Una_propuesta_de_aplicacion_pedagogica_de_COCOMO",
          free: true,
          note: "Paper gratuito en ResearchGate",
        },
        {
          title: "Método ágil basado en XP, SCRUM, OPENUP – Gamboa-Carrascal (2015)",
          author: "Gamboa-Carrascal, J. y Rosado, A. A. – Revista Ingenio",
          url: "https://revistas.ufps.edu.co/index.php/ingenio/article/view/2045/1998",
          free: true,
          note: "Artículo gratuito en revista académica",
        },
        {
          title: "El proceso unificado de desarrollo (RUP) – Torossi",
          author: "Torossi, G. – ITMorelia",
          url: "http://dsc.itmorelia.edu.mx/~jcolivares/courses/pm10a/rup.pdf",
          free: true,
          note: "PDF gratuito en español",
        },
        {
          title: "Métricas de la documentación del software – Hilera",
          author: "Hilera, J. R. – EHU",
          url: "http://www.sc.ehu.es/jiwdocoj/remis/docs/medidocs.htm",
          free: true,
          note: "Página web gratuita",
        },
        {
          title: "Método de estimación de costos – Díaz & Robiolo (2014)",
          author: "Díaz, J. y Robiolo, G. – SADIO",
          url: "https://43jaiio.sadio.org.ar/proceedings/ASSE/02-01-568-2484-1-DR.pdf",
          free: true,
          note: "PDF gratuito de proceedings",
        },
        {
          title: "ISO 25010 – Resumen del modelo de calidad",
          author: "ISO 25000",
          url: "https://iso25000.com/index.php/normas-iso-25000/iso-25010",
          free: true,
          note: "Resumen gratuito del estándar",
        },
        {
          title: "ISO/IEC/IEEE 29148:2018 – Requirements Engineering",
          author: "IEEE Xplore",
          url: "https://ieeexplore.ieee.org/document/8559686",
          free: false,
          note: "Estándar oficial – revisar abstract gratuito",
        },
        {
          title: "PMBOK Guide (6a ed.) – PMI (2018)",
          author: "Project Management Institute",
          url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok",
          free: false,
          note: "Buscar en biblioteca – Cap. de gestión de riesgos y costos",
        },
        {
          title: "Software Architecture in Practice (3a ed.) – Bass et al. (2013)",
          author: "Bass, L., Clements, P. y Kazman, R. – Addison Wesley",
          url: "https://www.informit.com/store/software-architecture-in-practice-9780321815736",
          free: false,
          note: "Buscar en biblioteca",
        },
      ],
      extra: [
        {
          title: "🎥 Scrum en 10 minutos (Español)",
          url: "https://www.youtube.com/watch?v=PlLHc60egiQ",
          type: "YouTube",
          note: "Resumen visual de Scrum",
        },
        {
          title: "🎥 XP (Extreme Programming) explicado",
          url: "https://www.youtube.com/watch?v=hbFOwqYIOcU",
          type: "YouTube",
          note: "Prácticas de XP para el examen",
        },
        {
          title: "🎥 Kanban vs Scrum vs XP – ¿cuál elegir?",
          url: "https://www.youtube.com/watch?v=M1q6b9JI2Wc",
          type: "YouTube",
          note: "Comparativa de metodologías ágiles",
        },
        {
          title: "🎥 ISO 25010 – Calidad de software explicada",
          url: "https://www.youtube.com/watch?v=3KJJzMZ6pMQ",
          type: "YouTube",
          note: "Características del modelo de calidad",
        },
        {
          title: "🌐 Agile Manifesto en español",
          url: "https://agilemanifesto.org/iso/es/manifesto.html",
          type: "Web",
          note: "Los 12 principios ágiles originales",
        },
        {
          title: "🎥 COCOMO – Estimación de proyectos de software",
          url: "https://www.youtube.com/watch?v=F9jFCmrOZVo",
          type: "YouTube",
          note: "Cálculo COCOMO con ejemplos",
        },
        {
          title: "🌐 Metodología OpenUP explicada",
          url: "http://openupeaojmp.blogspot.com/2013/09/metodologia-open-up.html",
          type: "Web",
          note: "Fuente oficial de la bibliografía",
        },
      ],
    },
  },
];

const sessions = [
  { date: "Dom 9 Mar",   type: "repaso", area: 1, topic: "Kick-off: Tipos de requerimientos funcionales y no funcionales (1.1)" },
  { date: "Mar 11 Mar",  type: "repaso", area: 1, topic: "Técnicas de elicitación: entrevistas, observación, encuestas (1.2)" },
  { date: "Jue 13 Mar",  type: "repaso", area: 1, topic: "Priorización y validación de requerimientos (1.2)" },
  { date: "Dom 16 Mar",  type: "repaso", area: 1, topic: "Documentación: casos de uso, UML, historias de usuario (1.3)" },
  { date: "Mar 18 Mar",  type: "repaso", area: 1, topic: "Estimación y User Story Mapping (1.3)" },
  { date: "Jue 20 Mar",  type: "examen", area: 1, topic: "🧪 Mini-examen Área 1 completa (31 reactivos)" },
  { date: "Dom 23 Mar",  type: "repaso", area: 2, topic: "Estilos arquitectónicos: capas, MVC, microservicios (2.1)" },
  { date: "Mar 25 Mar",  type: "repaso", area: 2, topic: "Modelo 4+1 de Kruchten + atributos de calidad (2.1)" },
  { date: "Jue 27 Mar",  type: "repaso", area: 2, topic: "Principios SOLID y patrones GoF creacionales (2.2)" },
  { date: "Dom 30 Mar",  type: "repaso", area: 2, topic: "Patrones GoF estructurales y de comportamiento (2.2)" },
  { date: "Mar 1 Abr",   type: "repaso", area: 2, topic: "Diseño de datos, componentes y acoplamiento/cohesión (2.2)" },
  { date: "Jue 3 Abr",   type: "repaso", area: 2, topic: "Diseño de interfaces: 10 heurísticas de Nielsen, prototipos (2.3)" },
  { date: "Dom 6 Abr",   type: "repaso", area: 2, topic: "Diagramas UML: clases, secuencia, componentes + repaso general Área 2" },
  { date: "Mar 8 Abr",   type: "examen", area: 2, topic: "🧪 Mini-examen Área 2 completa (33 reactivos)" },
  { date: "Jue 10 Abr",  type: "repaso", area: 3, topic: "Paradigmas: OOP, funcional, lógico, imperativo (3.2)" },
  { date: "Dom 13 Abr",  type: "repaso", area: 3, topic: "Clasificación de lenguajes: compilados, interpretados, tipos (3.1)" },
  { date: "Mar 15 Abr",  type: "repaso", area: 3, topic: "Entornos: IDEs, control de versiones (Git), DevOps básico (3.3)" },
  { date: "Jue 17 Abr",  type: "repaso", area: 3, topic: "Gestión de datos: SQL, normalización, NoSQL (3.4)" },
  { date: "Dom 20 Abr",  type: "repaso", area: 3, topic: "Plataformas de desarrollo: web, móvil, nube (3.5)" },
  { date: "Mar 22 Abr",  type: "repaso", area: 3, topic: "Testing: unitario, integración, E2E + estructuras de datos (3.3)" },
  { date: "Jue 24 Abr",  type: "repaso", area: 3, topic: "Repaso intensivo Área 3: paradigmas + datos + plataformas" },
  { date: "Dom 27 Abr",  type: "examen", area: 3, topic: "🧪 Mini-examen Área 3 completa (49 reactivos)" },
  { date: "Mar 29 Abr",  type: "repaso", area: 4, topic: "Scrum completo: roles, eventos, artefactos (4.3)" },
  { date: "Jue 1 May",   type: "repaso", area: 4, topic: "XP, Kanban, OpenUP y RUP vs metodologías ágiles (4.3)" },
  { date: "Dom 4 May",   type: "repaso", area: 4, topic: "Estimación: COCOMO, Puntos de Función, Planning Poker (4.1)" },
  { date: "Mar 6 May",   type: "repaso", area: 4, topic: "Gestión de riesgos y recursos humanos en proyectos (4.1)" },
  { date: "Jue 8 May",   type: "repaso", area: 4, topic: "Calidad: ISO 25010, CMMI, métricas de software (4.2)" },
  { date: "Dom 11 May",  type: "examen", area: 4, topic: "🧪 Mini-examen Área 4 completa (30 reactivos)" },
  { date: "Mar 13 May",  type: "final",  area: 0, topic: "🔥 Simulacro completo EGEL (143 reactivos, tiempo real ~3h)" },
  { date: "Jue 15 May",  type: "final",  area: 0, topic: "🎯 Revisión de errores del simulacro + estrategia de examen" },
];

const typeStyle = {
  repaso: { bg: "#F0F9FF", border: "#BAE6FD", label: "Sesión Grupal", icon: "👥" },
  examen: { bg: "#FFF7ED", border: "#FED7AA", label: "Mini-Examen",   icon: "📝" },
  final:  { bg: "#FDF4FF", border: "#E9D5FF", label: "Simulacro",     icon: "🚀" },
};
const areaColors = { 0: "#6B7280", 1: "#2563EB", 2: "#7C3AED", 3: "#059669", 4: "#DC2626" };

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function StudyPlan() {
  const [tab,      setTab]      = useState("calendario");
  const [openArea, setOpenArea] = useState(null);
  const [bibTab,   setBibTab]   = useState({});

  const toggleBibTab = (areaId, which) =>
    setBibTab(prev => ({ ...prev, [areaId]: which }));

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#F1F5F9", minHeight: "100vh", padding: "24px 14px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #7C3AED 100%)",
          borderRadius: 16, padding: "32px 28px", marginBottom: 22, color: "white", position: "relative", overflow: "hidden"
        }}>
          <div style={{ position:"absolute", top:-20, right:-20, width:160, height:160, background:"rgba(255,255,255,0.05)", borderRadius:"50%" }}/>
          <div style={{ position:"absolute", bottom:-30, right:70, width:100, height:100, background:"rgba(255,255,255,0.07)", borderRadius:"50%" }}/>
          <div style={{ fontSize:11, fontFamily:"monospace", letterSpacing:3, opacity:0.7, marginBottom:6 }}>CENEVAL EGEL PLUS® · ISOFT · JULIO 2025</div>
          <h1 style={{ margin:0, fontSize:24, fontWeight:"bold" }}>Plan de Estudio — Ingeniería de Software</h1>
          <p style={{ margin:"8px 0 0", opacity:0.85, fontSize:13 }}>Sesiones grupales: Martes · Jueves · Domingo &nbsp;|&nbsp; 1.5 h c/sesión &nbsp;|&nbsp; 8 Mar → 15 May</p>
          <div style={{ display:"flex", gap:12, marginTop:16, flexWrap:"wrap" }}>
            {[["30","Sesiones"],["45 h","Repaso total"],["143","Reactivos"],["4","Áreas"]].map(([n,l])=>(
              <div key={l} style={{ background:"rgba(255,255,255,0.15)", borderRadius:8, padding:"8px 14px", textAlign:"center" }}>
                <div style={{ fontSize:20, fontWeight:"bold" }}>{n}</div>
                <div style={{ fontSize:11, opacity:0.8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tabs ── */}
        <div style={{ display:"flex", gap:8, marginBottom:18, flexWrap:"wrap" }}>
          {[["calendario","📅 Calendario"],["areas","📚 Bibliografía"],["tips","💡 Estrategia"]].map(([key,label])=>(
            <button key={key} onClick={()=>setTab(key)} style={{
              padding:"10px 18px", borderRadius:8, border:"none", cursor:"pointer", fontSize:13, fontWeight: tab===key?"bold":"normal",
              background: tab===key?"#1E3A8A":"white", color: tab===key?"white":"#374151",
              boxShadow: tab===key?"0 2px 8px rgba(30,58,138,0.3)":"0 1px 3px rgba(0,0,0,0.1)", transition:"all 0.2s"
            }}>{label}</button>
          ))}
        </div>

        {/* ════════════ CALENDARIO ════════════ */}
        {tab==="calendario" && (
          <div>
            <div style={{ background:"#FEF9C3", border:"1px solid #FDE68A", borderRadius:10, padding:"12px 16px", marginBottom:16, fontSize:13 }}>
              <strong>📌 Dinámica:</strong> Entre sesiones (Lun, Mié, Vie, Sáb) estudias <em>individualmente</em> el tema de la próxima reunión. Cada sesión grupal sirve para repasar, resolver dudas y practicar reactivos estilo EGEL.
            </div>
            <div style={{ display:"grid", gap:9 }}>
              {sessions.map((s,i)=>{
                const ts=typeStyle[s.type]; const ac=areaColors[s.area];
                return (
                  <div key={i} style={{
                    background:ts.bg, border:`1px solid ${ts.border}`, borderLeft:`4px solid ${ac}`,
                    borderRadius:10, padding:"11px 15px", display:"flex", alignItems:"flex-start", gap:10
                  }}>
                    <div style={{ fontSize:18, marginTop:1 }}>{ts.icon}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:4 }}>
                        <span style={{ fontWeight:"bold", fontSize:13, color:"#111827" }}>{s.date}</span>
                        <span style={{ fontSize:11, background:ac, color:"white", padding:"2px 8px", borderRadius:20 }}>
                          {s.area>0?`Área ${s.area}`:"General"}
                        </span>
                      </div>
                      <div style={{ fontSize:13, color:"#374151", marginTop:3 }}>{s.topic}</div>
                      <div style={{ fontSize:11, color:"#9CA3AF", marginTop:1 }}>{ts.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ════════════ BIBLIOGRAFÍA ════════════ */}
        {tab==="areas" && (
          <div style={{ display:"grid", gap:14 }}>
            {areas.map(area=>(
              <div key={area.id} style={{ background:"white", borderRadius:12, overflow:"hidden", boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>
                {/* Header del área */}
                <div
                  onClick={()=>setOpenArea(openArea===area.id?null:area.id)}
                  style={{ background:area.bg, padding:"16px 20px", cursor:"pointer", borderLeft:`5px solid ${area.color}`,
                    display:"flex", justifyContent:"space-between", alignItems:"center" }}
                >
                  <div>
                    <div style={{ fontSize:11, color:area.color, fontWeight:"bold", letterSpacing:1, fontFamily:"monospace" }}>
                      ÁREA {area.id} · {area.reactivos} reactivos · {area.weeks}
                    </div>
                    <div style={{ fontSize:15, fontWeight:"bold", color:"#111827", marginTop:2 }}>{area.name}</div>
                  </div>
                  <span style={{ fontSize:18, color:area.color }}>{openArea===area.id?"▲":"▼"}</span>
                </div>

                {openArea===area.id && (
                  <div style={{ padding:"20px" }}>
                    {/* Subáreas */}
                    <div style={{ marginBottom:16 }}>
                      <div style={{ fontSize:11, fontWeight:"bold", color:"#6B7280", letterSpacing:1, marginBottom:7 }}>SUBÁREAS</div>
                      {area.subareas.map((s,i)=>(
                        <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:"1px solid #F3F4F6", fontSize:13, color:"#374151" }}>
                          <span>{s.name}</span>
                          <span style={{ background:area.color, color:"white", borderRadius:12, padding:"1px 8px", fontSize:11, fontWeight:"bold", whiteSpace:"nowrap" }}>{s.reactivos}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tip */}
                    <div style={{ background:"#F9FAFB", borderRadius:8, padding:"11px 14px", marginBottom:16, fontSize:13, color:"#374151", borderLeft:`3px solid ${area.color}` }}>
                      <strong>💡 Consejo:</strong> {area.studyTips}
                    </div>

                    {/* Tabs bibliografía */}
                    <div style={{ display:"flex", gap:8, marginBottom:12 }}>
                      {[["oficial","📖 Bibliografía oficial"],["extra","🚀 Recursos extra gratuitos"]].map(([k,l])=>{
                        const active=(bibTab[area.id]||"oficial")===k;
                        return (
                          <button key={k} onClick={()=>toggleBibTab(area.id,k)} style={{
                            padding:"7px 14px", borderRadius:7, border:"none", cursor:"pointer", fontSize:12,
                            fontWeight:active?"bold":"normal",
                            background:active?area.color:"#F3F4F6",
                            color:active?"white":"#374151", transition:"all 0.15s"
                          }}>{l}</button>
                        );
                      })}
                    </div>

                    {/* Lista bibliografía */}
                    {(bibTab[area.id]||"oficial")==="oficial" ? (
                      <div>
                        <div style={{ fontSize:11, color:"#9CA3AF", marginBottom:8 }}>🟢 = enlace gratuito &nbsp;·&nbsp; 📘 = buscar en biblioteca universitaria</div>
                        {area.bibliography.oficial.map((b,i)=>(
                          <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"9px 0", borderBottom:"1px solid #F3F4F6" }}>
                            <span style={{ fontSize:15, marginTop:2 }}>{b.free?"🟢":"📘"}</span>
                            <div style={{ flex:1 }}>
                              <a href={b.url} target="_blank" rel="noreferrer"
                                style={{ color:area.color, fontWeight:"bold", fontSize:13, textDecoration:"none" }}>
                                {b.title} ↗
                              </a>
                              <div style={{ fontSize:11, color:"#6B7280", marginTop:1 }}>
                                {b.author}
                                {b.free && <span style={{ color:"#059669", fontWeight:"bold" }}> · GRATIS</span>}
                                {b.note && <span style={{ color:"#9CA3AF" }}> · {b.note}</span>}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        <div style={{ fontSize:11, color:"#9CA3AF", marginBottom:8 }}>Recursos adicionales 100% gratuitos para complementar el estudio</div>
                        {area.bibliography.extra.map((b,i)=>(
                          <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"9px 0", borderBottom:"1px solid #F3F4F6" }}>
                            <span style={{ fontSize:14, marginTop:2, whiteSpace:"nowrap",
                              background: b.type==="YouTube"?"#FEE2E2":"#ECFDF5",
                              color: b.type==="YouTube"?"#DC2626":"#059669",
                              padding:"2px 7px", borderRadius:5, fontSize:11, fontWeight:"bold" }}>
                              {b.type}
                            </span>
                            <div style={{ flex:1 }}>
                              <a href={b.url} target="_blank" rel="noreferrer"
                                style={{ color:area.color, fontWeight:"bold", fontSize:13, textDecoration:"none" }}>
                                {b.title} ↗
                              </a>
                              {b.note && <div style={{ fontSize:11, color:"#6B7280", marginTop:1 }}>{b.note}</div>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ════════════ ESTRATEGIA ════════════ */}
        {tab==="tips" && (
          <div style={{ display:"grid", gap:14 }}>
            {[
              { icon:"🗓️", title:"Rutina semanal recomendada", color:"#2563EB", items:[
                "Lunes: Lee el tema del Martes (60-90 min individual) usando la bibliografía oficial",
                "Martes: Sesión grupal 1.5 h — repasar, practicar reactivos EGEL, resolver dudas",
                "Miércoles: Lee el tema del Jueves (60-90 min individual)",
                "Jueves: Sesión grupal 1.5 h — repasar y practicar",
                "Viernes/Sábado: Repaso personal de la semana + videos complementarios de YouTube",
                "Domingo: Sesión grupal 1.5 h — mini-examen o repaso acumulado",
              ]},
              { icon:"👥", title:"Dinámica de las sesiones grupales", color:"#7C3AED", items:[
                "Cada integrante prepara 3-5 reactivos tipo EGEL del tema a repasar",
                "Resuelven los reactivos individualmente (5 min silencio), luego discuten en grupo",
                "Rotarse para explicar conceptos: quien lo explica mejor, mejor lo aprende",
                "Hacer un mapa conceptual en papel/pizarrón al inicio de cada sesión",
                "Siempre revisar los errores del mini-examen anterior antes del nuevo tema",
              ]},
              { icon:"⚠️", title:"Distribución de reactivos (prioridad)", color:"#DC2626", items:[
                "🔴 Área 3: Desarrollo — 49 reactivos = 34% del examen (mayor peso)",
                "🟠 Área 2: Diseño — 33 reactivos = 23% (patrones de diseño muy frecuentes)",
                "🟡 Área 1: Análisis — 31 reactivos = 22% (UML y tipos de requerimientos)",
                "🟢 Área 4: Gestión — 30 reactivos = 21% (Scrum y calidad los más frecuentes)",
              ]},
              { icon:"📖", title:"Recursos GRATIS imprescindibles (no ignorar)", color:"#059669", items:[
                "SWEBOK v3.0 (IEEE): computer.org — cubre TODAS las áreas, referencia base del EGEL",
                "Refactoring.Guru en español: refactoring.guru/es — patrones GoF con ejemplos",
                "Scrum Guide 2020 en español: scrumguides.org — lectura obligatoria Área 4",
                "ISO 25010 resumen: iso25000.com — calidad de software para Área 4",
                "db-book.com — diapositivas gratuitas de bases de datos (Área 3)",
                "MDN Web Docs en español: developer.mozilla.org/es — plataformas web (Área 3)",
                "Roadmap.sh — rutas visuales de aprendizaje por tecnología",
              ]},
              { icon:"🎯", title:"Semana final (12-15 Mayo)", color:"#DC2626", items:[
                "Martes 13: Simulacro cronometrado COMPLETO (143 reactivos, ~3-4 horas, sin pausas)",
                "Identificar las subáreas con más errores y estudiarlas el miércoles",
                "Jueves 15: Revisión de errores del simulacro + repasar fórmulas clave (COCOMO, etc.)",
                "Dormir bien, comer antes del examen, llevar identificación oficial",
                "Estrategia de examen: responde lo que sabes primero, marca las dudas para revisar",
              ]},
            ].map((block,i)=>(
              <div key={i} style={{ background:"white", borderRadius:12, padding:"20px", boxShadow:"0 1px 4px rgba(0,0,0,0.08)", borderLeft:`4px solid ${block.color}` }}>
                <div style={{ fontSize:15, fontWeight:"bold", color:"#111827", marginBottom:12 }}>{block.icon} {block.title}</div>
                <ul style={{ margin:0, paddingLeft:20, display:"grid", gap:6 }}>
                  {block.items.map((item,j)=>(
                    <li key={j} style={{ fontSize:13, color:"#374151", lineHeight:1.6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign:"center", marginTop:24, fontSize:11, color:"#9CA3AF" }}>
          Estructuras EGEL Plus® ISOFT — CENEVAL Julio 2025 · 143 reactivos · Plan generado con bibliografía oficial
        </div>
      </div>
    </div>
  );
}
