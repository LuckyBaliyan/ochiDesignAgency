import React from 'react'
import { useState } from 'react';
import {motion,AnimatePresence, delay} from 'framer-motion';
import ButtonWhite from '../components/ButtonWhite'

const ClientReviews = () => {

  const [cords,setCords] = useState({x:0,y:0});
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCords({x,y});
  }

 
  const data = [
  { l1: "Medallia", l2: "Backey Castain", l3: "READ", img: "/1.png" },
  { l1: "SOMA", l2: "Silenced Labs", l3: "READ", img: "/2.png" },
  { l1: "All Things Go", l2: "A21 Rihorn", l3: "READ", img: "/3.png" },
  { l1: "Moonbase", l2: "Astro Agency", l3: "READ", img: "/4.png" },
  { l1: "Nimbus", l2: "CloudCore Ltd", l3: "READ", img: "/5.png" },
  { l1: "Vertex", l2: "Design Studio", l3: "READ", img: "/6.png" },
  { l1: "Pulse", l2: "Neuro Systems", l3: "READ", img: "/7.png" },
  { l1: "Aurora", l2: "Northlight Media", l3: "READ", img: "/8.png" },
  {li:"Trawa Energy",l2:"David Budde",l3:"READ", img: "/9.jpg"}
  ];


  return (
    <div className='client'>
        <div className='w-full border-b-1 border-[var(--grayText)]'>
            <h2 className='lg:ml-15 text-4xl md:text-6xl lg:text-7xl pt-30 
            pb-10 ml-5'>
                Clients’ reviews
            </h2>
        </div>
        <div className='flex px-4 py-4 lg:px-2 items-start justify-between'>
            <div className='flex flex-col lg:flex-row justify-between gap-6 w-[80%]'>
                <div className='flex flex-col lg:flex-row justify-around gap-8  w-[70%]'>
                <p className='underline w-fit border-[var(--HeadingText)]'>Karman Ventures</p>
                <div className='flex flex-col gap-4 lg:gap-12'>
                <p>Services:</p>
                <div className='flex flex-row lg:flex-col items-start justify-start gap-2 scale-100'>
                <ButtonWhite text={"Investor Deck"} />
                <ButtonWhite text={"Sales Deck"} />
                </div>
                </div>
                </div>
                <div className='flex flex-col border-0 w-full lg:w-[40%] gap-4 md:gap-8'>
                    <p className='md:self-start justify-end'>William Barnes</p>
                    <img src="/person4.png" alt="" className='w-26 aspect-square rounded-xl'/>
                    <p className='w-full text-[14px]  md:text-base'>
                        They were transparent about the time and the stages of the project. 
                        The end product is high quality, and I feel confident about how they were handholding the client through the process. 
                        I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able 
                        to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                    </p>
                </div>
            </div>
            <div className='flex justify-start gap-2  w-[20%] px-2'>
                <p className='text-[var(--grayText)] uppercase ml-auto'>Read</p>
            </div>
        </div>
        <div onMouseMove={handleMouseMove} className='mt-10 border-t-1 border-[var(--grayText)] relative'>
        <div className='absolute top-0 overflow-hidden bg-[url("/11.png")] transition-opacity pointer-events-none left-0 hidden lg:block rounded-xl w-[28vw] aspect-video z-30'
        style={{transform:`translateY(${cords.y}px) translateX(${cords.x}px)`,
        opacity: activeIndex!==null ? 1 : 0}}>
          <AnimatePresence>
          {activeIndex !== null && data[activeIndex] && (
            <motion.img
              key={data[activeIndex].img}
              src={data[activeIndex].img}
              alt="preview"
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
              animate={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              exit={{
                clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
        </div>
        {data.map((item,index)=>(
            <div onMouseEnter={()=>setActiveIndex(index)} onMouseLeave={()=>setActiveIndex(null)} 
            key={index} className='grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr_auto] 
            items-center w-full px-4 py-4 border-b-[1px] bg-none text-[var(--HeadingText)] 
            border-[var(--grayText)] transition-all ease duration-75
            hover:bg-[var(--HeadingText)]  hover:text-[var(--HeadingWhite)] relative cursor-pointer'>
                <p className='text-start lg:underline'>{item.l1}</p>
                <p className='text-start hidden lg:block'>{item.l2}</p>
                <p className='text-start underline'>READ</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default ClientReviews;