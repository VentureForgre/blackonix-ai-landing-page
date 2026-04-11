# Design System Strategy: The Obsidian Kinetic

## 1. Overview & Creative North Star
### The Creative North Star: "The Luminescent Architect"
This design system is built for the high-end digital elite. It moves away from the "generic SaaS" look by embracing **The Luminescent Architect**—a vision that combines the structural rigidity of bento-style layouts with the ethereal, fluid nature of glowing atmospheric light.

We break the "template" look through **Intentional Asymmetry** and **Tonal Depth**. This isn't just about dark mode; it’s about "Obsidian Depth." By overlapping ultra-crisp typography with soft, blurred light sources (Atmospheric Glows), we create a high-contrast experience that feels futuristic, powerful, and bespoke. The interface shouldn't just sit on the screen; it should feel like it's carved out of glass and light.

---

## 2. Colors: Obsidian & Neon
The palette is a high-contrast dialogue between absolute darkness and radioactive energy.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. 
Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `background` provides all the separation needed. If you feel the need for a line, use a tonal transition or a change in elevation tier instead.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use a "stacked glass" approach:
*   **Base Layer (`background` / #0e0e0e):** The infinite void.
*   **Nested Containers:** Use `surface-container-low` (#131313) for large sections and `surface-container-highest` (#262626) for interactive cards. This creates natural, soft depth.
*   **The "Glass & Gradient" Rule:** Floating elements must use Glassmorphism. Apply `surface-container` with a 60-80% opacity and a `backdrop-filter: blur(20px)`.

### Signature Textures
Main CTAs and Hero accents should utilize a **Kinetic Gradient**. Transitioning from `primary` (#d2ff9a) to `primary-container` (#9ffb06) adds a "soul" to the elements, making them appear to emit light rather than just reflecting it.

---

## 3. Typography: The Editorial Edge
We utilize **Manrope** for its ultra-modern, geometric precision and **Space Grotesk** for technical labeling to inject a "tech-agency" aesthetic.

*   **Display-LG (3.5rem):** Set with tight letter-spacing (-0.02em). This is your "Statement" type.
*   **Headline Scale:** Bold and authoritative. Headlines use `on-surface` (#ffffff) to punch through the dark background.
*   **Body-MD (0.875rem):** Primary reading weight. Use `on-surface-variant` (#adaaaa) for secondary body text to ensure the hierarchy is felt, not just seen.
*   **Label-MD (Space Grotesk):** Used for "Status" or "Category" tags. Always uppercase with increased tracking (+0.05em) to provide a sophisticated, technical feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are dead. We define hierarchy through **Ambient Luminous Flux.**

### The Layering Principle
Stacking surface tiers creates a "soft lift." A `surface-container-lowest` card placed on a `surface-container-high` section creates immediate focus without a single pixel of shadow.

### Ambient Shadows
When a floating effect is required (e.g., a Modal or Popover):
*   **Blur:** 40px - 80px.
*   **Opacity:** 4%-8%.
*   **Color:** Use a tinted version of `primary` or `surface-tint`. This mimics the way neon light interacts with obsidian surfaces.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use the **Ghost Border**: The `outline-variant` token at 15% opacity. It should be felt as a whisper of an edge, never a hard line.

---

## 5. Components: The Primitive Set

### Buttons
*   **Primary:** Kinetic Gradient (`primary` to `primary-container`). Black text (`on-primary`). 0.5rem radius.
*   **Secondary:** Glassmorphic. `surface-variant` at 20% opacity with a `backdrop-blur`. `on-surface` text.
*   **Tertiary:** Ghost style. No background, `primary` text, with a `primary` glow on hover.

### Cards (Bento Style)
*   **Constraint:** No borders. Use `surface-container-high`.
*   **Padding:** Generous (xl / 1.5rem).
*   **Interaction:** On hover, the background shifts to `surface-bright` and a subtle `primary` atmospheric glow appears behind the card.

### Inputs
*   **Field:** `surface-container-lowest` background. 
*   **Focus State:** The "Ghost Border" becomes 100% opaque `primary`, accompanied by a soft `primary_dim` outer glow.
*   **Labels:** `label-md` (Space Grotesk) positioned above the field.

### Atmospheric Accents (Custom Component)
*   **The "Glow" Div:** A non-semantic `div` with a radial gradient of `primary` to transparent, placed behind hero images or bento grids to break the grid's rigidity.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme white space. The "premium" feel comes from the luxury of unused space.
*   **Do** overlap elements. Let a headline bleed over the edge of a glass container to create depth.
*   **Do** use `primary` sparingly as a "laser" to guide the eye.

### Don't
*   **Don't** use pure white (#ffffff) for long-form body text; use `on-surface-variant` to reduce eye strain and maintain the "Obsidian" vibe.
*   **Don't** use standard "Material Design" shadows. They feel dated and "out-of-the-box."
*   **Don't** use 1px solid borders. If the design feels "loose," use background tonal shifts to tighten it.
*   **Don't** use rounded corners larger than `xl` (1.5rem) for main containers; keep the "Architectural" feel sharp and intentional.