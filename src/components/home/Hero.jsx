import React from 'react'
import { HERO_TAB } from '../../utils/helper'
import { useSearchParams } from 'react-router-dom'
import Icons from '../../utils/icons';

const Hero = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab');

    return (
        <div className='max-w-[1920px] px-5 mx-auto'>
            <div className='max-w-[1344px] rounded-4xl max-md:rounded-3xl max-sm:rounded-2xl px-3 home-hero-bg mx-auto pt-[103px] max-lg:pt-[70px] max-md:pt-[50px] max-sm:pt-[30px] flex justify-center flex-col items-center'>
                <button className='text-[13px] leading-[292%] text-white px-3.5 font-manrope border border-solid border-white rounded-full'>LET US GUIDE YOUR PROPERTY</button>
                <h1 className='text-6xl max-lg:text-5xl max-md:text-4xl max-w-[862px] text-center font-bold text-white leading-[125%] pt-4'>Find Your Dream Property in Hisar</h1>
                <div className='w-full justify-center flex flex-col items-center'>
                    <div className='max-w-[366px] max-lg:pt-4 rounded-tl-xl overflow-hidden rounded-tr-xl'>
                        {HERO_TAB.map((item, index) => (
                            <button onClick={() => setSearchParams({ tab: item })} key={index} className={`py-[9.85px] max-md:py-1.5 max-md:px-5 cursor-pointer px-[30px] border-x border-solid  ${index === 0 ? 'border-transparent' : index === HERO_TAB.length - 1 ? 'border-transparent' : 'border-blue'} ${activeTab === item ? 'bg-blue text-white' : 'bg-light-grey text-black'}`}>{item}</button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 max-w-[924px] max-lg:flex-col max-lg:gap-6 mb-[142px] max-md:mb-[120px] max-sm:mb-[70px] w-full bg-white p-5 rounded-[24px] max-md:rounded-2xl max-sm:*:rounded-xl shadow-md mx-auto">
                        {/* Location Input */}
                        <div className='flex gap-[26px] max-w-[604px] w-full max-sm:flex-col items-center'>
                            <div className="flex items-center px-4 py-2 gap-3 rounded-full border border-solid border-medium-grey max-w-[333px] w-full">
                                <Icons icon="locationIcon" />
                                <input
                                    type="text"
                                    placeholder="Where are you want Property"
                                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
                                />
                            </div>

                            <div className="h-6 w-px max-sm:hidden bg-gray-300" />

                            <div className="flex items-center px-4 max-sm:h-[38px] max-w-[219px] py-2 rounded-full w-full justify-between border border-solid border-medium-grey cursor-pointer">
                                <span className="text-base leading-[178%] text-gray-500">Type</span>
                                <Icons icon="dropDownIcon" />
                            </div>
                        </div>
                        <div className='flex gap-2.5 items-center w-full max-w-[264px]'>
                            <button className="flex max-sm: items-center gap-2.5 cursor-pointer px-[29px] py-[12.5px] bg-white text-base text-gray-600 rounded-full border border-gray-300 hover:bg-gray-100">
                                <span className='size-[18px] flex items-center justify-center'><Icons icon="filterIcon" /></span>
                                Filter
                            </button>
                            <button className="px-9 py-4 bg-[#102040] leading-[110%] cursor-pointer text-white rounded-full text-[18px] font-bold hover:bg-[#0c1a33] transition">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className='w-full max-sm:py-3 max-sm:px-2 max-sm:rounded-xl relative z-10 max-sm:backdrop-blur-2xl max-sm:bg-[rgba(0,0,0,0.5)]
'>
                        <div className='max-w-[766px] w-full ml-auto flex justify-center max-xl:justify-end items-end'>
                            <div className='max-w-[561px] max-xl:max-w-[500px] max-lg:max-w-[400px] max-md:max-w-[350px] max-md:flex-wrap w-full flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[32px] max-xl:text-[28px] max-lg:text-2xl max-sm:text-white max-md:text-xl leading-[93%] '>100+</p>
                                    <p className='text-dark-black max-lg:text-sm max-md:text-xs leading-[234%] max-sm:text-white max-sm:text-[10px]'>Awward Winning</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[32px] max-xl:text-[28px] max-lg:text-2xl max-sm:text-white max-md:text-xl leading-[93%] '>8K+</p>
                                    <p className='text-dark-black max-lg:text-sm max-md:text-xs leading-[234%] max-sm:text-white max-sm:text-[10px]'>Happy Customer</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[32px] max-xl:text-[28px] max-lg:text-2xl max-sm:text-white max-md:text-xl leading-[93%] '>500+</p>
                                    <p className='text-dark-black max-lg:text-sm max-md:text-xs leading-[234%] max-sm:text-white max-sm:text-[10px]'>Property Ready</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
