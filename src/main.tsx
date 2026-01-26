import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectPage from './ProjectPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* The ":id" tells React Router this part is a variable */}
        <Route path="/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)