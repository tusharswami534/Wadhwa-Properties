import React from 'react'
import { EXPLORE_LIST, EXPLORE_MOE } from '../../utils/helper'
import Icons from '../../utils/icons'

const ExploreLatest = () => {
    return (
        <>
            <div className='max-w-[1440px] flex flex-wrap flex-col justify-center mx-auto'>
                <div className='flex flex-wrap'>
                    {EXPLORE_MOE.map((item, index) => (
                        <div key={index} className='max-w-[360px] group cursor-pointer relative w-full'>
                            <img className='w-full' src={item.img} alt={`explore${index + 1}`} />
                            {
                                index === 0 ? '' : (
                                    <div className=''>
                                        <div className='py-[12.5px] px-[57px] group-hover:scale-0 transition-all duration-300 backdrop-blur-[17px] translate-x-[-50%] absolute left-1/2 rounded-xl bottom-[6px]'>
                                            <p className='text-white  whitespace-nowrap text-[28px] font-semibold'>{item.title}</p>
                                        </div>
                                        <div className=' scale-0 bg-[#F4A2617D]/50 w-full h-full absolute top-0 left-0 transition-all duration-300 group-hover:scale-100'>
                                            <button className='absolute top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%] text-white border border-solid border-white cursor-pointer backdrop-blur-xl py-[14px] px-[28px] rounded-xl transition-all duration-300'>View Details</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    ))}
                </div>
                <button className='py-[16px] max-w-[158px] mx-auto mt-[32px] mb-[120px] max-lg:mb-[70px] max-md:mb-[50px] text-white font-bold rounded-full cursor-pointer px-[36px] bg-[#1D3557]'>View More</button>
                <div>
                    <div className='flex gap-6 flex-wrap max-w-[1140px] justify-center mx-auto'>
                        {EXPLORE_LIST.map((item, index) => (
                            <div key={index} className="border-[#EFEFEF] border rounded-[20px] max-w-[364px]">
                                <img className='md:max-w-[364px] w-full md:h-[274px] rounded-t-[20px] ' src={item.img} alt="images" />
                                <div className="p-4 md:pb-8  ">
                                    <p className='text-xl font-medium text-dark-black pb-3'>Luxury Family Home</p>
                                    <p className='gap-[5px] flex items-center pb-6 text-grey'><span className='size-5'><Icons icon="pathLocationIcon" /></span> 1800-1818 79th St</p>
                                    <div className="flex items-center">
                                        <p className='text-dark-black flex items-center gap-2.5 border-r border-[#E9E9E9]'><span><Icons icon="bedIcon" /></span>  4 Beds</p>
                                        <p className='text-dark-black flex items-center pl-[13px] gap-2.5 border-r border-[#E9E9E9]'><span><Icons icon="bedIcon" /></span>  2 Baths</p>
                                        <p className='text-dark-black flex items-center pl-[13px] gap-2.5'> <span><Icons icon="areaIcon" /></span> 450 sqft</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreLatest