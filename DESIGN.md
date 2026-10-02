---
name: Indonesian Heritage Museum Field Atlas
description: A living archive interface for tracing Indonesian heritage across rooms, regions, and digital layers.
colors:
  primary: "#245F64"
  primary-deep: "#133C43"
  accent: "#B65A3B"
  accent-deep: "#873F2E"
  ink: "#153641"
  paper: "#F3ECDE"
  paper-deep: "#E7DDC9"
  white: "#FFFDF8"
  moss: "#697A62"
  line: "rgba(21, 54, 65, .2)"
typography:
  display:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(3.2rem, 9vw, 8.4rem)"
    fontWeight: 500
    lineHeight: ".9"
    letterSpacing: "-.07em"
  body:
    fontFamily: "DM Sans, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Sans, Inter, system-ui, sans-serif"
    fontSize: ".68rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: ".2em"
rounded:
  sm: "2px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0 18px"
    height: "46px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0 18px"
    height: "46px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "28px 30px 34px"

# Design System: Indonesian Heritage Museum Field Atlas

## Overview

**Creative North Star: "The Nusantara Field Atlas"**

The site behaves like a living field notebook: visitors follow routes, compare regions, and choose a next layer of exploration. Deep teal and indigo-like ink create a calm archive ground; terracotta annotations mark action and discovery; documentary imagery keeps the museum present rather than ornamental.

The field-atlas world is deliberately separate from the Glory of Islam Museum's warm gold editorial language. Heritage uses woven paper, measured grid lines, archival indices, and a restrained square geometry. The paper is a background material only; content surfaces remain fully opaque and readable.

**Key Characteristics:**

- Dark teal archive heroes with terracotta route markers.
- Warm woven-paper texture behind opaque reading surfaces.
- Lora display type paired with DM Sans utility copy.
- Real museum images and a muted local hero film as evidence.

## Colors

The palette is documentary and tactile: cool ink for orientation, warm paper for reading, and a single terracotta signal for action.

### Primary

- **Archive Teal** (`{colors.primary}`): Hero washes, active controls, and high-level route surfaces.
- **Deep Teal** (`{colors.primary-deep}`): Footer, dark archive slices, and dense contrast areas.

### Secondary

- **Terracotta Annotation** (`{colors.accent}`): Primary actions, emphasis words, and route markers.
- **Deep Terracotta** (`{colors.accent-deep}`): Hover and pressed action states.

### Tertiary

- **Field Moss** (`{colors.moss}`): Quiet supporting metadata and secondary wayfinding.

### Neutral

- **Woven Paper** (`{colors.paper}`): Page background and reading canvas.
- **Paper Shadow** (`{colors.paper-deep}`): Tonal bands, stat strips, and alternate surfaces.
- **Archive Ink** (`{colors.ink}`): Default text and dark structural surfaces.
- **Museum White** (`{colors.white}`): Hero type and opaque card interiors.
- **Atlas Line** (`{colors.line}`): Thin rules and grid dividers.

**The Material Boundary Rule.** The paper texture belongs behind the app at z-index 0; never lower the opacity of a content component to reveal it.

## Typography

**Display Font:** Lora (with Georgia fallback)

**Body Font:** DM Sans (with system sans-serif fallback)

**Character:** Lora gives the archive a human, literary voice without borrowing the Glory of Islam Museum's high-contrast gold editorial treatment. DM Sans keeps labels, descriptions, and navigation practical on small screens.

### Hierarchy

- **Display** (500, `clamp(3.2rem, 9vw, 8.4rem)`, `.9`): Hero names and the primary home statement.
- **Headline** (500, `clamp(2.7rem, 5vw, 5.2rem)`, `.98`): Section openings and archive slices.
- **Title** (500, `1.8rem–2.7rem`, `1`): Feature cards and page modules.
- **Body** (400, `1rem–1.35rem`, `1.7`): Explanatory copy capped by readable measure.
- **Label** (700, `.68rem`, `.2em`, uppercase): Eyebrows, archive indices, metadata, and chips.

**The Two-Voice Rule.** Lora speaks for place and story; DM Sans speaks for action and navigation.

## Layout

The desktop frame uses a centered 1280px atlas column with 48px outer gutters. Heroes use a framed 11%/89% grid and a copy-plus-index split. The home page moves from film hero to a four-cell stat band, then a two-column route choice, an archive slice, and a documentary film strip.

Content pages keep the same route journey but receive their own image-led hero treatment. On screens under 900px, grids collapse to one column, archive indices hide, and actions stack. Under 560px, gutters reduce to 18px, hero titles scale down, and all primary actions become full-width touch targets.

## Elevation & Depth

Depth is mostly tonal and photographic rather than glossy. The paper ground, opaque cards, dark archive panels, thin rules, and restrained ambient shadows create hierarchy without glow or spotlight effects. Hover states lift cards by a few pixels and deepen the tonal surface.

### Shadow Vocabulary

- **Ambient card:** `0 18px 44px rgba(19, 60, 67, .11)` for elevated cards and image-led modules.
- **Header veil:** `0 10px 28px rgba(21, 54, 65, .06)` for the fixed navigation glass.

## Shapes

The system is crisp and archival: 2px corners, thin 1px rules, rectangular image crops, and framed hero boundaries. Pills are reserved for filters or status labels inherited from existing flows; primary buttons and cards stay square enough to feel like catalog objects.

## Components

### Buttons

- **Shape:** Crisp corners (`2px`) with a 46px minimum height.
- **Primary:** Terracotta fill, white type, uppercase DM Sans label, and a small upward hover lift.
- **Secondary:** Transparent with a white or teal rule, used when the primary action already owns the signal.
- **Focus:** Keep the browser-visible focus treatment; never trade keyboard clarity for a decorative hover.

### Chips

- **Style:** Small uppercase labels with thin rules or a translucent teal surface.
- **State:** Selected filters use teal; unselected filters remain paper/white with a visible border.

### Cards / Containers

- **Corner Style:** 2px.
- **Background:** Opaque museum white or deep teal; the texture never sits above the card.
- **Shadow Strategy:** Ambient only where a card needs separation; otherwise use atlas lines.
- **Border:** 1px atlas line on light surfaces.
- **Internal Padding:** 24–34px depending on density.

### Navigation

The header is a fixed paper veil with a thin atlas line, museum mark at left, compact uppercase links, and a single language control. On mobile it reduces to the mark and a hamburger; the route remains readable without forcing a desktop menu into the viewport.

### Hero / Archive Frame

Every major route starts with a dark teal, image-led frame carrying an eyebrow, a two-line Lora statement, a short description, and an archive index. The home variant uses the local muted film; quieter routes use distinct local documentary images.

## Do's and Don'ts

### Do:

- **Do** let real museum imagery carry the meaning of each route.
- **Do** use the local hero film muted, looping, and with a poster fallback.
- **Do** keep the woven paper visible only as a background material.
- **Do** preserve clear next steps: AR, Auto Guide, gallery, visit, and education.
- **Do** keep responsive gutters and touch targets generous on mobile.

### Don't:

- **Don't** reuse the Glory of Islam Museum's gold/cream hero language or spotlight glow.
- **Don't** place text directly on a noisy texture without an opaque or darkened surface.
- **Don't** use gradients as decoration; gradients are only image legibility washes.
- **Don't** hide the museum identity behind generic stock imagery or invented collection claims.
