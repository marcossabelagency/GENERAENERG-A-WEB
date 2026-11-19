# MediaFrame

Foto con esquinas de hoja y un bloque `gradient-leaf` desplazado detrás que se mueve en hover.

**Marcado:** `figure.g-frame` > `div.g-frame__block` + `div.g-frame__media` > `img`. El consumidor aporta una foto real 4:3 (instalaciones de Genera, tejados de la Marina Alta, equipo trabajando) con `alt` descriptivo.

Esquinas: `radius-xl` arriba-izquierda y abajo-derecha, `radius-xs` en las otras dos, como la hoja del logo. La imagen hace un zoom-out suave en hover. Usa `data-reveal="scale"`. **No** uses fotos de stock genéricas de placas con cielo azul saturado; el preview muestra solo un hueco.
