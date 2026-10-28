# Portafolio · Laura Sofía Navas Castañeda

Sitio estático (sin compilación). Se puede publicar tal cual en GitHub Pages.

## Archivos que se publican

```
index.html                                 → redirige al portafolio
portafolio.dc.html                         → página principal (libro animado)
support.js                                 → motor de la página (no editar)
assets/mb/                                 → piezas del moodboard 3D de la portada
content/portfolio-data.js                  → TODOS los textos y la lista de proyectos
content/00_perfil/                         → retrato
content/01_residencial/ … 04_financiero-inmobiliario/   → imágenes por proyecto (render/ y plano/)
```

## Editar contenido

Todo se edita en `content/portfolio-data.js`:

- `perfil`: bio, educación y competencias.
- `categorias`: nombre, número y colores de cada sección.
- `proyectos`: cada proyecto con `categoria` (`res`, `ins`, `com`, `fin`), `hero`, `renders` (en orden) y `planos`.

Para agregar un proyecto: copia sus imágenes en la carpeta de su categoría y añade un bloque en `proyectos`. El libro calcula solo las páginas, el índice y el filtro.

## Publicar en GitHub Pages

1. Sube todo el contenido de esta carpeta a la raíz del repositorio.
2. En el repositorio: Settings → Pages → Branch `main` / carpeta `/root`.
3. Las rutas son relativas, por lo que funciona también en un subdirectorio.
