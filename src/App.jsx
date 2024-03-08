import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Skills from './components/Skills'
import Contact from './components/Contact'


export default function App() {
  return(
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Works/>
      <Skills/>
      <Contact/>
    </>
  )
}
