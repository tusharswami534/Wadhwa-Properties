import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import HomeHero from './view/home/HomeHero'
import Footer from './components/common/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeHero />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
