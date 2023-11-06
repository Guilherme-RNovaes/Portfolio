// import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Qualification from "./components/Qualification"
// import Projects from "./components/Projects"
import ScrollUp from "./components/ScrollUp"
import Footer from "./components/Footer"

import './App.css'

function App() {
  return (
    <div className="content-container">
      {/* <Header /> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      {/* <Projects /> */}
      <ScrollUp />
      <Footer />
    </div>
  )
}

export default App
