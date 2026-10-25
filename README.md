# Landing-page

Landing page para una empresa de desarrollo de software, construida con React y Vite.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)

## Instalación

```bash
git clone <url-del-repositorio>
cd Landing-page
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador. Los cambios se reflejan automáticamente.

## Scripts

| Comando           | Descripción                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga automática |
| `npm run build`   | Genera la versión de producción en `dist/`    |
| `npm run preview` | Sirve localmente el contenido de `dist/`      |

## Estructura

```
├── index.html              # Punto de entrada HTML (título, meta SEO, tema inicial)
├── public/                 # Archivos estáticos servidos tal cual
│   ├── experiencias/       # Imágenes de la vista Experiencias 3D
│   └── sounds/             # Sonidos: click, hover y ambient
└── src/
    ├── main.jsx            # Arranque de React y proveedores
    ├── App.jsx             # Cabecera, pie y cambio entre vistas
    ├── content/            # Textos editables
    │   ├── es.js           # Contenido en español
    │   ├── en.js           # Contenido en inglés
    │   └── index.js        # Marca y exportación conjunta
    ├── views/              # Páginas: HomeView y Experiences3DView
    ├── sections/           # Secciones de la landing (Hero, Services, Team, Faq, Contact...)
    ├── components/         # Piezas reutilizables (Header, Footer, Section, ProjectModal...)
    │   └── settings/       # Ajustes: idioma, tema y sonido
    ├── context/            # Proveedores de idioma y sonido
    ├── hooks/              # useView (vista por hash) y useReveal (animaciones al scroll)
    └── styles/             # CSS por ámbito; index.css los importa en orden
```

Cada sección y componente vive en su propio archivo. Para añadir una sección nueva, crea el archivo en `src/sections/` y agrégalo en `src/views/HomeView.jsx`.

## Personalización

- **Contenido:** edita [src/content/es.js](src/content/es.js) y [src/content/en.js](src/content/en.js) (servicios, proyectos, estadísticas, equipo, preguntas frecuentes). Mantén ambos archivos con las mismas claves. El nombre de la marca está en [src/content/index.js](src/content/index.js).
- **Idioma:** el interruptor ES/EN del encabezado guarda la preferencia en `localStorage`. Si no hay una guardada, se usa el idioma del navegador.
- **Imágenes del portafolio:** coloca los archivos en `public/projects/` y agrega `image: "/projects/archivo.png"` al proyecto correspondiente.
- **Datos de contacto:** correo y teléfono en [src/sections/Contact.jsx](src/sections/Contact.jsx) y enlace de WhatsApp en [src/components/WhatsAppButton.jsx](src/components/WhatsAppButton.jsx).
- **Formulario:** actualmente solo muestra un mensaje de éxito. Para recibir mensajes, conéctalo a un backend o a un servicio como Formspree o EmailJS en `ContactForm` (`src/sections/Contact.jsx`).

## Despliegue

Primero genera la versión de producción:

```bash
npm run build
```

Se crea la carpeta `dist/` con archivos estáticos listos para publicar. Prueba el resultado con `npm run preview`.

### Vercel

1. Sube el proyecto a GitHub.
2. En [vercel.com](https://vercel.com) importa el repositorio.
3. Vercel detecta Vite automáticamente (build: `npm run build`, salida: `dist`).

### Netlify

1. Importa el repositorio en [netlify.com](https://www.netlify.com).
2. Configura **Build command**: `npm run build` y **Publish directory**: `dist`.

### GitHub Pages

1. En `vite.config.js` agrega `base: "/Landing-page/"` (nombre del repositorio).
2. Ejecuta `npm run build` y publica el contenido de `dist/` en la rama `gh-pages`, o usa una GitHub Action de despliegue de Pages.

### Servidor propio (Nginx)

Copia el contenido de `dist/` al servidor, por ejemplo en `/var/www/landing`, y configura:

```nginx
server {
  listen 80;
  server_name tudominio.com;
  root /var/www/landing;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}
```

Habilita HTTPS con Let's Encrypt (`certbot --nginx -d tudominio.com`).

## Lista de verificación antes de publicar

- [ ] Reemplazar nombre, correo, teléfono y enlace de WhatsApp de ejemplo.
- [ ] Sustituir proyectos, estadísticas y testimonios de ejemplo por datos reales.
- [ ] Conectar el formulario de contacto.
- [ ] Actualizar `title` y `description` en [index.html](index.html).
- [ ] Añadir favicon e imagen Open Graph.
- [ ] Agregar la política de privacidad y la analítica (Google Analytics o Plausible).