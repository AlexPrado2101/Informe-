document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        'en': {
            'Portafolio Profesional de Alexander Prado': 'Alexander Prado\'s Professional Portfolio',
            'Alexander Prado': 'Alexander Prado',
            'TÉCNICO SUPERIOR EN DESARROLLO DE SOFTWARE': 'HIGHER TECHNICIAN IN SOFTWARE DEVELOPMENT',
            'CONTACTO': 'CONTACT',
            'Teléfono:': 'Phone:',
            'Mail:': 'Mail:',
            'Dirección:': 'Address:',
            'Linkedin:': 'Linkedin:',
            'Github:': 'Github:',
            'Bethania, Santa María': 'Bethania, Santa Maria',
            'IDIOMAS': 'LANGUAGES',
            'Español nativo': 'Native Spanish',
            'Ingles Intermedio B2': 'Intermediate English B2',
            'REFERENCIAS': 'REFERENCES',
            'MIRIAM ORTEGA': 'MIRIAM ORTEGA',
            'Gerente de Transformación': 'Transformation Manager',
            'Coordinación Calidad y Políticas de Supervisión (SBP)': 'Quality Coordination and Supervision Policies (SBP)',
            'Telefono:': 'Phone:',
            'Ver CV': 'View CV',
            'Descargar CV': 'Download CV',
            'OBJETIVO PROFESIONAL': 'CAREER OBJECTIVE',
            'desarrollador junior con conocimientos en programación orientada a objetos, bases de datos, UI/UX. Busco activamente una oportunidad para unirme a un equipo innovador donde pueda aplicar mis conocimientos técnicos, aportar ideas frescas y acelerar mi crecimiento profesional de la mano de expertos en la industria.': 'Junior developer with knowledge in object-oriented programming, databases, UI/UX. I am actively seeking an opportunity to join an innovative team where I can apply my technical knowledge, contribute fresh ideas, and accelerate my professional growth alongside industry experts.',
            'EXPERIENCIA': 'EXPERIENCE',
            'Estudiante en prácticas, Superintendencia de Bancos de Panamá': 'Intern, Superintendency of Banks of Panama',
            'Experiencia práctica en Microsoft Power Platform y Microsoft 365.': 'Practical experience in Microsoft Power Platform and Microsoft 365.',
            'Power BI: Creación de vistas, informes y dashboards para la visualización y análisis de datos': 'Power BI: Creation of views, reports, and dashboards for data visualization and analysis.',
            'Automatización: Desarrollo de flujos de trabajo con Power Automate para optimizar procesos.': 'Automation: Development of workflows with Power Automate to optimize processes.',
            'IA Conversacional: Creación e implementación de agentes de IA (bots) utilizando Copilot Studio (antes Power Virtual Agents).': 'Conversational AI: Creation and implementation of AI agents (bots) using Copilot Studio (formerly Power Virtual Agents).',
            'Diseño e implementación de nuevo módulo en una aplicación existente utilizando Angular.': 'Design and implementation of a new module in an existing application using Angular.',
            'Contribución a la arquitectura y funcionalidad de la interfaz de usuario.': 'Contribution to the architecture and functionality of the user interface.',
            'Operador/Demostrador de Robótica (ITSE) Durante el periodo de estudios': 'Robotics Operator/Demonstrator (ITSE) During the study period',
            'Participación en la operación y manejo de robots cuadrúpedos Unitree Go2 y Go1.': 'Participation in the operation and handling of Unitree Go2 and Go1 quadruped robots.',
            'Experiencia práctica en el control y la demostración de robots autónomos en múltiples ocasiones para fines recreativos y de promoción/publicidad institucional.': 'Practical experience in controlling and demonstrating autonomous robots on multiple occasions for recreational and institutional promotion/advertising purposes.',
            'Miembro del Equipo Representante - Olimpiadas Mundiales de Robótica (WRO) 2023': 'Representative Team Member - World Robot Olympiad (WRO) 2023',
            '[Evento Internacional: Representación de Panamá]': '[International Event: Representing Panama]',
            'Representación Internacional: Seleccionado para la fase final del torneo mundial, demostrando un alto nivel de compromiso y habilidad técnica en el área STEM.': 'International Representation: Selected for the final phase of the world tournament, demonstrating a high level of commitment and technical skill in the STEM field.',
            'Desarrollo de Proyecto: Aplicación de principios de programación y robótica para el desarrollo y optimización del proyecto en un entorno de alta presión.': 'Project Development: Application of programming and robotics principles for the development and optimization of the project in a high-pressure environment.',
            'Habilidades Clave: Demostración de aprendizaje acelerado, trabajo en equipo eficaz y resiliencia para alcanzar objetivos complejos a nivel internacional.': 'Key Skills: Demonstrated accelerated learning, effective teamwork, and resilience to achieve complex goals at an international level.',
            'EDUCACIÓN': 'EDUCATION',
            'Técnico Superior en Desarrollo de Software (Educación)': 'Higher Technician in Software Development',
            'Instituto Técnico Superior Especializado (ITSE) | Ene 2023 - oct 2025': 'Specialized Higher Technical Institute (ITSE) | Jan 2023 - Oct 2025',
            'Bachiller en ciencias': 'Bachelor of Science',
            'Instituto America | 2020-2022': 'Instituto America | 2020-2022',
            'HABILIDADES TÉCNICAS': 'TECHNICAL SKILLS',
            'HTML5, CSS3 y JavaScript': 'HTML5, CSS3 & JavaScript',
            'Bootstrap': 'Bootstrap',
            'JAVA': 'JAVA',
            'PHP': 'PHP',
            'node.js': 'node.js',
            'Angular': 'Angular',
            'UI/UX': 'UI/UX',
            'APIs externas': 'External APIs',
            'SQL server': 'SQL server',
            'MongoDB': 'MongoDB',
            'AndroidStudio (basico)': 'AndroidStudio (basic)',
            'python (basico)': 'python (basic)',
            'Visual Studio Code': 'Visual Studio Code',
            'Netbeans': 'Netbeans',
            'PowerBI': 'PowerBI',
            'Power Automate': 'Power Automate',
            'HABILIDADES BLANDAS': 'SOFT SKILLS',
            'Trabajo en equipo': 'Teamwork',
            'Comunicación Efectiva': 'Effective Communication',
            'Trabajo bajo presión': 'Work under pressure',
            'Proactivo': 'Proactive',
            'Adaptabilidad': 'Adaptability',
            'Responsabilidad': 'Responsibility',
            'Autodidacta': 'Self-taught',
            'Mis Proyectos': 'My Projects',
            'Contacto:': 'Contact:',
            'App Servicio Técnico': 'Technical Service App',
            'Proyecto final de Desarrollo de Aplicaciones Móviles. Creado en una semana con Java en Android Studio, implementando UI/UX, splash screen, login y un RecyclerView dinámico para gestionar un servicio técnico de consolas retro.': 'Final project for Mobile Application Development. Created in one week with Java in Android Studio, implementing UI/UX, splash screen, login, and a dynamic RecyclerView to manage a technical service for retro consoles.',
            'Dashboard de Inconsistencias': 'Inconsistency Dashboard',
            'Informe interactivo en Power BI para el análisis y visualización de inconsistencias en conjuntos de datos complejos.': 'Interactive report in Power BI for the analysis and visualization of inconsistencies in complex datasets.',
            'Dashboard Horas de Voluntariado': 'Volunteer Hours Dashboard',
            'Dashboard para el seguimiento y análisis de horas de voluntariado, mostrando métricas clave y comparativas.': 'Dashboard for tracking and analyzing volunteer hours, showing key metrics and comparisons.',
            'Automatización de Listas': 'List Automation',
            'Flujo de Power Automate para la creación y eliminación automatizada de listas en SharePoint, optimizando la gestión.': 'Power Automate flow for the automated creation and deletion of lists in SharePoint, optimizing management.',
            'Monitoreo de Informe': 'Report Monitoring',
            'Conjunto de flujos para el monitoreo de informes, incluyendo envío de correos, carga de coordinadores y registros, y gestión de etapas.': 'Set of flows for monitoring reports, including sending emails, loading coordinators and records, and managing stages.',
            'Flujo para Plan de Acción': 'Action Plan Flow',
            'Flujo de Power Automate para el envío automatizado de correos relacionados con planes de acción.': 'Power Automate flow for the automated sending of emails related to action plans.',
            'NBA App': 'NBA App',
            'API y frontend para estadísticas de la NBA, desarrollado en equipo. Me enfoqué en la funcionalidad, creando la API con Node.js y la base de datos en MongoDB, mientras aprendía por primera vez el framework Angular para la interfaz.': 'API and frontend for NBA statistics, developed as a team. I focused on functionality, creating the API with Node.js and the database in MongoDB, while learning the Angular framework for the interface for the first time.',
            'Aplicación Fitness': 'Fitness Application',
            'Aplicación de seguimiento de entrenamiento construida con JS puro y librerías. Incluye UI/UX, cálculo de métricas (1RM, TDEE), gráficos de progreso, y funcionalidad para exportar/importar datos.': 'Workout tracking application built with pure JS and libraries. It includes UI/UX, calculation of metrics (1RM, TDEE), progress graphs, and functionality to export/import data.',
            'Gestor de Tareas PHP': 'PHP Task Manager',
            'Aplicación web para gestión de tareas desarrollada en equipo. Participé en el diseño de la base de datos con SQL Server, el desarrollo frontend con HTML/CSS/Bootstrap y la implementación del backend con PHP.': 'Web application for task management developed as a team. I participated in the design of the database with SQL Server, the frontend development with HTML/CSS/Bootstrap, and the backend implementation with PHP.',
            'Juego Pong': 'Pong Game',
            'Clásico juego Pong desarrollado con HTML, CSS y JavaScript, como un ejercicio de manipulación del DOM y lógica de juego.': 'Classic Pong game developed with HTML, CSS, and JavaScript, as an exercise in DOM manipulation and game logic.',
            'Lector de Libros PDF': 'PDF Book Reader',
            'Aplicación web para leer archivos PDF online. Credenciales de prueba: Usuario: Lumen, Contraseña: 2101.': 'Web application to read PDF files online. Test credentials: User: Lumen, Password: 2101.',
            'Contador de Horas Laborales': 'Work Hours Counter',
            'Herramienta para calcular y registrar horas laborales, útil para freelancers y control de proyectos.': 'Tool to calculate and record work hours, useful for freelancers and project control.',
            'Calculadora de Días': 'Days Calculator',
            'Sencilla aplicación para calcular la diferencia de días entre dos fechas.': 'Simple application to calculate the difference in days between two dates.',
            'Diagrama de Gantt': 'Gantt Chart',
            'Herramienta de planificación creada desde cero con HTML, CSS y JavaScript para mi informe de graduación. Permite gestionar y visualizar tareas de proyecto de manera eficiente.': 'Planning tool created from scratch with HTML, CSS, and JavaScript for my graduation report. It allows you to efficiently manage and visualize project tasks.',
            'Todos': 'All',
            'NUMU': 'NUMU',
            'SBP': 'SBP',
            'Este fue una de mis tareas como practicante dentro de la SBP, en el cual tuve que utilizar servicios ya creados para construir un nuevo módulo dentro de una aplicación funcional, creando su componente y utilizando los recursos existentes. También tuve que crear y utilizar procedimientos almacenados específicos para esa sección desde SQL. Adicionalmente, con el apoyo de un supervisor, participé en la creación y conexión de una nueva tabla para llevar un registro de las acciones realizadas por usuarios y administradores en la página.': 'This was one of my tasks as an intern at the SBP, where I had to use existing services to build a new module within a functional application, creating its component and using the application\'s existing resources. I also had to create and use specific stored procedures for that section from SQL. Additionally, with the support of a supervisor, I participated in creating and connecting a new table to log actions performed by users and administrators on the page.',
            'Proyecto enfocado en la organización de eventos. Permite alquilar salones, gestionar planes de comida, organizar el lugar, confirmar asistencia de invitados con códigos QR y gestionar la experiencia de cada invitado para un evento único. Utiliza PHP, SQL, y la API de Google Maps.': 'Project focused on event organization. It allows renting venues, managing meal plans, organizing the space, confirming guest attendance with QR codes, and managing each guest\'s experience for a unique event. Uses PHP, SQL, and the Google Maps API.',
            'KirbyPlus (Productividad)': 'KirbyPlus (Productivity)',
            'Aplicación WebView para Android que funciona de forma nativa y sin conexión. Se enfoca en la organización personal integral: gestión de tareas, notas académicas, práctica de idiomas, ejercicio, y bitácoras de alimentación y dibujo. Incluye calendarios, temas personalizables y opción para importar/exportar datos.': 'WebView application for Android that works natively and offline. It focuses on comprehensive personal organization: task management, academic notes, language practice, exercise, and food and drawing logs. It includes calendars, customizable themes, and an option to import/export data.',
            'Con Demo': 'With Demo',
            'Sin Demo': 'No Demo',
            'Ver Aplicación': 'View Application',
            'Mostrando:': 'Showing:',
            'Total:': 'Total:'
        },
        'es': {
            'Alexander Prado\'s Professional Portfolio': 'Portafolio Profesional de Alexander Prado',
            'Alexander Prado': 'Alexander Prado',
            'HIGHER TECHNICIAN IN SOFTWARE DEVELOPMENT': 'TÉCNICO SUPERIOR EN DESARROLLO DE SOFTWARE',
            'CONTACT': 'CONTACTO',
            'Phone:': 'Teléfono:',
            'Mail:': 'Mail:',
            'Address:': 'Dirección:',
            'Linkedin:': 'Linkedin:',
            'Github:': 'Github:',
            'Bethania, Santa Maria': 'Bethania, Santa María',
            'LANGUAGES': 'IDIOMAS',
            'Native Spanish': 'Español nativo',
            'Intermediate English B2': 'Ingles Intermedio B2',
            'REFERENCES': 'REFERENCIAS',
            'MIRIAM ORTEGA': 'MIRIAM ORTEGA',
            'Transformation Manager': 'Gerente de Transformación',
            'Quality Coordination and Supervision Policies (SBP)': 'Coordinación Calidad y Políticas de Supervisión (SBP)',
            'Phone:': 'Telefono:',
            'View CV': 'Ver CV',
            'Download CV': 'Descargar CV',
            'CAREER OBJECTIVE': 'OBJETIVO PROFESIONAL',
            'Junior developer with knowledge in object-oriented programming, databases, UI/UX. I am actively seeking an opportunity to join an innovative team where I can apply my technical knowledge, contribute fresh ideas, and accelerate my professional growth alongside industry experts.': 'desarrollador junior con conocimientos en programación orientada a objetos, bases de datos, UI/UX. Busco activamente una oportunidad para unirme a un equipo innovador donde pueda aplicar mis conocimientos técnicos, aportar ideas frescas y acelerar mi crecimiento profesional de la mano de expertos en la industria.',
            'EXPERIENCE': 'EXPERIENCIA',
            'Intern, Superintendency of Banks of Panama': 'Estudiante en prácticas, Superintendencia de Bancos de Panamá',
            'Practical experience in Microsoft Power Platform and Microsoft 365.': 'Experiencia práctica en Microsoft Power Platform y Microsoft 365.',
            'Power BI: Creation of views, reports, and dashboards for data visualization and analysis.': 'Power BI: Creación de vistas, informes y dashboards para la visualización y análisis de datos',
            'Automation: Development of workflows with Power Automate to optimize processes.': 'Automatización: Desarrollo de flujos de trabajo con Power Automate para optimizar procesos.',
            'Conversational AI: Creation and implementation of AI agents (bots) using Copilot Studio (formerly Power Virtual Agents).': 'IA Conversacional: Creación e implementación de agentes de IA (bots) utilizando Copilot Studio (antes Power Virtual Agents).',
            'Design and implementation of a new module in an existing application using Angular.': 'Diseño e implementación de nuevo módulo en una aplicación existente utilizando Angular.',
            'Contribution to the architecture and functionality of the user interface.': 'Contribución a la arquitectura y funcionalidad de la interfaz de usuario.',
            'Robotics Operator/Demonstrator (ITSE) During the study period': 'Operador/Demostrador de Robótica (ITSE) Durante el periodo de estudios',
            'Participation in the operation and handling of Unitree Go2 and Go1 quadruped robots.': 'Participación en la operación y manejo de robots cuadrúpedos Unitree Go2 y Go1.',
            'Practical experience in controlling and demonstrating autonomous robots on multiple occasions for recreational and institutional promotion/advertising purposes.': 'Experiencia práctica en el control y la demostración de robots autónomos en múltiples ocasiones para fines recreativos y de promoción/publicidad institucional.',
            'Representative Team Member - World Robot Olympiad (WRO) 2023': 'Miembro del Equipo Representante - Olimpiadas Mundiales de Robótica (WRO) 2023',
            '[International Event: Representing Panama]': '[Evento Internacional: Representación de Panamá]',
            'International Representation: Selected for the final phase of the world tournament, demonstrating a high level of commitment and technical skill in the STEM field.': 'Representación Internacional: Seleccionado para la fase final del torneo mundial, demostrando un alto nivel de compromiso y habilidad técnica en el área STEM.',
            'Project Development: Application of programming and robotics principles for the development and optimization of the project in a high-pressure environment.': 'Desarrollo de Proyecto: Aplicación de principios de programación y robótica para el desarrollo y optimización del proyecto en un entorno de alta presión.',
            'Key Skills: Demonstrated accelerated learning, effective teamwork, and resilience to achieve complex goals at an international level.': 'Habilidades Clave: Demostración de aprendizaje acelerado, trabajo en equipo eficaz y resiliencia para alcanzar objetivos complejos a nivel internacional.',
            'EDUCATION': 'EDUCACIÓN',
            'Higher Technician in Software Development': 'Técnico Superior en Desarrollo de Software (Educación)',
            'Specialized Higher Technical Institute (ITSE) | Jan 2023 - Oct 2025': 'Instituto Técnico Superior Especializado (ITSE) | Ene 2023 - oct 2025',
            'Bachelor of Science': 'Bachiller en ciencias',
            'Instituto America | 2020-2022': 'Instituto America | 2020-2022',
            'TECHNICAL SKILLS': 'HABILIDADES TÉCNICAS',
            'HTML5, CSS3 & JavaScript': 'HTML5, CSS3 y JavaScript',
            'Bootstrap': 'Bootstrap',
            'JAVA': 'JAVA',
            'PHP': 'PHP',
            'node.js': 'node.js',
            'Angular': 'Angular',
            'UI/UX': 'UI/UX',
            'External APIs': 'APIs externas',
            'SQL server': 'SQL server',
            'MongoDB': 'MongoDB',
            'AndroidStudio (basic)': 'AndroidStudio (basico)',
            'python (basic)': 'python (basico)',
            'Visual Studio Code': 'Visual Studio Code',
            'Netbeans': 'Netbeans',
            'PowerBI': 'PowerBI',
            'Power Automate': 'Power Automate',
            'SOFT SKILLS': 'HABILIDADES BLANDAS',
            'Teamwork': 'Trabajo en equipo',
            'Effective Communication': 'Comunicación Efectiva',
            'Work under pressure': 'Trabajo bajo presión',
            'Proactive': 'Proactivo',
            'Adaptability': 'Adaptabilidad',
            'Responsibility': 'Responsabilidad',
            'Self-taught': 'Autodidacta',
            'My Projects': 'Mis Proyectos',
            'Contact:': 'Contacto:',
            'Technical Service App': 'App Servicio Técnico',
            'Final project for Mobile Application Development. Created in one week with Java in Android Studio, implementing UI/UX, splash screen, login, and a dynamic RecyclerView to manage a technical service for retro consoles.': 'Proyecto final de Desarrollo de Aplicaciones Móviles. Creado en una semana con Java en Android Studio, implementando UI/UX, splash screen, login y un RecyclerView dinámico para gestionar un servicio técnico de consolas retro.',
            'Inconsistency Dashboard': 'Dashboard de Inconsistencias',
            'Interactive report in Power BI for the analysis and visualization of inconsistencies in complex datasets.': 'Informe interactivo en Power BI para el análisis y visualización de inconsistencias en conjuntos de datos complejos.',
            'Volunteer Hours Dashboard': 'Dashboard Horas de Voluntariado',
            'Dashboard for tracking and analyzing volunteer hours, showing key metrics and comparisons.': 'Dashboard para el seguimiento y análisis de horas de voluntariado, mostrando métricas clave y comparativas.',
            'List Automation': 'Automatización de Listas',
            'Power Automate flow for the automated creation and deletion of lists in SharePoint, optimizing management.': 'Flujo de Power Automate para la creación y eliminación automatizada de listas en SharePoint, optimizando la gestión.',
            'Report Monitoring': 'Monitoreo de Informe',
            'Set of flows for monitoring reports, including sending emails, loading coordinators and records, and managing stages.': 'Conjunto de flujos para el monitoreo de informes, incluyendo envío de correos, carga de coordinadores y registros, y gestión de etapas.',
            'Action Plan Flow': 'Flujo para Plan de Acción',
            'Power Automate flow for the automated sending of emails related to action plans.': 'Flujo de Power Automate para el envío automatizado de correos relacionados con planes de acción.',
            'NBA App': 'NBA App',
            'API and frontend for NBA statistics, developed as a team. I focused on functionality, creating the API with Node.js and the database in MongoDB, while learning the Angular framework for the interface for the first time.': 'API y frontend para estadísticas de la NBA, desarrollado en equipo. Me enfoqué en la funcionalidad, creando la API con Node.js y la base de datos en MongoDB, mientras aprendía por primera vez el framework Angular para la interfaz.',
            'Fitness Application': 'Aplicación Fitness',
            'Workout tracking application built with pure JS and libraries. It includes UI/UX, calculation of metrics (1RM, TDEE), progress graphs, and functionality to export/import data.': 'Aplicación de seguimiento de entrenamiento construida con JS puro y librerías. Incluye UI/UX, cálculo de métricas (1RM, TDEE), gráficos de progreso, y funcionalidad para exportar/importar datos.',
            'PHP Task Manager': 'Gestor de Tareas PHP',
            'Web application for task management developed as a team. I participated in the design of the database with SQL Server, the frontend development with HTML/CSS/Bootstrap, and the backend implementation with PHP.': 'Aplicación web para gestión de tareas desarrollada en equipo. Participé en el diseño de la base de datos con SQL Server, el desarrollo frontend con HTML/CSS/Bootstrap y la implementación del backend con PHP.',
            'Pong Game': 'Juego Pong',
            'Classic Pong game developed with HTML, CSS, and JavaScript, as an exercise in DOM manipulation and game logic.': 'Clásico juego Pong desarrollado con HTML, CSS y JavaScript, como un ejercicio de manipulación del DOM y lógica de juego.',
            'PDF Book Reader': 'Lector de Libros PDF',
            'Web application to read PDF files online. Test credentials: User: Lumen, Password: 2101.': 'Aplicación web para leer archivos PDF online. Credenciales de prueba: Usuario: Lumen, Contraseña: 2101.',
            'Work Hours Counter': 'Contador de Horas Laborales',
            'Tool to calculate and record work hours, useful for freelancers and project control.': 'Herramienta para calcular y registrar horas laborales, útil para freelancers y control de proyectos.',
            'Days Calculator': 'Calculadora de Días',
            'Simple application to calculate the difference in days between two dates.': 'Sencilla aplicación para calcular la diferencia de días entre dos fechas.',
            'Gantt Chart': 'Diagrama de Gantt',
            'Planning tool created from scratch with HTML, CSS, and JavaScript for my graduation report. It allows you to efficiently manage and visualize project tasks.': 'Herramienta de planificación creada desde cero con HTML, CSS y JavaScript para mi informe de graduación. Permite gestionar y visualizar tareas de proyecto de manera eficiente.',
            'All': 'Todos',
            'NUMU': 'NUMU',
            'SBP': 'SBP',
            'This was one of my tasks as an intern at the SBP, where I had to use existing services to build a new module within a functional application, creating its component and using the application\'s existing resources. I also had to create and use specific stored procedures for that section from SQL. Additionally, with the support of a supervisor, I participated in creating and connecting a new table to log actions performed by users and administrators on the page.': 'Este fue una de mis tareas como practicante dentro de la SBP, en el cual tuve que utilizar servicios ya creados para construir un nuevo módulo dentro de una aplicación funcional, creando su componente y utilizando los recursos existentes. También tuve que crear y utilizar procedimientos almacenados específicos para esa sección desde SQL. Adicionalmente, con el apoyo de un supervisor, participé en la creación y conexión de una nueva tabla para llevar un registro de las acciones realizadas por usuarios y administradores en la página.',
            'Project focused on event organization. It allows renting venues, managing meal plans, organizing the space, confirming guest attendance with QR codes, and managing each guest\'s experience for a unique event. Uses PHP, SQL, and the Google Maps API.': 'Proyecto enfocado en la organización de eventos. Permite alquilar salones, gestionar planes de comida, organizar el lugar, confirmar asistencia de invitados con códigos QR y gestionar la experiencia de cada invitado para un evento único. Utiliza PHP, SQL, y la API de Google Maps.',
            'KirbyPlus (Productivity)': 'KirbyPlus (Productividad)',
            'WebView application for Android that works natively and offline. It focuses on comprehensive personal organization: task management, academic notes, language practice, exercise, and food and drawing logs. It includes calendars, customizable themes, and an option to import/export data.': 'Aplicación WebView para Android que funciona de forma nativa y sin conexión. Se enfoca en la organización personal integral: gestión de tareas, notas académicas, práctica de idiomas, ejercicio, y bitácoras de alimentación y dibujo. Incluye calendarios, temas personalizables y opción para importar/exportar datos.',
            'With Demo': 'Con Demo',
            'No Demo': 'Sin Demo',
            'View Application': 'Ver Aplicación',
            'Showing:': 'Mostrando:',
            'Total:': 'Total:'
        }
    };

    let currentLang = 'es';

    const projects = [
        {
            name: "SBP",
            tags: ["Angular", "Web (Html, css, javascript)", "TypeScript", "SQLServer/MySQL", "SQL"],
            description: "Este fue una de mis tareas como practicante dentro de la SBP, en el cual tuve que utilizar servicios ya creados para construir un nuevo módulo dentro de una aplicación funcional, creando su componente y utilizando los recursos existentes. También tuve que crear y utilizar procedimientos almacenados específicos para esa sección desde SQL. Adicionalmente, con el apoyo de un supervisor, participé en la creación y conexión de una nueva tabla para llevar un registro de las acciones realizadas por usuarios y administradores en la página.",
            images: ["Recursos/Web/SBP/1.png", "Recursos/Web/SBP/2.png", "Recursos/Web/SBP/3.png", "Recursos/Web/SBP/4.png"],
        },
        {
            name: "NUMU",
            tags: ["Web (Html, css, javascript)", "PHP", "SQL", "API", "Chart.js"],
            description: "Proyecto enfocado en la organización de eventos. Permite alquilar salones, gestionar planes de comida, organizar el lugar, confirmar asistencia de invitados con códigos QR y gestionar la experiencia de cada invitado para un evento único. Utiliza PHP, SQL, y la API de Google Maps.",
            images: ["Recursos/Web/NUMU/1.png", "Recursos/Web/NUMU/2.png", "Recursos/Web/NUMU/3.png", "Recursos/Web/NUMU/4.png", "Recursos/Web/NUMU/5.png", "Recursos/Web/NUMU/6.png", "Recursos/Web/NUMU/7.png", "Recursos/Web/NUMU/8.png", "Recursos/Web/NUMU/9.png", "Recursos/Web/NUMU/10.png", "Recursos/Web/NUMU/11.png", "Recursos/Web/NUMU/12.png", "Recursos/Web/NUMU/13.png"],
        },
        {
            name: "KirbyPlus (Productividad)",
            tags: ["AndroidStudio", "Web (Html, css, javascript)", "API", "WebView"],
            description: "Aplicación WebView para Android que funciona de forma nativa y sin conexión. Se enfoca en la organización personal integral: gestión de tareas, notas académicas, práctica de idiomas, ejercicio, y bitácoras de alimentación y dibujo. Incluye calendarios, temas personalizables y opción para importar/exportar datos.",
            images: ["Recursos/Web/Productividad/1.jpg", "Recursos/Web/Productividad/2.jpg", "Recursos/Web/Productividad/3.jpg", "Recursos/Web/Productividad/4.jpg", "Recursos/Web/Productividad/5.jpg", "Recursos/Web/Productividad/6.jpg", "Recursos/Web/Productividad/7.jpg", "Recursos/Web/Productividad/8.jpg", "Recursos/Web/Productividad/9.jpg", "Recursos/Web/Productividad/10.jpg", "Recursos/Web/Productividad/11.jpg", "Recursos/Web/Productividad/12.jpg", "Recursos/Web/Productividad/13.jpg", "Recursos/Web/Productividad/14.jpg", "Recursos/Web/Productividad/15.jpg", "Recursos/Web/Productividad/16.jpg", "Recursos/Web/Productividad/17.jpg", "Recursos/Web/Productividad/18.jpg"],
        },
        {
            name: "App Servicio Técnico",
            tags: ["AndroidStudio"],
            description: "Proyecto final de Desarrollo de Aplicaciones Móviles. Creado en una semana con Java en Android Studio, implementando UI/UX, splash screen, login y un RecyclerView dinámico para gestionar un servicio técnico de consolas retro.",
            images: [
                "Recursos/AndroidStudio/ServicioTecnico/Inicio.png",
                "Recursos/AndroidStudio/ServicioTecnico/Login.png",
                "Recursos/AndroidStudio/ServicioTecnico/quienes somos.png",
                "Recursos/AndroidStudio/ServicioTecnico/Splash.png"
            ]
        },
        {
            name: "Dashboard de Inconsistencias",
            tags: ["PowerBI"],
            description: "Informe interactivo en Power BI para el análisis y visualización de inconsistencias en conjuntos de datos complejos.",
            images: [
                "Recursos/PowerBI/OPC/1_Centro de Información.png", "Recursos/PowerBI/OPC/2_Tabla_General.png", "Recursos/PowerBI/OPC/3_Inconsistencia_F.png", "Recursos/PowerBI/OPC/4_Inconsistencia_C.png", "Recursos/PowerBI/OPC/5_Otras_Reportadas.png", "Recursos/PowerBI/OPC/6_Limite.png", "Recursos/PowerBI/OPC/7_R.png", "Recursos/PowerBI/OPC/8_R+.png", "Recursos/PowerBI/OPC/9_I.png", "Recursos/PowerBI/OPC/10_OR.png", "Recursos/PowerBI/OPC/11_V_B1_B2.png", "Recursos/PowerBI/OPC/12_B_VS_A_G.png", "Recursos/PowerBI/OPC/13_B_VS_A_P.png"
            ]
        },
        {
            name: "Dashboard Horas de Voluntariado",
            tags: ["PowerBI"],
            description: "Dashboard para el seguimiento y análisis de horas de voluntariado, mostrando métricas clave y comparativas.",
            images: ["Recursos/PowerBI/PowerBiHoras/1_ResumenGeneral.png", "Recursos/PowerBI/PowerBiHoras/2_DatosVoluntariado.png", "Recursos/PowerBI/PowerBiHoras/3_Top3.png", "Recursos/PowerBI/PowerBiHoras/4_Comparativo.png"]
        },
        {
            name: "Automatización de Listas",
            tags: ["Power Automate"],
            description: "Flujo de Power Automate para la creación y eliminación automatizada de listas en SharePoint, optimizando la gestión.",
            images: ["Recursos/Power Automate/Listas/Crear Listas/1_CrearListas.png", "Recursos/Power Automate/Listas/Crear Listas/2_CrearListas.png", "Recursos/Power Automate/Listas/Eliminar Listas/1_EliminarListas.png", "Recursos/Power Automate/Listas/Eliminar Listas/2_EliminarListas.png", "Recursos/Power Automate/Listas/Eliminar Listas/3_EliminarListas.png"]
        },
        {
            name: "Monitoreo de Informe",
            tags: ["Power Automate"],
            description: "Conjunto de flujos para el monitoreo de informes, incluyendo envío de correos, carga de coordinadores y registros, y gestión de etapas.",
            images: [
                "Recursos/Power Automate/Monitoreo del Informe/0. Envio de Correos Por Coordinador (Agregar Fotos)/1_Envio de Correos.png",
                "Recursos/Power Automate/Monitoreo del Informe/1. Carga de Nuevos Coordinadores (Agregar Fotos)/1_NuevosCoordinadores.png",
                "Recursos/Power Automate/Monitoreo del Informe/1. Carga de Nuevos Coordinadores (Agregar Fotos)/2_NuevosCoordinadores.png",
                "Recursos/Power Automate/Monitoreo del Informe/2. Carga de Nuevos Registros a Cada Coordinador (Agregar Fotos)/1_NuevosRegistrosPorCoordinador.png",
                "Recursos/Power Automate/Monitoreo del Informe/2. Carga de Nuevos Registros a Cada Coordinador (Agregar Fotos)/2_NuevosRegistrosPorCoordinador.png",
                "Recursos/Power Automate/Monitoreo del Informe/2. Carga de Nuevos Registros a Cada Coordinador (Agregar Fotos)/3_NuevosRegistrosPorCoordinador.png",
                "Recursos/Power Automate/Monitoreo del Informe/3. Carga de Monitoreo General (Agregar Fotos)/1_CargaDeEtapas.png",
                "Recursos/Power Automate/Monitoreo del Informe/3. Carga de Monitoreo General (Agregar Fotos)/2_CargaDeEtapas.png",
                "Recursos/Power Automate/Monitoreo del Informe/4. Copias del Monitoreo (Agregar Fotos)/1_Copia.png"
            ]
        },
        {
            name: "Flujo para Plan de Acción",
            tags: ["Power Automate"],
            description: "Flujo de Power Automate para el envío automatizado de correos relacionados con planes de acción.",
            images: ["Recursos/Power Automate/Plan de Acción/Flujo para Envio de Correos Plan de Acción.png"]
        },
        {
            name: "NBA App",
            tags: ["Web (Html, css, javascript)", "API REST", "Angular", "MongoDB", "Node.js", "Typescript", "MongoDB Atlas"],
            description: "API y frontend para estadísticas de la NBA, desarrollado en equipo. Me enfoqué en la funcionalidad, creando la API con Node.js y la base de datos en MongoDB, mientras aprendía por primera vez el framework Angular para la interfaz.",
            images: ["Recursos/Web/Angular/NBA/PInicio.png", "Recursos/Web/Angular/NBA/Jugadores.png", "Recursos/Web/Angular/NBA/Juagdores2.png", "Recursos/Web/Angular/NBA/editar.png", "Recursos/Web/Angular/NBA/modal agregar.png", "Recursos/Web/Angular/NBA/MONGO.png"]
        },
        {
            name: "Aplicación Fitness",
            tags: ["Web (Html, css, javascript)", "API", "Chart.js", "JsZip", "Sortable.js" ],
            description: "Aplicación de seguimiento de entrenamiento construida con JS puro y librerías. Incluye UI/UX, cálculo de métricas (1RM, TDEE), gráficos de progreso, y funcionalidad para exportar/importar datos.",
            images: ["Recursos/Web/AppFitness/1.Fitness.png", "Recursos/Web/AppFitness/2.Fitness.png", "Recursos/Web/AppFitness/3.Fitness.png", "Recursos/Web/AppFitness/4.Fitness.png", "Recursos/Web/AppFitness/5.Fitness.png", "Recursos/Web/AppFitness/6.Fitness.png", "Recursos/Web/AppFitness/7.Fitness.png", "Recursos/Web/AppFitness/8.Fitness.png", "Recursos/Web/AppFitness/9.Fitness.png", "Recursos/Web/AppFitness/10.Fitness.png", "Recursos/Web/AppFitness/11.Fitness.png", "Recursos/Web/AppFitness/12.Fitness.png", "Recursos/Web/AppFitness/13.Fitness.png", "Recursos/Web/AppFitness/14.Fitness.png", "Recursos/Web/AppFitness/15.Fitness.png", "Recursos/Web/AppFitness/16.Fitness.png", "Recursos/Web/AppFitness/17.Fitness.png", "Recursos/Web/AppFitness/18.Fitness.png", "Recursos/Web/AppFitness/19.Fitness.png", "Recursos/Web/AppFitness/20.Fitness.png", "Recursos/Web/AppFitness/21.Fitness.png"],
            liveLink: "https://alexgymtracker.netlify.app/#plan-semanal"
        },
        {
            name: "Gestor de Tareas PHP",
            tags: ["Web (Html, css, javascript)", "PHP", "SQL", "Bootstrap", "SQLServer/MySQL"],
            description: "Aplicación web para gestión de tareas desarrollada en equipo. Participé en el diseño de la base de datos con SQL Server, el desarrollo frontend con HTML/CSS/Bootstrap y la implementación del backend con PHP.",
            images: ["Recursos/Web/PHP/GestorDeTareas/Inicio.png", "Recursos/Web/PHP/GestorDeTareas/Captura de pantalla 2025-09-20 154223.png", "Recursos/Web/PHP/GestorDeTareas/Captura de pantalla 2025-09-20 154305.png", "Recursos/Web/PHP/GestorDeTareas/Captura de pantalla 2025-09-20 154340.png", "Recursos/Web/PHP/GestorDeTareas/Captura de pantalla 2025-09-20 154402.png", "Recursos/Web/PHP/GestorDeTareas/Captura de pantalla 2025-09-20 154422.png", "Recursos/Web/PHP/GestorDeTareas/Captura de pantalla 2025-09-20 154451.png", "Recursos/Web/PHP/GestorDeTareas/Captura de pantalla 2025-09-20 154517.png", "Recursos/Web/PHP/GestorDeTareas/Captura de pantalla 2025-09-20 154536.png"]
        },
        {
            name: "Juego Pong",
            tags: ["Web (Html, css, javascript)"],
            description: "Clásico juego Pong desarrollado con HTML, CSS y JavaScript, como un ejercicio de manipulación del DOM y lógica de juego.",
            images: ["Recursos/Web/Pong/1.Pong.png", "Recursos/Web/Pong/2.Pong.png", "Recursos/Web/Pong/3.Pong.png"],
            liveLink: "https://bounced-legends-supernova-showdon.netlify.app/"
        },
        {
            name: "Lector de Libros PDF",
            tags: ["Web (Html, css, javascript)"],
            description: "Aplicación web para leer archivos PDF online. Credenciales de prueba: Usuario: Lumen, Contraseña: 2101.",
            images: ["Recursos/Web/LectorPDF/1.LectorPDF.png", "Recursos/Web/LectorPDF/2.LectorPDF.png", "Recursos/Web/LectorPDF/3.LectorPDF.png", "Recursos/Web/LectorPDF/4.LectorPDF.png", "Recursos/Web/LectorPDF/5.LectorPDF.png"],
            liveLink: "https://lumenread.netlify.app/"
        },
        {
            name: "Contador de Horas Laborales",
            tags: ["Web (Html, css, javascript)"],
            description: "Herramienta para calcular y registrar horas laborales, útil para freelancers y control de proyectos.",
            images: ["Recursos/Web/Horas_Laborales/1.Horas_Laborales.png", "Recursos/Web/Horas_Laborales/2.Horas_Laborales.png", "Recursos/Web/Horas_Laborales/3.Horas_Laborales.png"],
            liveLink: "https://horaslaborales.netlify.app/"
        },
        {
            name: "Calculadora de Días",
            tags: ["Web (Html, css, javascript)"],
            description: "Sencilla aplicación para calcular la diferencia de días entre dos fechas.",
            images: ["Recursos/Web/Calculadora_de_Dias/1.Calculadora_De_Dias.png"],
            liveLink: "https://dayscalculatoroffline.netlify.app/"
        },
        {
            name: "Diagrama de Gantt",
            tags: ["Web (Html, css, javascript)"],
            description: "Herramienta de planificación creada desde cero con HTML, CSS y JavaScript para mi informe de graduación. Permite gestionar y visualizar tareas de proyecto de manera eficiente.",
            images: ["Recursos/Web/Diagrama_de_Gantt/1.Diagrama_de_Gantt.png"],
        }
    ];

    const projectGrid = document.getElementById('project-grid');
    const filtersContainer = document.getElementById('filters');
    const modal = document.getElementById('modal');
    const modalCarouselImages = modal.querySelector('.modal-carousel-images');
    const closeModalBtn = modal.querySelector('.close-btn');
    const modalPrevBtn = modal.querySelector('.modal-prev-btn');
    const modalNextBtn = modal.querySelector('.modal-next-btn');

    const displayedProjectsCountSpan = document.getElementById('displayed-projects-count');
    const totalProjectsCountSpan = document.getElementById('total-projects-count');
    const demoLinksCountSpan = document.getElementById('demo-links-count');

    let modalImages = [];
    let currentModalIndex = 0;

    function setElementText(element, translation) {
        // For elements that might contain other elements (like <strong>), use innerHTML
        if (element.children.length > 0) {
            element.innerHTML = translation;
        } else {
            element.innerText = translation;
        }
    }

    function translatePage() {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            const translation = translations[currentLang][key] || translations['es'][key] || key;
            setElementText(element, translation);
        });
    }

    function renderProjects() {
        projectGrid.innerHTML = '';
        projects.forEach((project, projectIndex) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.dataset.tags = project.tags.map(tag => tag.toLowerCase().replace(/\s+/g, '')).join(' ');
            card.dataset.hasDemo = !!project.liveLink;

            // Carousel
            const carousel = document.createElement('div');
            carousel.className = 'carousel';
            const carouselImages = document.createElement('div');
            carouselImages.className = 'carousel-images';
            project.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = project.name;
                carouselImages.appendChild(img);
            });
            carousel.appendChild(carouselImages);

            if (project.images.length > 1) {
                const prevBtn = document.createElement('button');
                prevBtn.className = 'carousel-btn prev-btn';
                prevBtn.innerHTML = '&#10094;';
                prevBtn.addEventListener('click', (e) => { e.stopPropagation(); moveCarousel(carousel, -1); });
                const nextBtn = document.createElement('button');
                nextBtn.className = 'carousel-btn next-btn';
                nextBtn.innerHTML = '&#10095;';
                nextBtn.addEventListener('click', (e) => { e.stopPropagation(); moveCarousel(carousel, 1); });
                carousel.appendChild(prevBtn);
                carousel.appendChild(nextBtn);

                const counter = document.createElement('div');
                counter.className = 'carousel-counter';
                carousel.appendChild(counter);
                updateCarouselCounter(carousel);
            }
            carousel.addEventListener('click', () => openModal(project.images));

            // Info
            const info = document.createElement('div');
            info.className = 'project-info';
            let linksHTML = '';
            if (project.liveLink) {
                const buttonText = currentLang === 'en' ? 'View Application' : 'Ver Aplicación';
                linksHTML = `<div class="project-links"><a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${buttonText}</a></div>`;
            }
            const tagsHTML = project.tags.map(tag => `<span class="category">${tag}</span>`).join(' ');
            const projectName = translations[currentLang][project.name] || project.name;
            const projectDescription = translations[currentLang][project.description] || project.description;

            info.innerHTML = `
                <h3>${projectName}</h3>
                <div class="tags-container">${tagsHTML}</div>
                <p class="description">${projectDescription}</p>
                ${linksHTML}
            `;

            card.appendChild(carousel);
            card.appendChild(info);
            projectGrid.appendChild(card);
        });
    }

    function toggleLanguage() {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        const translateBtn = document.getElementById('translate-btn');
        translateBtn.textContent = currentLang === 'es' ? 'English' : 'Español';
        translatePage();
        renderProjects();
        updateProjectCounts();
    }

    // Function to update project counts
    function updateProjectCounts() {
        const totalProjects = projects.length;
        const projectsWithDemoLink = projects.filter(p => p.liveLink).length;
        const displayedProjects = document.querySelectorAll('.project-card:not(.hide)').length;

        const showingText = currentLang === 'en' ? 'Showing:' : 'Mostrando:';
        const totalText = currentLang === 'en' ? 'Total:' : 'Total:';
        const withDemoText = currentLang === 'en' ? 'With Demo:' : 'Con Demo:';

        displayedProjectsCountSpan.textContent = `${showingText} ${displayedProjects}`;
        totalProjectsCountSpan.textContent = `${totalText} ${totalProjects}`;
        demoLinksCountSpan.textContent = `${withDemoText} ${projectsWithDemoLink}`;
    }

    // 1. Crear botones de filtro
    const allTags = new Set();
    projects.forEach(p => p.tags.forEach(tag => allTags.add(tag)));
    const sortedTags = Array.from(allTags).sort();
    const filters = ['all', ...sortedTags, 'con-demo', 'sin-demo'];

    const demoFilters = document.createElement('div');
    demoFilters.className = 'demo-filters';
    filtersContainer.appendChild(demoFilters);

    filters.forEach(filter => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.dataset.filter = filter.toLowerCase().replace(/\s+/g, '');
        
        if (filter === 'all') {
            button.textContent = 'Todos';
            button.setAttribute('data-translate-key', 'Todos');
            button.classList.add('active');
            filtersContainer.insertBefore(button, filtersContainer.firstChild);
        } else if (filter === 'con-demo') {
            button.textContent = 'Con Demo';
            button.setAttribute('data-translate-key', 'Con Demo');
            demoFilters.appendChild(button);
        } else if (filter === 'sin-demo') {
            button.textContent = 'Sin Demo';
            button.setAttribute('data-translate-key', 'Sin Demo');
            demoFilters.appendChild(button);
        } else {
            button.textContent = filter;
            filtersContainer.insertBefore(button, demoFilters);
        }
    });

    renderProjects();

    // Initial call to update project counts after rendering
    updateProjectCounts();

    // 3. Lógica de filtros
    const filterButtons = document.querySelectorAll('#filters .btn');
    let currentTagFilter = 'all';
    let currentDemoFilter = 'all';

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            if (filter === 'con-demo' || filter === 'sin-demo') {
                if (currentDemoFilter === filter) {
                    currentDemoFilter = 'all';
                    button.classList.remove('active');
                } else {
                    currentDemoFilter = filter;
                    button.classList.add('active');
                }
            } else {
                currentTagFilter = filter;
                filterButtons.forEach(btn => {
                    if (btn.dataset.filter !== 'con-demo' && btn.dataset.filter !== 'sin-demo') {
                        btn.classList.remove('active');
                    }
                });
                button.classList.add('active');
            }

            document.querySelectorAll('.project-card').forEach(card => {
                const tags = card.dataset.tags.split(' ');
                const hasDemo = card.dataset.hasDemo === 'true';

                let showByTag = currentTagFilter === 'all' || tags.includes(currentTagFilter);
                let showByDemo = true;

                if (currentDemoFilter === 'con-demo') {
                    showByDemo = hasDemo;
                } else if (currentDemoFilter === 'sin-demo') {
                    showByDemo = !hasDemo;
                }

                card.classList.toggle('hide', !(showByTag && showByDemo));
            });

            updateProjectCounts(); // Update counts after filtering
        });
    });

    // 4. Lógica de carrusel de tarjeta
    function updateCarouselCounter(carousel) {
        const imageContainer = carousel.querySelector('.carousel-images');
        const counter = carousel.querySelector('.carousel-counter');
        if (!counter) return;
        const numImages = imageContainer.children.length;
        const currentIndex = parseInt(imageContainer.dataset.index || '0');
        counter.textContent = `${currentIndex + 1} / ${numImages}`;
    }

    function moveCarousel(carousel, direction) {
        const imageContainer = carousel.querySelector('.carousel-images');
        let currentIndex = parseInt(imageContainer.dataset.index || '0');
        currentIndex = (currentIndex + direction + imageContainer.children.length) % imageContainer.children.length;
        imageContainer.dataset.index = currentIndex;
        imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateCarouselCounter(carousel);
    }

    // 5. Lógica del Modal
    function openModal(images) {
        modalImages = images;
        currentModalIndex = 0;
        updateModalCarousel();
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        modalCarouselImages.innerHTML = ''; // Limpiar para evitar flash de contenido antiguo
    }

    function updateModalCarousel() {
        modalCarouselImages.innerHTML = '';
        const img = document.createElement('img');
        img.src = modalImages[currentModalIndex];
        modalCarouselImages.appendChild(img);

        const counter = modal.querySelector('.carousel-counter');
        if (modalImages.length > 1) {
            counter.textContent = `${currentModalIndex + 1} / ${modalImages.length}`;
            counter.style.display = 'block';
            modalPrevBtn.style.display = 'block';
            modalNextBtn.style.display = 'block';
        } else {
            counter.style.display = 'none';
            modalPrevBtn.style.display = 'none';
            modalNextBtn.style.display = 'none';
        }
    }

    function moveModalCarousel(direction) {
        currentModalIndex = (currentModalIndex + direction + modalImages.length) % modalImages.length;
        updateModalCarousel();
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    modalPrevBtn.addEventListener('click', () => moveModalCarousel(-1));
    modalNextBtn.addEventListener('click', () => moveModalCarousel(1));

    const downloadCvBtn = document.getElementById('download-cv-btn');
    downloadCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = downloadCvBtn.href;
    });

    const translateBtn = document.getElementById('translate-btn');
    translateBtn.addEventListener('click', toggleLanguage);
});