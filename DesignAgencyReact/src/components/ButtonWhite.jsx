import React from 'react'

function ButtonWhite({text,command='block'}) {
  return (
    <div className='flex gap-2'>
      {text &&
      <button className='btnWhite'>
        {text}
      </button>
      }
    </div>
  )
}

export default ButtonWhite