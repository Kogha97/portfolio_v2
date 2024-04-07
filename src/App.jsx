import React from 'react'
import Navbar from './components/Navbar'
import SocialBar from './components/SocialBar'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

export default function App() {
  return (
    <>

      <Navbar/>
      <SocialBar/>
      <div id="introduction"><Introduction/></div>
      <div id="aboutMe"><AboutMe/></div>
      <div id="projects"><Projects/></div>
      <div id="contactMe"><ContactMe/></div>
    </>
  );
}
