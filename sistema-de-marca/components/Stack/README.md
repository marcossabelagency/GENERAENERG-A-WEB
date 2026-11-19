# Stack

Recuadro sobre recuadro: una tarjeta frontal flotando sobre una placa desplazada, el recurso de profundidad principal de la marca.

**Marcado:** `div.g-stack` > `div.g-stack__plate` (+ `--lime` o `--deep`) + opcional `span.g-stack__float` (tercera capa) + `div.g-stack__front` (contenido, opcionalmente `g-glass`).

- La placa se desplaza `offset-layer` (16px) abajo-derecha. En hover la tarjeta sube y la placa baja: parece que se separan.
- Placa `surface-200` para información; `--lime` solo para el bloque más importante de la página; `--deep` sobre secciones negras.
- `g-stack__float` es un chip negro que sobresale de la esquina (*Respuesta en 48 h*). Máx. uno por pantalla.
- Con `g-reveal` y `data-reveal="layer"` la tarjeta aterriza sobre la placa al aparecer.

Úsalo para el presupuestador de la Hero, la oferta y testimonios. No anides un stack dentro de otro.
