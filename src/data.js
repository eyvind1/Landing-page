export const brand = "NovaCode";

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export const problems = [
  { title: "Software lento de entregar", text: "Proyectos que se alargan meses sin resultados visibles." },
  { title: "Costos impredecibles", text: "Presupuestos que crecen sin control ni transparencia." },
  { title: "Sin soporte posterior", text: "Entregan el código y desaparecen cuando surge un problema." },
];

export const services = [
  { icon: "🌐", title: "Desarrollo web", text: "Sitios y aplicaciones web rápidas, seguras y escalables." },
  { icon: "📱", title: "Apps móviles", text: "Aplicaciones iOS y Android multiplataforma." },
  { icon: "⚙️", title: "Software a medida", text: "Sistemas internos adaptados a tus procesos." },
  { icon: "🔌", title: "Integraciones y APIs", text: "Conectamos tus herramientas y automatizamos tareas." },
  { icon: "🎨", title: "Diseño UI/UX", text: "Interfaces claras centradas en el usuario." },
  { icon: "🛠️", title: "Mantenimiento y soporte", text: "Evolución continua y respuesta ante incidentes." },
];

export const steps = [
  { title: "Descubrimiento", text: "Entendemos tu negocio y definimos el alcance." },
  { title: "Diseño", text: "Prototipos y arquitectura validados contigo." },
  { title: "Desarrollo", text: "Entregas iterativas cada 1-2 semanas." },
  { title: "Pruebas", text: "QA manual y automatizado antes de lanzar." },
  { title: "Entrega", text: "Despliegue, documentación y capacitación." },
  { title: "Soporte", text: "Acompañamiento y mejora continua." },
];

export const projects = [
  {
    title: "Sistema de inventario",
    // image: "/projects/inventario.png", // opcional: si existe, reemplaza la miniatura generada
    icon: "📦",
    gradient: ["#4f46e5", "#7c3aed"],
    problem: "Control manual en hojas de cálculo.",
    solution: "Panel web con alertas de stock y reportes.",
    details: "Reemplazamos hojas de cálculo dispersas por un panel centralizado con roles de usuario, alertas automáticas de stock mínimo y reportes exportables.",
    stack: ["React", "Node.js", "PostgreSQL"],
    result: "-60% tiempo en gestión de inventario",
  },
  {
    title: "App de reservas",
    icon: "📅",
    gradient: ["#0ea5e9", "#4f46e5"],
    problem: "Reservas por teléfono y pérdida de clientes.",
    solution: "App móvil con agenda y recordatorios.",
    details: "App multiplataforma donde los clientes reservan en segundos, reciben recordatorios por notificación y el negocio gestiona su agenda en tiempo real.",
    stack: ["React Native", "Firebase"],
    result: "+35% reservas mensuales",
  },
  {
    title: "Integración de facturación",
    icon: "🔌",
    gradient: ["#059669", "#0ea5e9"],
    problem: "Datos duplicados entre ERP y tienda online.",
    solution: "API que sincroniza pedidos y facturas.",
    details: "Servicio en la nube que sincroniza pedidos, clientes y facturas entre la tienda online y el ERP, con reintentos automáticos y registro de auditoría.",
    stack: ["Python", "FastAPI", "AWS"],
    result: "Cero errores de captura",
  },
];

// Cifras de ejemplo: reemplazar por datos reales.
export const stats = [
  { value: 20, suffix: "+", label: "Proyectos entregados" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 4, suffix: " sem", label: "Para lanzar tu MVP" },
  { value: 24, suffix: " h", label: "Tiempo de respuesta" },
];

export const techs = ["React", "Node.js", "Python", ".NET", "TypeScript", "PostgreSQL", "Docker", "AWS"];

export const differentiators = [
  { title: "Comunicación directa", text: "Hablas con quienes escriben el código." },
  { title: "Precios flexibles", text: "Propuestas ajustadas al tamaño de tu negocio." },
  { title: "Entregas iterativas", text: "Ves avances reales en cada sprint." },
  { title: "Código de calidad", text: "Buenas prácticas, pruebas y documentación." },
];

export const team = [
  { name: "Ana Torres", role: "CEO & Arquitecta de software" },
  { name: "Luis Pérez", role: "Lead Developer" },
  { name: "María Gómez", role: "Diseñadora UI/UX" },
];

export const testimonials = [
  { quote: "Entendieron el problema desde la primera reunión y entregaron a tiempo.", author: "Carlos R.", role: "Gerente de operaciones" },
  { quote: "Comunicación clara y un producto final que superó lo esperado.", author: "Laura M.", role: "Fundadora de startup" },
];

export const plans = [
  { name: "Proyecto cerrado", text: "Alcance y precio definidos de antemano.", items: ["Cotización fija", "Entregas por hitos", "Garantía de 30 días"] },
  { name: "Equipo dedicado", text: "Desarrolladores trabajando para tu producto.", items: ["Capacidad flexible", "Reuniones semanales", "Escalable"], featured: true },
  { name: "Bolsa de horas", text: "Mantenimiento y mejoras bajo demanda.", items: ["Paquetes mensuales", "Prioridad en soporte", "Sin permanencia"] },
];

export const faqs = [
  { q: "¿Cuánto cuesta un proyecto?", a: "Depende del alcance. Tras una reunión inicial gratuita te enviamos una cotización detallada." },
  { q: "¿Cuánto tarda el desarrollo?", a: "Un MVP suele tomar entre 4 y 12 semanas, con entregas parciales cada 1-2 semanas." },
  { q: "¿Quién es dueño del código?", a: "Tú. El código fuente y la documentación son tuyos al finalizar el pago." },
  { q: "¿Ofrecen soporte posterior?", a: "Sí, con planes de mantenimiento mensual o bolsa de horas." },
  { q: "¿Qué metodología usan?", a: "Metodologías ágiles con sprints cortos y revisión continua contigo." },
];
