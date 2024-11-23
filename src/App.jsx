import About from "./sections/About"
import Contact from "./sections/Contact"
import Courses from "./sections/Courses"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Courses />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
