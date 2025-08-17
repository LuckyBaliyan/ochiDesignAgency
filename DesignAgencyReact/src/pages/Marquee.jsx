import React from 'react'
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className='marquee mt-32'>
        <div className='border-t-2 h-fit border-b-2 flex border-[var(--lightGreenBorder)] whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} 
            className='text-white text-8xl md:text-[26vw] lg:text-[26vw]  -mt-0 -mb-2 leading-[01] font-extrabold 
            tracking-wide ml-2'>
                We are ochi
            </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} 
            className='text-white text-8xl md:text-[26vw] lg:text-[26vw]  -mt-0 -mb-2 leading-[01] font-extrabold 
            tracking-wide ml-2'>
                We are ochi
            </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} 
            className='text-white text-8xl md:text-[26vw] lg:text-[26vw]  -mt-0 -mb-2 leading-[01] font-extrabold 
            tracking-wide ml-2'>
                We are ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee