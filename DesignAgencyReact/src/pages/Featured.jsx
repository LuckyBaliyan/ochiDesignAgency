import React, { useEffect, useState } from 'react'
import ImgCard from '../components/ImgCard';
import {motion} from 'framer-motion';
import ButtonBlack from '../components/ButtonBlack';

const Featured = () => {
    const [hoverIndex,setHoverIndex] = useState(null);

    const splitText = (text,index)=>
        text.split('').map((word,i)=>(
            <motion.a key={i} className='
             ml-2 p-4 scale-[2.5] pointer-events-none  border-0  flex items-center justify-center gap-5 text-6xl' initial={{y:"100%"}}
            animate={
                hoverIndex === index?
               {y:"0%"}:{y:"100%"}
            }
            transition={{
                ease:"backOut",
                duration:0.5,
            }}>
                {word}
            </motion.a>
        ))


  return (
    <div className='featured'>
        <div className='w-full border-b-1 border-[var(--grayText)]'><h2 className='lg:ml-15 text-4xl md:text-6xl 
        lg:text-7xl pt-30 pb-10 ml-8 md:ml-10'>Featured Projects</h2></div>
       <div className='w-full grid md:grid-cols-2 gap-0 px-5 py-3 mt-5 relative'>
          <ImgCard img={'/1.png'} index={0} title={"Silenced labs"} btnTexts={["Brand Identity","Pitch Deck"]} setHoverIndex={setHoverIndex}/>
          <div className="maskCard top-[10%]">
            <motion.h1
            className="text-[12vw] w-fit h-fit flex items-center justify-evenly gap-1 text-[var(--lightGreen)] font-extrabold p-5"
            key="Silenced labs"
          >
            {splitText("Slilenced labs",0)}
          </motion.h1>
          </div>
           <div className="maskCard top-[10%]">
            <motion.h1
            className="text-[12vw] w-fit h-fit flex items-center justify-evenly gap-1 text-[var(--lightGreen)] font-extrabold p-5"
            key="SOMA"
          >
            {splitText("SOMA",1)}
          </motion.h1>
          </div>
          <ImgCard img={'/2.png'} title={"SOMA"} index={1} btnTexts={["Brand Identity","Pitch Deck","Stratergy"]} setHoverIndex={setHoverIndex}/>
          <ImgCard img={'/3.png'} index={2} setHoverIndex={setHoverIndex} title={"ALL THINGS GO"} btnTexts={["Conference","Product Launch","Misson"]}/>
          <div className="maskCard top-[35%]">
          <motion.h1
            className="text-[12vw] w-fit h-fit flex items-center justify-evenly gap-1 text-[var(--lightGreen)] font-extrabold p-5"
            key="ALL THINGS TO GO"
          >
            {splitText("ALL THINGS TO GO",2)}
          </motion.h1>
          <motion.h1
            className="text-[12vw] w-fit h-fit flex items-center justify-center gap-1 text-[var(--lightGreen)] font-extrabold p-5"
            key="A21 RIHORN"
          >
            {splitText("A21 RIHORN",3)}
          </motion.h1>
          </div>
          <ImgCard img={'/4.png'} index={3} setHoverIndex={setHoverIndex} title={"A21 Rihorn"} btnTexts={["Brand Identity","Pitch Deck","Stratergy","New Tech"]}/>
          <ImgCard img={'/5.png'} index={4} setHoverIndex={setHoverIndex} title={"MEDILLA EXPERINCE"} btnTexts={["Brand Identitiy","Pitch Deck"]}/>
          <div className="maskCard top-[60%]">
           <motion.h1
            className="text-[12vw] w-fit h-fit flex items-center justify-evenly gap-1 text-[var(--lightGreen)] font-extrabold p-5"
            key="MEDILLA EXPERIENCE"
          >
            {splitText("MEDILLA EXPERIENCE",4)}
          </motion.h1>
          <motion.h1
            className="text-[12vw] text-center -ml-[80%] w-fit h-fit flex items-center justify-center gap-1 text-[var(--lightGreen)] font-extrabold p-5"
            key="CARDBOARD SPACESHIP"
          >
            {splitText("CARDBOARD SPACESHIP",5)}
          </motion.h1>
          </div>
          <ImgCard img={'/6.png'} index={5} setHoverIndex={setHoverIndex} title={"CARDBOARD SPACESHIP"} btnTexts={["Brand Identity","Pitch Deck","Stratergy"]}/>
          <ImgCard img={'/7.png'} index={6} setHoverIndex={setHoverIndex} title={"VISE"} btnTexts={["Brand Identitiy","Pitch Deck"]}/>
          <div className="maskCard top-[85%]">
            <motion.h1
            className="text-[12vw] translate-x-[80%] w-fit h-fit flex items-center justify-evenly gap-1 text-[var(--lightGreen)] font-extrabold p-5"
            key="VISE"
          >
            {splitText("VISE",6)}
          </motion.h1>
          <motion.h1
            className="text-[12vw] text-center w-fit h-fit flex items-center justify-center gap-1 text-[var(--lightGreen)] font-extrabold p-5"
            key="SOFT STAR"
          >
            {splitText("SOFT STAR",7)}
          </motion.h1>
          </div>
          <ImgCard img={'/8.png'} index={7} setHoverIndex={setHoverIndex} title={"SOFT STAR"} btnTexts={["Brand Identity","Pitch Deck","Stratergy"]}/>
       </div>
       <div className='flex mt-10 scale-90 items-center justify-center w-full'><ButtonBlack Text={"view Case Study"} /></div>
    </div>
  )
}

export default Featured