export type Project = {
  slug: string;
  title: string;
  period: string;
  projectType: "personal" | "hospital" | "coursework";
  showInGallery?: boolean;
  galleryOrder?: number;
  tags: string[];
  summary: string;
  galleryThumbnail?: string;
  projectsThumbnail?: string;
  thumbnail?: string;
  galleryThumbnailYouTubeUrl?: string;
  projectsThumbnailYouTubeUrl?: string;
  thumbnailYouTubeUrl?: string;
  keyVisualYouTubeUrl?: string;
  posterImage?: string;
  galleryImages?: string[];
  videoUrl?: string;
  description: {
    background: string;
    role: string;
    process: string;
    result: string;
  };
  paperLink?: string;
  pdfLink?: string;
};

export const projects: Project[] = [
  {
    projectType: "personal",
    showInGallery: true,
    galleryOrder: 1,
    galleryThumbnail: "/images/lpc_fig3.jpg",
    thumbnailYouTubeUrl: "https://youtu.be/4Eh8qITCD0c",
    keyVisualYouTubeUrl: "https://youtu.be/4Eh8qITCD0c",
    galleryImages: ["/images/lpc_fig1.jpg", "/images/lpc_fig2.jpg", "/images/lpc_fig3.jpg"],
    slug: "le-petit-care",
    title: "Le Petit Care: A Child-Attuned Design for Personalized ADHD Symptom Management Through AI-powered Extended Reality",
    period: "2025.01 – 2025.04",
    tags: ["Research", "UX Design", "XR", "AI"],
    summary:
      "A child-attuned AI+XR digital therapeutic concept for ADHD screening and personalized behavioral development.",
    description: {
      background:
        "Le Petit Care addresses limitations of medication-only intervention by supporting ADHD symptom management through immersive and personalized care. The project focuses on reducing stigma and negative self-identity during diagnosis and treatment, while improving accessibility and engagement for children.",
      role:
        "I contributed to HCI/UX research and service design strategy, including interview insight synthesis, child-centered interaction design, and narrative-based therapeutic flow planning for the XR experience.",
      process:
        "The team used a mixed-method process: expert interviews (child studies, psychiatry, digital healthcare), interdisciplinary literature review, and iterative prototyping in Unity+C#. We designed a storytelling framework inspired by The Little Prince, where children complete immersive missions while the system captures multimodal signals (voice, head/hand/eye movement). Based on DSM-5 aligned criteria and ADHD-RS-informed features, AI screening supports tailored behavioral training across attention, working memory, executive function, impulse control, behavioral regulation, and emotional regulation.",
      result:
        "Selected as ACM CHI 2025 Student Design Competition Finalist (CHI EA '25, Yokohama). Preliminary user study validated immersion potential and revealed clear UX improvements for dialogue length, mission clarity, and interaction affordances."
    },
    paperLink: "https://doi.org/10.1145/3706599.3720300",
    pdfLink: "/docs/le-petit-care-chi25.pdf"
  },
  {
    projectType: "coursework",
    showInGallery: false,
    galleryOrder: 2,
    thumbnail: "/images/vpt_fig1.png",
    galleryImages: ["/images/vpt_fig1.png"],
    slug: "vpt-robot",
    title: "Can It See or Just Look? The Role of Eyes and Beliefs in Visual Perspective Taking with Social Robots",
    period: "2025.04 – 2025.07",
    tags: ["Research", "Social Robot"],
    summary:
      "Experimental HRI study on how visible eyes and belief cues shape Level-1 visual perspective taking toward humanoid robots.",
    description: {
      background:
        "As social robots become more common, it is critical to understand when humans spontaneously adopt a robot's perspective. Prior findings suggested humanoid form may be enough, but appearance-based and belief-based cues were often confounded. This project disentangled those factors by testing whether visible eyes and explicit beliefs about visual capacity independently trigger VPT1.",
      role:
        "I contributed to study framing and HRI experiment design, including condition definition around robot visual morphology (eyes/no eyes) and belief manipulation (can see/cannot see), as well as interpretation of altercentric intrusion outcomes for social robot design implications.",
      process:
        "We conducted a three-experiment dot-matching paradigm based on VPT1 tasks. Experiment 1 replicated prior work with a humanoid robot with visible eyes. Experiment 2 removed visible eyes and introduced a red lamp cue indicating the robot could not see. Experiment 3 used an eye-less robot with a green lamp and instruction that it could see. Reaction time and accuracy were analyzed (mixed ANOVA + follow-up tests) to evaluate altercentric and egocentric intrusion effects.",
      result:
        "Altercentric intrusion was replicated in the visible-eyes condition but disappeared when eyes were removed, indicating that eye-like visual morphology is a critical cue for spontaneous VPT1 in this setup. Accuracy showed a general inconsistency cost, while reaction time was the more sensitive VPT signal. Experiment 3 remained inconclusive due to insufficient sample size, motivating follow-up studies with stronger belief manipulations and larger samples."
    },
    pdfLink: "/docs/vpt-social-robot-2025.pdf"
  },
  {
    projectType: "hospital",
    showInGallery: true,
    galleryOrder: 3,
    thumbnail: "/images/srped_fig1.jpg",
    galleryImages: ["/images/srped_fig1.jpg"],
    slug: "samsung-hospital",
    title: "Pediatric Social Robot Interaction Research",
    period: "2025.10 – Present",
    tags: ["Research", "UX Design", "AI", "Social Robot"],
    summary: "The Impact of Conversational Approaches in Pediatric Robot-Mediated Interventions on Children's Responses in Hospital Settings: A Comparative Study of Rule-Based vs. LLM-Based Systems",
    description: {
      background:
        "Pediatric patients in hospital settings often experience significant psychological distress, and social robots have emerged as a promising tool for emotional support and intervention. However, most existing studies examine robot-mediated interactions at the group level, with limited attention to how individual child characteristics shape responses. This gap highlights the need for studies that incorporate standardized psychometric measures to better understand variability in pediatric robot interaction.",
      role: "As part of a multidisciplinary research team at Samsung Medical Center, I was responsible for conducting the systematic literature review, administering usability and robot perception assessments during the experiment, and analyzing child responses from post-session video recordings. I am currently integrating these findings into a qualitative manuscript under preparation.",
      process:
        "Individual characteristics were assessed using JTCI, CBCL, STAI, and a custom-developed pre-session child characteristics questionnaire. Usability and robot perception were measured via UEQ-S and Godspeed administered directly with child participants, and behavioral responses were systematically observed and coded from full-session video recordings.",
      result:
        "The integrated analysis of psychometric profiles and observed behavioral responses forms the basis for describing individual difference patterns in children's reactions to robot-mediated interaction. These findings are currently being synthesized into a qualitative manuscript targeting submission to an SSCI-indexed journal."
    },
    paperLink: ""
  },
  {
    projectType: "personal",
    showInGallery: true,
    galleryOrder: 4,
    galleryThumbnail: "/images/dojo_fig2.png",
    thumbnailYouTubeUrl: "https://youtu.be/5hgTFwhwkB0",
    keyVisualYouTubeUrl: "https://youtu.be/5hgTFwhwkB0",
    galleryImages: ["/images/dojo_fig1.png", "/images/dojo_fig2.png", "/images/dojo_fig3.png"],
    slug: "sophybara",
    title: "SophyBARA: Reviving Philosophical Discourse through Anthropomorphic Capybara Agents",
    period: "2025.08 – Present",
    tags: ["Research", "UX Design", "AI", "Philosophy"],
    summary:
      "A RAG-based multi-agent debate platform where capybara philosophers scaffold critical inquiry through participatory AI discourse.",
    description: {
      background:
        "Traditional philosophy education often remains text-centric and one-size-fits-all, making abstract concepts difficult for novices to engage with. Existing AI philosophy tools also tend to rely on one-on-one Q&A that hides reasoning trajectories and limits dialectical friction. SophyBARA was designed to lower barriers while preserving rigor by combining approachable anthropomorphic personas with structured philosophical debate.",
      role:
        "I led the end-to-end concept design and HCI framing of SophyBARA, including interaction architecture (1:1 Chat to Arena transition), participatory intervention design, and philosophical scaffolding strategy. I also contributed to persona/UX direction for capybara philosopher agents and narrative accessibility decisions for novice users.",
      process:
        "The system was implemented as a web platform using a LangChain + FastAPI backend with a customized RAG pipeline over philosophical corpora and philosopher metadata. User questions are transformed via a Four-Axis framework (Ontological, Axiological, Methodological, Process/History), then mapped to debate agendas. In the Arena, CEDA-inspired stages (constructive speech, cross-examination, rebuttal) externalize argument flow, while turn-based user interventions support direct questioning and third-philosopher summoning for cognitive scaffolding.",
      result:
        "SophyBARA was deployed in-the-wild at a Seoul Business Agency XR/AI conference exhibition (Feb 2026). Formative feedback from 12 visitors indicated reduced psychological barriers and stronger reframing of binary thinking. The project was prepared as an ACM DIS 2026 interactive demo submission, with next steps including stronger pedagogical guidance and a structured closing mechanism for debate resolution."
    },
    pdfLink: "",
  },
  {
    projectType: "personal",
    showInGallery: true,
    galleryOrder: 5,
    galleryThumbnail: "/images/uxr_fig1.png",
    thumbnailYouTubeUrl: "https://www.youtube.com/watch?v=5Wr0mHVSbeA",
    keyVisualYouTubeUrl: "https://www.youtube.com/watch?v=5Wr0mHVSbeA",
    slug: "xreal-xmc-uxr-lab",
    title: "Xnode: An AI-assisted Collaboration Platform for XR Production Teams",
    period: "2025.04 – Present",
    tags: ["Research", "UX Design", "XR", "AI"],
    summary:
      "An AI-assisted collaboration platform for XR production teams, designed to reduce communication and decision bottlenecks.",
    description: {
      background:
        "XR content production involves multiple roles with different domain vocabularies and fragmented context across meetings and artifacts. The team identified recurring bottlenecks in cross-functional communication, shared terminology alignment, and decision traceability during fast-paced project cycles.",
      role:
        "I contributed as a user researcher in UXR Lab, helping define research questions, synthesize collaboration pain points, and shape the user-centered requirements for the platform's assistant workflows.",
      process:
        "The project followed a research-to-product flow including observation study, desk research, focus group interviews, affinity diagram sessions, in-depth interviews, prompt analysis, prototype testing, and MVP refinement. Findings were translated into product goals: domain-aware response generation, team language dictionary building via labeling, and context timeline support using meeting minutes and project data.",
      result:
        "The team proposed an architecture combining preprocessing pipelines, RAG retrieval, vector search (Supabase), and assistant orchestration (Claude API/Gemini + file search) to support project Q&A, meeting summarization, and context-aware collaboration. A demo and staged roadmap were defined for real deployment in XREAL workflows."
    },
    pdfLink: "/docs/xreal-xmc-spring-2026.pdf"
  },
  {
    projectType: "personal",
    showInGallery: false,
    galleryOrder: 6,
    thumbnail: "/images/acting_fig1.png",
    galleryImages: ["/images/acting_fig1.png"],
    slug: "acting-theory",
    title: "Beyond Role Prompting: An Acting Theory-Based Framework for Authentic and Consistent AI Persona Design",
    period: "2026.03 – Present",
    tags: ["Research", "AI"],
    summary:
      "A prompt design framework that reinterprets Stanislavski through Stella Adler to build imagination-based AI persona authenticity.",
    description: {
      background:
        "Many AI character personas in content and entertainment still rely on shallow role prompting (tone and adjective lists), which often fails to sustain coherence and believable behavior. This project investigates acting theory as a rigorous design resource for persona construction, while addressing the structural limitation that AI lacks lived emotional memory.",
      role:
        "I designed the core research framing and conceptual model, including the Stanislavski-Adler reinterpretation strategy, concept selection criteria for AI applicability, and prompt-level operationalization for persona design.",
      process:
        "The framework filtered acting concepts using three criteria: operability in prompt text, structural fit with AI constraints, and contribution to authenticity (consistency, contextual responsiveness, human-likeness). Key constructs were translated into prompt modules: Given Circumstances, Super-objective, Magic If, and Units & Objectives. A comparative pilot test (Claude Sonnet 4.6) contrasted baseline role prompting vs framework prompting using identical Hamlet utterance probes.",
      result:
        "Compared to baseline role prompting, the framework condition showed stronger cross-turn consistency, better context-sensitive goal shifts, and more authentic-seeming internal tension in responses. The work establishes a transferable prompt framework for AI character design and is positioned for conference submission and follow-up validation studies."
    },
  },
  {
    projectType: "hospital",
    showInGallery: false,
    galleryOrder: 7,
    thumbnail: "/images/mri_fig1.png",
    galleryImages: ["/images/mri_fig1.png"],
    slug: "mri-comb-scoping-review",
    title: "A Scoping Review of Non-Sedation MRI Preparation Interventions for Children: A COM-B Framework Analysis",
    period: "2026.03 – Present",
    tags: ["Research", "Healthcare"],
    summary:
      "A theory-driven scoping review mapping paediatric non-sedation MRI preparation interventions through the COM-B behaviour model.",
    description: {
      background:
        "MRI requires children to remain still in a loud, enclosed environment, which can be frightening and often leads to sedation with additional medical risk. While many preparation programmes aim to reduce sedation needs, they have usually been developed without a shared theoretical lens, making it difficult to explain heterogeneous outcomes.",
      role:
        "Prior reviews of paediatric MRI preparation interventions reported outcomes in inconsistent ways, making it difficult to identify what specific features of an intervention actually drive success. I conducted a cross-disciplinary search — spanning frameworks from health literacy, participatory pathways, and behavioural science — to find an analytical lens that could systematically explain which intervention characteristics matter and why. I identified the COM-B model as best suited for this purpose and led the scoping review using it as the organising framework, in preparation for submission to Pediatric Radiology.",
      process:
        "Following PRISMA-ScR guidelines, eligible studies were systematically identified across multiple databases and screened for inclusion. Each included intervention was mapped onto the six sub-components of the COM-B model, with recurring design patterns and measurement gaps inductively extracted across studies rather than scored at the individual study level.",
      result:
        "The synthesis showed that most interventions emphasize procedural understanding, while physical stillness training, social support design, and automatic fear reduction remain consistently undertargeted. The resulting COM-B map provides a theory-based agenda for designing more comprehensive paediatric MRI preparation programmes and defining priority outcomes for future studies."
    }
  }
];
