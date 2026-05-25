import { useEffect } from 'react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const stack = [
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'Django', icon: 'devicon-django-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Express.js', icon: 'devicon-express-original' },
  { name: 'Go', icon: 'devicon-go-original-wordmark' },
  { name: 'C', icon: 'devicon-c-plain' },
  { name: 'C++', icon: 'devicon-cplusplus-plain' },
  { name: 'C#', icon: 'devicon-csharp-plain' },
  { name: '.NET', icon: 'devicon-dotnetcore-plain' },
  { name: 'MySQL', icon: 'devicon-mysql-plain' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
]

const projects = [
  {
    name: 'Distributed API Platform',
    description:
      'Backend platform focused on scalable service orchestration, authentication, and observability-first APIs.',
    tech: ['Go', 'Node.js', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/medob6',
  },
  {
    name: 'Education Management Suite',
    description:
      'Full-stack portal for course workflows, learner progress tracking, and role-based dashboards.',
    tech: ['Django', 'React', 'MySQL', 'Git'],
    link: 'https://github.com/medob6',
  },
  {
    name: 'Realtime Collaboration Hub',
    description:
      'Realtime collaboration app with event-driven services, secure APIs, and production-ready deployment workflows.',
    tech: ['Express.js', 'MongoDB', 'Docker', 'Linux'],
    link: 'https://github.com/medob6',
  },
]

const fadeClasses =
  'opacity-0 translate-y-8 transition-all duration-700 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-inview', 'true')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 font-['Inter',sans-serif]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-[#7F77DD]">
            MB
          </a>
          <ul className="flex flex-wrap justify-end gap-3 text-sm text-slate-300 sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-[#7F77DD]" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <section
          id="hero"
          data-animate
          data-inview="false"
          className={`${fadeClasses} flex min-h-[calc(100vh-73px)] flex-col items-start justify-center gap-6 py-20`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#7F77DD]">Software Engineer</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            Mohamed Boussetta
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            I build resilient backend systems and modern web experiences with a focus on clean architecture,
            performance, and developer-friendly APIs.
          </p>
          <p className="text-sm text-slate-400">Based in Morocco</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-[#7F77DD] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(127,119,221,0.35)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-[#7F77DD] hover:text-[#7F77DD]"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" data-animate data-inview="false" className={`${fadeClasses} py-16`}>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">About</h2>
          <p className="mt-6 max-w-3xl text-slate-300">
            My journey started at ENSA Safi, where I built strong engineering fundamentals, then expanded through
            the ALX Backend Programme with hands-on backend architecture and system design. At 1337 School
            (42 Network), I sharpened peer-learning, low-level programming, and problem-solving through project-
            based challenges.
          </p>
        </section>

        <section id="stack" data-animate data-inview="false" className={`${fadeClasses} py-16`}>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Stack</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stack.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-[#7F77DD]/70 hover:bg-[#7F77DD]/10"
              >
                <i className={`${item.icon} text-2xl`} aria-hidden="true"></i>
                <span className="text-sm text-slate-200">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" data-animate data-inview="false" className={`${fadeClasses} py-16`}>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#7F77DD]/80 hover:shadow-[0_18px_40px_rgba(127,119,221,0.2)]"
              >
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-sm text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#7F77DD]/45 bg-[#7F77DD]/15 px-3 py-1 text-xs font-medium text-[#d9d5ff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-lg bg-[#7F77DD] px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-[#8f88ea]"
                >
                  GitHub Link
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" data-animate data-inview="false" className={`${fadeClasses} py-16`}>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Contact</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Let&apos;s connect and discuss opportunities, collaborations, or exciting backend challenges.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm transition hover:border-[#7F77DD] hover:text-[#7F77DD]"
              href="mailto:mohamedboussetta601@gmail.com"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              mohamedboussetta601@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm transition hover:border-[#7F77DD] hover:text-[#7F77DD]"
              href="https://github.com/medob6"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.2-3.37-1.2-.45-1.14-1.11-1.45-1.11-1.45-.9-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.88 1.51 2.3 1.07 2.87.82.09-.65.35-1.07.63-1.32-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.45 9.45 0 0 1 12 6.82c.85 0 1.7.11 2.49.32 1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.11 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.56 4.94.36.31.68.91.68 1.84v2.72c0 .27.18.58.69.48A10 10 0 0 0 12 2" />
              </svg>
              github.com/medob6
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm transition hover:border-[#7F77DD] hover:text-[#7F77DD]"
              href="https://linkedin.com/in/mohamed-boussetta-913609280"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6A2.5 2.5 0 1 1 4.98 3.5zM.5 8h4V23h-4zM8 8h3.84v2.05h.05c.53-1 1.85-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16V23h-4v-6.88c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.79-2.64 3.63V23H8z" />
              </svg>
              linkedin.com/in/mohamed-boussetta-913609280
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
