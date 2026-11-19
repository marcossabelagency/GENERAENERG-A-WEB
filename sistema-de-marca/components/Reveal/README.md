# Reveal

Aparición al entrar en pantalla, escalonada entre hermanos.

**Marcado:** añade `g-reveal` a cualquier elemento y `data-reveal="up|fade|scale|left|layer"` (por defecto `up`). Escalona hermanos con `style="--i:0..n"` (`stagger` = 90ms). Llama a `Genera.init(document)` una vez cargada la página: observa los elementos, añade `is-visible` y lanza los contadores `data-count`.

- `up`: tarjetas y bloques. `fade`: párrafos. `scale`: fotos. `left`: titulares. `layer`: stacks.
- Cada elemento aparece una sola vez. Respeta `prefers-reduced-motion`: sin animación, todo visible.
- No animes más de 6 elementos a la vez ni el texto de la Hero palabra a palabra.
