import React from 'react'

const CommonHero = ({heading}) => {
  return (
    <div className='min-h-[382px] relative common-hero-image'>
        <h2 className='text-[60px] max-lg:text-[50px] max-md:text-[40px] whitespace-nowrap leading-[125%] font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{heading}</h2>
    </div>
  )
}

export default CommonHero