import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-primary font-body">
      <header className="sticky top-0 z-20 backdrop-blur-md border-b border-primary/10 bg-background/85">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-lg font-semibold tracking-wide">
            Navnoor Mann
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <section className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="mb-8 grid gap-6 sm:grid-cols-[minmax(0,1fr)_220px] items-start">
              <h1 className="font-heading text-5xl font-semibold">About Me</h1>
              <img
                src="https://drive.google.com/thumbnail?id=1qnxaQBslWYgDPlkuPz5zkwRWETjLl4hj&sz=w1000"
                alt="Portrait of Navnoor Mann"
                className="w-full max-w-[220px] justify-self-start sm:justify-self-end rounded-2xl border border-primary/15 bg-primary/5 object-cover aspect-square"
              />
            </div>
            <div className="space-y-8 text-primary/80 text-[2rem] leading-[1.6]">
              <p className="text-xl leading-relaxed">
                I&apos;m a Mechanical Engineering student at the University of Toronto with a strong interest in robotics, mechatronics, and hardware systems. I enjoy taking ideas from concept to working prototypes by combining mechanical design, electronics, and embedded programming.
              </p>
              <p className="text-xl leading-relaxed">
                Many of my projects focus on building complete systems from the ground up. This includes designing mechanical components in CAD, developing custom PCBs, programming microcontrollers, and integrating sensors and actuators into functional robotic systems.
              </p>
              <p className="text-xl leading-relaxed">
                One of my favorite projects has been developing a 5-DOF robotic arm, where I worked through challenges in mechanical design, motor control, and system integration. Projects like this have taught me the importance of iterative design, debugging hardware, and testing real systems.
              </p>
              <p className="text-xl leading-relaxed">
                I&apos;m particularly interested in robotics and hardware development roles where I can work on electromechanical systems, embedded devices, and robotic platforms, and continue growing as a hands-on engineer.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-primary/15 bg-white/80 p-8 lg:mt-4">
            <h2 className="font-heading text-3xl mb-6">Skills & Expertise</h2>
            <div className="space-y-5 text-primary/85">
              <div>
                <h3 className="font-semibold text-2xl">Mechanical Design</h3>
                <p className="text-xl">SolidWorks, 3D Printing, CAD Modeling</p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl">PCB Design</h3>
                <p className="text-xl">KiCad, Altium 365, Circuit Design</p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Embedded Systems</h3>
                <p className="text-xl">Arduino, ESP32, C++, Microcontroller Programming</p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Robotics</h3>
                <p className="text-xl">Robot Design, Sensor Integration, Motion Control</p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
