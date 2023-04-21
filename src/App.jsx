import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
// import Projects from "./components/Projects"
import Footer from "./components/Footer"

import './App.css'
import Qualification from "./components/Qualification"

function App() {
  return (
    <div className="content-container">
      <Header />
      <Home />
      <About />
      <Qualification />
      {/* <Projects /> */}
      <Footer />
    </div>
  )
}

export default App