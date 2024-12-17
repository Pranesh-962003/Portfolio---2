import React from 'react'
import Landing from '../../Components/Landing/Landing'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Project from '../../Components/Projects/Project'
import Experience from '../../Components/Experience/Experience'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <>
        <Landing/>
        <About/> 
        <Skills/>
        <Project/>
        <Experience/>
        <Footer/>
    </>
  )
}

export default Home