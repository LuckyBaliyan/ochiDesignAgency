import React from 'react'
import NavBar from '../components/NavBar'
import ButtonWhite from '../components/ButtonWhite'
import {motion} from 'framer-motion';

const LandingPage = () => {
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full max-h-screen pt-40'>
        <div className='textStructure px-10 lg:px-20'>
            <div className="mask">
                <h1>We Create</h1>
            </div>
            <div className="mask flex items-end justify-between gap-2">
                <motion.div initial={{width:0}} animate={{width:110}} 
                transition={{ease:"easeInOut", duration: 0.6,delay:1}}
                className='aspect-video w-16 md:w-26 lg:w-32 lg:h-20 rounded media overflow-hidden'>
                    <img src="/7.jpg" alt="" className='w-full h-full'/>
                </motion.div>
                <h1>Eye-Opening</h1>
            </div>
            <div className="mask">
                <h1>Presentations</h1>
            </div>
        </div>
        <div className='border-t-1 mt-30 border-[var(--grayText)] py-3'>
            <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between px-3 md:px-8 
            lg:px-12'>
                {["Presentation and story telling aency","For innovation teams and global brands"].map((item,index)=>(
                <p key={index}>{item}</p>
                ))}
                <ButtonWhite text={"Start A Project"} />
            </div>
            <div className='hidden lg:flex items-center justify-center mt-15 overflow-hidden'>
                <p className='text-base text-[var(--grayText)] translate-y-[-100%] anim font-extralight'>
                    Scroll down
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage