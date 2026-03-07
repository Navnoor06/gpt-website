import { ChevronDown, Download, Mail, Linkedin, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";

type Project = {
  id: string;
  title: string;
  category: string;
  what: string[];
  how: string[];
  results: string[];
  mediaPlaceholders: number;
  media?: { sources: string[]; alt: string }[];
};

const projects: Project[] = [
  {
    id: "robotic-arm",
    title: "5 DOF Robotic Arm",
    category: "Mechanical Design & Robotics",
    what: [
      "Design and fabricate a 5 DOF robotic arm",
      "Enable controlled manipulation of small payloads up to 50g",
    ],
    how: [
      "Designed components in SolidWorks and fabricated them via 3d printing",
      "Performed joint torque calculations to select servos",
      "Programmed an ESP32 to control motion through a browser interface",
    ],
    results: [
      "Achieved a 40 cm operational reach",
      "Successfully lifted and controlled 50g payloads during testing",
    ],
    mediaPlaceholders: 3,
    media: [
      {
        sources: [
          "https://drive.google.com/uc?export=view&id=1EyvhkpLzJ8IkDf5e_XD_dQyYo6qz8fpJ",
          "https://drive.google.com/thumbnail?id=1EyvhkpLzJ8IkDf5e_XD_dQyYo6qz8fpJ&sz=w1600",
          "/projects/robotic-arm/cad-front.png",
          "/projects/robotic-arm/cad-front.jpg",
          "/projects/robotic-arm/5-dof-robotic-arm-cad-front-view.png",
          "/projects/robotic-arm/5-dof-robotic-arm-cad-front-view.jpg",
        ],
        alt: "5 DOF robotic arm CAD front view",
      },
      {
        sources: [
          "https://drive.google.com/uc?export=view&id=1frtt42aoPywGIPX23VnsBuRhUsDr9we0",
          "https://drive.google.com/thumbnail?id=1frtt42aoPywGIPX23VnsBuRhUsDr9we0&sz=w1600",
          "/projects/robotic-arm/cad-side.png",
          "/projects/robotic-arm/cad-side.jpg",
          "/projects/robotic-arm/5-dof-robotic-arm-cad-side-view.png",
          "/projects/robotic-arm/5-dof-robotic-arm-cad-side-view.jpg",
        ],
        alt: "5 DOF robotic arm CAD side view",
      },
      {
        sources: [
          "https://drive.google.com/uc?export=view&id=1Glqp5rGb6DzaIawWefK_h6crq2d58am3",
          "https://drive.google.com/thumbnail?id=1Glqp5rGb6DzaIawWefK_h6crq2d58am3&sz=w1600",
          "/projects/robotic-arm/prototype.jpg",
          "/projects/robotic-arm/prototype.png",
          "/projects/robotic-arm/5-dof-robotic-arm-physical-prototype.jpg",
          "/projects/robotic-arm/5-dof-robotic-arm-physical-prototype.png",
        ],
        alt: "5 DOF robotic arm physical prototype",
      },
    ],
  },
  {
    id: "power-board",
    title: "Power Distribution Board - UTSM Club",
    category: "PCB Design & Systems Integration",
    what: [
      "Design a power distribution PCB for a hydrogen-powered vehicle",
      "Simplify battery-to-joulemeter wiring and improve system reliability",
    ],
    how: [
      "Created schematic and routed PCB in Altium365",
      "Designed dedicated +12V and GND distribution traces",
      "Optimized layout to improve grounding and reduce wiring clutter",
    ],
    results: [
      "Simplified battery-to-system wiring architecture",
      "Improved electrical reliability and serviceability during testing",
    ],
    mediaPlaceholders: 2,
  },
  {
    id: "555-timer",
    title: "555 Timer Circuit",
    category: "Circuit Design",
    what: [
      "Design and fabricate a 555 timer PCB for signal generation",
      "Translate schematic design into a manufacturable board layout",
    ],
    how: [
      "Designed schematic and assigned footprints in KiCad",
      "Routed PCB and prepared manufacturing files for JLCPCB",
      "Generated complete BOM and validated component footprints",
      "Hand-soldered 10+ through-hole components",
    ],
    results: [
      "Successfully fabricated and assembled functional PCB",
      "Verified circuit operation through operation",
    ],
    mediaPlaceholders: 2,
  },
  {
    id: "autonomous-robot",
    title: "Autonomous Motion-Sensing Robot",
    category: "Embedded Systems & Robotics",
    what: [
      "Design and build an autonomous mobile robot for obstacle detection",
      "Enable real-time path correction to prevent collisions",
    ],
    how: [
      "Programmed an Arduino (C++) to process ultrasonic sensor data",
      "Integrated an L293D motor driver with DC gear motors",
      "Developed movement logic to continuously scan and adjust direction",
      "Assembled full electrical system including LEDs and buzzer indicators",
    ],
    results: [
      "Achieved near 100% collision avoidance during testing",
      "Demonstrated stable autonomous navigation in enclosed environments",
    ],
    mediaPlaceholders: 3,
  },
];


function ProjectMediaImage({ sources, alt }: { sources: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  return (
    <img
      src={sources[index]}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (index < sources.length - 1) {
          setIndex(index + 1);
        }
      }}
      className="aspect-video w-full rounded-lg object-cover border border-primary/10 bg-primary/5"
    />
  );
}

const navItems = [
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>(projects[0].id);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="bg-background text-primary font-body">
      <header className="sticky top-0 z-20 backdrop-blur-md border-b border-primary/10 bg-background/85">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-heading text-lg font-semibold tracking-wide">
            Navnoor Mann
          </a>
          <div className="flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <a key={item.id} href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </a>
            ))}
            <Link href="/about" className="hover:text-accent transition-colors">
              About Me
            </Link>
          </div>
        </nav>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-20 sm:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Mechanical Engineering • University of Toronto</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold leading-tight max-w-4xl">
            Aspiring Robotics Engineer
          </h1>
          <p className="mt-6 text-base sm:text-lg max-w-3xl text-primary/80">
            Welcome to my portfolio. I design and prototype systems that combine mechanical design, electronics, and embedded control, from robotic arms and PCBs to microcontroller-based devices.
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
                          <ul className="list-disc pl-5 space-y-1 text-primary/80">
                            {project.what.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
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
                        {project.media
                          ? project.media.map((asset, idx) => (
                              <ProjectMediaImage key={`${project.id}-media-${idx}`} sources={asset.sources} alt={asset.alt} />
                            ))
                          : Array.from({ length: project.mediaPlaceholders }).map((_, index) => (
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
            <a className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-4 py-2 hover:bg-primary/90" href="mailto:navnoormann06@gmail.com">
              <Mail size={16} /> Email
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-2 hover:border-accent hover:text-accent"
              href="https://linkedin.com/in/navnoormann"
              target="_blank"
              rel="noreferrer"
            >
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

      <footer className="border-t border-primary/10 py-6 text-center text-sm text-primary/70">© {year} Navnoor Mann. Built with React + Tailwind.</footer>
    </div>
  );
}
