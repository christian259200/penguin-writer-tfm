# Sitemap · Penguin Writer (TFM web)

Documentación de la estructura de URLs y del sitemap para SEO.

## URL canónica del sitio

En **producción**, define la variable de entorno:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

Sin ella, en local se usará `http://localhost:3000`; en Vercel se usara automáticamente el dominio del despliegue.

## Sitemap XML (SEO)

- **Ruta generada:** [`/sitemap.xml`](./src/app/sitemap.ts) (Next.js App Router).
- **Robots:** [`/robots.txt`](./src/app/robots.ts) apunta a ese `sitemap.xml`.

Tras desplegar, verifica en el navegador:

- `https://tu-dominio.com/sitemap.xml`
- `https://tu-dominio.com/robots.txt`

## Árbol de páginas (orden lógico)

```
/                           Inicio (hero TFM + vídeo)
├── /justificacion          Justificación y objetivos        [prioridad SEO alta]
├── /mapa-contenidos        Mapa de contenidos               [prioridad SEO alta]
├── /arquitectura           Arquitectura y sitemap visual   [prioridad SEO alta]
├── /estudio-de-mercado     Estudio de mercado               [prioridad SEO alta]
├── /producto               Producto (TFM)                   [prioridad SEO alta]
├── /desarrollo-web         Desarrollo de la web
├── /marketing-digital      Marketing digital (sitio TFM)
├── /inteligencia-artificial Uso de IA
├── /equipo                 Equipo
├── /multimedia             Vídeos
└── /demo                   Referencia visual hero           [prioridad SEO media-baja]
```

## Mejoras SEO aplicadas en el sitemap

| Página            | `priority` (≈) | `changeFrequency` | Nota |
|-------------------|---------------|-------------------|------|
| `/`               | 1.0           | weekly            | Punto de entrada; actualizar si cambia el hero o CTAs. |
| Secciones núcleo TFM | 0.88      | monthly           | Justificación, mapa, arquitectura, mercado, producto. |
| Resto secciones TFM  | 0.72     | monthly           | Desarrollo, marketing, IA, equipo, multimedia. |
| `/demo`           | 0.45          | monthly           | Página auxiliar; no compite con el contenido académico principal. |

**Buenas prácticas adicionales**

1. Mantener **títulos y meta descriptions** únicos por ruta (ya definidos en cada `page.tsx` donde aplica).
2. **Enlaces internos:** el menú global y la home enlazan todas las URLs del sitemap → rastreo eficiente.
3. Al publicar en un dominio definitivo, enviar **`sitemap.xml`** en Google Search Console (o equivalente).
4. Si en el futuro hay **inglés** u otros idiomas, usar `hreflang` y/o sitemaps por idioma (ampliación).

## Fuente de rutas en código

Las rutas del menú académico están centralizadas en `src/lib/tfm-nav.ts`. El sitemap las importa para no duplicar rutas.
