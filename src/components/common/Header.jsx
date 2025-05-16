import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import Icons from '../../utils/icons';
import { HEADER_LIST } from '../../utils/helper';

const Header = () => {
    const path = useLocation();
    const [open, setOpen] = useState(false);



    return (
        <div className='px-4'>
            <div className='container max-w-[1140px] mx-auto'>
                <div className='flex w-full py-[22px] justify-between items-center'>
                    <Link to="/">
                        <Icons icon="logo" />
                    </Link>
                    <div className={`flex gap-1 max-md:flex-col max-md:fixed max-md:w-full max-md:h-full max-md:justify-center max-md:items-center max-md:top-0 z-20 max-md:bg-white h-[38px] transition-all duration-300 ${open ? 'max-md:left-0' : 'max-md:left-full'}`}>
                        {HEADER_LIST.map((item, index) => {
                            const isActive = item.path === '/' ? path.pathname === '/' : path.pathname.startsWith(item.path);
                            return (
                                <span
                                    key={index}
                                    className={`p-2.5 border-b max-md:justify-center max-md:max-w-[68px] max-md:flex border-solid ${isActive ? 'border-orange' : 'border-transparent'}`}>
                                    <Link onClick={() => setOpen(false)}
                                        className={`leading-[110%] max-md:text-center flex items-center ${isActive ? 'text-dark-black' : 'text-grey'}`}
                                        to={item.path}
                                    >
                                        {item.title}
                                    </Link>
                                </span>
                            );
                        })}

                        <button className='bg-blue text-white font-bold md:hidden leading-[110%] py-4 px-[36px] rounded-full cursor-pointer'>
                            Contact Us
                        </button>
                    </div>
                    <button className='bg-blue text-white font-bold max-md:hidden leading-[110%] py-4 px-[36px] rounded-full cursor-pointer'>
                        Contact Us
                    </button>
                    <button onClick={() => setOpen(!open)} className='md:hidden cursor-pointer relative overflow-hidden z-20 flex flex-col gap-1'>
                        <span className={`w-6 h-1 bg-grey rounded-4xl block transition-all ${open && 'translate-x-10'}`}></span>
                        <span className={`w-6 h-1 bg-grey rounded-4xl block relative transition-all duration-300 after:w-full after:h-full after:bg-grey after:absolute after:top-0 after:left-0 after:transition-all after:duration-300 after:rounded-4xl ${open && 'rotate-45 after:rotate-90'}`}></span>
                        <span className={`w-6 h-1 bg-grey rounded-4xl block transition-all ${open && '-translate-x-10'}`}></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
