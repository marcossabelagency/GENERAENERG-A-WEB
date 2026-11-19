# Stat

Cifra grande en Michroma con unidad en `accent-ink`, etiqueta y barra que se rellena al aparecer.

**Marcado:** `div.g-stat.g-reveal` > `div.g-stat__value` > `span[data-count="70"]` + `span.g-stat__unit` · `div.g-stat__label` · opcional `div.g-stat__bar > span[style="--_v:70%"]`. El número cuenta desde 0 cuando entra en pantalla (`Genera.init`).

Solo cifras reales y verificables de Genera; las del preview son de ejemplo. Grupos de 3 o 4, con un asterisco y nota en `small` si el dato es estimado.
