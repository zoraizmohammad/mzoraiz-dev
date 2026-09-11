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
- The browser system has replay and live paths. Replay uses 2,700 frames at 30 fps over 90 seconds; live mode couples `AutonomousNavigator`, WebSocket inference on port 8765, and the agent server on port 8766.
- The agent may call route, battery-range, confidence-threshold, and scan-pattern tools for at most three rounds. Chroma retrieves the three most similar prior missions using local all-MiniLM-L6-v2 embeddings.
- The confidence bandit uses contextual UCB1 over thresholds 0.40, 0.60, and 0.75. Optical-flow interpolation uses smoothstep easing and confidence is coupled to measured stability and strength.
- The current checked-in benchmark run reports 59,571 simulated pipeline fps, 16.6 µs mean frame cost, 504,218 sensor lookups/s, 8.6 µs mean TSP cost at eight targets, and a 2.55 m lock altitude only at zero horizontal offset. These are development-machine timings, not Raspberry Pi measurements.
- Physical evidence from the report: 9/10 camera-only detections, 4/4 detections with the camera mounted on the assembled drone, approximately 30 fps Raspberry Pi bench detection with stable servo operation, more than 1 g of flour substitute delivered, and stable manual flight within 5 feet of the ground.
- LLM decision latency was skipped in the checked-in benchmark because `ANTHROPIC_API_KEY` was unavailable. Never imply it was measured.

## TargetONCO

- Treat `/Users/mzoraiz/code/targetONCO` as the implementation source for the case study.
- Present three connected research pipelines: OncoRAX radiology reasoning, OncoPathology spatial-proteomics processing, and Elasticsearch phenotype retrieval.
- Cell vectors contain ten shared markers. Tissue vectors concatenate seven statistics for each marker into 70 dimensions. Normalization is `asinh(x / 5)` followed by per-marker z-scoring.
- The checked-in `cancer4_full_report.json` is one demonstration trace, not a clinical benchmark. It records seven stages, five retrieved cases, eight differential items, and approximately 17.6 seconds from initialization to report.
- Do not present differential values as calibrated clinical probabilities or infer sensitivity, specificity, patient benefit, regulatory status, or production readiness.
- Preserve visible failure states. The selected trace records a report-generator configuration failure followed by classifier-based fallback evidence.

## Quantum Bayesian Learner

- Treat `/Users/mzoraiz/code/qb-learner-compression` as the source for the Quantum Bayesian Learner case study. Prefer `results_v2/`, `src/qcore.py`, `src/qdensity.py`, the paper, and the QCE26 poster over superseded legacy experiments.
- The work is accepted to IEEE Quantum Week QCE26, Poster Track, EasyChair submission 1846.
- Report primary simulation results as five-seed means and standard deviations. The hard-task 0.927 result at `N₂q=6` versus 0.873 at `N₂q=24` is not statistically significant at five seeds.
- The strongest matched-budget result is 49 wins in 55 paired seed-budget comparisons, mean learned-mask advantage +0.083, one-sided Wilcoxon `p≈1.7×10⁻⁸`.
- Physical `ibm_fez` results are single-seed: 16 stimuli at 2,048 shots for the frontier and 40 stimuli at 4,096 shots for endpoint confirmation. No explicit error mitigation was configured and hardware job IDs were not retained.
- FakeManila defines the post-transpile two-qubit cost; `ibm_fez` is the physical deployment device. State this mismatch explicitly.
- Never claim quantum advantage. Classical RBF-SVM and MLP baselines are competitive; the contribution is structured, hardware-aware capacity analysis.

## Ombench

- Treat `/Users/mzoraiz/code/ombench` as the implementation source. Use its committed PlantUML-derived SVGs directly rather than recreating them.
- The checked-in deterministic benchmark contains 15 curated operational tasks. Mean outcome-grounded score changes from 0.3777 without memory to 1.0 with memory, a paired delta of +0.6223 with bootstrap 95% CI `[0.5334, 0.6667]`.
- Success changes from 6.67% to 100%; 14 tasks improve, one is neutral, and none regress. The SciPy paired Wilcoxon result is `p=0.0001828`.
- The headline outcome-grounded score uses task outcome and action validity. Never use the full four-axis total for the primary delta because retrieval and application are zero by construction without memory.
- Describe the result as a deterministic, fixture-backed, keyless benchmark—not live production-agent evidence. The 407 tests and 91% coverage are repository-reported unless freshly reproduced.
- Bitemporal state is defined by both `valid_at` and `ingested_at`; preserve this distinction when describing replay and leakage prevention.

## CipherShield

- Treat `/Users/mzoraiz/code/cipher-shield` as the implementation source. The project won Taisu Ventures' **NextGen Web3 Security Award** at TreeHacks 2025; link the award to Taisu Ventures' own winner announcement.
- Credit Mohammad Zoraiz, Adel Müürsepp, Sonia Bendre, and Sunny Jayram. Do not assign individual roles beyond what the repository documents.
- The shared OpenFHE context uses BFV-RNS, plaintext modulus 65,537, multiplicative depth 2, noise-flooding multiparty mode, and batch size 16. A separate monolithic prototype uses batch size 512; do not collapse these experimental variants into one measured configuration.
- The implemented arithmetic is ciphertext addition through `EvalAdd`, followed by `MultipartyDecryptLead`, `MultipartyDecryptMain`, and `MultipartyDecryptFusion`. Do not claim formal security, audited cryptography, production readiness, or measured performance.
- The Solidity contract enforces a declared and confirmed cohort floor of 10, but this is not differential privacy and does not prevent differencing attacks. Its validation and processing methods are publicly callable in the prototype.
- One React survey explicitly simulates encryption. Never represent that screen as exercising the OpenFHE implementation.

## SonicSync

- Treat `/Users/mzoraiz/code/SonicSync` and its included IEEE paper as primary sources. The paper is “Psycho Acoustic Testing to Determine the Optimal Frequency for Audible Safety Alerts for Freediving,” published at IEEE SIEDS 2024, DOI `10.1109/SIEDS61124.2024.10534714`.
- Credit Arnav Nanda, Mohammad Zoraiz, Dhruva Barua, and Raghad Mohamed. The repository states that the project was developed in collaboration with Garmin International Inc.; the paper itself credits Duke ECE and Duke Marine Lab research support.
- The reported study contains six participants, five tones (50, 100, 150, 200, 250 Hz), and 30 ratings. Reported ANOVA: `F=8.4375`, `p≈0.000188`, `Fcrit=2.7587`; Tukey HSD separates every pair except 150 vs 200 Hz.
- Preserve the group means exactly: 1.3333, 3.3333, 3.6667, 3.6667, and 4.6667. Treat the study as exploratory: bucket-and-earmuff simulation, six participants, and an ordinal scale do not establish an optimal safety frequency in open water.
- The 98% feedback accuracy, 70 ± 3 dB output, 10-second transfer, and submersion values are design targets, not reported validation results. SonicSync is not certified safety equipment.
- CtrlSlash is intentionally archived from the public gallery. Preserve its page and source for possible restoration, but do not re-add it to visible project navigation without instruction.

## CRISPR Signal Engine

- Treat `/Users/mzoraiz/code/LifeEdit-geneclassifier` as the source. The public project name is **CRISPR Signal Engine**; the stable route and asset slug remain `lifeedit-gene-classifier`.
- Credit Mohammad Zoraiz, Islam M. Tayeb, Amy Liu, Soham Jinsi, and DIIG Data. Present Life Edit Therapeutics and Novo Nordisk as collaborators using the supplied joint brand lockup.
- The source starts with 39,376 genes across 38 samples from GSE218462 and GSE218463. It applies `log2(x + 1)`, gene-wise standardization, a median/dispersion relevance filter, PCA, k-means, NCBI-description annotation, and random-forest classification.
- The selected 1.6 / 250 filter retains 4,188 genes and feeds nine clusters. Nearby committed feature sets retain 4,122 genes at 1.2 / 275 and 4,050 at 3.0 / 250.
- The tuned forest notebook reports best five-fold macro-F1 0.8909 and 0.88 accuracy on an eight-sample holdout. State that the single untreated holdout sample was missed (`F1=0`), while seven edited samples yielded `P=0.88`, `R=1.0`, and `F1=0.93`.
- Never call the clusters biomarkers or imply clinical validation. The cohort is small and imbalanced, and preprocessing leakage, donor effects, batch effects, and external generalization require further study.

## TumorVector

- The public name for the former RevealGenomics portfolio entry is **TumorVector**; preserve `revealgenomics` as its route, asset slug, repository identity, and sponsor name.
- Use the supplied Reveal Genomics logo and describe the work as sponsored research with Reveal Genomics. Do not imply that Reveal Genomics itself was renamed.
- TumorVector and AcademicInsights are intentionally archived from the public Projects gallery. Preserve both pages, routes, data entries, source links, posters, and assets for later restoration.

## Validation workflow

## EVPI

- EVPI is a coming-soon ICLR 2026 experiment scaffold for execution-grounded, cost-sensitive clarification in voice-driven coding agents.
- Preserve its four-action policy vocabulary: `act`, `silent_repair`, `ask`, and `yield` / back-channel.
- RepoCalib estimates cross-modal span uncertainty against execution-grounded edit failure rather than word-error rate. VOICE-EVPI values clarification using measured execution cost such as test blast radius, call-graph fan-out, and AST scope.
- The learned components sit outside the frozen, confidence-free Nova Sonic API. Keep EVPI non-clickable with the shaded, shimmering “Coming soon” gallery treatment until instructed otherwise.

## FPGA Hologram

- Treat `/Users/mzoraiz/code/fpga-hologram` as the implementation source. Credit Mohammad Zoraiz and Rally Lin.
- The display uses 52 WS2812B LEDs and 64 angular columns on a Nexys A7-100T at 100 MHz. The active texture has 30 frames at 15 FPS and 99,840 24-bit GRB words.
- Angle period is filtered by an EMA at α=1/8. The custom five-stage CPU has an 18-instruction MIPS-style ISA, forwarding, stalls, radix-4 Booth multiplication, non-restoring division, and MMIO at addresses 1000–1004.
- A full LED pass is approximately 1.66 ms, giving roughly 600 updates/s and a derived upper bound near 9.4 revolutions/s at one update per column. Present this as a design bound, not measured motor speed.
- CI covers ALU, register file, multiply/divide, full-pipeline assembly, hazards, and MMIO. Icarus substitutes a Verilog stub for the VHDL LED driver.

## Gallery naming and availability

- The public name is **ProveniaBio** as one word. It remains visible with its subtitle and Startup tag, but is currently non-clickable and uses the same “Coming soon” treatment as EVPI.

1. Check JavaScript syntax with `node --check project-detail.js`.
2. Check SVGs with `xmllint --noout`.
3. Start a local server from the repository root.
4. Inspect every changed page at desktop and mobile widths. Check typography, margins, overflow, alignment, image cropping, navigation, and link targets.
5. Iterate until the screenshots look polished; do not treat a successful build as visual verification.
6. Keep commits scoped by concern and do not add AI/co-author attribution to commits.

## Repository safety

- This working copy belongs under `/Users/mzoraiz/code`, not Desktop/iCloud, because dataless iCloud files can block Git operations.
- Preserve unrelated user changes. Never delete the old Desktop checkout until the recovered repository has been validated and pushed.
