import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  
  return (
    <div className=" w-full bg-white flex flex-col  "
    style={{
      backgroundColor: '#0a0a0a',
      backgroundImage: `
        radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
        radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
      `,
      backgroundSize: '10px 10px',
      imageRendering: 'pixelated',
    }}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    
  )
}

export default App
