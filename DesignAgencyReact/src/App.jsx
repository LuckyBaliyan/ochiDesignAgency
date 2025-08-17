import React from 'react'
import './index.css';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Marquee from './pages/Marquee';
import About from './pages/About';
import Eyes from './pages/Eyes';
import ImgCard from './components/ImgCard';
import Featured from './pages/Featured';
import ClientReviews from './pages/ClientReviews';
import Cards from './pages/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import {motion} from 'framer-motion';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='relative overflow-hidden'>
      <motion.div initial={{opacity:1}} animate={{opacity:0}} 
      transition={{ease:"easeInOut",duration:1}} className={`absolute w-full h-screen z-[150] 
      overflow-hidden pointer-events-none
      bg-[var(--HeadingWhite)]`}>
      </motion.div>
      <NavBar/>
      <LandingPage/>
      <div data-scroll data-scroll-section data-scroll-speed=".3" >
      <Marquee />
      <About />
      </div>
      <Eyes />
      <Featured/>
      <ClientReviews />
      <Cards />
      <Footer/>
    </div>
  )
}

export default App