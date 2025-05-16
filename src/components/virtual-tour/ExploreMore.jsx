import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Icons from '../../utils/icons';
import { EXPLORE_LIST } from '../../utils/helper';

const ExploreMore = () => {
    return (
        <div className="max-w-[1440px] max-xl:px-4 mx-auto pb-[132px] max-lg:pb-[130px] max-md:pb-[100px] max-sm:pb-[80px] pt-[80px]">
            <div className="min-[1200px]:ml-[150px] max-[1200px]:max-w-[1140px] max-[1200px]:mx-auto max-[1200px]:container">
                <h2 className="text-[44px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-medium leading-[136%] mb-10 max-lg:pb-8 max-md:mb-6 max-sm:mb-4">
                    Explore More
                </h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1025: { slidesPerView: 2.9 },
                        1200: { slidesPerView: 3.4 },
                    }}
                    className="mySwiper"
                >
                    {EXPLORE_LIST.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="border-[#EFEFEF] border rounded-[20px] max-w-[364px]">
                                <img
                                    className="md:max-w-[364px] w-full md:h-[274px] rounded-t-[20px]"
                                    src={item.img}
                                    alt="home"
                                />
                                <div className="p-4 md:pb-8">
                                    <p className="text-xl font-medium text-dark-black pb-3">Luxury Family Home</p>
                                    <p className="gap-[5px] flex items-center pb-6 text-grey">
                                        <span className="size-5">
                                            <Icons icon="pathLocationIcon" />
                                        </span>
                                        1800-1818 79th St
                                    </p>
                                    <div className="flex items-center">
                                        <p className="text-dark-black flex items-center gap-2.5 border-r border-[#E9E9E9] pr-[13px]">
                                            <span>
                                                <Icons icon="bedIcon" />
                                            </span>
                                            4 Beds
                                        </p>
                                        <p className="text-dark-black flex items-center gap-2.5 border-r border-[#E9E9E9] px-[13px]">
                                            <span>
                                                <Icons icon="bedIcon" />
                                            </span>
                                            2 Baths
                                        </p>
                                        <p className="text-dark-black flex items-center gap-2.5 pl-[13px]">
                                            <span>
                                                <Icons icon="areaIcon" />
                                            </span>
                                            450 sqft
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ExploreMore;
