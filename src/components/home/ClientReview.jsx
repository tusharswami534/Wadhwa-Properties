import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CLIENT_REVIEW_LIST } from '../../utils/helper';



const ClientReview = () => {
    return (
        <div className='py-30'>
            <div className="container mx-auto max-w-[1140px] max-xl:px-4">
                <p className='text-[40px] font-semibold text-off-black text-center'>What Our Clients Say</p>
                <p className='text-grey text-center max-w-[603px] mx-auto pb-10'> Massa aliquet lobortis nec auctor quis lobortis. Purus metus eget quisque varius etiam nec quam. Diam suspendisse morbi nibh id venenatis.</p>
                <div className="flex justify-center">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                            el: '.custom-swiper-pagination',
                            renderBullet: (index, className) => {
                                return `<span class="${className}"></span>`;
                            },
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            568: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {CLIENT_REVIEW_LIST.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex relative flex-col p-[25px_26px_19px_26px] border border-orange rounded-2xl">
                                    <img className='absolute top-6 right-6' src="./src/assets/images/png/client-review-vactor.png" alt="" />
                                    <img className='size-[101px]' src={item.authorImage} alt="author img" />
                                    <div className="flex items-center gap-3 pt-5">
                                        <p className='text-off-black/70 text-xl font-semibold leading-[100%]'>{item.author}</p>
                                        <img src='./src/assets/images/png/stars-img.png' alt="star" />
                                    </div>
                                    <p className='text-xl font-semibold leading-[100%] pt-1.5 text-off-black'>{item.title}</p>
                                    <p className='max-w-[466px] text-grey leading-[150%] pt-2.5'>{item.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Swiper Dots */}
                <div className="custom-swiper-pagination mt-6 flex justify-center"></div>
            </div>
        </div>
    );
};

export default ClientReview;