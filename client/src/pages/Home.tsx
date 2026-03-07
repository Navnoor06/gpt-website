import { ChevronDown, Download, Mail, Linkedin, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  what: string;
  how: string[];
  results: string[];
  mediaPlaceholders: number;
};

const projects: Project[] = [
  {
    id: "robotic-arm",
    title: "5 DOF Robotic Arm",
    category: "Mechanical Design & Robotics",
    what: "Designed and prototyped a lightweight 5 degree-of-freedom robotic arm for precise pick-and-place tasks.",
    how: [
      "Modeled parts in CAD and optimized joint geometry for stiffness-to-weight ratio.",
      "Integrated servo actuation and tested linkage tolerances through iterative prototyping.",
      "Developed control routines for repeatable object placement and motion sequencing.",
    ],
    results: [
      "Achieved stable end-effector positioning for small object handling.",
      "Reduced assembly time by simplifying bracket and fastener layout.",
    ],
    mediaPlaceholders: 3,
  },
  {
    id: "power-board",
    title: "Custom Power Distribution Board",
    category: "Electronics & Prototyping",
    what: "Built a compact power board to safely distribute regulated power across a multi-module robotics setup.",
    how: [
      "Captured schematic and routed PCB with protective fusing and clear labeling.",
      "Validated voltage rails under load with bench testing.",
      "Documented wiring map for quick maintenance and module swaps.",
    ],
    results: [
      "Improved reliability of integrated system testing.",
      "Cut debugging time with cleaner power segmentation.",
    ],
    mediaPlaceholders: 2,
  },
  {
    id: "555-timer",
    title: "555 Timer Application",
    category: "Circuit Design",
    what: "Implemented a 555 timer based circuit to demonstrate pulse generation and timing control behavior.",
    how: [
      "Calculated RC timing values for target frequency.",
      "Built and verified circuit on breadboard before documenting final schematic.",
      "Measured output waveform and compared against expected timing model.",
    ],
    results: [
      "Produced a consistent pulse signal within expected tolerance.",
      "Created a reusable educational example for electronics fundamentals.",
    ],
    mediaPlaceholders: 2,
  },
  {
    id: "autonomous-robot",
    title: "Line-Following Robot",
    category: "Embedded Systems",
    what: "Developed an autonomous robot that follows high-contrast paths using onboard sensing and feedback logic.",
    how: [
      "Integrated motor drivers and reflective sensors with microcontroller firmware.",
      "Tuned control loop parameters for smoother corner handling.",
      "Iterated chassis layout to balance traction, speed, and stability.",
    ],
    results: [
      "Improved lap consistency and reduced drift on turns.",
      "Demonstrated robust behavior across varying light conditions.",
    ],
    mediaPlaceholders: 3,
  },
];

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>(projects[0].id);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="bg-background text-primary font-body">
      <header className="sticky top-0 z-20 backdrop-blur-md border-b border-primary/10 bg-background/85">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-heading text-lg font-semibold tracking-wide">Navnoor Mann</a>
          <ul className="flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-accent transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-20 sm:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Mechanical Engineering • University of Toronto</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold leading-tight max-w-4xl">
            Designing practical engineering systems with a focus on reliability and clean execution.
          </h1>
          <p className="mt-6 text-base sm:text-lg max-w-3xl text-primary/80">
            Welcome to my portfolio. I enjoy bridging CAD, electronics, and embedded control to turn ideas into tested prototypes.
          </p>
        </section>

        <section id="about" className="py-12 scroll-mt-24">
          <h2 className="font-heading text-3xl mb-4">About</h2>
          <p className="max-w-3xl text-primary/80 leading-7">
            I&apos;m Navnoor Mann, a mechanical engineering student who thrives on hands-on design challenges. My work spans robotic mechanisms,
            control systems, and hardware prototyping, with an emphasis on clear documentation and measurable outcomes.
          </p>
        </section>

        <section id="projects" className="py-12 scroll-mt-24">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-heading text-3xl">Projects</h2>
            <span className="text-sm text-primary/70">Click a card to expand details</span>
          </div>

          <div className="grid gap-4">
            {projects.map((project) => {
              const isExpanded = expanded === project.id;
              return (
                <article key={project.id} className="rounded-2xl border border-primary/15 bg-white/80 overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
                    onClick={() => setExpanded(isExpanded ? null : project.id)}
                  >
                    <div>
                      <h3 className="font-heading text-2xl">{project.title}</h3>
                      <p className="text-sm text-primary/70 mt-1">{project.category}</p>
                    </div>
                    <ChevronDown className={`shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  {isExpanded && (
                    <div className="p-6 pt-0 grid md:grid-cols-5 gap-6">
                      <div className="md:col-span-3 space-y-5">
                        <div>
                          <h4 className="font-semibold mb-2">What</h4>
                          <p className="text-primary/80">{project.what}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">How</h4>
                          <ul className="list-disc pl-5 space-y-1 text-primary/80">
                            {project.how.map((step) => (
                              <li key={step}>{step}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Results</h4>
                          <ul className="list-disc pl-5 space-y-1 text-primary/80">
                            {project.results.map((result) => (
                              <li key={result}>{result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="md:col-span-2 grid grid-cols-2 gap-3 content-start">
                        {Array.from({ length: project.mediaPlaceholders }).map((_, index) => (
                          <div
                            key={`${project.id}-${index}`}
                            className="aspect-video rounded-lg border border-dashed border-primary/30 bg-primary/5 text-xs text-primary/60 grid place-items-center p-2 text-center"
                          >
                            Media slot {index + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="py-16 scroll-mt-24">
          <h2 className="font-heading text-3xl mb-4">Contact</h2>
          <p className="text-primary/80 max-w-2xl mb-6">If you&apos;d like to collaborate or discuss internship opportunities, I&apos;d love to connect.</p>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-4 py-2 hover:bg-primary/90" href="mailto:navnoor@example.com">
              <Mail size={16} /> Email
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-2 hover:border-accent hover:text-accent" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-2 hover:border-accent hover:text-accent" href="#" target="_blank" rel="noreferrer">
              <Download size={16} /> Resume
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-2 hover:border-accent hover:text-accent" href="#projects">
              <ExternalLink size={16} /> View Projects
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/10 py-6 text-center text-sm text-primary/70">
        © {year} Navnoor Mann. Built with React + Tailwind.
      </footer>
    </div>
  );
}
