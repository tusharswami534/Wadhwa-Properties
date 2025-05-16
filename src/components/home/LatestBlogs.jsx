import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CLIENT_BLOGS_LIST } from '../../utils/helper';
import NextButton from '/image/png/next-btn.png'
import Clock from "/image/png/clock.png"
import Calender from "/image/png/clander.png"

const LatestBlogs = () => {
    return (
        <div className='pb-30 relative'>
            <div className="container mx-auto max-w-[1140px] max-xl:px-4">
                <p className='text-[40px] font-semibold text-off-black text-center pb-10'>Our Latest Blog’s</p>
                <div className="relative group">
                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 custom-prev-button cursor-pointer hidden xl:block">
                        <img src={NextButton} alt="prev" className="w-10 h-10 rotate-180" />
                    </div>
                    <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 custom-next-button cursor-pointer hidden xl:block">
                        <img src={NextButton} alt="next" className="w-10 h-10" />
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        loop={true}
                        slidesPerView={2}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.custom-next-button',
                            prevEl: '.custom-prev-button',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        breakpoints={{
                            300: { slidesPerView: 1, spaceBetween: 20, },
                            568: { slidesPerView: 2, spaceBetween: 20, },
                            1024: { slidesPerView: 3, spaceBetween: 30, },
                        }}
                    >
                        {CLIENT_BLOGS_LIST.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex relative flex-col border border-grey rounded-2xl">
                                    <img className='w-full rounded-t-2xl' src={item.authorImage} alt="author img" />
                                    <div className="p-[15px]">
                                        <div className="flex items-center gap-3 border-b border-[#EEEEEE] pb-4">
                                            <div className="flex items-center gap-2">
                                                <img src={Calender} alt="img" />
                                                <p>{item.date}</p>
                                            </div><p>|</p>
                                            <div className="flex items-center gap-2">
                                                <img src={Clock} alt="img" />
                                                <p>{item.time}</p>
                                            </div>
                                        </div>
                                        <p className='pt-4 font-semibold leading-[100%] text-off-black'>{item.title}</p>
                                        <p className='max-w-[466px] text-grey leading-[150%] pt-2.5'>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-pagination flex justify-center mt-6 xl:hidden"></div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogs;