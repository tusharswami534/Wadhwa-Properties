import React from 'react'
import { CONTACT_LIST, MAIN_LINK, SOCAL_ICON } from '../../utils/helper'
import Icons from '../../utils/icons'
import Logo from '/src/assets/images/png/footer-logo.png'
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='pt-[94px] max-sm:pt-10 max-lg:bg-cover footer-bg-image bg-blue-900'>
            <div className='max-w-[1140px] w-full max-xl:px-4 mx-auto '>
                <div className='flex items-center max-[850px]:flex-col max-[850px]:gap-10  justify-between'>
                    <div className='max-w-[402px] max-[850px]:max-w-[unset] w-full'>
                        <a href="/">
                            <img width={247} height={84} className='max-w-[247px]' src={Logo} alt="footer-logo" />
                        </a>
                        <p className='leading-[121%] text-white/70 pt-[22px]'>We make buying, selling, and renting properties easy with expert, personalized service for a smooth, hassle-free experience.</p>
                        <div className='pt-10 flex gap-4'>
                            {SOCAL_ICON.map((item, index) => (
                                <a key={index} href={item.url} className='hover:scale-110 max-sm:text-sm transition-all duration-300' target="_blank">
                                    <Icons icon={item.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='max-w-[396px] max-sm:flex-col max-sm:gap-5 max-[850px]:max-w-[unset] w-full justify-between flex items-center'>
                        <div className='max-w-[89px] max-sm:max-w-[unset] w-full'>
                            <p className='font-semibold text-white leading-[100%]'>Main  Links</p>
                            <ul className='flex flex-col mt-[17px] gap-3'>
                                {MAIN_LINK.map((item, index) => (
                                    <li key={index} ><a href={item.url} className='text-white/70 text-base hover:text-white transition-all duration-300'>{item.title}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className='max-w-[237px] max-sm:max-w-[unset] w-full'>
                            <p className='font-semibold text-white leading-[100%]'>Contact</p>
                            <ul className='flex flex-col mt-[17px] gap-3.5'>
                                {CONTACT_LIST.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link} className='flex gap-2 max-sm:text-sm items-center'>
                                            <span className='size-5 flex justify-center items-center'>
                                                <Icons icon={item.icon} />
                                            </span>
                                            <span className='text-white/70 text-base hover:text-white transition-all duration-300'>{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-solid mt-[59px] max-sm:mt-10 border-white/40 pt-4 pb-5'>
                <p className='text-white/70 text-center'>© Copyright {year} | All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer