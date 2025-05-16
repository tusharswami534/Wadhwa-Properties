import React from 'react';
import { BLOGS_CARD_LIST, slugify } from '../../utils/helper';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <section className="p-4 py-20">
            <div className='max-w-[1140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                {BLOGS_CARD_LIST.map((article, index) => (
                    <div key={index} className="flex flex-col bg-white rounded-lg overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full object-cover" />
                        <div className='pt-4'>
                            <p className="font-medium text-base leading-[150%] text-[#1D3557] font-manrope">
                                {article.date}
                            </p>
                            <h3 className="font-bold text-[20px] leading-[100%] text-[#010101] min-h-[54px] my-2 font-manrope">
                                {article.title}
                            </h3>
                            <p className="font-normal text-base leading-[160%] text-[#6D6875] font-manrope">
                                {article.description}
                            </p>
                            <a href={`/blog/${slugify(article.title)}`} className="mt-4 flex items-center gap-2 font-manrope underline text-base font-normal">
                                Read More
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 1C10.5 0.723857 10.2761 0.5 10 0.5L5.5 0.5C5.22386 0.5 5 0.723858 5 1C5 1.27614 5.22386 1.5 5.5 1.5L9.5 1.5L9.5 5.5C9.5 5.77614 9.72386 6 10 6C10.2761 6 10.5 5.77614 10.5 5.5L10.5 1ZM1 10L1.35355 10.3536L10.3536 1.35355L10 1L9.64645 0.646447L0.646447 9.64645L1 10Z" fill="#1D3557" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogCard;
