# Stepper

Progreso del presupuestador por pasos: título del paso, contador y barra `gradient-leaf`.

**Marcado:** `div.g-stepper` > `div.g-stepper__top` + `div.g-stepper__track > div.g-stepper__fill[style="--_p:50%"]` + `ol.g-stepper__dots > li` (`is-done`, `aria-current="step"`). El consumidor actualiza `--_p` y las clases; la barra se anima con `ease-in-out`.

Máx. 5 pasos. El último se llama siempre *Resultado*.
