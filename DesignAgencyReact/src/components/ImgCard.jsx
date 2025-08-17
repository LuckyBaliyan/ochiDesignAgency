import React from 'react'
import ButtonWhite from './ButtonWhite';

const ImgCard = ({img,title,btnTexts,index,setHoverIndex}) => {
  return (
    <div className='overflow-hidden rounded-2xl w-full  aspect-square flex flex-col  px-2 lg:px-10 gap-2 justify-around cursor-pointer'>
      {title && <p className='text-xl uppercase flex items-center'><span className='text-[40px] text-center'>&bull;</span>&nbsp;{title}</p>}
      {img &&<div onMouseEnter={()=>setHoverIndex(index)} onMouseLeave={()=>setHoverIndex(null)}  
      className='mask w-full h-full rounded-2xl hover:scale-95 transition-all ease-in-out duration-700'>
        <img src={img} alt="" className='overflow-hidden rounded-2xl w-full h-full aspect-square
      hover:scale-115 transition-all ease-in-out duration-700'/>
      </div>}
      <div className='flex flex-wrap gap-2 w-full'>
      {btnTexts && 
        btnTexts.map((btn,index)=>(
        <ButtonWhite key={index} text={btn} />
      ))
      }
      </div>
    </div>
  )
}

export default ImgCard;