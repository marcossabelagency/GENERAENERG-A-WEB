Genera Energía instala placas solares en la Marina Alta. La marca tiene que transmitir tres cosas, en este orden: **profesionalidad** (empresa seria, que cumple), **experiencia** (saben lo que hacen y lo demuestran con datos) e **innovación** (tecnología actual, procesos claros). La traducción visual: blanco y negro sobrios como base, el verde del logo como energía puntual, y capas que flotan unas sobre otras para dar profundidad.

## Principios

1. **Sobrio primero, verde después.** Blanco y negro llevan la página; el verde aparece donde hay que mirar (CTA, cifras, detalles). Si dudas, quita verde.
2. **Profundidad con intención.** Cada bloque importante se apoya en otro: tarjeta sobre placa, foto sobre bloque de color. Tres niveles máximo.
3. **Movimiento que acompaña.** Los elementos aparecen al entrar en pantalla y responden al hover elevándose. Nada se mueve solo ni en bucle.
4. **Datos, no promesas.** Cifras concretas y verificables por encima de adjetivos.

## Voz y tono

- Tutea al cliente, con frases cortas y verbos de acción: *Calcula tu ahorro*, *Te lo dejamos todo legalizado*.
- Habla en primera persona del plural como empresa: *Nos encargamos de los permisos*.
- Cliente primero: habla de su factura, su tejado, su tranquilidad; la tecnología, después y explicada.
- Concreto y local: menciona la Marina Alta y sus pueblos (Dénia, Xàbia, Calp, Benissa, Pego…) cuando aporte.
- Sin emojis, sin exclamaciones en cadena, sin tecnicismos sin explicar (*kWp* siempre acompañado de lo que significa para el cliente).
- Mayúsculas solo en el eyebrow. Títulos en frase normal: *Instalación llave en mano*, no *Instalación Llave En Mano*.

| Mejor | Evitar |
|---|---|
| Pide tu estudio gratuito. Respuesta en 48 h. | ¡¡Ahorra YA con la mejor energía del mercado!! |
| Nos encargamos de permisos, instalación y subvenciones. | Soluciones energéticas integrales 360º. |
| Calcula cuánto vas a ahorrar | Descubre nuestro innovador simulador |

## Logotipo

- `genera-logo-horizontal.png` en cabecera y documentos sobre `surface-000` o `surface-100`. `genera-logo-horizontal-negativo.png` sobre `surface-inverse`, fotos oscuras y en el tema oscuro.
- `genera-logo-vertical.png` / `-negativo.png` en footer centrado, redes y piezas cuadradas.
- `genera-simbolo.png` (la hoja sola) para favicon, avatar de Google Business y marcas de agua. Nunca acompañado de texto que no sea el logotipo.
- Área de respeto: la altura de la "E" de GENERA alrededor de todo el logo. Ancho mínimo: 120px el horizontal, 32px el símbolo.
- No cambies los colores, no le pongas sombras ni contornos, no lo coloques sobre `lime` ni sobre degradados verdes (se pierde la hoja).

## Color

Proporción por página: **~60% blanco** (`surface-000`, `surface-100`), **~30% negro** (`surface-inverse`, `ink`), **~10% verde**.

- Fondos: alterna secciones `surface-000` y `surface-100`; inserta 1–2 secciones `surface-inverse` por página (prueba social, cifras, CTA final) y el footer.
- Texto: `ink` para títulos y cuerpo, `ink-muted` para descripciones. Sobre negro, `ink-inverse`.
- Acento: `lime` es el verde del logo y el color de conversión: CTA `g-btn--accent`, opción seleccionada, punto del eyebrow, unidades sobre negro. **Nunca texto lima sobre blanco** (1,9:1).
- Texto verde sobre blanco: solo `accent-ink` (green-950, 6,9:1). Sobre negro, `accent-ink` pasa a lima automáticamente en el tema oscuro.
- Escala verde (`green-300` → `green-950`): gráficos, degradados y bloques decorativos. Sobre `green-800` y `green-950` el texto es `white`.
- Degradados: `gradient-leaf` (lima → verde profundo, como la hoja) en superficies pequeñas: barras, líneas de hover, bloque tras las fotos. `gradient-deep` para un bloque verde grande. `gradient-mist` como bruma de luz detrás de la Hero negra. Nada de degradados de colores ajenos al logo.

## Tipografía

- **Michroma** (`display`) para titulares y cifras. Es la alternativa libre más cercana a la letra del logotipo, una extendida cuadrada tipo Eurostile Extended. Ancha y técnica: úsala con frases cortas (máx. ~6 palabras por titular) y nunca en párrafos.
- **Saira** (`sans`) para todo lo demás. Comparte las curvas cuadradas redondeadas de "ENERGIA" y tiene todos los pesos (100–900).
- Escala: `display-xl` en la Hero, `h1`/`h2` en secciones, `h3` en tarjetas, `stat` para cifras; `lead` bajo el titular, `body` para texto, `label`, `small`, `button`, `eyebrow`. Por debajo de 768px usa `display-xl-m`, `h1-m`, `h2-m`.
- Patrón de cabecera de sección: `eyebrow` → `space-4` → `h1`/`h2` → `space-4` → `lead` en `ink-muted` (máx. 60 caracteres por línea).
- Michroma tiene un único peso: la jerarquía se hace con tamaño y color, nunca con negrita falsa.

## Profundidad

Tres niveles de capa, cada uno con su sombra:

| Nivel | Qué | Sombra | Ejemplo |
|---|---|---|---|
| 0 | Fondo y placas traseras | ninguna | `surface-100`, `g-stack__plate` |
| 1 | Elementos en reposo | `shadow-1` | inputs, tarjetas, opciones |
| 2 | Tarjeta frontal / hover | `shadow-2` | `g-stack__front`, botón en hover |
| 3 | Flotante | `shadow-3` | presupuestador en la Hero, chip `g-stack__float`, tarjeta en hover |

- **Recuadro sobre recuadro** (`Stack`): la tarjeta frontal tapa una placa desplazada `offset-layer` (16px) hacia abajo a la derecha. En hover se separan en sentidos opuestos.
- **Foto sobre bloque** (`MediaFrame`): bloque `gradient-leaf` desplazado `offset-layer-lg` (28px) abajo a la izquierda.
- **Cristal** (`g-glass`): `surface-glass` + `blur-glass` solo sobre fotos o `gradient-mist`, nunca sobre fondo plano.
- **Forma hoja**: `radius-xl` en las esquinas superior-izquierda e inferior-derecha y `radius-xs` en las otras dos. Para fotos, iconos y bloques de color; las tarjetas de texto usan `radius-lg` uniforme.
- Desplaza siempre en la misma diagonal dentro de una sección.

## Movimiento

- Aparición al entrar en pantalla con `Reveal`: `dur-reveal` (900ms) + `ease-out`, escalonado `stagger` (90ms). Una sola vez por elemento.
- Hover: elevación −2px (botones), −3px (opciones), −6px (tarjetas) en `dur-base`; desplazamiento de capas en `dur-slow`.
- Contadores (`data-count`) en las cifras al aparecer; barras que se rellenan con `gradient-leaf`.
- Prohibido: parallax de scroll en textos, carruseles automáticos, rebotes, elementos que giran o laten en bucle.
- Con `prefers-reduced-motion` todo aparece sin transición (ya incluido en `bundle.css`).

## Layout

- Contenedor de 1200px máx. con márgenes de `space-6` (móvil) y `space-12` (escritorio). Rejilla de 12 columnas, gap `space-8`.
- Padding vertical de sección: `space-24` en escritorio, `space-16` en móvil; la Hero, `space-32`.
- Hero: negro (`surface-inverse` + `gradient-mist`), titular a la izquierda y el presupuestador en un `Stack` flotante a la derecha.
- Footer: `surface-inverse`, logo vertical negativo centrado, navegación a un lado y CTAs al otro.

## Imágenes

- Fotos reales de instalaciones de Genera, tejados y casas reconocibles de la Marina Alta, equipo trabajando con EPI. Luz natural, colores neutros; nada de stock con cielo saturado ni personas posando con el pulgar arriba.
- Formato 4:3 o 3:2 dentro de `MediaFrame`. Para fondos de Hero, foto oscurecida con `gradient-deep` al 70–85%.

## Iconografía

- Línea de 1,75px, extremos redondeados, 22–24px, `stroke="currentColor"`. Recomendado: **Lucide** (sol, rayo, escudo, batería, casa, calendario). Sustitución propuesta: la marca no tiene set propio.
- Sobre negro, en `lime`; sobre blanco, en `ink` o `accent-ink`. Dentro de tarjetas, en la ficha con forma de hoja de `Card`.
- Sin emojis como iconos.

## Accesibilidad

- Todo el texto cumple 4,5:1 en ambos temas (ver notas de cada token). Bordes de controles con `line-strong` (≥3:1).
- Foco visible en todo elemento interactivo: contorno de 2px en `focus` con 3px de separación.
- Los errores llevan icono y texto además de `danger`.

## Implementación

Carga `tokens.css`, `components/bundle.css` y `components/bundle.js`, y llama a `Genera.init(document)` cuando cargue la página. Las clases de componente empiezan por `g-`; cada componente explica su marcado en su ficha.
