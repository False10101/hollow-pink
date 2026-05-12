import type { ReactNode } from 'react'
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
} from 'lucide-react'
import Dither from './components/Dither'
import { Backlight } from './components/Backlight'
import MyResume from './assets/resume/Min Paing Hein CV.pdf'
import EidolonPreview from '../docs/images/eidolon/note-viewer.png'
import SyzygyPreview from '../docs/images/syzygy/analysis-shot.png'
import PrimaPreview from './assets/Screenshots/Prima/1.png'

import ProfilePicture from './assets/Social Box Desptop view everything/3.png'

type Project = {
  title: string
  description: string
  image: string
  href: string
  tags: { label: string; tone: string }[]
}

type Tech = {
  label: string
  custom:
    | 'html'
    | 'css'
    | 'typescript'
    | 'react'
    | 'next'
    | 'tailwind'
    | 'node'
    | 'express'
    | 'postgres'
    | 'prisma'
    | 'docker'
    | 'aws'
    | 'git'
}

const navItems = ['Home', 'Projects', 'Contact']

const projects: Project[] = [
  {
    title: 'Eidolon AI Suite',
    description:
      'AI-powered study platform for transcription, lecture-note generation, exam prep, group collaboration, credit billing, and admin operations.',
    image: EidolonPreview,
    href: '/projects/eidolon',
    tags: [
      { label: 'Next.js 15', tone: 'text-blue-300 bg-blue-500/10' },
      { label: 'React 19', tone: 'text-cyan-300 bg-cyan-500/10' },
      { label: 'PostgreSQL', tone: 'text-indigo-300 bg-indigo-500/10' },
    ],
  },
  {
    title: 'Syzygy',
    description:
      'Static analysis platform for detecting API drift between frontend API calls and backend route definitions across GitHub repositories before issues reach runtime.',
    image: SyzygyPreview,
    href: '/projects/syzygy',
    tags: [
      { label: 'React', tone: 'text-cyan-300 bg-cyan-500/10' },
      { label: 'TypeScript', tone: 'text-blue-300 bg-blue-500/10' },
      { label: 'Node.js', tone: 'text-green-300 bg-green-500/10' },
      { label: 'MySQL', tone: 'text-amber-300 bg-amber-500/10' },
    ],
  },
  {
    title: 'Prima',
    description:
      'Visual data cleaning and pipeline generation tool for data scientists. From raw CSV to production-ready Python code in minutes.',
    image: PrimaPreview,
    href: '/projects/prima',
    tags: [
      { label: 'React', tone: 'text-cyan-300 bg-cyan-500/10' },
      { label: 'FastAPI', tone: 'text-emerald-300 bg-emerald-500/10' },
      { label: 'scikit-learn', tone: 'text-purple-300 bg-purple-500/10' },
    ],
  },
]

const techStack: Tech[] = [
  { label: 'HTML5', custom: 'html' },
  { label: 'CSS3', custom: 'css' },
  { label: 'TypeScript', custom: 'typescript' },
  { label: 'React', custom: 'react' },
  { label: 'Next.js', custom: 'next' },
  { label: 'Tailwind CSS', custom: 'tailwind' },
  { label: 'Node.js', custom: 'node' },
  { label: 'Express.js', custom: 'express' },
  { label: 'PostgreSQL', custom: 'postgres' },
  { label: 'Prisma', custom: 'prisma' },
  { label: 'Docker', custom: 'docker' },
  { label: 'AWS', custom: 'aws' },
  { label: 'Git', custom: 'git' },
]

function App() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#020713] font-sans text-white antialiased">
      <div className="absolute inset-0 opacity-35">
        <Dither
          waveColor={[0.03, 0.09, 0.36]}
          disableAnimation={false}
          enableMouseInteraction={false}
          colorNum={5}
          pixelSize={2}
          waveAmplitude={0.2}
          waveFrequency={2.2}
          waveSpeed={0.025}
        />
      </div>

      {/* Deep Space Nebula Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-90">
        {/* Massive base space clouds */}
        <div className="absolute -left-[20%] top-[-10%] h-[70%] w-[70%] -rotate-12 rounded-[100%] bg-blue-950/80 blur-[130px]" />
        <div className="absolute -right-[10%] top-[10%] h-[80%] w-[60%] rotate-12 rounded-[100%] bg-indigo-950/80 blur-[140px]" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[70%] w-[80%] rotate-[-25deg] rounded-[100%] bg-violet-950/70 blur-[130px]" />
        
        {/* Mid-layer color mixtures */}
        <div className="absolute left-[15%] top-[30%] h-[40%] w-[50%] rotate-[15deg] rounded-[100%] bg-blue-900/40 blur-[100px]" />
        <div className="absolute right-[15%] bottom-[20%] h-[50%] w-[40%] rotate-[-30deg] rounded-[100%] bg-fuchsia-950/30 blur-[120px]" />
        <div className="absolute left-[40%] top-[60%] h-[30%] w-[40%] rotate-[45deg] rounded-[100%] bg-cyan-950/20 blur-[100px]" />
      </div>

      {/* Dark Vignette and Depth Overlay (Replaces the bright lightbulbs) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,18,0.1),rgba(0,0,0,0.98)),radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_80%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.16]" />
      <div className="pointer-events-none absolute bottom-[95px] left-0 h-[285px] w-[170px] bg-[radial-gradient(circle,rgba(28,113,255,0.55)_1px,transparent_1.5px)] bg-[size:9px_9px] opacity-60 [mask-image:linear-gradient(90deg,#000,transparent)]" />

      <div className="relative z-10 grid h-[92vh] w-[calc(100vw-96px)] max-w-[1500px] grid-rows-[56px_minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4">
        <div className="flex min-h-0 items-start">
          <header className="nav-border relative h-full w-full overflow-hidden rounded-xl border border-blue-300/35 bg-[#0b1021]/78 backdrop-blur-xl">
            <div className="flex h-full items-center justify-between gap-4 px-5">
            <a href="/" className="flex items-center gap-5">
              <MpLogo />
              <span className="text-[0.95rem] font-semibold text-white">Min Paing Hein</span>
            </a>

            <nav className="hidden h-full items-center gap-12 lg:flex">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative flex h-full items-center text-[0.88rem] transition-all duration-200 active:scale-95 ${
                    index === 0
                      ? 'text-blue-300 drop-shadow-[0_0_7px_rgba(96,165,250,0.74)]'
                      : 'text-white/90 hover:text-blue-300'
                  }`}
                >
                  {item}
                  {index === 0 ? (
                    <>
                      <span className="absolute inset-x-[-10px] bottom-[-1px] h-px bg-gradient-to-r from-transparent via-white to-blue-200/90 shadow-[0_0_6px_rgba(219,234,254,0.95)]" />
                      <span className="absolute bottom-[-4px] left-1/2 h-[6px] w-[48px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.82),rgba(96,165,250,0.40)_34%,transparent_68%)] blur-[2px]" />
                    </>
                  ) : null}
                </a>
              ))}
            </nav>

            <a
              href={MyResume}
              download="Min_Paing_Hein_CV.pdf"
              className="group hidden h-[38px] rounded-[10px] bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 p-[1px] shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] active:scale-95 lg:inline-flex"
            >
              <div className="relative flex h-full w-full items-center gap-2 overflow-hidden rounded-[9px] bg-[#090e1f] px-4 text-[0.88rem] font-medium text-blue-100 transition-all duration-300 group-hover:bg-[#090e1f]/40 group-hover:text-white group-hover:shadow-[inset_0_0_15px_rgba(59,130,246,0.4)]">
                <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full" />
                <Download className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-300" />
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">Download CV</span>
              </div>
            </a>
          </div>
          </header>
        </div>

        <section
          id="home"
          className="grid min-h-0 gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]"
        >
            <div className="relative flex h-full min-w-0 flex-col pl-8">
              <span className="absolute bottom-10 left-0 top-2 w-px bg-gradient-to-b from-blue-500/70 via-blue-500/25 via-[82%] to-transparent" />
              <span className="absolute left-[-1.5px] top-2 h-[50px] w-[4px] rounded-full border border-blue-400 bg-gradient-to-b from-blue-600 via-white to-blue-600 shadow-[0_0_14px_rgba(59,130,246,1)]" />

              <div className="flex h-full min-h-0 flex-col">
                <div className="inline-flex h-[22px] self-start rounded-md border border-blue-500/30 bg-blue-500/8 px-3 text-[0.7rem] text-slate-300 shadow-[inset_0_0_10px_rgba(59,130,246,0.10),0_0_12px_rgba(139,92,246,0.12)]">
                  <span className="my-auto mr-2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
                  <span className="my-auto">Full-Stack Developer</span>
                </div>

                <h1 className="mt-2 text-[clamp(2.25rem,3.4vw,3.15rem)] font-black leading-[1] tracking-[0] text-white drop-shadow-[0_0_22px_rgba(96,165,250,0.12)]">
                  Min Paing{' '}
                  <span className="hein-texture bg-clip-text text-transparent">
                    Hein
                  </span>
                </h1>
                <p className="subtitle-texture mt-2 bg-clip-text text-[1.05rem] font-medium leading-none text-transparent">
                  Full-Stack Web Developer
                </p>
                <p className="mt-2 max-w-[560px] text-[0.8rem] leading-[1.35] text-slate-200">
                  Computer Science student building practical web apps and polished
                  interfaces.
                </p>

                <div
                  id="about"
                  className="tech-tile-border relative mt-3 w-[min(100%,520px)] overflow-hidden rounded-xl border border-blue-500/24 bg-[#0a1022]/76 px-4 py-2.5 backdrop-blur-xl"
                >
                  <Backlight intensity="subtle" />
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/14 text-blue-200 shadow-[inset_0_0_16px_rgba(96,165,250,0.14),0_0_18px_rgba(139,92,246,0.14)]">
                      <UserRound className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-[0.95rem] font-semibold leading-tight text-white">
                        About
                      </h2>
                      <p className="mt-1 text-[0.76rem] leading-[1.35] text-slate-300">
                        3rd-year CS student at KMUTT. I've been building and running my own web products since second year — currently operating a live AI platform with paying users, all self-hosted.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="/projects"
                    className="group relative inline-flex h-[36px] w-[142px] items-center justify-center gap-3 overflow-hidden rounded-[8px] bg-blue-600 text-[0.8rem] font-medium text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(96,165,250,0.8)] active:scale-95"
                  >
                    {/* Vibrant cloudy resting state blobs */}
                    <span className="absolute -left-6 -top-6 z-0 h-24 w-24 rounded-full bg-violet-500/80 blur-[12px] transition-all duration-500 group-hover:opacity-0" />
                    <span className="absolute -right-6 -bottom-6 z-0 h-28 w-28 rounded-full bg-sky-400/80 blur-[14px] transition-all duration-500 group-hover:opacity-0" />
                    <span className="absolute left-1/2 top-1/2 z-0 h-16 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/60 blur-[10px] transition-all duration-500 group-hover:opacity-0" />
                    
                    {/* Active hovering continuous blobs */}
                    <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
                        <span className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-violet-500/90 blur-[12px] opacity-80" />
                      </div>
                      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                        <span className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-sky-400/90 blur-[14px] opacity-80" />
                      </div>
                      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-pulse">
                        <span className="absolute inset-0 rounded-full bg-fuchsia-400/80 blur-[10px] opacity-60" />
                      </div>
                    </div>

                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">View My Work</span>
                    <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="/contact"
                    className="group inline-flex h-[36px] w-[158px] rounded-[8px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 p-[1px] shadow-[0_0_10px_rgba(217,70,239,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.8)] active:scale-95"
                  >
                    <div className="relative flex h-full w-full items-center justify-center gap-3 overflow-hidden rounded-[7px] bg-[#050916] text-[0.8rem] font-medium text-fuchsia-100 transition-all duration-300 group-hover:bg-[#050916]/40 group-hover:text-white group-hover:shadow-[inset_0_0_15px_rgba(217,70,239,0.4)]">
                      <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full" />
                      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">Let&apos;s Connect</span>
                      <MessageCircle className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid min-h-0 min-w-0 grid-rows-[minmax(0,1fr)_68px] gap-3">
              <section
                className="relative min-h-0 overflow-hidden rounded-xl p-[1.5px] shadow-[-12px_-12px_30px_rgba(96,165,250,0.1),12px_12px_30px_rgba(217,70,239,0.1),0_5px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(96,165,250,0.6)_0%,rgba(139,92,246,0.5)_15%,#10162c_35%,#10162c_65%,rgba(236,72,153,0.5)_85%,rgba(217,70,239,0.6)_100%)] opacity-50" />
                <div className="absolute -left-8 -top-8 z-0 h-40 w-40 rounded-full bg-blue-500/50 blur-[24px]" />
                <div className="absolute -right-8 -bottom-8 z-0 h-40 w-40 rounded-full bg-fuchsia-500/50 blur-[24px]" />
                <div className="relative z-10 h-full rounded-[10.5px] bg-[#0a1022] p-3">
                  <Backlight />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_34%_69%,rgba(48,110,255,0.52),transparent_31%),radial-gradient(circle_at_100%_100%,rgba(168,64,255,0.36),transparent_28%)]" />
                  <div className="relative grid h-full min-h-0 grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] gap-5">
                  <div className="relative min-h-0 overflow-hidden">
                    <div className="absolute inset-x-[7%] bottom-[4%] h-[108px] rounded-full bg-blue-600/40 blur-[45px]" />
                    <img
                      src={ProfilePicture}
                      alt="Min Paing Hein portrait"
                      className="absolute bottom-[-42px] left-1/2 h-[310px] w-auto max-w-none -translate-x-1/2 object-contain mix-blend-lighten drop-shadow-[0_18px_28px_rgba(0,0,0,0.28)]"
                    />
                  </div>

                  <div className="min-h-0 border-l border-blue-500/20 pl-4">
                    <InfoItem
                      icon={<MapPin className="h-5 w-5" />}
                      label="Location"
                      value="Bangkok, Thailand"
                    />
                    <InfoItem
                      icon={<GraduationCap className="h-5 w-5" />}
                      label="Study"
                      value="King Mongkut's University of Technology Thonburi"
                    />
                    <InfoItem
                      icon={<Code2 className="h-5 w-5" />}
                      label="Focus"
                      value="Web Development UI/UX Design"
                    />
                    <InfoItem
                      icon={<UserRound className="h-5 w-5" />}
                      label="Availability"
                      value="Open to opportunities"
                      last
                    />
                  </div>
                </div>
                </div>
              </section>

              <section
                id="contact"
                className="tech-tile-border relative min-h-0 min-w-0 overflow-hidden rounded-xl border border-blue-500/24 bg-[#0a1022]/76 p-2 backdrop-blur-xl"
              >
                <Backlight />
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-3 w-[3px] rounded-full bg-blue-400" />
                  <h2 className="text-[0.78rem] font-semibold text-white">Contact</h2>
                </div>
                <div className="flex min-w-0 items-center gap-2">
                  <ContactChip icon={<Mail className="h-4 w-4" />} label="minph7102004@gmail.com" href="mailto:minph7102004@gmail.com" />
                  <ContactChip icon={<Phone className="h-4 w-4" />} label="+66 6 2032 2023" href="tel:+66620322023" />
                  <ContactChip icon={<MapPin className="h-4 w-4" />} label="Bangkok, Thailand" href="https://maps.google.com/?q=Bangkok,+Thailand" />
                  <div className="ml-auto flex items-center gap-2">
                    <IconLink href="https://github.com/False10101" label="GitHub">
                      <Github className="h-5 w-5" />
                    </IconLink>
                    <IconLink
                      href="https://www.linkedin.com/in/min-paing-hein-676465245/"
                      label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </IconLink>
                    <IconLink href="https://instagram.com/minpaingheinn" label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </IconLink>
                    <IconLink href="mailto:minph7102004@gmail.com" label="Email">
                      <Mail className="h-5 w-5" />
                    </IconLink>
                  </div>
                </div>
              </section>
            </div>
        </section>

        <div className="grid min-h-0 grid-rows-[minmax(0,1fr)_132px] gap-4">
          <section id="projects" className="flex min-h-0 flex-col">
            <SectionHeading title="Featured Projects" actionLabel="View all projects" />
            <div className="mt-3 grid min-h-0 flex-1 gap-4 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section id="skills" className="flex min-h-0 flex-col">
            <SectionHeading title="Tech Stack" />
            <div className="mt-3 grid min-h-0 flex-1 grid-cols-13 gap-3">
              {techStack.map((tech) => (
                <TechTile key={tech.label} tech={tech} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function SectionHeading({
  title,
  actionLabel,
}: {
  title: string
  actionLabel?: string
}) {
  return (
    <div className="flex min-h-[24px] flex-wrap items-center gap-3 sm:gap-4">
      <div className="section-title-mark h-4 w-[4px] shrink-0 rounded-full" />
      <h2 className="text-[1rem] font-semibold tracking-[0] text-white drop-shadow-[0_0_10px_rgba(96,165,250,0.20)]">{title}</h2>
      <div className="neon-horizontal-line h-px min-w-[80px] flex-1" />
      {actionLabel ? (
        <a
          href="/projects"
          className="group relative inline-flex shrink-0 items-center gap-2 text-[0.82rem] text-slate-300 transition-all duration-300 hover:-translate-y-[1px] hover:text-blue-200 hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.5)] active:translate-y-0 active:scale-95"
        >
          <span className="absolute inset-x-[-10px] inset-y-[-6px] z-0 scale-90 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 opacity-0 ring-1 ring-inset ring-blue-400/20 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
          <span className="relative z-10">{actionLabel}</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      ) : null}
    </div>
  )
}

function MpLogo() {
  return (
    <svg
      aria-label="MP"
      className="h-[28px] w-[45px] overflow-visible drop-shadow-[0_0_10px_rgba(96,165,250,0.72)]"
      role="img"
      viewBox="0 0 58 34"
    >
      <defs>
        <linearGradient id="mpLogoGradient" x1="4" x2="54" y1="8" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="0.48" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="mpLogoGlow" x="-35%" y="-55%" width="170%" height="210%">
          <feGaussianBlur stdDeviation="1.45" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.28 0 0 0 0 0.56 0 0 0 0 1 0 0 0 0.62 0"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#mpLogoGlow)" transform="skewX(-9)">
        <text
          fill="url(#mpLogoGradient)"
          fontFamily="Arial Black, Arial, sans-serif"
          fontSize="29"
          fontStyle="italic"
          fontWeight="900"
          letterSpacing="-8"
          x="6"
          y="28"
        >
          MP
        </text>
      </g>
    </svg>
  )
}

function InfoItem({
  icon,
  label,
  value,
  last,
}: {
  icon: ReactNode
  label: string
  value: ReactNode
  last?: boolean
}) {
  return (
    <div className={`flex gap-3 py-[7px] ${last ? '' : 'border-b border-blue-500/16'}`}>
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-400/12 text-blue-200 shadow-[inset_0_0_16px_rgba(96,165,250,0.12),0_0_14px_rgba(139,92,246,0.12)]">
        {icon}
      </div>
      <div>
        <p className="text-[0.68rem] leading-3 text-slate-400">{label}</p>
        <p className="mt-1 max-w-[230px] text-[0.73rem] leading-[1.2] text-white">
          {value}
        </p>
      </div>
    </div>
  )
}

function ContactChip({ icon, label, href }: { icon: ReactNode; label: string; href?: string }) {
  if (href) {
    const isMailOrTel = href.startsWith('mailto:') || href.startsWith('tel:')
    return (
      <a
        href={href}
        target={isMailOrTel ? undefined : '_blank'}
        rel={isMailOrTel ? undefined : 'noopener noreferrer'}
        className="group relative inline-flex h-[28px] max-w-full min-w-0 items-center rounded-md bg-blue-500/24 p-[1px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] active:scale-95"
      >
        <span className="absolute inset-0 z-0 rounded-md bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex h-full w-full items-center gap-2 overflow-hidden rounded-[5px] bg-[#060b19] px-2 text-[0.68rem] text-slate-200 transition-all duration-300 group-hover:bg-[#060b19]/40 group-hover:text-white group-hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.4)]">
          <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full" />
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:text-blue-300">{icon}</span>
          <span className="relative z-10 truncate whitespace-nowrap transition-transform duration-300 group-hover:translate-x-[1px] group-hover:text-blue-100">{label}</span>
        </div>
      </a>
    )
  }

  return (
    <div className="inline-flex h-[28px] max-w-full min-w-0 items-center gap-2 rounded-md border border-blue-500/24 bg-[#060b19] px-2 text-[0.68rem] text-slate-200">
      <span className="text-slate-200">{icon}</span>
      <span className="truncate whitespace-nowrap">{label}</span>
    </div>
  )
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  const isMail = href.startsWith('mailto:')

  return (
    <a
      href={href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      aria-label={label}
      title={label}
      className="group relative inline-flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-md bg-blue-500/24 p-[1px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] active:scale-95"
    >
      <span className="absolute inset-0 z-0 rounded-md bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[5px] bg-[#060b19] text-white/90 transition-all duration-300 group-hover:bg-[#060b19]/40 group-hover:text-white group-hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.4)]">
        <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full" />
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-300">{children}</span>
      </div>
    </a>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="project-card-border group relative flex min-w-0 flex-col gap-3 overflow-hidden rounded-xl border border-blue-500/35 bg-[#0a1024]/72 p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] active:translate-y-0 active:scale-[0.98] sm:flex-row"
    >
      <Backlight />

      <div className="relative z-10 h-[170px] w-full shrink-0 overflow-hidden rounded-md border border-blue-500/18 bg-black/35 sm:h-[150px] sm:w-[190px] xl:h-[160px] xl:w-[205px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <h3 className="text-[0.93rem] font-semibold leading-tight text-white">{project.title}</h3>
        <p className="mt-1.5 text-[0.72rem] leading-[1.42] text-slate-300">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded px-1.5 py-0.5 text-[0.62rem] leading-none ${tag.tone}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

function TechTile({ tech }: { tech: Tech }) {
  return (
    <div
      className="tech-tile-border relative flex min-w-0 flex-col items-center justify-center overflow-hidden rounded-lg border border-blue-500/24 bg-[#0a1022]/76 px-2 py-3 backdrop-blur-xl select-none"
    >
      <Backlight intensity="subtle" />
      <CustomTechIcon type={tech.custom} />
      <p className="mt-1.5 max-w-full truncate px-1 text-center text-[0.63rem] leading-none text-white">
        {tech.label}
      </p>
    </div>
  )
}

function CustomTechIcon({ type }: { type: Tech['custom'] }) {
  const iconClass = 'h-[30px] w-[30px] overflow-visible'

  if (type === 'html' || type === 'css') {
    const text = type === 'html' ? '5' : '3'
    const color = type === 'html' ? '#fb7185' : '#60a5fa'

    return (
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
        <path
          d="M5.8 5h24.4l-2.4 22.8L18 32 8.2 27.8 5.8 5Z"
          fill={`${color}24`}
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M11.5 11h13M12.5 17h11M14.5 23l3.5 1.7 3.5-1.7" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <text x="18" y="22" textAnchor="middle" className="fill-white text-[12px] font-black">
          {text}
        </text>
      </svg>
    )
  }

  if (type === 'typescript') {
    return (
      <span className="flex h-[30px] w-[30px] items-end justify-end rounded-md border border-sky-300/80 bg-sky-400/15 px-1 pb-1 text-[0.72rem] font-black leading-none text-sky-100 shadow-[0_0_14px_rgba(56,189,248,0.25)]">
        TS
      </span>
    )
  }

  if (type === 'react') {
    return (
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
        <g fill="none" stroke="#67e8f9" strokeWidth="1.8">
          <ellipse cx="18" cy="18" rx="14" ry="5.3" />
          <ellipse cx="18" cy="18" rx="14" ry="5.3" transform="rotate(60 18 18)" />
          <ellipse cx="18" cy="18" rx="14" ry="5.3" transform="rotate(120 18 18)" />
        </g>
        <circle cx="18" cy="18" r="3" fill="#67e8f9" />
      </svg>
    )
  }

  if (type === 'next') {
    return (
      <span className="relative flex h-[30px] w-[30px] items-center justify-center rounded-full border border-blue-400/45 bg-blue-500/8 text-[0.78rem] font-black text-white">
        N
        <span className="absolute bottom-[6px] right-[7px] h-[13px] w-px rotate-[-30deg] bg-white/80" />
      </span>
    )
  }

  if (type === 'tailwind') {
    return (
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
        <path
          d="M7 19c2.6-7 7.8-7 10.4-4.2 1.6 1.7 2.8 2.8 5.1 2.8 2.2 0 4-1.1 5.5-3.2-2.6 7-7.8 7-10.4 4.2-1.6-1.7-2.8-2.8-5.1-2.8-2.2 0-4 1.1-5.5 3.2Zm1 8c2.6-7 7.8-7 10.4-4.2 1.6 1.7 2.8 2.8 5.1 2.8 2.2 0 4-1.1 5.5-3.2-2.6 7-7.8 7-10.4 4.2-1.6-1.7-2.8-2.8-5.1-2.8-2.2 0-4 1.1-5.5 3.2Z"
          fill="#22d3ee"
        />
      </svg>
    )
  }

  if (type === 'node') {
    return (
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
        <path
          d="M18 4 30 11v14l-12 7L6 25V11L18 4Z"
          fill="#22c55e22"
          stroke="#86efac"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <text x="18" y="22" textAnchor="middle" className="fill-green-100 text-[9px] font-black">
          JS
        </text>
      </svg>
    )
  }

  if (type === 'express') {
    return <span className="text-[1.45rem] font-light leading-none text-white/90">ex</span>
  }

  if (type === 'postgres') {
    return (
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
        <path
          d="M9 11c0-3.3 4-6 9-6s9 2.7 9 6v14c0 3.3-4 6-9 6s-9-2.7-9-6V11Z"
          fill="#60a5fa18"
          stroke="#93c5fd"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 11c0 3.3 4 6 9 6s9-2.7 9-6M9 18c0 3.3 4 6 9 6s9-2.7 9-6"
          stroke="#bfdbfe"
          strokeWidth="1.7"
        />
        <text x="18" y="22" textAnchor="middle" className="fill-blue-100 text-[8px] font-black">
          PG
        </text>
      </svg>
    )
  }

  if (type === 'prisma') {
    return (
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
        <path
          d="M18 4 29 29 8 33 18 4Z"
          fill="#a78bfa24"
          stroke="#c4b5fd"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M18 8 13 28l11-2L18 8Z" fill="#c4b5fd" opacity="0.8" />
      </svg>
    )
  }

  if (type === 'docker') {
    return (
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
        <g fill="#7dd3fc">
          <rect x="7" y="15" width="5" height="4" rx="0.8" />
          <rect x="13" y="15" width="5" height="4" rx="0.8" />
          <rect x="19" y="15" width="5" height="4" rx="0.8" />
          <rect x="13" y="10" width="5" height="4" rx="0.8" />
          <rect x="19" y="10" width="5" height="4" rx="0.8" />
        </g>
        <path d="M6 20h23c-.7 5.4-4.3 8-10.8 8H15c-4.7 0-7.7-2.4-9-8Z" fill="#38bdf833" stroke="#7dd3fc" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M27 17.5c1.8-.7 3.1-.3 4 1" stroke="#7dd3fc" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'aws') {
    return (
      <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
        <text x="18" y="17" textAnchor="middle" className="fill-orange-100 text-[11px] font-black">
          AWS
        </text>
        <path d="M9 22c5.2 4.2 12.3 4.4 18.4.3" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 20.8 28 22l-1 3" stroke="#fbbf24" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 36 36" className={iconClass} aria-hidden="true">
      <path d="M18 5 31 18 18 31 5 18 18 5Z" fill="#fb718522" stroke="#fda4af" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 14h7M18 14v10M18 20h5" stroke="#fecdd3" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="14" r="2" fill="#fecdd3" />
      <circle cx="18" cy="24" r="2" fill="#fecdd3" />
      <circle cx="23" cy="20" r="2" fill="#fecdd3" />
    </svg>
  )
}

export default App
