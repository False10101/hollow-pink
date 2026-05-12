import { lazy, Suspense, useMemo, useState, useId } from 'react'
import type { ComponentType, ReactNode, SVGProps } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Presentation,
  Sparkles,
  UserRound,
  X,
  Terminal,
  Database,
  Zap,
} from 'lucide-react'
import { Backlight } from './components/Backlight'
import MyResume from './assets/resume/Min Paing Hein CV.pdf'
const Dither = lazy(() => import('./components/Dither'))

import dashboardShot from '../docs/images/syzygy/dashboard-shot.avif'
import newscanShot from '../docs/images/syzygy/newscan-shot.avif'
import analysisShot from '../docs/images/syzygy/analysis-shot.avif'
import explanationShot from '../docs/images/syzygy/explanation-shot.avif'
import profileShot from '../docs/images/syzygy/profile-shot.avif'

import PrimaPage1 from './assets/Screenshots/Prima/1.avif'
import PrimaPage2 from './assets/Screenshots/Prima/2.avif'
import PrimaPage3 from './assets/Screenshots/Prima/3.avif'
import PrimaPage4 from './assets/Screenshots/Prima/4.avif'
import PrimaPage5 from './assets/Screenshots/Prima/5.avif'
import hero from '../docs/images/eidolon/hero.avif'
import noteList from '../docs/images/eidolon/note-list.avif'
import noteNew1 from '../docs/images/eidolon/note-new-1.avif'
import noteNew2 from '../docs/images/eidolon/note-new-2.avif'
import noteViewer from '../docs/images/eidolon/note-viewer.avif'
import noteFullscreen from '../docs/images/eidolon/note-fullscreen.avif'
import transcriptorUpload from '../docs/images/eidolon/transcriptor-upload.avif'
import transcriptorViewer from '../docs/images/eidolon/transcriptor-viewer.avif'
import audioConverter from '../docs/images/eidolon/audio-converter.avif'
import examPrepNew from '../docs/images/eidolon/exam-prep-new.avif'
import examPrepList from '../docs/images/eidolon/exam-prep-list.avif'
import examPrepViewer from '../docs/images/eidolon/exam-prep-viewer.avif'
import examPrepFullscreen from '../docs/images/eidolon/exam-prep-fullscreen.avif'
import groups from '../docs/images/eidolon/groups.avif'
import topup from '../docs/images/eidolon/topup.avif'
import admin from '../docs/images/eidolon/admin.avif'

type ProjectRecord = {
  title: string
  accent: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  liveHref?: string
  githubHref: string
  stack: { label: string; tone: string }[]
  details: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string; value: ReactNode }[]
  slides: { title: string; description: string; image?: string; bullets: string[] }[]
  bottomCards?: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; description: string }[]
}

const navItems = ['Home', 'Projects', 'Contact']

const projects: Record<string, ProjectRecord> = {
  eidolon: {
    title: 'Eidolon',
    accent: 'Academic AI Suite',
    description:
      'AI-powered study platform for transcription, lecture-note generation, exam prep, group collaboration, credit billing, and admin operations.',
    icon: GraduationCap,
    liveHref: 'https://eidolon.pyrx.net',
    githubHref: 'https://github.com/False10101/eidolon',
    stack: [
      { label: 'Next.js 15', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/18' },
      { label: 'React 19', tone: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/18' },
      { label: 'Tailwind CSS v4', tone: 'text-teal-300 bg-teal-500/10 border-teal-400/16' },
      { label: 'PostgreSQL', tone: 'text-indigo-200 bg-indigo-500/10 border-indigo-400/16' },
      { label: 'Redis + BullMQ', tone: 'text-rose-300 bg-rose-500/10 border-rose-400/16' },
      { label: 'Auth0', tone: 'text-orange-200 bg-orange-500/10 border-orange-400/16' },
      { label: 'Stripe', tone: 'text-violet-300 bg-violet-500/10 border-violet-400/16' },
      { label: 'Cloudflare R2', tone: 'text-amber-200 bg-amber-500/10 border-amber-400/16' },
      { label: 'FFmpeg', tone: 'text-green-300 bg-green-500/10 border-green-400/16' },
      { label: 'Fireworks AI', tone: 'text-pink-200 bg-pink-500/10 border-pink-400/16' },
      { label: 'DeepInfra Whisper', tone: 'text-fuchsia-200 bg-fuchsia-500/10 border-fuchsia-400/16' },
    ],
    details: [
      { icon: GraduationCap, label: 'Project Type', value: 'Full-Stack Web App' },
      { icon: UserRound, label: 'Role', value: 'Full-Stack Developer' },
      { icon: CalendarDays, label: 'Version', value: 'Eidolon v2.0.1' },
      {
        icon: CheckCircle2,
        label: 'Status',
        value: (
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Live / Ongoing
          </span>
        ),
      },
    ],
    slides: [
      {
        title: 'Home Dashboard',
        description:
          'The main dashboard gives users a quick view of balance, recent activity, token usage, and the full workflow from media upload to final study materials.',
        image: hero,
        bullets: [
          'Shows balance, note count, estimated remaining generations, and total token usage.',
          'Displays recent activity with direct access to notes, transcripts, and exam prep outputs.',
          'Introduces the core workflow: Audio Converter, Transcriptor, Notes, and Exam Prep.',
          'Summarizes current-month usage across the platform’s main study tools.',
        ],
      },
      {
        title: 'Notes Library',
        description:
          'The notes workspace organizes both personal and group-generated notes, with style labels, token tiers, credit costs, and locked shared content.',
        image: noteList,
        bullets: [
          'Separates individual notes from group notes in the same interface.',
          'Surfaces note style, generation tier, credit charge, and creation date at a glance.',
          'Supports locked group notes that can be unlocked instead of regenerated.',
          'Designed around lecture-to-note workflows rather than generic file storage.',
        ],
      },
      {
        title: 'Create Note — Style Setup',
        description:
          'Users can choose how detailed their generated notes should be, with clear style definitions and cost expectations before generation starts.',
        image: noteNew1,
        bullets: [
          'Includes Exam Note, Standard, and Textbook output modes.',
          'Exam Note is compact, Standard is recap-focused, and Textbook is the most detailed.',
          'Pricing scales with the depth and token intensity of the generated note.',
          'Generation progress is tracked through reading, generating, and saving stages.',
        ],
      },
      {
        title: 'Create Note — Source & Metadata',
        description:
          'The note generator accepts uploaded source files or saved transcripts, then lets users define course naming and output language.',
        image: noteNew2,
        bullets: [
          'Supports both direct file upload and transcript-based note generation.',
          'Requires a course name before generation can begin.',
          'Allows auto-detect or manual output language selection.',
          'Can generate through either individual or group note flows.',
        ],
      },
      {
        title: 'Note Viewer',
        description:
          'Generated notes open in a full reader/editor with metadata, markdown rendering, inline editing, copy actions, and regeneration controls.',
        image: noteViewer,
        bullets: [
          'Renders completed notes as structured Markdown content.',
          'Shows note metadata such as style, charge amount, created date, and tier.',
          'Supports editing the note title and content after generation.',
          'Includes copy, regenerate, delete, and unlock-related actions.',
        ],
      },
      {
        title: 'Note Fullscreen Reader',
        description:
          'A fullscreen reading mode turns generated notes into a cleaner, distraction-free study surface for long-form review.',
        image: noteFullscreen,
        bullets: [
          'Focuses entirely on note reading without surrounding management controls.',
          'Works especially well for long textbook-style lecture notes.',
          'Includes scroll-based reading progress behavior.',
          'Acts as a dedicated study view alongside the editable note page.',
        ],
      },
      {
        title: 'Transcriptor Upload',
        description:
          'The transcription tool accepts large audio uploads, lets users pick between faster and higher-quality Whisper models, and estimates cost from media duration.',
        image: transcriptorUpload,
        bullets: [
          'Accepts uploads up to 500 MB and rejects audio longer than 10 hours.',
          'Supports mp3, wav, m4a, mp4, ogg, flac, aac, and webm inputs.',
          'Offers Whisper Large v3 Turbo and Whisper Large v3 Premium modes.',
          'Can return either plain text or timestamped transcript output.',
        ],
      },
      {
        title: 'Transcript Viewer',
        description:
          'Completed transcripts are stored with detailed metadata, readable output formatting, and export actions for reuse in later study workflows.',
        image: transcriptorViewer,
        bullets: [
          'Displays transcript label, model used, duration, and output format.',
          'Supports readable timestamp reconstruction when verbose JSON output is used.',
          'Includes quick copy and text download actions.',
          'Feeds directly into note generation and broader study pipelines.',
        ],
      },
      {
        title: 'Audio Converter',
        description:
          'The audio converter extracts sound from video, supports trimming and bitrate selection, and can optionally continue straight into transcription.',
        image: audioConverter,
        bullets: [
          'Accepts mp4, mov, mkv, avi, and webm video files.',
          'Exports MP3, WAV, or M4A with selectable bitrate presets.',
          'Supports optional start/end trimming before conversion.',
          'Can download only, transcribe only, or perform both in one queued flow.',
        ],
      },
      {
        title: 'Create Exam Prep',
        description:
          'Exam prep generation builds practice material from saved notes or uploaded text files, with configurable question types and difficulty levels.',
        image: examPrepNew,
        bullets: [
          'Uses either stored notes or uploaded plain-text files as source material.',
          'Supports True/False, MCQ, Theory, Scenario, and Calculation question types.',
          'Lets users choose Easy, Normal, or Hard difficulty before generation.',
          'Tracks multi-step generation including reading, writing solutions, and saving.',
        ],
      },
      {
        title: 'Exam Prep Library',
        description:
          'The exam prep index organizes individual and shared practice sets with difficulty labels, question-type badges, unlock pricing, and generation metadata.',
        image: examPrepList,
        bullets: [
          'Separates group exam prep from personal exam prep outputs.',
          'Shows question-type chips instead of vague generic categories.',
          'Surfaces difficulty, token tier, credit cost, and timestamps in the list.',
          'Supports unlockable group exam prep for eligible members.',
        ],
      },
      {
        title: 'Exam Prep Viewer',
        description:
          'The exam prep viewer combines metadata, question review, answer reveals, explanations, and misconception guidance in a dedicated study interface.',
        image: examPrepViewer,
        bullets: [
          'Supports MCQ, T/F, theory, scenario, and calculation layouts.',
          'MCQs can reveal correct answers and option-level explanations.',
          'Non-MCQ questions can show solutions, answer steps, and misconceptions.',
          'Questions can include lecture-source tags, topics, and cross-lecture markers.',
        ],
      },
      {
        title: 'Exam Prep Fullscreen Reader',
        description:
          'A fullscreen revision mode presents generated practice packs in a cleaner long-form format for uninterrupted study sessions.',
        image: examPrepFullscreen,
        bullets: [
          'Optimized for reading through a full question set in sequence.',
          'Helps turn generated practice content into a revision sheet.',
          'Useful for longer theory and scenario-heavy outputs.',
          'Complements the standard interactive solution-toggle view.',
        ],
      },
      {
        title: 'Group Workspaces',
        description:
          'Group workspaces allow students to collaborate through invite codes, shared tiers, member management, and member-based cost splitting.',
        image: groups,
        bullets: [
          'Includes Small, Study, Class, and Faculty tiers with capacities of 5, 10, 25, and 50 members.',
          'Creates a unique 7-character invite code for each group.',
          'Splits generation costs across members, with generator discounts built into the model.',
          'Supports rename, join, leave, kick, and owner/member role management flows.',
        ],
      },
      {
        title: 'Top-Up & Billing',
        description:
          'The billing system converts payments into credits, supports package bonuses and custom amounts, and uses Stripe to keep account balances funded.',
        image: topup,
        bullets: [
          'Preset packages include 120, 500, 1,100, and 3,000 credit options.',
          'Custom top-ups are converted at 100 credits per $1 when no preset package is used.',
          'Stripe checkout and webhook confirmation handle crediting after payment.',
          'Shows projected balance, local-currency estimates, and payment-method support.',
        ],
      },
      {
        title: 'Admin Dashboard',
        description:
          'The admin panel provides platform-level visibility into usage, profits, payouts, user behavior, and service performance across the app.',
        image: admin,
        bullets: [
          'Tracks total users, new monthly users, active weekly users, bank inflow, and platform profit.',
          'Breaks down revenue and API cost across notes, transcripts, and exam prep.',
          'Shows user balances, detailed activity logs, and referral-related performance.',
          'Includes service usage summaries for notes, transcripts, exam prep, and audio conversion.',
        ],
      },
    ],
    bottomCards: [
      {
        icon: Layers3,
        title: 'What I Built',
        description:
          'A full academic AI workflow covering media ingestion, transcription, note generation, exam prep, billing, collaboration, and admin tooling.',
      },
      {
        icon: Sparkles,
        title: 'Key Features',
        description:
          'Whisper transcription, AI-generated notes, configurable practice questions, group cost sharing, Stripe top-ups, and detailed activity tracking.',
      },
      {
        icon: Code2,
        title: 'Tech Stack Overview',
        description:
          'Built with Next.js, React, PostgreSQL, Redis/BullMQ, Cloudflare R2, Auth0, Stripe, FFmpeg, and multiple AI model providers.',
      },
    ],
  },
syzygy: {
  title: 'Syzygy',
  accent: 'API Drift Detection',
  description:
    'Static analysis platform for detecting API drift between frontend API calls and backend route definitions across GitHub repositories before issues reach runtime.',
    icon: Terminal,
  liveHref: 'https://syzygy.minpainghein.com',
  githubHref: 'https://github.com/False10101/syzygy',
  stack: [
    { label: 'React', tone: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/18' },
    { label: 'TypeScript', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/16' },
    { label: 'Vite', tone: 'text-violet-300 bg-violet-500/10 border-violet-400/16' },
    { label: 'Tailwind CSS', tone: 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-400/16' },
    { label: 'Node.js', tone: 'text-green-300 bg-green-500/10 border-green-400/16' },
    { label: 'Express.js', tone: 'text-sky-300 bg-blue-500/10 border-blue-400/16' },
    { label: 'MySQL', tone: 'text-amber-300 bg-amber-500/10 border-amber-400/16' },
    { label: 'GitHub API', tone: 'text-slate-200 bg-slate-500/10 border-slate-300/12' },
    { label: 'AES-256 Encryption', tone: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/16' },
  ],
  details: [
      { icon: Cpu, label: 'Project Type', value: 'Developer Tool' },
    { icon: UserRound, label: 'Role', value: 'Full-Stack Developer' },
    { icon: CalendarDays, label: 'Timeline', value: 'Dec 2025 – Jan 2026' },
    {
      icon: CheckCircle2,
      label: 'Status',
      value: (
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          Completed
        </span>
      ),
    },
  ],
  slides: [
    {
      title: 'Command Center',
      description:
        'Monitor scan activity, average health score, active drift alerts, and recent repository analysis from a single operational dashboard.',
      image: dashboardShot,
      bullets: [
        'High-level system overview on first load.',
        'Recent analysis activity with health metrics.',
        'Fast visibility into active API drift issues.',
        'Designed like a live monitoring console.',
      ],
    },
    {
      title: 'Scan Configuration',
      description:
        'Set up a scan by selecting environments, repositories, and branches from connected GitHub credentials before running alignment analysis.',
      image: newscanShot,
      bullets: [
        'GitHub token-backed repository discovery.',
        'Separate backend and frontend source selection.',
        'Branch targeting for different environments.',
        'Supports flexible full-stack scan setup.',
      ],
    },
    {
      title: 'Drift Analysis',
      description:
        'Compare backend route definitions against frontend API consumption and evaluate overall alignment with a computed project health score.',
      image: analysisShot,
      bullets: [
        'Highlights matched, mismatched, and orphaned routes.',
        'Surfaces method mismatches and path drift clearly.',
        'Shows backend definitions beside frontend usage.',
        'Useful for fast API consistency checks.',
      ],
    },
    {
      title: 'Drift Explanation',
      description:
        'Inspect route mismatches in detail with side-by-side code context, issue diagnostics, and a suggested patch direction for resolution.',
      image: explanationShot,
      bullets: [
        'Code-level comparison for drift debugging.',
        'Explains likely root cause and impact.',
        'Provides a copyable remediation suggestion.',
        'Built to speed up alignment fixes.',
      ],
    },
    {
      title: 'Profile & Secure Keychain',
      description:
        'Manage account details, rotate passwords, and securely store encrypted GitHub personal access tokens used for scanning.',
      image: profileShot,
      bullets: [
        'Profile editing and password update controls.',
        'Encrypted GitHub token management interface.',
        'Token verification before secure persistence.',
        'Centralized control area for user access management.',
      ],
    },
  ],
  bottomCards: [
    {
      icon: Layers3,
      title: 'What I Built',
      description:
        'A full-stack developer tool that statically analyzes repositories to detect API drift between frontend requests and backend definitions.',
    },
    {
      icon: Sparkles,
      title: 'Key Features',
      description:
        'Repository scanning, route extraction, fuzzy matching, drift diagnostics, and encrypted token storage for secure GitHub integration.',
    },
    {
      icon: Code2,
      title: 'Tech Stack Overview',
      description:
        'A modern React frontend with a Node and Express backend, MySQL persistence, GitHub API integration, and custom alignment logic.',
    },
  ],
},
  prima: {
    title: 'Data Refinery',
    accent: 'Prima',
    description:
      'Visual data cleaning and pipeline generation tool for data scientists. From raw CSV to production-ready Python code in minutes.',
    icon: Database,
    liveHref: 'https://prima.minpainghein.com',
    githubHref: 'https://github.com/False10101/prima',
    stack: [
      { label: 'React', tone: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/18' },
      { label: 'TypeScript', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/18' },
      { label: 'FastAPI', tone: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/18' },
      { label: 'Tailwind CSS', tone: 'text-pink-300 bg-pink-500/10 border-pink-400/16' },
      { label: 'Pandas & NumPy', tone: 'text-orange-300 bg-orange-500/10 border-orange-400/18' },
      { label: 'scikit-learn', tone: 'text-purple-300 bg-purple-500/10 border-purple-400/16' },
    ],
    details: [
      { icon: Code2, label: 'Project Type', value: 'Full-Stack Data Science Tool' },
      { icon: UserRound, label: 'Role', value: 'Full-Stack Developer' },
      { icon: CalendarDays, label: 'Timeline', value: 'Dec 2025 – Jan 2026' },
      {
        icon: CheckCircle2,
        label: 'Status',
        value: (
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Completed
          </span>
        ),
      },
    ],
    slides: [
      {
        title: 'Data Upload & Audit',
        description:
          'Upload CSV files and instantly audit data quality with comprehensive statistics and profiling.',
        image: PrimaPage1,
        bullets: [
          'Drag-and-drop CSV file upload',
          'Automatic data profiling and quality checks',
          'Row and column statistics at a glance',
          'Desktop-optimized for complex visualizations',
        ],
      },
      {
        title: 'Visual Recipe Builder',
        description:
          'Create data transformation recipes visually without writing code, then export as Python.',
        image: PrimaPage2,
        bullets: [
          'Drag-and-drop transformation steps',
          'Support for cleaning, encoding, and scaling operations',
          'Real-time preview of transformations',
          'Build complex pipelines intuitively',
        ],
      },
      {
        title: 'Code Generation',
        description:
          'Generate production-ready Python code from your visual recipes with sklearn pipelines.',
        image: PrimaPage3,
        bullets: [
          'Instant Python code generation',
          'Scikit-learn ColumnTransformer integration',
          'Copy-paste ready for your projects',
          'Includes pip requirements and setup instructions',
        ],
      },
      {
        title: 'Data Transformation Pipeline',
        description:
          'Apply multiple transformation operations including imputation, scaling, and encoding.',
        image: PrimaPage4,
        bullets: [
          'Missing value imputation strategies',
          'Feature scaling and normalization',
          'Categorical encoding methods',
          'Chained transformation workflows',
        ],
      },
      {
        title: 'Session Management',
        description:
          'Automatic cleanup and session management to keep the platform performant and secure.',
        image: PrimaPage5,
        bullets: [
          'Background session cleanup jobs',
          'Automatic temporary file removal',
          'File size limits for data safety',
          'Optimized for batch processing',
        ],
      },
    ],
    bottomCards: [
      {
        icon: Database,
        title: 'What I Built',
        description:
          'A desktop data science tool that bridges the gap between data exploration and ML pipeline development.',
      },
      {
        icon: Zap,
        title: 'Key Features',
        description:
          'CSV upload, data auditing, visual recipe builder, code generation, and sklearn pipeline exports.',
      },
      {
        icon: Code2,
        title: 'Tech Stack Overview',
        description:
          'Modern React frontend with FastAPI backend, leveraging pandas and scikit-learn for data processing.',
      },
    ],
  },
  'rehearse-ai': {
    title: 'Rehearse AI',
    accent: 'Presentation Coach',
    description:
      'AI presentation coach that gives real-time feedback on posture, gestures, and speech using computer vision and LLMs. Built as capstone project.',
    icon: Presentation,
    githubHref: 'https://github.com/False10101/rehearse-ai',
    stack: [
      { label: 'Next.js', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/18' },
      { label: 'FastAPI', tone: 'text-green-300 bg-green-500/10 border-green-400/16' },
      { label: 'MediaPipe', tone: 'text-teal-300 bg-teal-500/10 border-teal-400/16' },
      { label: 'YOLO', tone: 'text-yellow-300 bg-yellow-500/10 border-yellow-400/16' },
      { label: 'Groq Whisper', tone: 'text-pink-200 bg-pink-500/10 border-pink-400/16' },
      { label: 'Azure TTS', tone: 'text-sky-300 bg-sky-500/10 border-sky-400/18' },
    ],
    details: [
      { icon: Presentation, label: 'Project Type', value: 'AI Coach Application' },
      { icon: UserRound, label: 'Role', value: 'Full-Stack Developer' },
      { icon: CalendarDays, label: 'Timeline', value: 'Capstone Project' },
      {
        icon: CheckCircle2,
        label: 'Status',
        value: (
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
            In Progress
          </span>
        ),
      },
    ],
    slides: [
      {
        title: 'Development in Progress',
        description: 'Detailed previews and workflow walkthroughs are currently being prepared as the project nears completion.',
        bullets: [
          'UI polishing and component integration in progress.',
          'Connecting Groq Whisper and Azure TTS pipelines.',
          'Refining computer vision models for posture and gesture analysis.'
        ],
      }
    ],
    bottomCards: [
      { icon: Layers3, title: 'What I am Building', description: 'A comprehensive AI presentation coach offering real-time feedback using vision and language models.' },
      { icon: Sparkles, title: 'Key Features', description: 'Real-time gesture tracking, speech-to-text analysis, dynamic feedback generation, and progress tracking.' },
      { icon: Code2, title: 'Tech Stack Overview', description: 'Next.js frontend with FastAPI backend, powered by MediaPipe, YOLO, Groq Whisper, and Azure TTS.' }
    ]
  },
  cantarella: {
    title: 'Cantarella',
    accent: 'AI Assistant',
    description:
      'Personal AI assistant with long-term memory via RAG. Knows your context, remembers across conversations, runs fully self-hosted.',
    icon: Bot,
    githubHref: 'https://github.com/False10101/Cantarella-Revamped',
    stack: [
      { label: 'Next.js', tone: 'text-blue-300 bg-blue-500/10 border-blue-400/18' },
      { label: 'Express', tone: 'text-slate-300 bg-slate-500/10 border-slate-300/12' },
      { label: 'DeepSeek', tone: 'text-indigo-300 bg-indigo-500/10 border-indigo-400/16' },
      { label: 'pgvector', tone: 'text-sky-300 bg-sky-500/10 border-sky-400/18' },
      { label: 'BullMQ', tone: 'text-red-300 bg-red-500/10 border-red-400/16' },
      { label: 'Upstash', tone: 'text-green-300 bg-green-500/10 border-green-400/16' },
    ],
    details: [
      { icon: Bot, label: 'Project Type', value: 'Personal AI Agent' },
      { icon: UserRound, label: 'Role', value: 'Full-Stack Developer' },
      { icon: CalendarDays, label: 'Timeline', value: 'Ongoing' },
      {
        icon: CheckCircle2,
        label: 'Status',
        value: (
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
            In Progress
          </span>
        ),
      },
    ],
    slides: [
      {
        title: 'Development in Progress',
        description: 'Detailed previews and workflow walkthroughs are currently being prepared.',
        bullets: [
          'RAG pipeline optimization using pgvector.',
          'Long-term memory implementation and context injection.',
          'Self-hosted infrastructure and queue management setup.'
        ],
      }
    ],
    bottomCards: [
      { icon: Layers3, title: 'What I am Building', description: 'A deeply personal, context-aware AI assistant capable of maintaining long-term memory across sessions.' },
      { icon: Sparkles, title: 'Key Features', description: 'Self-hosted infrastructure, vector-based RAG memory, persistent conversational context, and custom tool usage.' },
      { icon: Code2, title: 'Tech Stack Overview', description: 'Next.js, Express, DeepSeek, pgvector for embeddings, and BullMQ with Upstash for background processing.' }
    ]
  }
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = id ? projects[id.toLowerCase()] : null
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const activeSlide = useMemo(() => {
    if (!project) return null
    return project.slides[currentSlide] ?? project.slides[0]
  }, [currentSlide, project])

  if (!project || !activeSlide) {
    return <Navigate to="/projects" replace />
  }

  const showNext = () => {
    setCurrentSlide((prev) => (prev + 1) % project.slides.length)
  }

  const showPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length)
  }

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

      <div className="relative z-10 grid h-[92vh] w-[calc(100vw-96px)] max-w-[1500px] grid-rows-[56px_minmax(0,1fr)_auto] gap-6">
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

        <div className="grid min-h-0 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          
          <div className="relative flex h-full min-w-0 flex-col pl-8">
            <span className="absolute bottom-10 left-0 top-2 w-px bg-gradient-to-b from-blue-500/70 via-blue-500/25 via-[82%] to-transparent" />
            <span className="absolute left-[-1.5px] top-2 h-[50px] w-[4px] rounded-full border border-blue-400 bg-gradient-to-b from-blue-600 via-white to-blue-600 shadow-[0_0_14px_rgba(59,130,246,1)]" />

            <div className="flex h-full min-h-0 flex-col py-2">
              <div>
                <div className="inline-flex h-[22px] self-start rounded-md border border-blue-500/30 bg-blue-500/8 px-3 text-[0.7rem] text-slate-300 shadow-[inset_0_0_10px_rgba(59,130,246,0.10),0_0_12px_rgba(139,92,246,0.12)]">
                  <span className="my-auto mr-2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
                  <span className="my-auto">Project Detail</span>
                </div>

                <h1 className="mt-3 text-[clamp(2.5rem,3.5vw,3.25rem)] font-black leading-[1] tracking-[0] text-white drop-shadow-[0_0_22px_rgba(96,165,250,0.12)]">
                  {project.title}{' '}
                  <span className="bg-gradient-to-b from-[#8b5cf6] via-[#6d7dff] to-[#3b82f6] bg-clip-text text-transparent">
                    {project.accent}
                  </span>
                </h1>
                <p className="mt-3 max-w-[500px] text-[0.85rem] leading-[1.45] text-slate-200">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 shrink-0">
                {project.liveHref && (
                  <PrimaryAction href={project.liveHref} label="Live Demo" icon={<ArrowUpRight className="h-4 w-4" />} />
                )}
                <SecondaryAction href={project.githubHref} label="GitHub" icon={<Github className="h-4 w-4" />} />
                <SecondaryAction href="/projects" label="Back" icon={<ArrowLeft className="h-4 w-4" />} />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 shrink-0">
                {project.details.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-3 rounded-[10px] border border-blue-500/20 bg-[#030612]/50 p-2.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]">
                    <CloudyIconBox icon={detail.icon} className="h-[34px] w-[34px] rounded-[8px]" />
                    <div className="min-w-0">
                      <p className="text-[0.65rem] text-slate-400 uppercase tracking-wider">{detail.label}</p>
                      <p className="truncate text-[0.75rem] font-medium text-white">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2 shrink-0">
                <p className="w-full text-[0.7rem] font-medium text-slate-400 uppercase tracking-wider mb-0.5">Tech Stack</p>
                {project.stack.map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded-[6px] border px-2.5 py-1 text-[0.72rem] leading-none ${tag.tone}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col min-h-0 min-w-0">
            <section className="relative flex flex-col min-h-0 h-full overflow-hidden rounded-xl p-[1.5px] shadow-[-12px_-12px_30px_rgba(96,165,250,0.1),12px_12px_30px_rgba(217,70,239,0.1),0_5px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(96,165,250,0.6)_0%,rgba(139,92,246,0.5)_15%,#10162c_35%,#10162c_65%,rgba(236,72,153,0.5)_85%,rgba(217,70,239,0.6)_100%)] opacity-50" />
              <div className="absolute -left-8 -top-8 z-0 h-40 w-40 rounded-full bg-blue-500/50 blur-[24px]" />
              <div className="absolute -right-8 -bottom-8 z-0 h-40 w-40 rounded-full bg-fuchsia-500/50 blur-[24px]" />
              <div className="relative z-10 flex min-h-0 flex-col h-full rounded-[10.5px] bg-[#0a1022] p-4">
                <Backlight />
                <div className="relative z-10 flex min-h-0 flex-col h-full gap-4">
                <div className={`relative flex h-[50%] w-full shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-blue-500/16 bg-[#030612] shadow-[0_8px_20px_rgba(0,0,0,0.4)] ${activeSlide.image ? 'cursor-pointer' : ''}`} onClick={() => { if (activeSlide.image) setIsModalOpen(true) }}>
                  {activeSlide.image ? (
                    <>
                      <img
                        src={activeSlide.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full scale-[1.2] object-cover opacity-65 blur-2xl transition-all duration-500"
                      />
                      <img
                        src={activeSlide.image}
                        alt={activeSlide.title}
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 max-h-[88%] w-auto max-w-[92%] rounded-[6px] border border-white/10 object-contain shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-500"
                      />
                    </>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#030612] transition-all duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.08),transparent_60%)]" />
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 shadow-[inset_0_0_12px_rgba(96,165,250,0.2)]">
                        <Sparkles className="h-5 w-5 text-blue-400/50" />
                      </div>
                      <span className="relative z-10 text-[0.7rem] font-semibold tracking-widest text-blue-300/40">PREVIEW PENDING</span>
                    </div>
                  )}

                {project.slides.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); showPrev(); }}
                      className="group absolute left-3 z-20 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#030612]/40 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:bg-[#0a1022]/80 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] active:scale-95"
                    >
                        <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:text-blue-300" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); showNext(); }}
                      className="group absolute right-3 z-20 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#030612]/40 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:bg-[#0a1022]/80 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] active:scale-95"
                    >
                        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-blue-300" />
                    </button>
                  </>
                )}
              </div>

                <div className="mt-1 min-h-0 flex-1 overflow-y-auto custom-scrollbar pr-3">
                  <h2 className="text-[1.05rem] font-semibold text-white">
                {activeSlide.title}
              </h2>
                  <p className="mt-1.5 text-[0.8rem] leading-[1.45] text-slate-300">
                {activeSlide.description}
              </p>
                  <ul className="mt-3.5 space-y-2.5">
                {activeSlide.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-[0.78rem] leading-[1.4] text-slate-300">
                        <span className="mt-0.5 flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300">
                          <CheckCircle2 className="h-3 w-3" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
              </div>
              </div>
            </section>
          </div>
        </div>

        {project.bottomCards && project.bottomCards.length > 0 && (
        <section className="tech-tile-border relative min-h-0 min-w-0 grid grid-cols-1 gap-4 overflow-hidden rounded-xl border border-blue-500/24 bg-[#0a1022]/76 p-4 shadow-[0_5px_20px_rgba(0,0,0,0.3)] backdrop-blur-xl md:grid-cols-3 md:gap-0 md:p-5">
          <Backlight intensity="subtle" />
          {project.bottomCards.map((card, index) => (
            <div
              key={card.title}
              className={`relative z-10 flex min-h-0 min-w-0 items-start gap-4 ${
                index !== 2 ? 'md:border-r md:border-blue-500/16 md:pr-5' : ''
              } ${index !== 0 ? 'md:pl-5' : ''}`}
            >
              <CloudyIconBox icon={card.icon} className="h-[44px] w-[44px] rounded-[12px]" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.85rem] font-semibold text-white">{card.title}</p>
                <p className="mt-2 line-clamp-3 text-[0.78rem] leading-[1.5] text-slate-300">{card.description}</p>
              </div>
            </div>
          ))}
        </section>
        )}

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute right-4 top-4 z-50 text-white/70 transition-colors hover:text-white"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close image viewer"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              decoding="async"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </main>
  )
}

function PrimaryAction({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex h-[38px] w-max items-center justify-center gap-2 overflow-hidden rounded-[8px] bg-blue-600 px-5 text-[0.8rem] font-medium text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(96,165,250,0.8)] active:scale-95"
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
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">{label}</span>
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
    </a>
  )
}

function SecondaryAction({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group relative inline-flex h-[38px] w-max items-center justify-center gap-1.5 rounded-[8px] bg-blue-500/24 p-[1px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] active:scale-95"
    >
      <span className="absolute inset-0 z-0 rounded-md bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-[7px] bg-[#0c1327] px-4 text-[0.78rem] font-medium text-blue-100 transition-all duration-300 group-hover:bg-[#0c1327]/40 group-hover:text-white group-hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.4)]">
        <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full" />
        <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-300">{icon}</span>
        <span className="relative z-10 whitespace-nowrap transition-transform duration-300 group-hover:translate-x-0.5">{label}</span>
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
      aria-label="MP Logo"
      className="h-[28px] w-[28px] overflow-visible drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
      role="img"
      viewBox="0 0 40 40"
    >
      <defs>
        <linearGradient id="mLogoLeftProject" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="mLogoRightProject" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="mLogoGlowProject" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.45" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#mLogoGlowProject)">
        <path
          d="M 6 33 L 14 11 L 24 25"
          fill="none"
          stroke="url(#mLogoLeftProject)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 34 33 L 26 11 L 16 25"
          fill="none"
          stroke="url(#mLogoRightProject)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
