import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import HomeHero from './view/home/HomeHero'
import Footer from './components/common/Footer'
import About from './view/about/About'
import Blogs from './view/blog/Blogs'
import BlogDetailsPage from './view/blogs-details/BlogDetailsPage'
import VirtualTourPage from './view/virtual-tour/VirtualTourPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeHero />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />
          <Route path="/services" element={<VirtualTourPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
