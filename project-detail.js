const projects = {
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
    number:"04", category:"Agent Memory", title:"ombench", accent:"#dbe0e5",
    summary:"A memory and backtesting platform for operational agents, designed to measure whether accumulated context improves performance on work that already happened.",
    tags:["Python","Agents","Backtesting","Chroma"], repo:"https://github.com/zoraizmohammad/ombench",
    problem:"Agent memory is easy to demo and difficult to evaluate. More stored context does not necessarily produce better decisions, and live tasks rarely provide a stable baseline for measuring improvement.",
    approach:"ombench captures task history, compiles durable memories, and replays historical work across communication and productivity tools. The same task can be evaluated with and without memory to make its contribution observable.",
    steps:["Capture work history","Compile durable memory","Replay past tasks","Compare agent outcomes"],
    principles:[["Replay over anecdotes","Evaluate on repeatable historical scenarios rather than isolated demos."],["Memory is a hypothesis","Test whether each memory strategy helps instead of assuming more context is better."],["Operational realism","Model the cross-tool environment in which working agents actually operate."],["Inspectability","Make retrieved memories and their influence visible during analysis."]],
    status:"This layout is prepared for benchmark definitions, replay traces, memory examples, and comparison plots. The initial copy focuses on the core evaluation idea and avoids claiming results before they are documented.", next:"agentic-pollination-uav"
  },
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
    status:"The page now provides a stable structure for the research story. Next additions can include cohort details, class balance, PCA views, evaluation metrics, and the most biologically informative features.", next:"targetonco"
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

document.querySelector("main").innerHTML = `
  <section class="case-hero">
    <div class="case-kicker"><a class="project-back" href="../projects.html">← All projects</a><span class="case-number">${project.number} / ${project.category}</span></div>
    <h1 class="case-title">${project.title}</h1>
    <p class="case-summary">${project.summary}</p>
    <div class="case-actions"><a class="button button-primary" href="${project.repo}" target="_blank" rel="noreferrer">View repository <span>↗</span></a></div>
    <div class="case-tags">${tags}</div>
  </section>
  <section class="case-canvas" aria-label="${project.title} system flow"><div class="system-map" style="--steps:${project.steps.length}">${nodes}</div></section>
  <div class="case-body">
    <section class="case-row"><p class="case-row-label">01 / The problem</p><div class="case-copy"><h2>Why this exists</h2><p>${project.problem}</p></div></section>
    <section class="case-row"><p class="case-row-label">02 / The approach</p><div class="case-copy"><h2>One connected system</h2><p>${project.approach}</p></div></section>
    <section class="case-row"><p class="case-row-label">03 / Design principles</p><div class="case-copy"><h2>How the work is shaped</h2><div class="case-columns">${notes}</div></div></section>
    <section class="case-row"><p class="case-row-label">04 / Current state</p><div class="case-copy"><h2>A starting point</h2><p>${project.status}</p></div></section>
  </div>
  <a class="case-next" href="${project.next}.html"><span>Next project / ${next.number}</span><strong>${next.title} →</strong></a>`;
