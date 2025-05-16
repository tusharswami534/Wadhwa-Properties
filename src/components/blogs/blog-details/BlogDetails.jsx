import React from 'react';
import { useParams } from 'react-router-dom';
import { BLOGS_CARD_LIST, slugify } from '../../../utils/helper';
import Icons from '../../../utils/icons';

const BlogDetails = () => {
    const { slug } = useParams();
    console.log(slug, "Tushra ");
    const blog = BLOGS_CARD_LIST.find(
        (article) => slugify(article.title, { lower: true }) === slug
    );


    if (!blog) {
        return <div className="text-center text-red-500 mt-10">Blog not found.</div>;
    }
    return (
        <div className='pt-[23px] px-4'>
            <div className='flex max-w-[1140px] items-center mx-auto max-md:gap-[10px] gap-[20px]'>
                <div className='flex gap-[10px] max-md:gap-[5px] items-center'>
                    <Icons icon='HomeIcon' />
                    <p className='text-xl font-manrope max-lg:text-text-lg max-sm:text-sm'>Home</p>
                </div>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.52227 0L0 1.41L4.94467 6L0 10.59L1.52227 12L8 6L1.52227 0Z" fill="#010101" />
                </svg>
                <p className='text-[20px] leading-[121%] max-lg:text-base'>Blog</p>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.52227 0L0 1.41L4.94467 6L0 10.59L1.52227 12L8 6L1.52227 0Z" fill="#010101" />
                </svg>
                <p className='text-[20px] leading-[121%] font-manrope text-[#F4A261] max-lg:text-sm'>{blog.title}</p>
            </div>
            <div className='max-w-[1140px] relative mx-auto pt-[30px] container'>
                <div className='flex gap-10 justify-between max-lg:flex-col-reverse items-start'>
                    <div className='max-w-[679px] max-lg:max-w-[unset] w-full flex-col'>
                        <h2 className='text-[40px] leading-[134%] max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold'>
                            {blog.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h2>
                        <p className='font-bold leading-[150%] font-manrope py-5 text-[#1D3557]'>Published on: 03 April 2025</p>
                        <div className='w-full flex justify-between pb-[30px] items-center'>
                            <p className='font-medium text-[20px] leading-[100%]'>3 min Read</p>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1573 16.8334C12.4616 16.8334 11.8703 16.5903 11.3833 16.1042C10.8963 15.6181 10.6528 15.0278 10.6528 14.3334C10.6528 14.25 10.6737 14.0556 10.7154 13.75L4.85068 10.3334C4.62806 10.5417 4.37065 10.705 4.07846 10.8234C3.78627 10.9417 3.4732 11.0006 3.13927 11C2.44357 11 1.85223 10.757 1.36525 10.2709C0.878259 9.78474 0.634766 9.19446 0.634766 8.50002C0.634766 7.80558 0.878259 7.2153 1.36525 6.72919C1.85223 6.24308 2.44357 6.00002 3.13927 6.00002C3.4732 6.00002 3.78627 6.05919 4.07846 6.17752C4.37065 6.29585 4.62806 6.45891 4.85068 6.66669L10.7154 3.25002C10.6876 3.1528 10.6703 3.05919 10.6636 2.96919C10.657 2.87919 10.6533 2.77835 10.6528 2.66669C10.6528 1.97224 10.8963 1.38196 11.3833 0.895854C11.8703 0.409743 12.4616 0.166687 13.1573 0.166687C13.853 0.166687 14.4443 0.409743 14.9313 0.895854C15.4183 1.38196 15.6618 1.97224 15.6618 2.66669C15.6618 3.36113 15.4183 3.95141 14.9313 4.43752C14.4443 4.92363 13.853 5.16669 13.1573 5.16669C12.8234 5.16669 12.5103 5.10752 12.2181 4.98919C11.9259 4.87085 11.6685 4.7078 11.4459 4.50002L5.58116 7.91669C5.60899 8.01391 5.62652 8.1078 5.63376 8.19835C5.64099 8.28891 5.64433 8.38946 5.64377 8.50002C5.64322 8.61058 5.63988 8.71141 5.63376 8.80252C5.62763 8.89363 5.6101 8.98724 5.58116 9.08335L11.4459 12.5C11.6685 12.2917 11.9259 12.1286 12.2181 12.0109C12.5103 11.8931 12.8234 11.8339 13.1573 11.8334C13.853 11.8334 14.4443 12.0764 14.9313 12.5625C15.4183 13.0486 15.6618 13.6389 15.6618 14.3334C15.6618 15.0278 15.4183 15.6181 14.9313 16.1042C14.4443 16.5903 13.853 16.8334 13.1573 16.8334Z" fill="#010101" />
                            </svg>
                        </div>
                        <img className='w-full' src={blog.image} alt="" />
                        <p className='leading-[160%] text-[#6D6875] pt-5'>{blog.description}</p>

                        <div className='pt-10 max-lg:pt-8 max-md:pt-6 max-sm:pt-4'>
                            <p className='text-[30px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-bold leading-[134%] text-[#010101]'>The Challenge</p>
                            <p className='leading-[160%] text-[#6D6875] max-sm:text-sm pt-5'>In early 2024, a promising tech startup approached Audalex with a clear but ambitious goal: to prepare for acquisition within just 6 months. Despite their strong market traction, their internal systems were chaotic, financial records were fragmented, and they lacked the strategic direction required to scale fast and exit smoothly.</p>
                            <img src={blog.image} className='w-full pt-10 max-lg:pt-8 max-md:pt-6 max-sm:pt-4' alt="images" />
                        </div>
                        <div className='pt-10 max-lg:pt-8 max-md:pt-6 max-sm:pt-4'>
                            <p className='text-[30px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-bold leading-[134%] text-[#010101]'>The Audalex Approach</p>
                            <p className='leading-[160%] text-[#6D6875] max-sm:text-sm pt-5'>Our team jumped in with a full-spectrum approach:</p>

                            <div className="p-4 w-fit">
                                <ul className="space-y-3 list-disc text-sm text-gray-700">
                                    <li className='leading-[160%]'>
                                        <span className="font-semibold text-[#6D6875]">Operational Audit:</span>
                                        <span className='text-[#6D6875] max-sm:text-sm'> We began by conducting a rapid diagnostic of all departments – Finance, Legal, HR, and Product.</span>
                                    </li>
                                    <li className='leading-[160%]'>
                                        <span className="font-semibold text-[#6D6875]">System Streamlining:</span>
                                        <span className='text-[#6D6875] max-sm:text-sm'> Implemented systems for reporting, compliance, and performance tracking.</span>
                                    </li>
                                    <li className='leading-[160%]'>
                                        <span className="font-semibold text-[#6D6875]">Strategic Roadmap:</span>
                                        <span className='text-[#6D6875] max-sm:text-sm'> Worked with founders to align their vision with realistic exit strategies.</span>
                                    </li>
                                    <li className='leading-[160%]'>
                                        <span className="font-semibold text-[#6D6875]">Investor Readiness:</span>
                                        <span className='text-[#6D6875] max-sm:text-sm'> Designed investor-facing documents, managed due diligence prep, and ensured all compliance boxes were ticked.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="mx-auto px-4 text-gray-800">

                                <div className='pt-10 max-lg:pt-8 max-md:pt-6 max-sm:pt-4'>
                                    <h2 className="text-[30px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-bold leading-[134%] text-[#010101]">The Results</h2>
                                    <p className="leading-[160%] text-[#6D6875] pt-5 max-sm:text-sm">Within Just 6 Months:</p>
                                </div>

                                <div className="w-full py-[30px]">
                                    <img
                                        src={blog.image}
                                        alt="Team Meeting"
                                        className="rounded-lg shadow-md w-full object-cover"
                                    />
                                </div>

                                <ul className="space-y-2 text-sm list-disc pl-5">
                                    <li className='leading-[160%] text-[#6D6875] max-sm:text-sm'>Revenue grew by 58% through operational efficiency</li>
                                    <li className='leading-[160%] text-[#6D6875] max-sm:text-sm'>Due diligence was completed in under 3 weeks</li>
                                    <li className='leading-[160%] text-[#6D6875] max-sm:text-sm'>Startup was acquired by a global SaaS player at 2.7x its previous valuation</li>
                                    <li className='leading-[160%] text-[#6D6875] max-sm:text-sm'>Founders achieved their exit goal 2 weeks ahead of schedule</li>
                                </ul>

                                {/* Key Takeaways */}
                                <div>
                                    <h3 className="text-[30px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-bold pt-10 max-lg:pt-8 max-md:pt-6 max-sm:pt-4 leading-[134%] text-[#010101]">Key Takeaways</h3>
                                    <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                                        <li className='leading-[160%] text-[#6D6875] max-sm:text-sm '>Startups need more than just ambition — they need structure</li>
                                        <li className='leading-[160%] text-[#6D6875] max-sm:text-sm '>A clear roadmap, financial clarity, and compliance readiness are critical for a successful exit</li>
                                        <li className='leading-[160%] text-[#6D6875] max-sm:text-sm '>Audulake helps fast-growing businesses transform bold goals into real outcomes</li>
                                        <li className='leading-[160%] text-[#6D6875] max-sm:text-sm '>Want to see how Audulake can guide your growth?</li>
                                    </ul>
                                </div>
                                <p className="leading-[160%] text-[#6D6875] pt-5 max-sm:text-sm">Want to see how Audalex can guide your growth?</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[368px] lg:sticky top-5 w-full shadow-[0px_0px_15.7px_0px_#0000001A] rounded-xl bg-white p-5'>
                        <p className='text-[24px] font-semibold mb-4'>Table of contents</p>

                        <ul className='space-y-4 text-[16px] text-[#666]'>
                            <li className='flex items-center space-x-2'>
                                <span className='w-[2px] h-4 bg-orange-500 rounded'></span>
                                <span className='text-black font-medium'>Introduction</span>
                            </li>
                            <li className='pl-4 hover:text-black cursor-pointer'>The Challenge</li>
                            <li className='pl-4 hover:text-black cursor-pointer'>The Audalex Approach</li>
                            <li className='pl-4 hover:text-black cursor-pointer'>The Results</li>
                            <li className='pl-4 hover:text-black cursor-pointer'>Key Takeaways</li>
                            <li className='pl-4 hover:text-black cursor-pointer'>Conclusion</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
