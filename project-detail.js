const projects = {
  "provenia-bio": {number:"01",category:"Biomedical AI",title:"Provenia Bio",accent:"#dbe8ed",summary:"A proof- and provenance-carrying neuro-symbolic drug-discovery system for auditable therapeutic hypothesis generation.",tags:["Neuro-symbolic AI","Drug Discovery","PROV-O","FastAPI"],repo:"https://github.com/zoraizmohammad/provenia-bio",problem:"Drug-discovery systems can produce plausible hypotheses without exposing the evidence, transformations, or uncertainty behind them.",approach:"Provenia pairs every promoted hypothesis with machine-checkable proofs, W3C PROV traces, validation gates, and calibrated uncertainty.",steps:["Ingest evidence","Compose hypothesis","Validate proof","Publish provenance"],principles:[["Evidence before confidence","Claims remain attached to their sources."],["Machine-checkable promotion","Validation gates decide what advances."],["Explicit uncertainty","Confidence is measured rather than implied."],["Auditable lineage","Every transformation remains traceable."]],status:"The page establishes the system contract and is ready for proof traces, model diagrams, and validation results.",next:"targetonco"},
  targetonco: {
    number:"02", category:"Precision Oncology", title:"TargetONCO", accent:"#dcefe5",
    summary:"An agentic precision-oncology platform turning radiology, spatial proteomics, vector search, and report generation into one traceable cancer-analysis workflow.",
    tags:["Python","FastAPI","React","Elasticsearch"], repo:"https://github.com/zoraizmohammad/targetONCO",
    problem:"Clinical and research teams often work across disconnected imaging, tissue, literature, and reporting tools. TargetONCO explores a single workspace in which those signals can be assembled into an evidence-backed differential without hiding how the system reached it.",
    approach:"The system coordinates specialized analysis stages instead of asking one model to do everything. Imaging and proteomic outputs become structured evidence, retrieval adds relevant context, and an agentic layer assembles the final reasoning trail for review.",
    steps:["Radiology + tissue inputs","Specialized ML analysis","Clinical vector retrieval","Ranked report + evidence"],
    principles:[["Multimodal by design","Treat imaging, spatial biology, and retrieved evidence as complementary signals."],["Human review stays central","Present rankings and evidence as decision support—not an autonomous diagnosis."],["Traceable outputs","Keep source context attached as information moves through the workflow."],["Composable pipeline","Allow individual models, indexes, and reporting stages to evolve independently."]],
    status:"This first project page establishes the intended end-to-end workflow and the product narrative. Future iterations can add real interface captures, an architecture diagram, validation methodology, and example reports.", next:"quantum-bayesian-learner"
  },
  "quantum-bayesian-learner": {
    number:"03", category:"Quantum Systems", title:"Quantum Bayesian Learner", accent:"#f4d9d4",
    summary:"A hardware-aware quantum learning system that studies how Bayesian evidence updates and variational circuits behave under realistic circuit-cost constraints.",
    tags:["Qiskit","JAX","FakeManila","QML"], repo:"https://github.com/zoraizmohammad/qb-learner-compression",
    problem:"Quantum models are often evaluated in idealized settings where accuracy is separated from the cost of running a circuit on real hardware. This project treats predictive behavior and deployability as part of the same optimization problem.",
    approach:"Exact statevector and density-matrix cores provide a controlled baseline. Candidate entanglers are then pruned, transpiled against a hardware model, and compared through learned-versus-random mask ablations.",
    steps:["Bayesian evidence","Variational circuit","Greedy mask pruning","Hardware-aware evaluation"],
    principles:[["Exact baselines","Use controlled simulation to understand behavior before adding hardware effects."],["Cost after transpilation","Measure the circuit the device would see, not only the abstract ansatz."],["Ablate the mask","Compare learned pruning with random masks to isolate where gains originate."],["Reproducible sweeps","Keep configurations and evaluation paths explicit for repeatable experiments."]],
    status:"The starter page frames the research question and evaluation loop. It is ready for equations, compression curves, circuit visualizations, and a concise results table when those artifacts are selected.", next:"ombench"
  },
  ombench: {
    number:"04", category:"Agent Memory", title:"Ombench", accent:"#dbe0e5",
    summary:"A memory and backtesting platform for operational agents, designed to measure whether accumulated context improves performance on work that already happened.",
    tags:["Python","Agents","Backtesting","Chroma"], repo:"https://github.com/zoraizmohammad/ombench",
    problem:"Agent memory is easy to demo and difficult to evaluate. More stored context does not necessarily produce better decisions, and live tasks rarely provide a stable baseline for measuring improvement.",
    approach:"Ombench captures task history, compiles durable memories, and replays historical work across communication and productivity tools. The same task can be evaluated with and without memory to make its contribution observable.",
    steps:["Capture work history","Compile durable memory","Replay past tasks","Compare agent outcomes"],
    principles:[["Replay over anecdotes","Evaluate on repeatable historical scenarios rather than isolated demos."],["Memory is a hypothesis","Test whether each memory strategy helps instead of assuming more context is better."],["Operational realism","Model the cross-tool environment in which working agents actually operate."],["Inspectability","Make retrieved memories and their influence visible during analysis."]],
    status:"This layout is prepared for benchmark definitions, replay traces, memory examples, and comparison plots. The initial copy focuses on the core evaluation idea and avoids claiming results before they are documented.", next:"agentic-pollination-uav"
  },
  qadam:{number:"05",category:"Accessible Biotech",title:"Qadam",accent:"#efdfb9",summary:"A portable, offline-first prosthetics clinic built around reusable fitting tools, open hardware, and affordable mechanical limbs.",tags:["Open Hardware","Prosthetics","Accessibility"],repo:"https://github.com/zoraizmohammad/qadam",problem:"Traditional prosthetics delivery depends on expensive equipment, specialist facilities, and supply chains that are unavailable in many communities.",approach:"Qadam packages fitting, fabrication guidance, records, and reusable clinical tools into a field-deployable system.",steps:["Assess patient","Capture fit","Configure limb","Deliver + follow up"],principles:[["Design for the field","Assume constrained power and connectivity."],["Keep tools reusable","Reduce recurring cost and waste."],["Open the hardware","Make local repair and adaptation possible."],["Center the patient","Fit and follow-up shape the workflow."]],status:"This foundation is ready for product renders, fitting protocols, bill-of-materials analysis, and partner validation.",next:"agentic-pollination-uav"},
  "agentic-pollination-uav": {
    number:"06", category:"Autonomous UAV", title:"Agentic Pollination UAV", accent:"#e4dff3",
    summary:"A full-stack autonomous pollinator-drone concept combining computer vision, mission planning, retrieval memory, simulation, and a physical UAV architecture.",
    tags:["TypeScript","FastAPI","Computer Vision","UAV"], repo:"https://github.com/zoraizmohammad/agentic-pollination-uav",
    problem:"Targeted pollination requires perception and motion to work together under changing field conditions. A useful system needs more than detection: it needs planning, mission memory, operator visibility, and a path to physical deployment.",
    approach:"A vision service identifies candidate targets, an agent plans actions using current observations and retrieved mission context, and a Preact dashboard exposes system state. Simulation provides a safe environment for testing the complete loop.",
    steps:["Field perception","Target identification","Agentic mission planning","UAV action + telemetry"],
    principles:[["Simulate the whole loop","Test planning, perception, and interface behavior as one system."],["Operator visibility","Expose targets, decisions, and mission state through a live dashboard."],["Memory-aware planning","Use prior mission context to inform what the agent does next."],["Hardware path","Keep the software architecture grounded in eventual onboard constraints."]],
    status:"The starter case study is ready for dashboard screenshots, detection examples, mission timelines, and an annotated drone-system diagram.", next:"ciphershield"
  },
  ctrlslash:{number:"07",category:"AI IDE Context",title:"CtrlSlash",accent:"#eadfbd",summary:"An MCP-based documentation and context engine that gives AI coding tools current, project-specific technical knowledge.",tags:["MCP","RAG","Puppeteer","Docker"],repo:"https://github.com/zoraizmohammad/ctrlslash",problem:"Coding agents often hallucinate when library documentation, repository conventions, and API behavior are absent or stale.",approach:"CtrlSlash collects documentation, indexes semantic context, and exposes retrieval through MCP at the point of implementation.",steps:["Collect sources","Normalize docs","Index context","Serve through MCP"],principles:[["Current sources","Refresh knowledge as dependencies evolve."],["Context on demand","Retrieve only what the task needs."],["Source visibility","Keep documentation links attached."],["IDE-native access","Deliver context inside the coding workflow."]],status:"The page is ready for ingestion traces, retrieval examples, and hallucination-reduction evaluation.",next:"ciphershield"},
  ciphershield: {
    number:"08", category:"Privacy Infrastructure", title:"CipherShield", accent:"#e4dff3",
    summary:"A privacy-preserving aggregation system that combines split-key homomorphic encryption with smart-contract verification for auditable protected-data computation.",
    tags:["OpenFHE","Solidity","C++","Cryptography"], repo:"https://github.com/zoraizmohammad/cipher-shield",
    problem:"Organizations may need aggregate insight from sensitive records without creating a central point where raw data can be exposed or misused. Policy alone cannot guarantee that separation.",
    approach:"Data remains encrypted during aggregation, while key responsibilities are split so that no single actor can decrypt inputs alone. Smart contracts provide a visible coordination and verification layer around the computation.",
    steps:["Encrypt at source","Aggregate ciphertexts","Verify on-chain","Jointly unlock result"],
    principles:[["Minimize trust","Replace promises about access with cryptographic constraints where possible."],["Aggregate, do not expose","Reveal the intended collective result without disclosing individual records."],["Split authority","Avoid concentrating decryption capability in a single participant."],["Auditable coordination","Use verifiable state transitions to make the protocol easier to inspect."]],
    status:"This page currently communicates the trust model at a high level. A later pass can include the threat model, protocol sequence, performance notes, and a formal explanation of the security assumptions.", next:"sonicsync"
  },
  sonicsync: {
    number:"09", category:"Human Sensing", title:"SonicSync", accent:"#dbe0e5",
    summary:"A submersible psychoacoustic feedback wearable developed with Garmin engineers for underwater communication and auditory testing across depth conditions.",
    tags:["MATLAB","C++","Hardware","IEEE"], repo:"https://github.com/zoraizmohammad/SonicSync",
    problem:"Sound perception and communication change underwater, while conventional laboratory equipment is poorly suited to mobile, depth-dependent testing. The apparatus needs to survive the environment without compromising timing or experimental control.",
    approach:"SonicSync joins a wearable mechanical enclosure with embedded signal processing, controlled stimulus delivery, and analysis tooling. The design connects physical fit, underwater constraints, and psychoacoustic measurement as one system.",
    steps:["Test protocol","Signal generation","Submersible wearable","Response analysis"],
    principles:[["Design for the environment","Treat pressure, water, fit, and usability as first-order system requirements."],["Low-latency feedback","Keep the sensing and stimulus loop responsive enough for controlled testing."],["Repeatable trials","Structure stimulus delivery and data capture for comparable sessions."],["Cross-disciplinary build","Unify mechanical, electrical, and analytical work in the same design process."]],
    status:"The starter page can grow with device photography, enclosure iterations, test setup diagrams, publication details, and measured results.", next:"revealgenomics"
  },
  revealgenomics: {
    number:"11", category:"Cancer Detection", title:"RevealGenomics", accent:"#f4d9d4",
    summary:"Exploratory breast-cancer gene detection research using representation learning and notebook-driven modeling to study BRCA-related classification signals.",
    tags:["Jupyter","VAE","Oncology","Representation Learning"], repo:"https://github.com/zoraizmohammad/RevealGenomics",
    problem:"High-dimensional gene-expression data contains complex structure, but small sample sizes and noisy signals make clinically meaningful patterns difficult to isolate and communicate.",
    approach:"The project explores learned latent representations as a way to compress expression features before downstream classification and analysis, with notebooks keeping preprocessing and experiments inspectable.",
    steps:["Expression data","Preprocess + normalize","Learn latent space","Explore classification signal"],
    principles:[["Explore before claiming","Use the work to surface patterns and hypotheses rather than overstate clinical readiness."],["Compact representation","Study whether latent variables capture useful structure in high-dimensional profiles."],["Visible experiments","Keep transformations and evaluation steps readable in notebooks."],["Biomedical context","Interpret modeling decisions through the constraints of oncology data."]],
    status:"This initial narrative is intentionally exploratory. It is ready for dataset documentation, latent-space plots, model comparisons, and limitations once the preferred experiments are chosen.", next:"lifeedit-gene-classifier"
  },
  "lifeedit-gene-classifier": {
    number:"10", category:"Genomics ML", title:"LifeEdit Gene Classifier", accent:"#dcefe5",
    summary:"A machine-learning workflow for distinguishing edited and unedited biological signatures using single-cell data, feature engineering, and exploratory modeling.",
    tags:["Python","Jupyter","Genomics","Classification"], repo:"https://github.com/zoraizmohammad/LifeEdit-geneclassifier",
    problem:"Gene-editing experiments can produce subtle expression changes across heterogeneous cell populations. Identifying a dependable signature requires careful preprocessing, dimensionality reduction, and evaluation—not only a classifier.",
    approach:"The workflow moves from exploratory analysis through feature selection and lower-dimensional representations to supervised classification, keeping each transformation available for biological review.",
    steps:["Single-cell inputs","Quality control + EDA","Feature selection + PCA","Edited / unedited model"],
    principles:[["Data quality first","Inspect distributions and artifacts before optimizing a model."],["Reduce with purpose","Use feature selection and PCA to clarify signal and manage dimensionality."],["Compare representations","Evaluate how preprocessing choices change downstream separability."],["Keep biology visible","Pair predictive results with interpretable features and careful limitations."]],
    status:"The page now provides a stable structure for the research story. Next additions can include cohort details, class balance, PCA views, evaluation metrics, and the most biologically informative features.", next:"fpga-hologram"
  },
  "fpga-hologram":{number:"12",category:"Digital Systems",title:"FPGA Hologram",accent:"#dbe8ed",summary:"A persistence-of-vision hologram display on a Nexys A7 FPGA with deterministic LED timing and a custom pipelined controller.",tags:["Verilog","VHDL","FPGA","Assembly"],repo:"https://github.com/zoraizmohammad/fpga-hologram",problem:"Stable volumetric imagery requires precise coordination between rotation, angular position, memory access, and LED updates.",approach:"A hardware pipeline maps angular position to texture ROM data while a custom controller handles timing and interaction.",steps:["Sense angle","Address texture","Pipeline pixels","Drive LEDs"],principles:[["Deterministic timing","Keep display updates cycle-accurate."],["Pipeline the path","Separate addressing, control, and output."],["Precompute assets","Use ROM layouts suited to hardware."],["Measure visually","Tune timing against perceived stability."]],status:"The page is ready for timing diagrams, RTL modules, hardware photography, and display captures.",next:"academicinsights"},
  academicinsights:{number:"13",category:"EdTech Research",title:"AcademicInsights",accent:"#dce2e0",summary:"A browser-based research system for studying learning behavior through web activity, language signals, and interpretable behavioral features.",tags:["Python","JavaScript","NLP","EdTech"],repo:"https://github.com/zoraizmohammad/academicInsights",problem:"Online learning behavior is distributed across browsing patterns and text interactions that are difficult to study without invasive collection.",approach:"The system combines a research-oriented browser extension with a backend analysis template for consent-aware behavioral and NLP experiments.",steps:["Collect consented events","Extract features","Analyze behavior","Review findings"],principles:[["Research consent","Make collection explicit and bounded."],["Minimize data","Capture only signals required by the study."],["Interpretable features","Prefer measures researchers can inspect."],["Separate observation","Keep collection and analysis modular."]],status:"The page is ready for study protocols, privacy controls, feature definitions, and research outputs.",next:"provenia-bio"
  }
};

const slug = document.body.dataset.project;
const project = projects[slug];
if (!project) throw new Error(`Unknown project: ${slug}`);

document.body.style.setProperty("--project-accent", project.accent);
document.title = `${project.title} | Mohammad Zoraiz`;

const nodes = project.steps.map((step,index) => `<div class="system-node"><span>0${index + 1}</span><strong>${step}</strong></div>`).join("");
const notes = project.principles.map(([title,copy],index) => `<article class="case-note"><span>Principle 0${index + 1}</span><h3>${title}</h3><p>${copy}</p></article>`).join("");
const tags = project.tags.map(tag => `<span>${tag}</span>`).join("");
const next = projects[project.next];
const systemVisual = slug === "agentic-pollination-uav" ? `<figure class="uav-system"><img src="../assets/projects/agentic-pollination-uav/figures/system-overview.svg" alt="UAV hardware, perception, decision, and pollination architecture"><figcaption>Sensor and camera inputs feed perception; bounded reasoning produces deterministic action commands.</figcaption></figure>` : `<div class="system-map" style="--steps:${project.steps.length}">${nodes}</div>`;

const targetOncoPage = `
  <section class="project-cover targetonco-cover" id="first-content"><div class="case-hero research-cover-grid">
    <div class="blog-intro"><div class="case-kicker"><a class="project-back" href="../projects.html">← All projects</a><span class="case-number">02 / Precision Oncology</span></div>
    <h1 class="case-title">TargetONCO</h1><p class="case-summary">A traceable multimodal workspace for radiology reasoning, spatial-proteomics quantification, and phenotype-aware cohort retrieval.</p>
    <p class="research-byline">Mohammad Zoraiz · YuCheng (Tom) Yuan · Sheldon Lewis · Suhas Kurapati</p>
    <div class="case-actions"><a class="button button-primary" href="${project.repo}" target="_blank" rel="noreferrer">Code <span>↗</span></a><a class="button button-quiet" href="#architecture">Architecture <span>↓</span></a></div><div class="case-tags">${tags}</div></div>
    <figure class="research-cover-media abstract-cover"><img src="../assets/projects/covers/targetonco.png" alt="Abstract geometric cellular atlas poster for TargetONCO"><figcaption>Radiology · spatial biology · retrieval</figcaption></figure>
  </div></section>
  <nav class="research-toc" aria-label="On this page"><a href="#overview">Overview</a><a href="#architecture">Architecture</a><a href="#radiology">OncoRAX</a><a href="#pathology">Spatial</a><a href="#results">Evidence</a><a href="#limitations">Limits</a></nav>
  <section class="research-metrics" aria-label="System dimensions"><div><strong>3</strong><span>specialist analysis systems</span></div><div><strong>70D</strong><span>tissue phenotype vector</span></div><div><strong>10D</strong><span>single-cell marker vector</span></div><div><strong>7</strong><span>traceable report stages</span></div></section>

  <article class="research-prose" id="overview"><p class="section-index">01 / Research premise</p><h2>Different evidence should remain different</h2><p>Precision-oncology workflows span images, cellular phenotypes, clinical context, and narrative interpretation. TargetONCO does not collapse those signals into one opaque prediction. It routes each modality through a specialist pipeline, preserves intermediate artifacts, and reunifies the outputs as evidence for human review.</p><div class="research-callout"><span>Evidence boundary</span><p>This is a research prototype and decision-support demonstration—not a clinically validated diagnostic device. Architectural dimensions and checked-in execution traces are reported separately from clinical performance.</p></div></article>

  <figure class="research-figure target-reference-diagram" id="architecture"><img src="../assets/projects/targetonco/figures/system-simplified.png" alt="Original TargetONCO system diagram connecting the frontend to X-ray analysis, OncoRAX reporting, OME-TIFF pathology, cell annotation, and Elasticsearch retrieval"><figcaption><strong>Multimodal architecture.</strong> The original project diagram shows the two primary paths from the frontend: radiology through OncoRAX and spatial pathology through OncoPathology, cell annotation, quantification, and retrieval.</figcaption></figure>

  <section class="research-wide research-section"><p class="section-index">02 / Computational contract</p><h2>Specialists first; synthesis second</h2><div class="research-comparison"><article><span>Radiology</span><h3>OncoRAX</h3><p>A staged inference, critique, analogous-case retrieval, revision, differential-ranking, and reporting loop retains a timestamped event trace.</p></article><article><span>Spatial pathology</span><h3>OncoPathology</h3><p>Probability maps, cell segmentation, and marker quantification convert multi-channel OME-TIFF imagery into analysis-ready single-cell tables.</p></article><article><span>Cohort intelligence</span><h3>Elasticsearch</h3><p>Normalized marker summaries become dense tissue and cell embeddings with attached morphology and clinical metadata.</p></article><article><span>Orchestration</span><h3>FastAPI + React</h3><p>A typed web interface coordinates long-running local, containerized, Modal, or HPC execution while preserving generated artifacts.</p></article></div></section>

  <figure class="research-figure target-reference-diagram target-reference-diagram-complex" id="radiology"><img src="../assets/projects/targetonco/figures/system-complex.png" alt="Original detailed TargetONCO architecture diagram showing frontend, agent core, OncoRAX, OncoPathology, vector search, execution backends, and reporting outputs"><figcaption><strong>Complete implementation topology.</strong> The repository’s detailed reference diagram maps the frontend and agent core to OncoRAX, OncoPathology, vector search, execution backends, data stores, and research-report outputs.</figcaption></figure>

  <article class="research-prose"><p class="section-index">03 / Probabilistic reasoning</p><h2>Ranking hypotheses without hiding uncertainty</h2><p>The radiology path represents candidate findings with confidence scores, retrieves analogous cases, and forms a normalized differential. Its Bayesian stage can be written as:</p><div class="equation-block">P(D<sub>i</sub> | F) = P(F | D<sub>i</sub>) P(D<sub>i</sub>) / Σ<sub>j</sub> P(F | D<sub>j</sub>) P(D<sub>j</sub>)</div><p>Here, <span class="inline-equation">F</span> denotes the observed finding set and <span class="inline-equation">Dᵢ</span> a candidate diagnosis. OncoRAX stores the inference, critique, retrieved cases, revision, differential, and report as separate timeline events so a reviewer can inspect where a conclusion changed.</p></article>

  <section class="research-wide research-section" id="pathology"><p class="section-index">04 / Spatial proteomics</p><h2>From multiplex pixels to cellular phenotypes</h2><div class="oncology-flow"><article><span>01</span><h3>UnMicst</h3><p>Produces probability maps from raw multi-channel OME-TIFF tissue imagery.</p></article><article><span>02</span><h3>S3segmenter</h3><p>Resolves nuclei and cell boundaries into spatially indexed masks.</p></article><article><span>03</span><h3>mcquant</h3><p>Quantifies per-cell marker intensity and morphology into tabular output.</p></article></div><p class="research-lede">The execution layer detects Docker, Apptainer/Singularity, Modal, or local runtimes, making multi-gigabyte jobs portable across workstation and HPC environments.</p></section>

  <article class="research-prose"><p class="section-index">05 / Phenotype retrieval</p><h2>A common vocabulary across cohorts</h2><p>Ten shared markers—CD31, CD45, CD4, FOXP3, CD8, CD163, E-cadherin, SMA, pan-cytokeratin, and CD3—align Orion-CRC and OncoPathology outputs. Intensities are transformed and standardized per marker:</p><div class="equation-block">z<sub>m,c</sub> = [asinh(x<sub>m,c</sub> / 5) − μ<sub>m</sub>] / σ<sub>m</sub></div><p>Each cell is represented by ten normalized marker values. A tissue vector concatenates seven distribution summaries—mean, standard deviation, and the 10th, 25th, 50th, 75th, and 90th percentiles—for every marker, yielding <span class="inline-equation">10 × 7 = 70</span> dimensions. Elasticsearch ranks cosine-nearest phenotypes:</p><div class="equation-block">sim(q, x) = (q · x) / (‖q‖₂ ‖x‖₂)</div></article>

  <section class="research-wide research-section" id="results"><p class="section-index">06 / Checked-in evidence</p><h2>One trace, reported as one trace</h2><p class="research-lede">The repository includes functional tests across normal, pneumonia, and cancer examples. The measurements below come from the checked-in <code>cancer4</code> demonstration and characterize execution behavior—not diagnostic accuracy.</p><div class="result-table-wrap"><table class="result-table"><thead><tr><th>Observed artifact</th><th>Demo value</th><th>What it establishes</th></tr></thead><tbody><tr><td>Initialization → final report</td><td>17.6 s</td><td>A complete seven-stage trace was emitted.</td></tr><tr><td>Extracted findings</td><td>8 total · 5 unique</td><td>Findings and confidence metadata were serialized.</td></tr><tr><td>Analogous cases</td><td>5 retrieved</td><td>Retrieval context was attached before revision.</td></tr><tr><td>Differential hypotheses</td><td>8 ranked</td><td>Probabilities were normalized into a reviewable table.</td></tr><tr><td>Visual outputs</td><td>5 generated</td><td>Image annotation and summary plots were exported.</td></tr></tbody></table></div></section>
  <div class="research-gallery oncology-gallery"><figure><img src="../assets/projects/targetonco/figures/annotated_xray_cancer4.png" alt="Annotated demonstration chest radiograph"><figcaption>Model findings overlaid on the demonstration radiograph.</figcaption></figure><figure><img src="../assets/projects/targetonco/figures/differential_chart_cancer4.png" alt="Ranked differential diagnosis chart"><figcaption>Normalized differential emitted by the example trace.</figcaption></figure><figure><img src="../assets/projects/targetonco/figures/regional_heatmap_cancer4.png" alt="Regional finding heatmap"><figcaption>Regional distribution of extracted findings.</figcaption></figure><figure><img src="../assets/projects/targetonco/figures/finding_stats_cancer4.png" alt="Finding confidence statistics"><figcaption>Finding frequency and confidence summary.</figcaption></figure></div>

  <article class="research-prose" id="limitations"><p class="section-index">07 / Limitations</p><h2>Useful infrastructure; open clinical questions</h2><ul class="research-limitations"><li><strong>No clinical validation.</strong> The checked-in examples demonstrate software execution and report structure, not sensitivity, specificity, calibration, or patient benefit.</li><li><strong>Single-trace timing.</strong> The 17.6-second figure is derived from one serialized demo timeline and is not a controlled latency benchmark.</li><li><strong>Model failure is visible.</strong> In the selected trace, the dedicated report-generation tool fails on a missing configuration field; classifier output provides the fallback evidence.</li><li><strong>Retrieval configuration matters.</strong> Elasticsearch can fall back to fixtures, and cohort similarity is exploratory unless dataset provenance and outcome labels are validated.</li><li><strong>Human review is mandatory.</strong> Generated differentials and summaries must not be interpreted as medical advice or autonomous diagnosis.</li></ul></article>
  <section class="research-wide research-section reproducibility-block"><p class="section-index">08 / Reproducibility</p><h2>Inspect the implementation and trace</h2><p class="research-lede">The repository contains the orchestration code, preprocessing equations, container recipes, test documentation, and serialized intermediate results used to construct this case study.</p><div class="case-actions"><a class="button button-primary" href="${project.repo}" target="_blank" rel="noreferrer">Open repository <span>↗</span></a><a class="button button-quiet" href="../assets/projects/targetonco/data/demo-trace.json">Demo trace <span>↓</span></a></div></section>
  <a class="case-next" href="quantum-bayesian-learner.html"><span>Next project / 03</span><strong>Quantum Bayesian Learner →</strong></a>`;

const uavPage = `
  <section class="project-cover pollinator-cover" id="first-content"><div class="case-hero research-cover-grid">
    <div class="blog-intro"><div class="case-kicker"><a class="project-back" href="../projects.html">← All projects</a><span class="case-number">06 / Autonomous UAV</span></div>
    <h1 class="case-title">Agentic Pollination UAV</h1><p class="case-summary">A cyber-physical framework for precision pollination through integrated computer vision, mission-level reasoning, and embedded mechatronic actuation.</p>
    <p class="research-byline">Mohammad Zoraiz · Dr. Martin Brooke · Yasha Saxena · Jackie Ong · Gianluca Zambrano · Anika Suman</p>
    <div class="case-actions"><a class="button button-primary" href="${project.repo}" target="_blank" rel="noreferrer">Code <span>↗</span></a><a class="button button-quiet" href="#results">Results <span>↓</span></a><a class="button button-quiet" href="#reproducibility">Data <span>↓</span></a></div><div class="case-tags">${tags}</div></div>
    <figure class="research-cover-media abstract-cover"><img src="../assets/projects/covers/agentic-pollination-uav.png" alt="Minimal botanical flight-path poster for Agentic Pollination UAV"><figcaption>Perception · planning · pollination</figcaption></figure>
  </div></section>
  <nav class="research-toc uav-toc" aria-label="On this page"><a href="#overview">Introduction</a><a href="#architecture">Architecture</a><a href="#reasoning">Reasoning</a><a href="#results">Experiments</a><a href="#hardware">Hardware</a><a href="#limitations">Limitations</a></nav>

  <section class="research-metrics" aria-label="Key project facts"><div><strong>13</strong><span>mission phases</span></div><div><strong>8 / 8</strong><span>simulation targets</span></div><div><strong>20 Hz</strong><span>hardware mission loop</span></div><div><strong>24</strong><span>physical sensor samples</span></div></section>

  <article class="research-prose" id="overview"><p class="section-index">01 / Introduction</p><h2>Closing the loop from perception to pollen delivery</h2>
    <p>Pollination in degraded or hard-to-reach environments is a coupled robotics problem. The aircraft must discover candidate flowers, choose a route, descend into a sensor-stable hover, deliver pollen, and recover safely. This project implements that complete loop across a browser simulation and a Raspberry Pi/Pixhawk hardware path.</p>
    <p>The central design choice is separation of authority. A tool-using language agent may recommend routes, scan spacing, and confidence thresholds; a deterministic 13-phase state machine retains control over flight, alignment, actuation, return-to-home, and landing.</p>
    <aside class="research-callout"><span>Evidence boundary</span><p>The 8/8 result is a seeded 90-second simulation. The repository contains hardware interfaces and physical bench/flight tests, but no autonomous outdoor mission log. Those evidence tiers are reported separately below.</p></aside>
  </article>

  <figure class="research-figure technical-diagram" id="architecture"><div class="diagram-viewport"><object data="../assets/projects/agentic-pollination-uav/figures/system-overview.svg" type="image/svg+xml" aria-label="Hardware, perception, bounded decision, and pollination action layers"></object></div><figcaption><strong>System overview.</strong> Camera, flight controller, embedded compute, accelerator, actuation, and navigation feed a bounded perception–decision–action loop. <span class="diagram-hint"><span class="desktop-hint">Hover a module to inspect the flow.</span><span class="mobile-hint">Swipe to explore the complete diagram.</span></span></figcaption></figure>

  <section class="research-wide research-section"><p class="section-index">02 / System design</p><h2>One interface, two execution paths</h2><div class="research-comparison">
    <article><span>Replay mode</span><h3>Deterministic evaluation</h3><p>2,700 pre-generated frames encode a 90-second mission at 30 fps. One frame index drives every dashboard panel, enabling repeatable seeking and visual regression checks.</p></article>
    <article><span>Live mode</span><h3>Closed-loop simulation</h3><p>A real-time navigator exchanges state with WebSocket inference, requests an agent decision once per second, streams commentary, and persists completed mission context.</p></article>
  </div></section>
  <figure class="research-figure technical-diagram"><div class="diagram-viewport"><object data="../assets/projects/agentic-pollination-uav/figures/mission-pipeline.svg" type="image/svg+xml" aria-label="Hierarchical autonomous mission pipeline"></object></div><figcaption><strong>Hierarchical autonomy.</strong> Bounded agent recommendations feed a deterministic 13-phase controller with telemetry feedback and explicit safety guards. <span class="diagram-hint"><span class="desktop-hint">Hover a service or phase group to inspect it.</span><span class="mobile-hint">Swipe to explore the complete diagram.</span></span></figcaption></figure>

  <article class="research-prose" id="reasoning"><p class="section-index">03 / Adaptive reasoning</p><h2>Learning when confidence is sufficient</h2>
    <p>A contextual UCB1 bandit chooses among detection thresholds 0.40, 0.60, and 0.75. Mission phase, optical-flow stability, and battery state define the context. Each action balances observed reward with an exploration bonus:</p>
    <div class="equation-block" role="math" aria-label="UCB of action a equals cumulative reward divided by action count plus square root of two log total selections divided by action count">UCB(a) = R<sub>a</sub> / N<sub>a</sub> + √(2 ln N / N<sub>a</sub>)</div>
    <p>Mission memory uses Chroma and local all-MiniLM-L6-v2 embeddings. Before each decision, the three most similar completed missions are retrieved and inserted as context. Tool execution is limited to three rounds and can invoke route, battery-range, confidence-threshold, and scan-pattern functions.</p>
    <h3>Sensor-aware confidence</h3><p>Optical-flow measurements are interpolated with smoothstep easing, <span class="inline-equation">s(t)=t²(3−2t)</span>. Detection confidence is then coupled to stability and signal strength:</p>
    <div class="equation-block">c′ = c · (0.6 + 0.4s) · (0.6 + 0.4q/255)</div>
    <p>Below 50 flow-quality units, an additional 0.6 multiplier models an unreliable estimate. Stable hover below 3 m receives a 15% boost. These deterministic couplings make replay results reproducible while retaining behavior grounded in 24 physical optical-flow samples.</p>
  </article>

  <figure class="research-figure dashboard-figure"><div class="dashboard-grid"><img src="../assets/projects/agentic-pollination-uav/screens/dashboard-live-mode.png" alt="Live mission dashboard showing route, altitude, telemetry, camera analysis, and optical-flow readings"><img src="../assets/projects/agentic-pollination-uav/screens/topdown-tsp-route.png" alt="Top-down garden view with numbered targets and the planned TSP route"></div><figcaption><strong>Mission interface.</strong> A common view exposes route state, altitude, telemetry, perception, optical flow, agent decisions, terminal events, and the current visit order.</figcaption></figure>

  <section class="research-wide research-section" id="results"><p class="section-index">04 / Experiments</p><h2>What constrains the system?</h2><p class="research-lede">The current checked-in run benchmarks algorithmic cost on a development machine—not Raspberry Pi hardware. The important result is not raw throughput; it is that approach geometry and sensor confidence constrain the mission before route-planning compute does.</p>
    <div class="result-table-wrap"><table class="result-table"><thead><tr><th>Experiment</th><th>Measured result</th><th>Interpretation</th></tr></thead><tbody>
      <tr><td>Mock detector · hover · 8 flowers</td><td>7.1 µs mean</td><td>Simulation detector cost is negligible.</td></tr><tr><td>Full 2,700-frame pipeline</td><td>59,571 fps · 16.6 µs mean</td><td>1,986× the 30 fps simulation target.</td></tr><tr><td>Optical-flow interpolation</td><td>504,218 lookups/s</td><td>Sensor lookup is not the loop bottleneck.</td></tr><tr><td>Greedy TSP · 8 targets</td><td>8.6 µs mean · 8.8 µs p95</td><td>O(n²) planning remains cheap at mission scale.</td></tr><tr><td>0.75 confidence lock</td><td>2.55 m at 0 m offset</td><td>Not reached at 1, 2, or 4 m offset.</td></tr><tr><td>UCB1 policy · 500 steps</td><td>230 lock-level selections · reward 242</td><td>The policy explores all three threshold arms.</td></tr><tr><td>LLM decision latency</td><td>Not measured</td><td>Skipped because no API key was supplied.</td></tr>
    </tbody></table></div>
  </section>
  <div class="research-gallery"><figure><img src="../assets/projects/agentic-pollination-uav/figures/b3_tsp_scalability.png" alt="Greedy TSP latency by flower count"><figcaption>TSP scalability from 2 to 50 targets.</figcaption></figure><figure><img src="../assets/projects/agentic-pollination-uav/figures/b5_confidence_altitude.png" alt="Detection confidence by altitude and horizontal offset"><figcaption>Confidence lock depends strongly on approach alignment.</figcaption></figure><figure><img src="../assets/projects/agentic-pollination-uav/figures/b2_sensor_interpolation.png" alt="Optical-flow interpolation based on measured samples"><figcaption>Interpolation is grounded in 24 physical samples.</figcaption></figure><figure><img src="../assets/projects/agentic-pollination-uav/figures/b6_bandit_convergence.png" alt="UCB1 threshold selection and cumulative reward"><figcaption>UCB1 explores three confidence-threshold arms.</figcaption></figure></div>

  <section class="research-wide research-section" id="hardware"><p class="section-index">05 / Physical system</p><h2>From browser model to aircraft</h2><div class="hardware-layout"><figure><img src="../assets/projects/agentic-pollination-uav/figures/hardware-annotated.jpg" alt="Annotated F450 drone and pollen-delivery mechanism"></figure><div><p>The prototype combines an F450 quadcopter, Pixhawk 2.4.8, Raspberry Pi 4, Coral USB accelerator, downward camera, optical-flow sensor, GPS/compass, and servo-driven dispenser.</p><ul><li>Camera-only plant detection: 9 / 10 trials</li><li>Camera mounted on assembled drone: 4 / 4 trials</li><li>Raspberry Pi bench detection: approximately 30 fps with stable servo operation</li><li>More than 1 g of flour substitute delivered into a test flower</li><li>Stable manual flight demonstrated within 5 feet of ground level</li></ul><p class="caption">These report physical and bench-validation results, not autonomous outdoor pollination.</p></div></div></section>

  <figure class="research-figure field-test-figure"><img src="../assets/projects/agentic-pollination-uav/figures/physical-system-test.jpg" alt="Research team member testing the assembled pollination UAV above three flowering plants in the Duke Foundry"><figcaption><strong>Physical system test.</strong> Evaluating the assembled aircraft, camera placement, and pollen-delivery workflow against representative flowering plants in The Foundry.</figcaption></figure>

  <figure class="research-figure poster-figure"><img src="../assets/projects/agentic-pollination-uav/figures/research-poster.jpg" alt="Duke Pratt engineering poster for the cyber-physical pollination UAV"><figcaption><strong>Engineering poster.</strong> Presented through Duke Pratt School of Engineering, The Foundry, and the Pierre R. Lamond Department of Electrical &amp; Computer Engineering.</figcaption></figure>

  <article class="research-prose" id="limitations"><p class="section-index">06 / Conclusions &amp; limitations</p><h2>A credible path, with an unfinished autonomy gap</h2><ul class="research-limitations"><li><strong>Simulation fidelity.</strong> The 8/8 completion result comes from seeded synthetic scenes and should not be generalized to field success.</li><li><strong>Timing portability.</strong> Benchmark timings characterize the development machine; Raspberry Pi and Coral end-to-end latency requires separate measurement.</li><li><strong>Agent evaluation.</strong> LLM decision latency and comparative mission benefit were not measured in the checked-in run.</li><li><strong>Outdoor validation.</strong> Wind, illumination, occlusion, plant motion, localization error, and ecological safety remain open validation requirements.</li></ul></article>

  <section class="research-wide research-section reproducibility-block" id="reproducibility"><p class="section-index">07 / Reproducibility</p><h2>Inspect the evidence</h2><p class="research-lede">The benchmark suite can be regenerated with <code>python benchmark_suite.py</code>. The portfolio checks in the exact plots and underlying JSON/CSV used on this page.</p><div class="case-actions"><a class="button button-primary" href="${project.repo}" target="_blank" rel="noreferrer">Open repository <span>↗</span></a><a class="button button-quiet" href="../assets/projects/agentic-pollination-uav/data/benchmark_results.json">Benchmark JSON <span>↓</span></a><a class="button button-quiet" href="../assets/projects/agentic-pollination-uav/data/raw_opticalflow_data.csv">Sensor CSV <span>↓</span></a></div></section>
  <a class="case-next" href="ctrlslash.html"><span>Next project / 07</span><strong>CtrlSlash →</strong></a>`;

document.querySelector("main").innerHTML = slug === "targetonco" ? targetOncoPage : slug === "agentic-pollination-uav" ? uavPage : `
  <section class="project-cover" id="first-content"><div class="case-hero research-cover-grid">
    <div class="blog-intro"><div class="case-kicker"><a class="project-back" href="../projects.html">← All projects</a><span class="case-number">${project.number} / ${project.category}</span></div>
    <h1 class="case-title">${project.title}</h1><p class="case-summary">${project.summary}</p><p class="research-byline">Mohammad Zoraiz · Research &amp; Engineering</p>
    <div class="case-actions"><a class="button button-primary" href="${project.repo}" target="_blank" rel="noreferrer">Code <span>↗</span></a><a class="button button-quiet" href="#overview">Overview <span>↓</span></a></div><div class="case-tags">${tags}</div></div>
    <figure class="research-cover-media abstract-cover"><img src="../assets/projects/covers/${slug}.png" alt="Minimal geometric research poster for ${project.title}"><figcaption>${project.category}</figcaption></figure>
  </div></section>
  <nav class="research-toc" aria-label="On this page"><a href="#overview">Overview</a><a href="#system">System</a><a href="#principles">Principles</a><a href="#status">Status</a></nav>
  <section class="case-canvas" id="system" aria-label="${project.title} system flow"><p class="section-index">System flow</p>${systemVisual}</section>
  <div class="case-body">
    <section class="case-row" id="overview"><p class="case-row-label">01 / The problem</p><div class="case-copy"><h2>Why this exists</h2><p>${project.problem}</p></div></section>
    <section class="case-row"><p class="case-row-label">02 / The approach</p><div class="case-copy"><h2>One connected system</h2><p>${project.approach}</p></div></section>
    <section class="case-row" id="principles"><p class="case-row-label">03 / Design principles</p><div class="case-copy"><h2>How the work is shaped</h2><div class="case-columns">${notes}</div></div></section>
    <section class="case-row" id="status"><p class="case-row-label">04 / Current state</p><div class="case-copy"><h2>A starting point</h2><p>${project.status}</p></div></section>
  </div>
  <a class="case-next" href="${project.next}.html"><span>Next project / ${next.number}</span><strong>${next.title} →</strong></a>`;

if (slug === "targetonco") {
  const lightbox = document.createElement("dialog");
  lightbox.className = "diagram-lightbox";
  lightbox.setAttribute("aria-label", "Expanded architecture diagram");
  lightbox.innerHTML = `<button class="diagram-lightbox-close" type="button" aria-label="Close expanded diagram">Close <span>×</span></button><div class="diagram-lightbox-scroll"><img alt=""></div>`;
  document.body.appendChild(lightbox);

  const expandedImage = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".diagram-lightbox-close");
  const closeLightbox = () => lightbox.close();

  document.querySelectorAll(".target-reference-diagram img").forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt}. Open enlarged view.`);
    const openLightbox = () => {
      expandedImage.src = image.src;
      expandedImage.alt = image.alt;
      lightbox.showModal();
      closeButton.focus();
    };
    image.addEventListener("click", openLightbox);
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox();
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}
