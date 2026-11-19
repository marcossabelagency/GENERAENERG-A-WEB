# Field

Campos de formulario y opciones seleccionables para el presupuestador.

**Marcado:** `label.g-field` > `span.g-field__label` + `input.g-input` + `span.g-field__hint` o `span.g-field__error`. Opciones: `div.g-options[data-single]` > `button.g-option[aria-pressed]` > `span.g-option__title` + `span.g-option__meta`.

- Input de 52px, borde `line-strong`, foco `focus`. Error: `aria-invalid="true"` + mensaje en `danger` con icono y texto, nunca solo color.
- La opción elegida pasa a `accent` con `shadow-glow`. Máx. 4 opciones por paso.
- Pide un dato por paso. Etiquetas en lenguaje de cliente (*Factura mensual de luz*, no *Consumo kWh*).
