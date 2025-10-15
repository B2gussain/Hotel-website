import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import ForthSection from './components/ForthSection'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import FaqSection from './components/FaqSection'
import Testimonial from './components/Testomonial'

const App = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      <HeroSection/>
      <SecondSection/>
      <ThirdSection/>
      <Gallery/>
      {/* <ForthSection/> */}
      <Testimonial/>
      <FaqSection/>
      <Footer/>

    </div>
  )
}

export default App