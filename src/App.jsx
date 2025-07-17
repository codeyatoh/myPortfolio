import React from 'react'
import Navigation from './components/navigation/navigation'
import Home from './components/home/home'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'

function App() {
  return (
    <>
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <Navigation />
    </>
  )
}

export default App
