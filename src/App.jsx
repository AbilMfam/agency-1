import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NeonLayout } from './layout/NeonLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import EditingServices from './pages/EditingServices'
import WebDesignServices from './pages/WebDesignServices'
import PortfolioCaseStudy from './pages/portfolio/PortfolioCaseStudy'

function App() {
  return (
    <Router>
      <NeonLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/editing-services" element={<EditingServices />} />
          <Route path="/web-design-services" element={<WebDesignServices />} />
          <Route path="/portfolio/case-study" element={<PortfolioCaseStudy />} />
        </Routes>
      </NeonLayout>
    </Router>
  )
}

export default App
