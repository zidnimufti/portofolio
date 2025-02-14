import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./components/about"
import Home from "./components/home"
import Contact from "./components/contact"
import SplashScreen from "./components/example"

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/example" element={<SplashScreen />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}



export default App
