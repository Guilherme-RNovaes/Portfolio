import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"

import './App.css'

function App() {
  return (
    <div className="content-container">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default App