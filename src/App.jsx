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
      <Routes>
        <Route path="/" element={<NeonLayout fullWidth={true}><Home /></NeonLayout>} />
        <Route path="/about" element={<NeonLayout><About /></NeonLayout>} />
        <Route path="/contact" element={<NeonLayout><Contact /></NeonLayout>} />
        <Route path="/portfolio" element={<NeonLayout fullWidth={true} fullWidthHeader={true}><Portfolio /></NeonLayout>} />
        <Route path="/services" element={<NeonLayout><Services /></NeonLayout>} />
        <Route path="/editing-services" element={<NeonLayout><EditingServices /></NeonLayout>} />
        <Route path="/web-design-services" element={<NeonLayout><WebDesignServices /></NeonLayout>} />
        <Route path="/portfolio/case-study" element={<NeonLayout><PortfolioCaseStudy /></NeonLayout>} />
      </Routes>
    </Router>
  )
}

export default App
