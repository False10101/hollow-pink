import { lazy, Suspense, useMemo, useState } from 'react'
import type { ComponentType, ReactNode, SVGProps } from 'react'
import {
  ArrowRight,
  Bot,
  Download,
  GitBranch,
  Github,
  GraduationCap,
  Presentation,
  RadioTower,
  Sparkles,
} from 'lucide-react'
import { Backlight } from './components/Backlight'
import MyResume from './assets/resume/Min Paing Hein CV.pdf'
import EidolonPreview from '../docs/images/eidolon/note-viewer.avif'
import SyzygyPreview from './assets/Screenshots/Syzygy/1.avif'
import PrimaPreview from './assets/Screenshots/Prima/1.avif'

type ProjectCategory = 'All' | 'Completed' | 'In Progress'

type ProjectEntry = {
  title: string
  description: string
  image?: string
  href: string
  githubHref: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  category: Exclude<ProjectCategory, 'All'>
  stack: { label: string; tone: string }[]
  order: number
}

const navItems = ['Home', 'Projects', 'Contact']
const categories: ProjectCategory[] = ['All', 'Completed', 'In Progress']

const projects: ProjectEntry[] = [
  {
    title: 'Eidolon AI Suite',
    description:
      'AI-powered academic platform for students to turn lecture audio into transcripts, structured notes, exam prep, and shared study workflows. Live with real billing, group collaboration, and self-hosted infrastructure.',
    image: EidolonPreview,
    href: '/projects/eidolon',
    githubHref: 'https://github.com/False10101/eidolon',
    icon: GraduationCap,
    category: 'Completed',
    order: 5,
    stack: [
      { label: 'Next.js 15', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/18' },
      { label: 'React 19', tone: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/18' },
      { label: 'Tailwind CSS v4', tone: 'text-teal-300 bg-teal-500/10 border-teal-400/16' },
      { label: 'PostgreSQL', tone: 'text-indigo-300 bg-indigo-500/10 border-indigo-400/16' },
      { label: 'Auth0', tone: 'text-amber-200 bg-amber-500/10 border-amber-400/16' },
      { label: 'Stripe', tone: 'text-violet-300 bg-violet-500/10 border-violet-400/16' },
      { label: 'Cloudflare R2', tone: 'text-orange-300 bg-orange-500/10 border-orange-400/16' },
      { label: 'Redis + BullMQ', tone: 'text-red-300 bg-red-500/10 border-red-400/16' },
    ],
  },
  {
    title: 'Prima',
    description:
      'No-code data engineering platform. Build Scikit-Learn preprocessing pipelines visually and export them as production-ready Python — no code required.',
    image: PrimaPreview,
    href: '/projects/prima',
    githubHref: 'https://github.com/False10101/prima',
    icon: GitBranch,
    category: 'Completed',
    order: 3,
    stack: [
      { label: 'React', tone: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/18' },
      { label: 'TypeScript', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/18' },
      { label: 'FastAPI', tone: 'text-green-300 bg-green-500/10 border-green-400/16' },
      { label: 'Pandas & NumPy', tone: 'text-orange-300 bg-orange-500/10 border-orange-400/18' },
      { label: 'scikit-learn', tone: 'text-purple-300 bg-purple-500/10 border-purple-400/16' },
      { label: 'Tailwind CSS', tone: 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-400/16' },
    ],
  },
  {
    title: 'Syzygy',
    description:
      'Full-stack developer tool that detects API drift between backend route definitions and frontend API consumption using static code analysis and GitHub repository scanning.',
    image: SyzygyPreview,
    href: '/projects/syzygy',
    githubHref: 'https://github.com/False10101/syzygy',
    icon: RadioTower,
    category: 'Completed',
    order: 4,
    stack: [
      { label: 'React', tone: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/18' },
      { label: 'TypeScript', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/16' },
      { label: 'Vite', tone: 'text-violet-300 bg-violet-500/10 border-violet-400/16' },
      { label: 'Tailwind CSS', tone: 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-400/16' },
      { label: 'Node.js', tone: 'text-green-300 bg-green-500/10 border-green-400/16' },
      { label: 'Express.js', tone: 'text-sky-300 bg-blue-500/10 border-blue-400/16' },
      { label: 'MySQL', tone: 'text-amber-300 bg-amber-500/10 border-amber-400/16' },
      { label: 'GitHub API', tone: 'text-slate-300 bg-slate-500/10 border-slate-300/12' },
      { label: 'AES-256 Encryption', tone: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/16' },
    ],
  },
  {
    title: 'Rehearse AI',
    description:
      'AI presentation coach that gives real-time feedback on posture, gestures, and speech using computer vision and LLMs. Built as capstone project.',
    href: '/projects/rehearse-ai',
    githubHref: 'https://github.com/False10101/rehearse-ai',
    icon: Presentation,
    category: 'In Progress',
    order: 1,
    stack: [
      { label: 'Next.js', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/18' },
      { label: 'FastAPI', tone: 'text-green-300 bg-green-500/10 border-green-400/16' },
      { label: 'MediaPipe', tone: 'text-teal-300 bg-teal-500/10 border-teal-400/16' },
      { label: 'YOLO', tone: 'text-yellow-300 bg-yellow-500/10 border-yellow-400/16' },
      { label: 'Groq Whisper', tone: 'text-pink-200 bg-pink-500/10 border-pink-400/16' },
      { label: 'Azure TTS', tone: 'text-sky-300 bg-sky-500/10 border-sky-400/18' },
    ],
  },
  {
    title: 'Cantarella',
    description:
      'Personal AI assistant with long-term memory via RAG. Knows your context, remembers across conversations, runs fully self-hosted.',
    href: '/projects/cantarella',
    githubHref: 'https://github.com/False10101/Cantarella-Revamped',
    icon: Bot,
    category: 'In Progress',
    order: 2,
    stack: [
      { label: 'Next.js', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/18' },
      { label: 'Express', tone: 'text-slate-300 bg-slate-500/10 border-slate-300/12' },
      { label: 'DeepSeek', tone: 'text-indigo-300 bg-indigo-500/10 border-indigo-400/16' },
      { label: 'pgvector', tone: 'text-sky-300 bg-sky-500/10 border-sky-400/18' },
      { label: 'BullMQ', tone: 'text-red-300 bg-red-500/10 border-red-400/16' },
      { label: 'Upstash', tone: 'text-green-300 bg-green-500/10 border-green-400/16' },
    ],
  },
]

const Dither = lazy(() => import('./components/Dither'))

export default function ProjectsListPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')

  const visibleProjects = useMemo(() => {
    const filtered =
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory)

    // Naturally sort newest to oldest based on the 'order' property
    return [...filtered].sort((a, b) => b.order - a.order)
  }, [activeCategory])

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#020713] font-sans text-white antialiased">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(10, 16, 34, 0.4);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), rgba(217, 70, 239, 0.5));
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(96, 165, 250, 0.9), rgba(167, 139, 250, 0.9), rgba(232, 121, 249, 0.9));
        }
      `}</style>

      <div className="absolute inset-0 opacity-35">
        <Suspense fallback={null}>
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
        </Suspense>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-90">
        <div className="absolute -left-[20%] top-[-10%] h-[70%] w-[70%] -rotate-12 rounded-[100%] bg-blue-950/80 blur-[130px]" />
        <div className="absolute -right-[10%] top-[10%] h-[80%] w-[60%] rotate-12 rounded-[100%] bg-indigo-950/80 blur-[140px]" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[70%] w-[80%] rotate-[-25deg] rounded-[100%] bg-violet-950/70 blur-[130px]" />
        <div className="absolute left-[15%] top-[30%] h-[40%] w-[50%] rotate-[15deg] rounded-[100%] bg-blue-900/40 blur-[100px]" />
        <div className="absolute right-[15%] bottom-[20%] h-[50%] w-[40%] rotate-[-30deg] rounded-[100%] bg-fuchsia-950/30 blur-[120px]" />
        <div className="absolute left-[40%] top-[60%] h-[30%] w-[40%] rotate-[45deg] rounded-[100%] bg-cyan-950/20 blur-[100px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,18,0.1),rgba(0,0,0,0.98)),radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_80%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.16]" />
      <div className="pointer-events-none absolute bottom-[95px] left-0 h-[285px] w-[170px] bg-[radial-gradient(circle,rgba(28,113,255,0.55)_1px,transparent_1.5px)] bg-[size:9px_9px] opacity-60 [mask-image:linear-gradient(90deg,#000,transparent)]" />
      <div className="pointer-events-none absolute right-0 top-[95px] h-[285px] w-[170px] bg-[radial-gradient(circle,rgba(28,113,255,0.55)_1px,transparent_1.5px)] bg-[size:9px_9px] opacity-60 [mask-image:linear-gradient(270deg,#000,transparent)]" />

      <div className="relative z-10 grid h-[92vh] w-[calc(100vw-96px)] max-w-[1500px] grid-rows-[56px_minmax(0,1fr)] gap-8">
        <div className="flex min-h-0 items-start">
          <header className="nav-border relative h-full w-full overflow-hidden rounded-xl border border-blue-300/35 bg-[#0b1021]/78 backdrop-blur-xl">
            <div className="flex h-full items-center justify-between gap-4 px-5">
              <a href="/" className="flex items-center gap-5">
                <MpLogo />
                <span className="text-[0.95rem] font-semibold text-white">Min Paing Hein</span>
              </a>

              <nav className="hidden h-full items-center gap-12 lg:flex">
                {navItems.map((item) => {
                  const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`
                  const isActive = item === 'Projects'

                  return (
                    <a
                      key={item}
                      href={href}
                      className={`relative flex h-full items-center text-[0.88rem] transition-all duration-200 active:scale-95 ${isActive ? 'text-blue-300 drop-shadow-[0_0_7px_rgba(96,165,250,0.74)]' : 'text-white/90 hover:text-blue-300'
                        }`}
                    >
                      {item}
                      {isActive ? (
                        <>
                          <span className="absolute inset-x-[-10px] bottom-[-1px] h-px bg-gradient-to-r from-transparent via-white to-blue-200/90 shadow-[0_0_6px_rgba(219,234,254,0.95)]" />
                          <span className="absolute bottom-[-4px] left-1/2 h-[6px] w-[48px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.82),rgba(96,165,250,0.40)_34%,transparent_68%)] blur-[2px]" />
                        </>
                      ) : null}
                    </a>
                  )
                })}
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

        <div className="relative flex h-full min-h-0 min-w-0 flex-col pl-8">
          <span className="absolute bottom-10 left-0 top-2 w-px bg-gradient-to-b from-blue-500/70 via-blue-500/25 via-[82%] to-transparent" />
          <span className="absolute left-[-1.5px] top-2 h-[50px] w-[4px] rounded-full border border-blue-400 bg-gradient-to-b from-blue-600 via-white to-blue-600 shadow-[0_0_14px_rgba(59,130,246,1)]" />

          <div className="flex flex-col flex-shrink-0">
            <div className="inline-flex h-[22px] self-start rounded-md border border-blue-500/30 bg-blue-500/8 px-3 text-[0.7rem] text-slate-300 shadow-[inset_0_0_10px_rgba(59,130,246,0.10),0_0_12px_rgba(139,92,246,0.12)]">
              <span className="my-auto mr-2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
              <span className="my-auto">My Work</span>
            </div>

            <h1 className="mt-2 text-[clamp(2.25rem,3.4vw,3.15rem)] font-black leading-[1] tracking-[0] text-white drop-shadow-[0_0_22px_rgba(96,165,250,0.12)]">
              Projects
            </h1>
            <p className="mt-2 text-[0.8rem] leading-[1.35] text-slate-200 max-w-[600px]">
              Here are some of the projects I&apos;ve built. Each project solves real-world
              problems and helped me grow as a developer.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between flex-shrink-0 z-10 pr-2">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = category === activeCategory

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`group relative overflow-hidden rounded-[8px] p-[1px] text-[0.85rem] transition-all duration-300 active:scale-95 ${isActive
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                      : 'bg-blue-500/24 text-slate-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                      }`}
                  >
                    {!isActive && (
                      <span className="absolute inset-0 z-0 rounded-[inherit] bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    )}
                    <div
                      className={`relative z-10 flex h-full w-full items-center justify-center rounded-[7px] px-4 py-1.5 transition-colors duration-300 ${isActive ? 'bg-transparent' : 'bg-[#030612]/80 group-hover:bg-[#0a1022]/80 group-hover:text-white'
                        }`}
                    >
                      {category}
                    </div>
                  </button>
                )
              })}
            </div>

          </div>

          <div className="mt-1 flex-1 min-h-0 overflow-y-auto pr-3 overflow-x-hidden relative z-10 custom-scrollbar">
            <div className="grid gap-5 pt-3 pb-6">
              {visibleProjects.map((project) => (
                <ProjectRow key={project.title} project={project} />
              ))}

              <div className="mt-4 flex items-center justify-center gap-4 text-center">
                <span className="hidden h-px w-full max-w-[250px] bg-gradient-to-r from-transparent via-blue-500/28 to-transparent md:block" />
                <div className="flex shrink-0 items-center gap-3 text-[0.85rem] text-blue-300/80">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>More projects coming soon. Stay tuned!</span>
                </div>
                <span className="hidden h-px w-full max-w-[250px] bg-gradient-to-r from-transparent via-blue-500/28 to-transparent md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function ProjectRow({ project }: { project: ProjectEntry }) {
  const Icon = project.icon
  const iconId = project.title.replace(/\s+/g, '')

  return (
    <article className="group relative flex flex-col xl:flex-row gap-3 overflow-hidden rounded-[12px] bg-blue-500/24 p-[1px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(59,130,246,0.15)] xl:items-center">
      <span className="absolute inset-0 z-0 rounded-[inherit] bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 grid w-full h-full gap-4 rounded-[11px] bg-[#0a1022]/85 p-3 sm:p-4 xl:grid-cols-[200px_minmax(0,1.2fr)_minmax(160px,0.7fr)_140px] xl:items-center">
        <Backlight intensity="subtle" />

        <a
          href={project.href}
          className="overflow-hidden rounded-[10px] border border-blue-500/16 bg-black/35 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.04)] relative z-10 shrink-0"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-[128px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] xl:h-[112px]"
            />
          ) : (
            <div className="flex h-[128px] w-full flex-col items-center justify-center bg-[#030612]/80 transition-transform duration-500 group-hover:scale-[1.025] xl:h-[112px]">
              <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10">
                <Sparkles className="h-3.5 w-3.5 text-blue-400/50" />
              </div>
              <span className="text-[0.6rem] font-semibold tracking-wider text-blue-300/40">PREVIEW PENDING</span>
            </div>
          )}
        </a>

        <div className="flex min-w-0 items-start gap-4 xl:border-r xl:border-blue-500/16 xl:pr-5 relative z-10">
          <div className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-blue-500/14 bg-[linear-gradient(180deg,rgba(33,48,104,0.96),rgba(17,25,55,0.92))] shadow-[inset_0_0_14px_rgba(96,165,250,0.08),0_0_14px_rgba(139,92,246,0.06)] group-hover:scale-[1.05] transition-transform duration-300">
            <span className="absolute -left-2 -top-2 z-0 h-7 w-7 rounded-full bg-blue-500/40 blur-[5px]" />
            <span className="absolute -right-2 -bottom-2 z-0 h-8 w-8 rounded-full bg-indigo-800/60 blur-[6px]" />
            <span className="absolute left-1/2 top-1/2 z-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[4px]" />
            <Icon className="relative z-10 h-[20px] w-[20px]" stroke={`url(#fourTone-${iconId})`}>
              <defs>
                <radialGradient id={`toneA-${iconId}`} cx="20%" cy="20%" r="60%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                </radialGradient>
                <radialGradient id={`toneB-${iconId}`} cx="80%" cy="80%" r="60%">
                  <stop offset="0%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                </radialGradient>
                <radialGradient id={`toneC-${iconId}`} cx="80%" cy="20%" r="60%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id={`toneD-${iconId}`} cx="20%" cy="80%" r="60%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                </radialGradient>

                <pattern id={`fourTone-${iconId}`} width="24" height="24" patternUnits="userSpaceOnUse">
                  <rect width="24" height="24" fill="#8b5cf6" />
                  <rect width="24" height="24" fill={`url(#toneA-${iconId})`} />
                  <rect width="24" height="24" fill={`url(#toneB-${iconId})`} />
                  <rect width="24" height="24" fill={`url(#toneC-${iconId})`} />
                  <rect width="24" height="24" fill={`url(#toneD-${iconId})`} />
                </pattern>
              </defs>
            </Icon>
          </div>

          <div className="min-w-0">
            <h2 className="text-[1.15rem] font-semibold leading-tight text-white">{project.title}</h2>
            <p className="mt-1.5 max-w-[520px] text-[0.85rem] leading-[1.45] text-slate-300 line-clamp-2">
              {project.description}
            </p>
            <span className="mt-2 inline-flex rounded-[6px] border border-blue-400/16 bg-blue-500/10 px-2 py-1 text-[0.75rem] text-blue-300">
              {project.category}
            </span>
          </div>
        </div>

        <div className="xl:border-r xl:border-blue-500/16 xl:px-5 relative z-10">
          <p className="text-[0.85rem] font-medium text-white">Tech Stack</p>
          <div className="mt-2 flex flex-wrap gap-2 max-h-[52px] overflow-hidden">
            {project.stack.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-[6px] border px-2.5 py-1 text-[0.75rem] leading-none ${tag.tone}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 relative z-10">
          <PrimaryAction href={project.href}>View Project</PrimaryAction>
          <SecondaryAction href={project.githubHref} label="GitHub" icon={<Github className="h-3.5 w-3.5" />} />
        </div>
      </div>
    </article>
  )
}

function PrimaryAction({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group relative inline-flex h-[38px] w-full items-center justify-center gap-2 overflow-hidden rounded-[8px] bg-blue-600 px-4 text-[0.85rem] font-medium text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(96,165,250,0.8)] active:scale-95"
    >
      <span className="absolute -left-6 -top-6 z-0 h-[100px] w-[100px] rounded-full bg-violet-500/80 blur-[16px] transition-all duration-500 group-hover:opacity-0" />
      <span className="absolute -right-6 -bottom-6 z-0 h-[100px] w-[100px] rounded-full bg-sky-400/80 blur-[16px] transition-all duration-500 group-hover:opacity-0" />
      <span className="absolute left-1/2 top-1/2 z-0 h-[60px] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/60 blur-[16px] transition-all duration-500 group-hover:opacity-0" />

      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
          <span className="absolute -left-8 -top-8 h-[100px] w-[100px] rounded-full bg-violet-500/90 blur-[16px] opacity-80" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
          <span className="absolute -bottom-8 -right-8 h-[100px] w-[100px] rounded-full bg-sky-400/90 blur-[16px] opacity-80" />
        </div>
        <div className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 animate-pulse">
          <span className="absolute inset-0 rounded-full bg-fuchsia-400/80 blur-[16px] opacity-60" />
        </div>
      </div>
      <span className="relative z-10 whitespace-nowrap transition-transform duration-300 group-hover:-translate-x-0.5">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  )
}

function SecondaryAction({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex h-[34px] w-full items-center justify-center gap-1.5 rounded-[6px] bg-blue-500/24 p-[1px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] active:scale-95"
    >
      <span className="absolute inset-0 z-0 rounded-md bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full w-full items-center justify-center gap-1.5 overflow-hidden rounded-[5px] bg-[#0c1327] text-[0.8rem] font-medium text-blue-100 transition-all duration-300 group-hover:bg-[#0c1327]/40 group-hover:text-white group-hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.4)]">
        <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full" />
        <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-300">{icon}</span>
        <span className="relative z-10 whitespace-nowrap transition-transform duration-300 group-hover:translate-x-0.5">{label}</span>
      </div>
    </a>
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
        <linearGradient id="mpLogoGradientProjects" x1="4" x2="54" y1="8" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="0.48" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="mpLogoGlowProjects" x="-35%" y="-55%" width="170%" height="210%">
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
      <g filter="url(#mpLogoGlowProjects)" transform="skewX(-9)">
        <text
          fill="url(#mpLogoGradientProjects)"
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
