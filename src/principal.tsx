const PROYECTOS = [
  {
    id:1,
    titulo: "Habla con Goku - Proyecto Integrador",
    problema: "No había una forma interactiva y entretenida de aprender sobre Dragon Ball Z / Goku usando IA, y las API keys quedaban expuestas en el frontend.",
    solucion: "Desarrollé una SPA en JavaScript Vanilla que permite chatear con Goku usando Google Gemini AI, protegiendo la API key mediante Vercel Serverless Functions.",
    demoUrl: "https://proyecto-m3-josue-kaleth-salazar.vercel.app",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM3JosueKalethSalazar"
  },
  {
    id: 2,
    titulo: "API Mini Blog",
    problema: "No existía una forma sencilla de administrar autores y sus publicaciones desde una API centralizada.",
    solucion: "Creé una API RESTful en Node.js y Express para gestionar autores y sus blogs, con documentación Swagger.",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM2_JosueKalethSalazar.git"
  },
  {
    id: 3,
    titulo: "AutomateHub MCP Server",
    problema: "Gestionar repositorios en GitHub requería múltiples pasos manuales o conocer comandos git, sin forma de hacerlo desde lenguaje natural con un agente de IA",
    solucion: "Desarrollé un servidor MCP en TypeScript que actúa de puente entre un LLM y la API de GitHub, exponiendo 9 herramientas que permiten crear repos, ramas, commits, issues y pull requests desde instrucciones en lenguaje natural.",
    repoUrl: "https://github.com/Taimolrvz007/ProyectoM5_JosueKalethSalazar.git"
  }
];


export default function Principal() {
  return (
    <div style={{ background: '#1a1a1a', minHeight: '100vh', padding: '2rem 1.5rem', maxWidth: '100%', margin: '0 auto', color: '#f0c040', fontFamily: 'sans-serif' }}>

      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center', padding: '2rem 0', marginBottom: '3rem' }}>
        <div style={{ width: 150, height: 150, borderRadius: '50%', border: '3px solid #f0c040', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <span style={{ color: '#555', fontSize: 13 }}>Tu foto aquí</span>
        </div>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 500, color: '#f0c040' }}>Josue Kaleth Salazar</h1>
          <p style={{ color: '#c8a030', marginTop: 8 }}>Desarrollador Full Stack | React, Node.js & Express | Nube & Integracion AI </p>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 20, borderBottom: '1px solid #f0c04044', paddingBottom: 8, marginBottom: '1.5rem' }}>Proyectos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          
          {PROYECTOS.map((proyecto) => (
            <div key={proyecto.id} style={{ background: '#242424', border: '1px solid #f0c04033', borderRadius: 10, padding: '1.25rem' }}>
              <p style={{ fontSize: 11, color: '#888', marginBottom: 6 }}>PROYECTO {proyecto.id}</p>
              <h3 style={{ fontSize: 15, marginBottom: 8 }}>{proyecto.titulo}</h3>
              <p style={{ fontSize: 13, color: '#c8a030', marginBottom: 4 }}><b>Problema:</b> {proyecto.problema}</p>
              <p style={{ fontSize: 13, color: '#c8a030', marginBottom: 4 }}><b>Solución:</b> {proyecto.solucion}</p>
              <p style={{ fontSize: 13, color: '#c8a030' }}>
                <b>Demo: </b> 
                <a href={proyecto.demoUrl} target="_blank" rel="noreferrer" style={{ color: '#f0c040', marginRight: '8px' }}>Ver</a> 
                <a href={proyecto.repoUrl} target="_blank" rel="noreferrer" style={{ color: '#f0c040' }}>Repositorio</a>
              </p>
            </div>
          ))}

        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 20, borderBottom: '1px solid #f0c04044', paddingBottom: 8, marginBottom: '1.5rem' }}>Contacto</h2>
        <div style={{ justifyContent:"center", display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://www.linkedin.com/in/kalethsalazar/" style={{ padding: '10px 18px', border: '1px solid #f0c040', borderRadius: 8, color: '#f0c040', textDecoration: 'none' }}>LinkedIn</a>
          <a href="https://wa.me/573133651839" style={{ padding: '10px 18px', border: '1px solid #f0c040', borderRadius: 8, color: '#f0c040', textDecoration: 'none' }}>WhatsApp</a>
          <a href="https://github.com/Taimolrvz007/" style={{ padding: '10px 18px', border: '1px solid #f0c040', borderRadius: 8, color: '#f0c040', textDecoration: 'none' }}>GitHub</a>
        </div>
      </section>

    </div>
  );
}