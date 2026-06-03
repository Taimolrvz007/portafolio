const PROYECTOS = [
  {
    id: 1,
    titulo: "AutomateHub MCP Server",
    descripcion: "Servidor MCP que conecta modelos de IA con GitHub, permitiendo ejecutar acciones mediante lenguaje natural.",
    logros: "9 herramientas MCP implementadas,Integración con GitHub API,Validación con Zod,Testing automatizado",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM5_JosueKalethSalazar.git",
    tecnologias: "TypeScript, MCP Framework, GitHub API, Zod, Vitest"
  },
  {
    id: 2,
    titulo: "API Mini Blog",
    descripcion: " API REST desarrollada para la gestión de autores y publicaciones, con documentación interactiva y pruebas automatizadas.",
    logros: "CRUD completo,PostgreSQL,Documentación Swagger,Testing con Vitest y Supertest",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM2_JosueKalethSalazar.git",
    tecnologias: "Node.js, Express, PostgreSQL, Swagger, Vitest, Supertest"
  },
  {
    id: 3,
    titulo: "Habla con Goku - Proyecto Integrador",
    descripcion: "Aplicación web que permite conversar con Goku utilizando Google Gemini AI mediante una experiencia interactiva inspirada en Dragon Ball Z.",
    logros: "Integración con Google Gemini AI,Arquitectura Serverless en Vercel,Protección de API Keys en Backend,Testing con Vitest",
    demoUrl: "https://proyecto-m3-josue-kaleth-salazar.vercel.app",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM3JosueKalethSalazar",
    tecnologias: "JavaScript, HTML, CSS, Gemini AI, Vercel Functions, Vitest"
  },
  {
    id: 4,
    titulo: 'Task Manager Pro — Módulo 4',
    descripcion: 'Plataforma de gestión de tareas con persistencia en la nube y sistema automático de notificaciones por correo electrónico.',
    logros: 'Gestión de tareas en tiempo real,Firebase Database,Notificaciones con AWS SES,Despliegue Serverless',
    tecnologias: 'React, TypeScript, Firebase, AWS SES, Vercel Functions',
    demoUrl: 'https://proyecto-m4-josue-kaleth-salazar.vercel.app/login',
    repoUrl: 'https://github.com/Taimolrvz007/ProyectoM4_JosueKalethSalazar'
  },  
  {
  id: 5,
  titulo: 'Chat en Vivo con WebSocket',
  descripcion: 'Aplicación de mensajería en tiempo real desarrollada con WebSockets para comunicación instantánea entre usuarios.',
  logros: 'Comunicación bidireccional,WebSockets,Arquitectura cliente-servidor,Manejo de múltiples conexiones',
  tecnologias: 'React, TypeScript, Socket.IO, Node.js, Express',
  repoUrl: 'https://github.com/Taimolrvz007/chat-con-WebSocket.git',
  }
];

export default function Principal() {
  return (
    <div className="pf">

      <section className="hero">
        <div className="photo-ring">
          <img src="definitivo.jpeg" alt="foto" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h1>Josue Kaleth Salazar</h1>
        <p>Desarrollador Full Stack | React, Node.js & Express | Nube & Integracion AI</p>
        <p style={{ marginTop: '20px', fontSize: '16px', color: '#ce9906' }}>
          Sobre mi: Desarrollador Full Stack especializado en Backend. Construyo APIs REST, integraciones con IA y aplicaciones cloud utilizando Node.js, TypeScript, PostgreSQL y React. Me enfoco en crear soluciones escalables aplicando buenas prácticas de arquitectura, testing y automatización.
        </p>
        <p style={{ marginTop: '20px', fontSize: '16px', color: '#ce9906' }}>Node.js
TypeScript
Express
PostgreSQL
React
AWS
Firebase
GitHub API
MCP
Vitest</p>

        <div className="divider"></div>
      </section>


      <section className="section">
        <p className="section-label">Portafolio</p>
        <h2 className="section-title">Proyectos</h2>

        <div className="projects">
          {PROYECTOS.map((proyecto) => (
            <div key={proyecto.id} className="card">
              <div className="card-num">PROYECTO 0{proyecto.id}</div>
              <h3>{proyecto.titulo}</h3>

              <div className="card-row">
                <span className="card-key">Descripción:</span>
                <span className="card-val">{proyecto.descripcion}</span>
              </div>

              <div className="card-row">
                <span className="card-key">Logros:</span>
                <span className="card-val">{proyecto.logros}</span>
              </div>

              <div className="card-links">
                {proyecto.demoUrl && (
                  <a href={proyecto.demoUrl} target="_blank" rel="noreferrer">Ver Demo</a>
                )}
                <a href={proyecto.repoUrl} target="_blank" rel="noreferrer">Repositorio</a>
              </div>

              <div className="card-row">
                <span className="card-key">Tecnologias:</span>
                <span className="card-val">{proyecto.tecnologias}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <p className="section-label">Contacto</p>
        <h2 className="section-title">Hablemos</h2>

        <div className="contact-btns">
          <a href="https://www.linkedin.com/in/kalethsalazar/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://wa.me/573133651839" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://github.com/Taimolrvz007/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

    </div>
  );
}