import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Page_Border from './components/Page_Border/Page_Border'
import About_Us from './components/About_Us/About_Us'
import Services from './components/Services/Services'
import Our_Team from './components/Our_Team/Our_Team'
import Our_Project from './components/Our_Project/Our_Project'
import Our_Clients from './components/Our_Clients/Our_Clients'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='body'>
      <Page_Border/>
      <Navbar/>
      <Hero/>
      <About_Us/>
      <Services/>
      <Our_Team/>
      <Our_Project/>
      <Our_Clients/>
      <Footer/>
    </div>
  )
}

export default App
