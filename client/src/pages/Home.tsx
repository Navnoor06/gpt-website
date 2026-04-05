import { ChevronDown, ChevronLeft, ChevronRight, Download, Mail, Linkedin, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";

type MediaItem =
  | { kind: "image"; sources: string[]; alt: string }
  | { kind: "video"; embedUrl: string; alt: string };

type Project = {
  id: string;
  title: string;
  category: string;
  what: string[];
  how: string[];
  results: string[];
  mediaPlaceholders: number;
  media?: MediaItem[];
  repoLink?: string;
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
          "https://drive.google.com/uc?export=view&id=1Glqp5rGb6DzaIawWefK_h6crq2d58am3",
          "https://drive.google.com/thumbnail?id=1Glqp5rGb6DzaIawWefK_h6crq2d58am3&sz=w1600",
          "/projects/robotic-arm/prototype.jpg",
          "/projects/robotic-arm/prototype.png",
          "/projects/robotic-arm/5-dof-robotic-arm-physical-prototype.jpg",
          "/projects/robotic-arm/5-dof-robotic-arm-physical-prototype.png",
        ],
        kind: "image",
        alt: "5 DOF robotic arm physical prototype",
      },
      {
        kind: "video",
        embedUrl: "https://drive.google.com/file/d/178Ycm_JIrRgk3-Cnj13F7AksPdRt4yFx/preview",
        alt: "5 DOF robotic arm demo video 1",
      },
      {
        kind: "video",
        embedUrl: "https://drive.google.com/file/d/1cu4kIlJB6S-cY-XwkuITMxrr0ybC6Apv/preview",
        alt: "5 DOF robotic arm demo video 2",
      },
      {
        sources: [
          "https://drive.google.com/uc?export=view&id=1EyvhkpLzJ8IkDf5e_XD_dQyYo6qz8fpJ",
          "https://drive.google.com/thumbnail?id=1EyvhkpLzJ8IkDf5e_XD_dQyYo6qz8fpJ&sz=w1600",
          "/projects/robotic-arm/cad-front.png",
          "/projects/robotic-arm/cad-front.jpg",
          "/projects/robotic-arm/5-dof-robotic-arm-cad-front-view.png",
          "/projects/robotic-arm/5-dof-robotic-arm-cad-front-view.jpg",
        ],
        kind: "image",
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
        kind: "image",
        alt: "5 DOF robotic arm CAD side view",
      },
    ],
  },
  {
    id: "relumi-expressive-robot",
    title: "ReLumi Expressive Robot",
    category: "ESP32, Embedded Systems (MakeUOFT Hackathon)",
    what: [
      "Build a WiFi-enabled robotic companion that responds to user actions with expressive motion and behavior",
      "Create a real-time interactive system in a 24-hour hackathon environment",
    ],
    how: [
      "Integrated ESP32, camera, motors and OLED for real-time interaction and feedback",
      "Coordinated vision inputs with embedded control to drive responsive motion and behavior",
      "Implemented a web interface and AI-assisted interaction flow for expressive robot responses",
    ],
    results: [
      "Delivered a functional expressive robot prototype within the hackathon timeline",
      "Demonstrated responsive motion and interaction through combined embedded and vision systems",
    ],
    mediaPlaceholders: 4,
    media: [
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=1Z6vIqb7dXcoF_ZxFsSxqfpc29NzEVQyj",
          "https://drive.google.com/thumbnail?id=1Z6vIqb7dXcoF_ZxFsSxqfpc29NzEVQyj&sz=w1600",
        ],
        alt: "ReLumi LinkedIn post screenshot",
      },
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=1IFt65HwY9ZMYIREJ_9OmXtCTbhzv9Ywm",
          "https://drive.google.com/thumbnail?id=1IFt65HwY9ZMYIREJ_9OmXtCTbhzv9Ywm&sz=w1600",
        ],
        alt: "ReLumi resume bullet points",
      },
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=1OhdgG-Qqzagw5E4GlVZX2mrP78si5y0U",
          "https://drive.google.com/thumbnail?id=1OhdgG-Qqzagw5E4GlVZX2mrP78si5y0U&sz=w1600",
        ],
        alt: "ReLumi project image",
      },
      {
        kind: "video",
        embedUrl: "https://drive.google.com/file/d/1MfiwP7IFOwdqn4eH0z_MNPZ_1aVXYnr4/preview",
        alt: "ReLumi project demo video",
      },
    ],
  },
  {
    id: "compressed-air-engine",
    title: "Compressed Air Engine",
    category: "Precision Manufacturing & Mechanical Assembly",
    what: [
      "Machine and build a functional compressed air engine from technical drawings",
      "Maintain dimensional tolerances to ensure proper fit and motion of rotating components",
    ],
    how: [
      "Manufactured precise components using a lathe, mill and drill press while following technical drawings and tolerances",
      "Assembled a functional compressed air engine, ensuring proper fit, alignment and sealing between moving components",
      "Iteratively adjusted dimensions to improve rotational motion and mechanical efficiency",
    ],
    results: [
      "Built a functional compressed air engine with smooth rotational operation",
      "Improved mechanical efficiency through iterative machining and assembly refinements",
    ],
    mediaPlaceholders: 4,
    media: [
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=1Yw3-U6i6P0bKPMYIMny4gMMcX83SaEv3",
          "https://drive.google.com/thumbnail?id=1Yw3-U6i6P0bKPMYIMny4gMMcX83SaEv3&sz=w1600",
        ],
        alt: "Compressed air engine component fabrication",
      },
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=1QDzWqmweixE10iRJXQCtvvhSUKtZKWrk",
          "https://drive.google.com/thumbnail?id=1QDzWqmweixE10iRJXQCtvvhSUKtZKWrk&sz=w1600",
        ],
        alt: "Compressed air engine assembly process",
      },
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=1-0sZ_XF7fV0D-VLzPmc5VM127N_k4LRn",
          "https://drive.google.com/thumbnail?id=1-0sZ_XF7fV0D-VLzPmc5VM127N_k4LRn&sz=w1600",
        ],
        alt: "Completed compressed air engine",
      },
      {
        kind: "video",
        embedUrl: "https://drive.google.com/file/d/1uppkNyYcHzZLKaxiwhbgGazLGthFAuEg/preview",
        alt: "Compressed air engine operation demo",
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
    media: [
      {
        sources: [
          "https://drive.google.com/uc?export=view&id=1jdF6-37Vqhx6e5XTrajGzqkC8XO8dU8-",
          "https://drive.google.com/thumbnail?id=1jdF6-37Vqhx6e5XTrajGzqkC8XO8dU8-&sz=w1600",
          "/projects/power-board/schematic.png",
          "/projects/power-board/schematic.jpg",
        ],
        kind: "image",
        alt: "UTSM power distribution schematic",
      },
      {
        sources: [
          "https://drive.google.com/uc?export=view&id=1gXNPg_t120oayDz4y8Cb8dlmNXrkEzb_",
          "https://drive.google.com/thumbnail?id=1gXNPg_t120oayDz4y8Cb8dlmNXrkEzb_&sz=w1600",
          "/projects/power-board/pcb-layout.png",
          "/projects/power-board/pcb-layout.jpg",
        ],
        kind: "image",
        alt: "UTSM power distribution PCB layout",
      },
    ],
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
    media: [
      {
        kind: "video",
        embedUrl: "https://drive.google.com/file/d/1k9khkHatQgjzLSEl28Dez4T3W6sVZbpn/preview",
        alt: "555 timer demonstration video",
      },
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=19S1GiPpF9Kf6zaPFjlOMH-k4kI23ELBh",
          "https://drive.google.com/thumbnail?id=19S1GiPpF9Kf6zaPFjlOMH-k4kI23ELBh&sz=w1600",
          "/projects/555-timer/circuit-diagram.png",
          "/projects/555-timer/circuit-diagram.jpg",
          "/projects/555-timer/pcb-layout.png",
          "/projects/555-timer/pcb-layout.jpg",
        ],
        alt: "555 timer circuit and PCB design",
      },
      {
        kind: "video",
        embedUrl: "https://drive.google.com/file/d/13KdH3_PVrl_RmujiJlfK8Ztcdw-RjdWw/preview",
        alt: "555 timer operation video",
      },
    ],
  },
  {
    id: "uart-fifo",
    title: "UART Communication System with FIFO",
    category: "Digital Design & Hardware Systems",
    what: [
      "Design and implement a UART communication system in Verilog",
      "Enable reliable serial data transmission between devices",
    ],
    how: [
      "Implemented UART transmitter and receiver modules using finite state machines in Verilog RTL",
      "Integrated a synchronous FIFO buffer to support multi-byte data transfers",
      "Built a verification testbench to simulate transmission and validate received data",
      "Used GTKWave to analyze simulation waveforms and debug serial bit timing",
    ],
    results: [
      "Successfully transmitted and reconstructed bytes through the UART protocol",
      "Verified correct start bit, data bits, and stop bit framing through waveform analysis",
    ],
    mediaPlaceholders: 1,
    media: [
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=15JqEgczblbghd6WyWQRkZLzdLWv5Pxcp",
          "https://drive.google.com/thumbnail?id=15JqEgczblbghd6WyWQRkZLzdLWv5Pxcp&sz=w1600",
          "/projects/uart-fifo/gtkwave.png",
          "/projects/uart-fifo/gtkwave.jpg",
        ],
        alt: "UART FIFO GTKWave simulation output",
      },
    ],
    repoLink: "https://github.com/Navnoor06/UART.git",
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
    media: [
      {
        kind: "image",
        sources: [
          "https://drive.google.com/uc?export=view&id=1jMBwlCyg8kh21G9dBmWG6Kj47wOPRJeR",
          "https://drive.google.com/thumbnail?id=1jMBwlCyg8kh21G9dBmWG6Kj47wOPRJeR&sz=w1600",
          "/projects/autonomous-robot/robot-photo.jpg",
          "/projects/autonomous-robot/robot-photo.png",
        ],
        alt: "Autonomous robot build photo",
      },
      {
        kind: "video",
        embedUrl: "https://drive.google.com/file/d/1jU4kcspgngOXiZSoBx635wFKBYFriwSU/preview",
        alt: "Autonomous robot demo video",
      },
    ],
  },
];


function ProjectMediaImage({ sources, alt, className }: { sources: string[]; alt: string; className?: string }) {
  const [index, setIndex] = useState(0);

  return (
    <img
      src={sources[index]}
      alt={alt}
      loading="lazy"
      onError={() => {
        setIndex((current) => (current < sources.length - 1 ? current + 1 : current));
      }}
      className={className ?? "aspect-video w-full rounded-lg object-cover border border-primary/10 bg-primary/5"}
    />
  );
}

function ProjectMediaCarousel({ items }: { items: MediaItem[] }) {
  const [active, setActive] = useState(0);
  const total = items.length;

  const prev = () => setActive((index) => (index - 1 + total) % total);
  const next = () => setActive((index) => (index + 1) % total);

  return (
    <div className="space-y-3">
      <div className="relative">
        <div key={active} className="animate-[slideIn_.35s_ease]">
          {items[active].kind === "video" ? (
            <iframe
              src={items[active].embedUrl}
              title={items[active].alt}
              allow="autoplay"
              allowFullScreen
              className="w-full aspect-[4/3] rounded-lg border border-primary/10 bg-primary/5"
            />
          ) : (
            <ProjectMediaImage
              sources={items[active].sources}
              alt={items[active].alt}
              className="w-full aspect-[4/3] rounded-lg object-contain border border-primary/10 bg-primary/5"
            />
          )}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md bg-black/50 text-white p-1.5 hover:bg-black/65"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-black/50 text-white p-1.5 hover:bg-black/65"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.alt}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${index === active ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const navItems = [
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>(projects[0].id);
  const [copiedEmail, setCopiedEmail] = useState(false);
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
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Mechanical Engineering • University of Toronto</p>
              <h1 className="font-heading text-4xl sm:text-6xl font-semibold leading-tight max-w-4xl">
                Aspiring Robotics Engineer
              </h1>
              <p className="mt-6 text-base sm:text-lg max-w-3xl text-primary/80">
                Welcome to my portfolio. I design and prototype integrated hardware systems that combine mechanical design, electronics, and embedded control, with projects ranging from robotic arms and custom PCBs to microcontroller-based devices.
              </p>
            </div>
            <img
              src="https://drive.google.com/thumbnail?id=1qnxaQBslWYgDPlkuPz5zkwRWETjLl4hj&sz=w1000"
              alt="Portrait of Navnoor Mann"
              className="w-full max-w-[300px] justify-self-center rounded-2xl border border-primary/15 bg-primary/5 object-cover aspect-square"
            />
          </div>
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
                        {project.repoLink && (
                          <div>
                            <h4 className="font-semibold mb-2">Repository</h4>
                            <a
                              href={project.repoLink}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-accent hover:underline"
                            >
                              View project on GitHub <ExternalLink size={14} />
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-2 content-start">
                        {project.media ? (
                          <ProjectMediaCarousel items={project.media} />
                        ) : (
                          <div className="grid grid-cols-2 gap-3">
                            {Array.from({ length: project.mediaPlaceholders }).map((_, index) => (
                              <div
                                key={`${project.id}-${index}`}
                                className="aspect-video rounded-lg border border-dashed border-primary/30 bg-primary/5 text-xs text-primary/60 grid place-items-center p-2 text-center"
                              >
                                Media slot {index + 1}
                              </div>
                            ))}
                          </div>
                        )}
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
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-4 py-2 hover:bg-primary/90"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText("navnoormannalt@gmail.com");
                  setCopiedEmail(true);
                  setTimeout(() => setCopiedEmail(false), 1800);
                } catch {
                  // Fallback for environments where clipboard API is unavailable
                  window.prompt("Copy email:", "navnoormannalt@gmail.com");
                }
              }}
            >
              <Mail size={16} /> {copiedEmail ? "Copied!" : "Email"}
            </button>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-2 hover:border-accent hover:text-accent"
              href="https://linkedin.com/in/navnoormann"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-2 hover:border-accent hover:text-accent" href="https://drive.google.com/file/d/1FpBg9WY3G7PIsuY7LbhGETQywdBARnGJ/view?usp=sharing" target="_blank" rel="noreferrer">
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
