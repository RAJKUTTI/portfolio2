import React from 'react'
import Navbar from '@/pages/Navbar'
import Content from './Content'
import Welcome from './Welcome'
import Tools from './Tools'
import Contact from './Contact'
import Projects from './Projects'
const Layout = () => {
  return (
    <>
    <Navbar />
    <Tools/>
    <Contact/>
    <Projects/>
    </>
  )
}

export default Layout