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
            <h1 className="font-heading text-5xl font-semibold mb-8">About Me</h1>
            <div className="space-y-8 text-primary/80 text-[2rem] leading-[1.6]">
              <p className="text-xl leading-relaxed">
                I&apos;m a Mechanical Engineering student at UofT with a passion for bringing ideas to life through design and fabrication. My
                expertise spans mechanical design, PCB design, embedded systems programming, and robotics.
              </p>
              <p className="text-xl leading-relaxed">
                In my free time, I love building personal projects like my 5 DOF robotic arm. These projects have taught me the importance of
                precision, problem-solving, and iterative design. I&apos;m particularly drawn to the intersection of mechanical and electrical
                systems, where I can leverage both hardware and software to build practical solutions.
              </p>
              <p className="text-xl leading-relaxed">
                I&apos;m excited to enter robotics and hardware systems integration, where I can contribute to meaningful projects and keep growing as
                an engineer.
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
