# Button

Botón de acción con icono de flecha que se desliza en hover y eleva el botón 2px.

**Marcado:** `<a|button class="g-btn [g-btn--accent|g-btn--ghost] [g-btn--sm]">Texto <span class="g-btn__icon">…svg…</span></a>`. El consumidor aporta el texto y un icono SVG de 16px con `stroke="currentColor"`.

- `g-btn` (primario): fondo `surface-inverse`, texto `ink-inverse`. Acción principal de cada sección (p. ej. *Pedir estudio gratuito*).
- `g-btn--accent`: fondo `accent` (lima) con `on-accent`; halo `shadow-glow` en hover. **Uno por pantalla**, reservado a la conversión clave: *Calcular mi ahorro*.
- `g-btn--ghost`: borde `line-strong`. Acciones secundarias (*Ver proyectos*).
- `g-btn--sm`: 40px de alto, para navegación y tarjetas.

**Sí:** verbos en infinitivo o primera persona (*Calcular mi ahorro*). **No:** dos botones de acento juntos; texto en mayúsculas; botones sin icono en la Hero.
