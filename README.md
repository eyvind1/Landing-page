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
├── index.html          # Punto de entrada HTML (título, meta SEO)
├── public/             # Archivos estáticos (imágenes, favicon)
└── src/
    ├── main.jsx        # Arranque de React
    ├── App.jsx         # Secciones de la página
    ├── components.jsx  # Contadores, modal, aviso y animaciones
    ├── data.js         # Contenido editable (servicios, proyectos, equipo, FAQ)
    └── styles.css      # Estilos
```

## Personalización

- **Contenido:** edita [src/data.js](src/data.js) (nombre de la marca, servicios, proyectos, estadísticas, equipo, preguntas frecuentes).
- **Imágenes del portafolio:** coloca los archivos en `public/projects/` y agrega `image: "/projects/archivo.png"` al proyecto correspondiente.
- **Datos de contacto:** correo, teléfono y enlace de WhatsApp en [src/App.jsx](src/App.jsx).
- **Formulario:** actualmente solo muestra un mensaje de éxito. Para recibir mensajes, conéctalo a un backend o a un servicio como Formspree o EmailJS en `ContactForm` (`src/App.jsx`).

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