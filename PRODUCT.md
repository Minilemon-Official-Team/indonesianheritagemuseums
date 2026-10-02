# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Museum visitors, prospective visitors planning a trip, families and educators, and institutions looking for cultural-learning programs.

## Product Purpose

The Indonesian Heritage Museum website helps people understand Indonesia's cultural heritage, choose a museum experience, plan a visit, and continue exploring through Augmented Reality, Auto Guide, galleries, events, education pages, and virtual tours.

## Positioning

The museum connects 17 regional story zones with physical collections and digital layers, making Indonesia's cultural breadth explorable before, during, and after a visit.

## Operating Context

Visitors use the site on phones and desktop browsers before a visit, while on-site, or as a remote archive. The site supports Indonesian, English, and Chinese UI modes and links to the Android AR experience.

## Capabilities and Constraints

- Preserve the existing React/Vite routes, museum copy, navigation, AR links, Auto Guide flows, audio, gallery, news, events, education, VIP, visit, and virtual-tour functionality.
- Keep the hero video muted by default and usable on mobile with a poster fallback.
- Use the supplied museum imagery and local media; do not invent collection facts or commercial claims.
- Keep the redesign visually distinct from the Glory of Islam Museum while retaining the same clear visitor journey.

## Brand Commitments

The product name is Indonesian Heritage Museum. Existing museum logo, cultural imagery, regional storytelling, and the site's Indonesian heritage subject matter remain recognizable. The redesign uses a different paper/archival texture and a distinct visual language from the Glory of Islam Museum.

## Evidence on Hand

- Existing page copy and route structure under `src/app`.
- Museum imagery under `public/images`, including zone, Auto Guide, news, event, VIP, and virtual-tour assets.
- Local banner video source at `../banner/IHM.mp4` to be bundled as a Heritage hero asset.
- Local audio guides under `public/Audio`.

## Product Principles

- Make the cultural map legible before asking visitors to choose a route.
- Turn every digital feature into a clear next step, not decorative UI.
- Let real museum imagery carry the story.
- Keep exploration calm, accessible, and useful on small screens.

## Accessibility & Inclusion

Preserve keyboard access, visible focus, readable contrast, responsive layouts, meaningful image/video alternatives, and reduced-motion fallbacks.
