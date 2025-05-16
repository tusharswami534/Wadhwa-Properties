import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS_CARD_LIST, slugify } from '../../../utils/helper';

function getRandomArticles(articles, count) {
    const shuffled = [...articles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const ExplorMoreBlog = () => {
    const randomArticles = useMemo(() => getRandomArticles(BLOGS_CARD_LIST, 3), []);

    return (
        <div className='px-4 pb-[120px] max-lg:py-[112px] max-md:py-24 max-sm:py-[80px]'>
            <div className='max-w-[1140px] mx-auto'> 
            <h2 className="font-bold text-xl mb-6">Explore More Blogs</h2>
            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-6">
                {randomArticles.map((article, index) => (
                    <div key={index} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="font-medium text-base leading-[150%] text-[#1D3557] font-manrope">
                                {article.date}
                            </p>
                            <h3 className="font-bold text-[20px] leading-[100%] text-[#010101] min-h-[54px] my-2 font-manrope">
                                {article.title}
                            </h3>
                            <p className="font-normal text-base leading-[160%] text-[#6D6875] font-manrope">
                                {article.description}
                            </p>
                            <a
                                href={`/blog/${slugify(article.title)}`}
                                className="mt-4 flex items-center gap-2 font-manrope underline text-base font-normal"
                            >
                                Read More
                                <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 11 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.5 1C10.5 0.723857 10.2761 0.5 10 0.5L5.5 0.5C5.22386 0.5 5 0.723858 5 1C5 1.27614 5.22386 1.5 5.5 1.5L9.5 1.5L9.5 5.5C9.5 5.77614 9.72386 6 10 6C10.2761 6 10.5 5.77614 10.5 5.5L10.5 1ZM1 10L1.35355 10.3536L10.3536 1.35355L10 1L9.64645 0.646447L0.646447 9.64645L1 10Z"
                                        fill="#1D3557"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default ExplorMoreBlog;
