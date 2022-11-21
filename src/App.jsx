import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

import './App.css'

function App() {
  return (
    <div className="content-container">
      <Header />
      <Home />
      <About />
      
      <Footer />
    </div>
  )
}

export default App