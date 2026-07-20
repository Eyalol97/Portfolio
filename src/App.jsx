import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CaseStudyMiljobs from './pages/CaseStudyMiljobs.jsx'
import CaseStudyStub from './pages/CaseStudyStub.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-paper-100">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/miljobs" element={<CaseStudyMiljobs />} />
          <Route path="/work/:slug" element={<CaseStudyStub />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
