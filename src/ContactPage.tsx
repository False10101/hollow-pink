import {
  BriefcaseBusiness,
  Clock3,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Phone,
} from 'lucide-react'
import { useId } from 'react'
import type { ComponentType, ReactNode, SVGProps } from 'react'
import Dither from './components/Dither'
import { Backlight } from './components/Backlight'
import MyResume from './assets/resume/Min Paing Hein CV.pdf'

const navItems = ['Home', 'Projects', 'Contact']

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: 'minph7102004@gmail.com',
    href: 'mailto:minph7102004@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+66 6 2032 2023',
    href: 'tel:+66620322023',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'github.com/False10101',
    href: 'https://github.com/False10101',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/min-paing-hein-676465245',
    href: 'https://www.linkedin.com/in/min-paing-hein-676465245/',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Bangkok, Thailand',
    href: 'https://maps.google.com/?q=Bangkok,+Thailand',
  },
]

const highlights = [
  {
    icon: Clock3,
    title: 'Availability',
    accent: 'Open to internships',
    description: 'Available for full-time internship opportunities.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Preferred Role',
    accent: 'Full-Stack Web Developer',
    description: 'Passionate about building clean, efficient, and user-friendly web applications.',
  },
  {
    icon: MapPin,
    title: 'Based in',
    accent: 'Bangkok, Thailand',
    description: 'Open to remote work and relocation opportunities.',
  },
]

export default function ContactPage() {
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
                const isActive = item === 'Contact'

                return (
                  <a
                    key={item}
                    href={href}
                    className={`relative flex h-full items-center text-[0.88rem] transition-all duration-200 active:scale-95 ${
                      isActive ? 'text-blue-300 drop-shadow-[0_0_7px_rgba(96,165,250,0.74)]' : 'text-white/90 hover:text-blue-300'
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

        <div className="grid min-h-0 grid-rows-[minmax(0,1fr)_auto] gap-8">
          <section className="grid min-h-0 gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]">
            
            <div className="relative flex h-full min-w-0 flex-col pl-8">
              <span className="absolute bottom-10 left-0 top-2 w-px bg-gradient-to-b from-blue-500/70 via-blue-500/25 via-[82%] to-transparent" />
              <span className="absolute left-[-1.5px] top-2 h-[50px] w-[4px] rounded-full border border-blue-400 bg-gradient-to-b from-blue-600 via-white to-blue-600 shadow-[0_0_14px_rgba(59,130,246,1)]" />

              <div className="flex h-full min-h-0 flex-col">
                <div className="inline-flex h-[22px] self-start rounded-md border border-blue-500/30 bg-blue-500/8 px-3 text-[0.7rem] text-slate-300 shadow-[inset_0_0_10px_rgba(59,130,246,0.10),0_0_12px_rgba(139,92,246,0.12)]">
                  <span className="my-auto mr-2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
                  <span className="my-auto">Get in touch</span>
                </div>

                <h1 className="mt-2 text-[clamp(2.25rem,3.4vw,3.15rem)] font-black leading-[1] tracking-[0] text-white drop-shadow-[0_0_22px_rgba(96,165,250,0.12)]">
                  Contact <span className="bg-gradient-to-b from-[#8b5cf6] via-[#6d7dff] to-[#3b82f6] bg-clip-text text-transparent">Me</span>
                </h1>
                <p className="mt-2 max-w-[480px] text-[0.8rem] leading-[1.35] text-slate-200">
                  I&apos;m open to internship opportunities, web development projects, collaborations,
                  and any questions you might have. Feel free to reach out!
                </p>

                <div className="mt-auto grid min-h-0 shrink-0 grid-cols-1 gap-3">
                  {contactCards.map((card) => (
                    <ContactCard key={card.title} {...card} />
                  ))}
                </div>
              </div>
          </div>

            <div className="flex flex-col justify-end min-h-0 min-w-0">
              <section className="relative flex flex-col overflow-hidden rounded-xl p-[1.5px] shadow-[-12px_-12px_30px_rgba(96,165,250,0.1),12px_12px_30px_rgba(217,70,239,0.1),0_5px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(96,165,250,0.6)_0%,rgba(139,92,246,0.5)_15%,#10162c_35%,#10162c_65%,rgba(236,72,153,0.5)_85%,rgba(217,70,239,0.6)_100%)] opacity-50" />
                <div className="absolute -left-8 -top-8 z-0 h-40 w-40 rounded-full bg-blue-500/50 blur-[24px]" />
                <div className="absolute -right-8 -bottom-8 z-0 h-40 w-40 rounded-full bg-fuchsia-500/50 blur-[24px]" />
                <div className="relative z-10 flex flex-col h-full rounded-[10.5px] bg-[#0a1022] p-4 sm:p-5">
                  <Backlight />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_0%,rgba(48,110,255,0.12),transparent_26%),radial-gradient(circle_at_95%_100%,rgba(168,64,255,0.10),transparent_24%)]" />

                  <form className="relative z-10 flex flex-col gap-3.5" onSubmit={(event) => event.preventDefault()}>
              <FormRow label="Name">
                    <input type="text" placeholder="Your name" className={`${inputClassName} h-[38px]`} />
              </FormRow>
              <FormRow label="Email">
                    <input type="email" placeholder="your.email@example.com" className={`${inputClassName} h-[38px]`} />
              </FormRow>
              <FormRow label="Subject">
                    <input type="text" placeholder="Subject of your message" className={`${inputClassName} h-[38px]`} />
              </FormRow>
              <FormRow label="Message" alignTop>
                <textarea
                  placeholder="Write your message here..."
                      className={`${inputClassName} h-[100px] resize-none py-2.5`}
                />
              </FormRow>

                  <div>
                <button
                  type="submit"
                      className="group relative inline-flex h-[38px] w-full items-center justify-center gap-3 overflow-hidden rounded-[8px] bg-blue-600 px-5 text-[0.88rem] font-medium text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(96,165,250,0.8)] active:scale-[0.99]"
                >
                  {/* Vibrant cloudy resting state blobs */}
                      <span className="absolute -left-12 -top-12 z-0 h-[250px] w-[250px] rounded-full bg-violet-500/80 blur-[32px] transition-all duration-500 group-hover:opacity-0" />
                      <span className="absolute -right-12 -bottom-12 z-0 h-[250px] w-[250px] rounded-full bg-sky-400/80 blur-[32px] transition-all duration-500 group-hover:opacity-0" />
                      <span className="absolute left-1/2 top-1/2 z-0 h-[200px] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/60 blur-[32px] transition-all duration-500 group-hover:opacity-0" />

                  {/* Active hovering continuous blobs */}
                  <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
                          <span className="absolute -left-16 -top-16 h-[350px] w-[350px] rounded-full bg-violet-500/90 blur-[40px] opacity-80" />
                    </div>
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                          <span className="absolute -bottom-16 -right-16 h-[350px] w-[350px] rounded-full bg-sky-400/90 blur-[40px] opacity-80" />
                    </div>
                        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 animate-pulse">
                          <span className="absolute inset-0 rounded-full bg-fuchsia-400/80 blur-[32px] opacity-60" />
                    </div>
                  </div>

                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">Send Message</span>
                      <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                    <div className="mt-3 flex items-center justify-center gap-2 text-[0.78rem] text-slate-400">
                      <Clock3 className="h-3.5 w-3.5" />
                  <span>Usually replies within 1-2 days.</span>
                </div>
              </div>
            </form>
                </div>
          </section>
            </div>
        </section>

          <section className="tech-tile-border relative min-h-0 min-w-0 grid grid-cols-1 gap-3 overflow-hidden rounded-xl border border-blue-500/24 bg-[#0a1022]/76 p-3 shadow-[0_5px_20px_rgba(0,0,0,0.3)] backdrop-blur-xl md:grid-cols-3 md:gap-0 md:p-4">
          <Backlight intensity="subtle" />
          {highlights.map((item, index) => (
            <div
              key={item.title}
                className={`relative z-10 flex min-h-0 min-w-0 items-start gap-3.5 ${
                  index !== highlights.length - 1 ? 'md:border-r md:border-blue-500/16 md:pr-4' : ''
                } ${index !== 0 ? 'md:pl-4' : ''}`}
            >
                <CloudyIconBox icon={item.icon} className="h-[44px] w-[44px] rounded-[12px]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.85rem] font-semibold text-white">{item.title}</p>
                  <p className="mt-0.5 truncate text-[0.8rem] font-medium text-[#89a0ff]">{item.accent}</p>
                  <p className="mt-1.5 line-clamp-2 text-[0.75rem] leading-[1.4] text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
        </div>
      </div>
    </main>
  )
}

const inputClassName =
  'w-full rounded-[8px] border border-blue-500/20 bg-[#030612]/50 px-3 text-[0.85rem] text-white shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-400/50 focus:bg-[#0a1022] focus:shadow-[inset_0_2px_8px_rgba(0,0,0,0.3),0_0_16px_rgba(59,130,246,0.1)]'

function FormRow({
  label,
  children,
  alignTop,
}: {
  label: string
  children: ReactNode
  alignTop?: boolean
}) {
  return (
    <label className="grid gap-2 md:grid-cols-[80px_minmax(0,1fr)] md:gap-4">
      <span className={`text-[0.88rem] font-medium text-slate-200 ${alignTop ? 'md:pt-2' : 'md:pt-2.5'}`}>
        {label}
      </span>
      {children}
    </label>
  )
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  value: string
  href: string
}) {
  const isMail = href.startsWith('mailto:')

  return (
    <a
      href={href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      className="group relative flex min-h-[64px] items-center gap-3.5 overflow-hidden rounded-[12px] bg-blue-500/24 p-[1px] shadow-[0_5px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] active:translate-y-0 active:scale-[0.98]"
    >
      <span className="absolute inset-0 z-0 rounded-[inherit] bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full w-full items-center gap-3.5 rounded-[11px] bg-[#0a1022]/85 px-3 py-3">
        <Backlight intensity="subtle" />
        <CloudyIconBox icon={icon} className="h-[36px] w-[36px] rounded-[10px] transition-transform duration-300 group-hover:scale-[1.05]" />
        <div className="relative z-10 min-w-0">
          <p className="text-[0.88rem] font-medium leading-none text-white">{title}</p>
          <p className="mt-1.5 truncate text-[0.78rem] text-slate-300">{value}</p>
        </div>
      </div>
    </a>
  )
}

function CloudyIconBox({ icon: Icon, className }: { icon: ComponentType<SVGProps<SVGSVGElement>>; className: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-blue-500/14 bg-[linear-gradient(180deg,rgba(33,48,104,0.96),rgba(17,25,55,0.92))] shadow-[inset_0_0_14px_rgba(96,165,250,0.08),0_0_14px_rgba(139,92,246,0.06)] ${className}`}>
      <span className="absolute -left-2 -top-2 z-0 h-6 w-6 rounded-full bg-blue-500/40 blur-[5px]" />
      <span className="absolute -right-2 -bottom-2 z-0 h-7 w-7 rounded-full bg-indigo-800/60 blur-[6px]" />
      <span className="absolute left-1/2 top-1/2 z-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[4px]" />
      <Icon className="relative z-10 h-[55%] w-[55%] drop-shadow-sm" stroke={`url(#fourTone-${id})`}>
        <defs>
          <radialGradient id={`toneA-${id}`} cx="20%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`toneB-${id}`} cx="80%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`toneC-${id}`} cx="80%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`toneD-${id}`} cx="20%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>

          <pattern id={`fourTone-${id}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="#8b5cf6" />
            <rect width="24" height="24" fill={`url(#toneA-${id})`} />
            <rect width="24" height="24" fill={`url(#toneB-${id})`} />
            <rect width="24" height="24" fill={`url(#toneC-${id})`} />
            <rect width="24" height="24" fill={`url(#toneD-${id})`} />
          </pattern>
        </defs>
      </Icon>
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
        <linearGradient id="mpLogoGradientContact" x1="4" x2="54" y1="8" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="0.48" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="mpLogoGlowContact" x="-35%" y="-55%" width="170%" height="210%">
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
      <g filter="url(#mpLogoGlowContact)" transform="skewX(-9)">
        <text
          fill="url(#mpLogoGradientContact)"
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
