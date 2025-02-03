import './App.css'
import Landing from './compontents/Landing'
import Header from './compontents/Header'
import Footer from './compontents/Footer'
import Team from './compontents/Team'
import NotFound from './compontents/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <div className="fixed w-full z-50">
          <Header />
        </div>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
