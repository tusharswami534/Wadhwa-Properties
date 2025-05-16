import React from 'react'
import { MEETTHETEAMLIST } from '../../utils/helper'

const MeetMyTeam = () => {
    return (
        <div className='px-4 pb-[160px] max-lg:pb-[130px] max-md:pb-[90px] max-sm:pb-[60px]'>
            <div className='container max-w-[1140px] mx-auto'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <h2 className="text-[44px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-medium leading-[136%] mb-4">Meet the Team</h2>
                        <p className='text-[#1D3557] pt-4 max-sm:pt-2 leading-[150%] text-center'>
                            Our team comprises professionals with deep roots in education and Edtech, bringing over 80 years of experience and insight to our recruitment process
                        </p>
                    </div>
                    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-md:gap-3 max-sm:gap-2 pt-[60px] max-lg:pt-10 max-md:pt-8 max-sm:pt-6'>
                        {MEETTHETEAMLIST.map((item, index) => (
                            <div className='p-4 rounded-xl shadow-[0px_0px_12px_0px_#0101011F]' key={index}>
                                <img className='max-w-[332px] w-full' height={323} src={item.img} alt={item.name} />
                                <div className='flex pt-[14px] items-center justify-between'>
                                    <div className='flex  flex-col'>
                                        <p className='font-medium text-[20px] leading-[121%] text-[#010101]'>
                                            {item.name}
                                        </p>
                                        <p className='text-[#1D3557]'>
                                            {item.designation}
                                        </p>
                                    </div>
                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1.00024" width="47" height="47" rx="9" stroke="#0000FF" stroke-opacity="0.12" stroke-width="2" />
                                        <path d="M15.3296 21.6463H19.4747V35.0002H15.3296V21.6463ZM17.4033 15.0002C17.8787 15.0002 18.3435 15.1414 18.7387 15.4059C19.134 15.6705 19.442 16.0464 19.6239 16.4862C19.8057 16.9261 19.8532 17.41 19.7602 17.8769C19.6673 18.3437 19.4382 18.7725 19.1019 19.1089C18.7655 19.4453 18.3371 19.6743 17.8708 19.7669C17.4044 19.8595 16.9211 19.8115 16.482 19.6291C16.0429 19.4466 15.6677 19.1378 15.4039 18.7418C15.1401 18.3458 14.9995 17.8803 15 17.4043C15.0006 16.7665 15.2541 16.155 15.7047 15.7042C16.1554 15.2535 16.7663 15.0002 17.4033 15.0002ZM22.0748 21.6463H26.0483V23.4797H26.1032C26.6571 22.4301 28.0076 21.3231 30.024 21.3231C34.2218 21.314 35 24.0801 35 27.6667V35.0002H30.8549V28.5032C30.8549 26.9562 30.8274 24.9647 28.7011 24.9647C26.5747 24.9647 26.2131 26.6514 26.2131 28.4023V35.0002H22.0748V21.6463Z" fill="#0000FF" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetMyTeam