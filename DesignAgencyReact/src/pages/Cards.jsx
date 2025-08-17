import React from 'react'
import ButtonWhite from '../components/ButtonWhite'

const Cards = () => {
  return (
    <div className='min-h-screen mt-20 flex items-center bg-[var(--darkGreen)] w-full p-8 rounded-tl-2xl rounded-tr-2xl'>
      <div className='flex mt-10 flex-col lg:flex-row-reverse p-6 w-full h-full justify-around  gap-6'>
        <div className="maskCrads  bg-[var(--HeadingText)] flex-1 items-center justify-center">
          <img src="/logo_4.svg" alt="" className='transition ease-in-out duration-600 hover:scale-90'/>
        </div>
        <div className="maskCrads flex-1 bg-[var(--HeadingText)]">
          <img src="/logo_6.png" alt="" className='transition ease-in-out duration-600 hover:scale-90'/>
        </div>
        <div className="maskCrads flex-2 bg-[#BEDF56]">
          <img src="/15.jpg" alt="" className='transition scale-110 ease-in-out duration-600 hover:scale-100'/>
        </div>
      </div>
    </div>
  )
}

export default Cards