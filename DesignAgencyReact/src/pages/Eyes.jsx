import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate,setRotate] = useState(0);

    useEffect(()=>{
       window.addEventListener('mousemove',(e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        let angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
        setRotate(angle - 180)
       })
    },[])

  return (
    <div className='eyes'>
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='bg-[url("/12.jpg")] w-full h-full bg-center bg-cover bg-no-repeat relative'>
        <div className='absolute flex gap-10  top-[50%] left-[50%]
        -translate-x-[50%] -translate-y-[50%]'>
            <div className='rounded-full w-[15vw] aspect-square bg-[var(--HeadingWhite)] items-center justify-center flex'>
                <div className='rounded-full w-2/3 aspect-square bg-[var(--HeadingText)] relative p-2'>
                   <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -transalte-y-[50%] w-full h-10 p-2"
                   style={{transform:`rotate(${rotate}deg)`}}>
                    <div className='rounded-full w-3 sm:w-4 md:w-6 aspect-square bg-white'></div>
                   </div>
                </div>
            </div>
            <div className='rounded-full w-[15vw] aspect-square bg-[var(--HeadingWhite)] items-center justify-center flex'>
               <div className={`rounded-full w-2/3 aspect-square bg-[var(--HeadingText)] relative p-2`}>
                   <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -transalte-y-[50%] w-full h-10 p-2"
                   style={{transform:`rotate(${rotate}deg)`}}>
                    <div className='rounded-full w-3 sm:w-4 md:w-6 aspect-square bg-white'></div>
                   </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Eyes