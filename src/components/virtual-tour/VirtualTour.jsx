import React from 'react'
import VirtualTourImage from '/src/assets/images/png/virtual-tour-image.png'

const VirtualTour = () => {
    return (
        <div className='flex max-xl:px-4 justify-center pt-[60px] items-center'>
            <div className='max-w-[1140px] container w-full mx-auto'>
                <div className='flex flex-col w-full'>
                    <div className='flex items-center gap-1.5'>
                    <p className='text-[#6D6875] leading-[150%]'>Virtual Tour</p>
                        <svg width="48" height="2" viewBox="0 0 48 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H47" stroke="#6E7277" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <h2 className='font-medium text-[44px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl leading-[44px] pt-2'>Interactive Map of Raj guru Market Hisar</h2>
                    <div className='w-full'>
                        <img src={VirtualTourImage} alt="image" className='max-w-[1140px] w-full pt-[48px] max-lg:pt-10 max-md:pt-8 max-sm:pt-6' width='1140' height='675' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VirtualTour