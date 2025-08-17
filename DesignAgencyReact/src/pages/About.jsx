import React from 'react'
import ButtonBlack from '../components/ButtonBlack';
import {motion} from 'framer-motion';

const About = () => {
  return (
    <div className='about relative'>
        <div>
            <div className='mask'><p>We craft category-defining presentations, brand</p></div> 
            <div className='mask'><p>Identities,and digital experiences that drive <b>funding</b>,</p></div>
            <div className='mask'><p><b>sales</b>, and <b>market leadership</b>.</p></div>
        </div>
        <hr className='absolute top-[50%] md:top-[30%] lg:top-[37%] xl:top-[40%] text-[var(--HeadingText)] left-0 w-full'/>
        <div className='flex flex-col items-center gap-4  border-[var(--HeadingText)] lg:flex-row justify-between mt-25 p-4'>
            <div className='self-start'>
            <h2 className='text-3xl lg:text-6xl font-[NeueMontreal] text-[var(--HeadingText)] self-start'>How we can help:</h2>
            <div className='self-start mt-4 lg:mt-8 lg:self-start'><ButtonBlack Text={"Read More"} /></div>
            </div>
            <div className='relative overflow-hidden rounded-md'>
                <img src="/16.jpg" alt="" className='lg:w-[50vw] grayscale-50 rounded-md cursor-pointer aspect-auto'/>
                <div className="mask absolute bg-[#0000002e] lg:backdrop-blur-sm  opacity-60  w-full h-full top-0 left-0
                transition-all ease-in-out duration-1000  hover:backdrop-blur-none hover:bg-transparent"></div>
            </div>
        </div>
    </div>
  )
}

export default About