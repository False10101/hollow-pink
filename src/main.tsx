import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = lazy(() => import('./App.tsx'))
const ProjectPage = lazy(() => import('./ProjectPage.tsx'))
const ContactPage = lazy(() => import('./ContactPage.tsx'))
const ProjectsListPage = lazy(() => import('./ProjectsListPage.tsx'))

function RouteFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020713] text-sm text-slate-300">
      Loading...
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsListPage />} />
          {/* The ":id" tells React Router this part is a variable */}
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
