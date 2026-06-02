const PROYECTOS = [
  {
    id: 1,
    titulo: "Habla con Goku - Proyecto Integrador",
    problema: "No había una forma interactiva y entretenida de aprender sobre Dragon Ball Z / Goku usando IA, y las API keys quedaban expuestas en el frontend.",
    solucion: "Desarrollé una SPA en JavaScript Vanilla que permite chatear con Goku usando Google Gemini AI, protegiendo la API key mediante Vercel Serverless Functions.",
    demoUrl: "https://proyecto-m3-josue-kaleth-salazar.vercel.app",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM3JosueKalethSalazar",
    tecnologias: "JavaScript Vanilla,HTML5 + CSS3,History API (routing SPA),Google Gemini AI,Vercel Serverless Functions,Vitest (tests unitarios)"
  },
  {
    id: 2,
    titulo: "API Mini Blog",
    problema: "No existía una forma sencilla de administrar autores y sus publicaciones desde una API centralizada.",
    solucion: "Creé una API RESTful en Node.js y Express para gestionar autores y sus blogs, con documentación Swagger.",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM2_JosueKalethSalazar.git",
    tecnologias: "Node.js, PostgreSQL,Vitest,Supertest,Swagger"
  },
  {
    id: 3,
    titulo: "AutomateHub MCP Server",
    problema: "Gestionar repositorios en GitHub requería múltiples pasos manuales o conocer comandos git, sin forma de hacerlo desde lenguaje natural con un agente de IA",
    solucion: "Desarrollé un servidor MCP en TypeScript que actúa de puente entre un LLM y la API de GitHub, exponiendo 9 herramientas que permiten crear repos, ramas, commits, issues y pull requests desde instrucciones en lenguaje natural.",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM5_JosueKalethSalazar.git",
    tecnologias: "TypeScript, Libreria ZOD, Framework MCP, API GitHub,Vitest"
  },
  {
    id: 4,
    titulo: 'Task Manager Pro — Módulo 4',
    problema: 'No había una forma de gestionar tareas con persistencia en la nube y notificaciones automáticas por correo desde una sola app.',
    solucion: 'Gestor de tareas con React y Firebase para persistencia, más AWS SES vía Vercel Functions para envío de notificaciones por email.',
    tecnologias: 'React, TypeScript, Firebase, AWS SES, Vercel Functions, Lucide React',
    demoUrl: 'https://proyecto-m4-josue-kaleth-salazar.vercel.app/login',
    repoUrl: 'https://github.com/Taimolrvz007/ProyectoM4_JosueKalethSalazar'
  },  
  {
  id: 5,
  titulo: 'Chat en Vivo con WebSocket',
  problema: 'En la antiguedad las personas se comunicaban por mensajes de texto, lo cual hacia que no fuera en tiempo real con WebSocket',
  solucion: 'Crear una aplicacion de chat en tiempo real con WebSocket',
  tecnologias: 'Frontend: React 19, TypeScript, Vite, Socket.IO Client Backend: Node.js, Express 5, Socket.IO, CORS',
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
                <span className="card-key">Problema:</span>
                <span className="card-val">{proyecto.problema}</span>
              </div>

              <div className="card-row">
                <span className="card-key">Solución:</span>
                <span className="card-val">{proyecto.solucion}</span>
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