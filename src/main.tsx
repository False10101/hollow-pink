import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectPage from './ProjectPage.tsx'
import ContactPage from './ContactPage.tsx'
import ProjectsListPage from './ProjectsListPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsListPage />} />
        {/* The ":id" tells React Router this part is a variable */}
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
