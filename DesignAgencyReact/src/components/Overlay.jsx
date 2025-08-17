import React from 'react'

const Overlay = ({response}) => {
  return (
    <>
    <div className={`overlay ${response === 'true'?'translate-y-[0%]':''}`}>
      <div className={`mt-24 translate-y-[-25%]  opacity-0 px-5 py-8 
        ${response === 'true' && 'opacity-100 translate-y-[0%]'} transition-all duration-400 ease-in-out delay-200`}>
          {["Service","Our Works","About US","Insights","Contact Us"].map((item,index)=>(
            <div key={index}><p className='overlay-p'>{item}</p></div>
        ))}      
      <div className="socila-links px-0 py-8">
        <span>S:</span>
        <a>Instagram</a>
        <a>Linkdin</a>
        <a>Facebook</a>
      </div>
      <div className="socila-links px-0 py-2">
        <span>E:</span>
        <a>baliyanlucky85@gmail.com</a>
      </div>
      <div className="socila-links px-0 py-2">
        <span>M:</span>
        <a>+91 9759940199</a>
      </div>
    </div>
    </div>
    </>
  )
}

export default Overlay