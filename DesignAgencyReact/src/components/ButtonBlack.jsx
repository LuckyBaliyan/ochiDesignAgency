import React, { useState } from 'react'
import {circInOut, motion} from 'framer-motion';

const ButtonBlack = ({Text}) => {

  return (
    <div>
      <motion.button variants={{}} initial="initial"  whileHover="hover" whileTap="tap" 
      className='btnBlack relative transition-all max-h-[8vh] ease-in 1s hover:bg-black'>{Text}
        <motion.div   variants={{
            initial: { scale: 0.3 },
            hover: { scale: 1.25,},
            tap: { scale: 1.25},
          }} 
        transition={{ duration: 0.25 }}
        className="maskbtn flex   items-center justify-center bg-[var(--HeadingWhite)] rounded-[50%] w-8 
         aspect-square self-center">
          <motion.i variants={{
              initial: { opacity: 0},
              hover: { opacity: 1}
            }}
            transition={{ duration: 0.25 }}
          className="fa-solid fa-arrow-right text-black -rotate-35 "></motion.i>
        </motion.div>
      </motion.button>
    </div>
  )
}

export default ButtonBlack