# Card

Tarjeta de servicio que se eleva 6px en hover y dibuja una línea `gradient-leaf` en su base.

**Marcado:** `article.g-card` > `span.g-card__icon` (SVG 22px) + `h3.g-card__title` + `p.g-card__text` + `a.g-card__link`. El consumidor aporta icono, título (máx. 3 palabras), texto (máx. 2 líneas) y enlace.

El icono vive en una forma de hoja (`radius-md`/`radius-xs` alternos) en `surface-inverse` con trazo `lime`. Usa rejillas de 3 (escritorio) o 1 (móvil) con gap `space-6`. Añade `g-reveal` con `--i` 0,1,2 para que aparezcan escalonadas. **No** pongas fotos dentro: para eso, `MediaFrame`.
