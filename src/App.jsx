import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NeonLayout } from './layout/NeonLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'

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
        </Routes>
      </NeonLayout>
    </Router>
  )
}

export default App
