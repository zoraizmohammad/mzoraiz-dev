# Portfolio Project Guide

## Purpose

This repository is Mohammad Zoraiz's research and engineering portfolio. Preserve its editorial, evidence-led tone: sophisticated work should feel complex because the underlying system is explained clearly, never because claims are inflated.

## Design system

- Use the existing `DM Sans` and `DM Mono` fonts. Do not introduce template fonts.
- Keep the current warm off-white surfaces, dark ink, muted scientific colors, generous whitespace, and square-edged editorial composition.
- Project covers adapt the structure of `vendor/clarity-template`: large title and abstract on the left, poster on the right, compact actions and metadata, then a readable research narrative.
- Poster artwork lives at `assets/projects/covers/<slug>.png` and must be exactly **1600 × 2000 px (4:5)**.
- Poster prompts should produce one simple geometric metaphor, subtle paper grain, no text, no logos, no decorative frame, no glossy 3D, and enough negative space to read at thumbnail size.
- All images need meaningful alt text. Avoid putting essential technical labels inside generated raster images.

## Project pages

- Routes live at `project-pages/<slug>.html` and set `body[data-project]` to the same slug.
- Shared data and rendering live in `project-detail.js`; shared presentation lives in `project-detail.css`.
- Each project should state the problem, approach, system flow, design principles, present status, and limitations. Distinguish simulations and exploratory results from physical or clinical validation.
- Use checked-in figures, plots, screenshots, equations, and data from the source repository when available. Never invent metrics, affiliations, publications, or experimental results.
- Prefer semantic HTML, native SVG for technical diagrams, MathJax/LaTeX for equations, and tables for exact comparisons.
- Keep navigation and next-project links complete across all thirteen projects.

## Agentic Pollination UAV

- The 8/8 mission result is a deterministic 90-second simulation, not autonomous outdoor validation.
- The architecture separates agent recommendations from a deterministic 13-phase flight-state machine.
- Hardware includes an F450 platform, Pixhawk 2.4.8, Raspberry Pi 4, Coral USB accelerator, camera, optical-flow sensor, GPS/compass, and servo pollen dispenser.
- Technical assets live under `assets/projects/agentic-pollination-uav/`; `system-overview.svg` is the canonical architecture diagram.
- Source evidence can be refreshed from `/Users/mzoraiz/code/agentic-pollination-uav` when available.

## Validation workflow

1. Check JavaScript syntax with `node --check project-detail.js`.
2. Check SVGs with `xmllint --noout`.
3. Start a local server from the repository root.
4. Inspect every changed page at desktop and mobile widths. Check typography, margins, overflow, alignment, image cropping, navigation, and link targets.
5. Iterate until the screenshots look polished; do not treat a successful build as visual verification.
6. Keep commits scoped by concern and do not add AI/co-author attribution to commits.

## Repository safety

- This working copy belongs under `/Users/mzoraiz/code`, not Desktop/iCloud, because dataless iCloud files can block Git operations.
- Preserve unrelated user changes. Never delete the old Desktop checkout until the recovered repository has been validated and pushed.
