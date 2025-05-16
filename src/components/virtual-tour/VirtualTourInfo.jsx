import React from 'react'
import Icons from '../../utils/icons'
import { FACILITIES_LIST } from '../../utils/helper'
import HostImage from '/src/assets/images/png/hosted-image.png'
const VirtualTourInfo = () => {
    return (
        <div className='py-[44px] max-sm:py-[20px] px-4'>
            <div className="flex max-md:flex-col-reverse md:items-start relative gap-16 md:gap-10 lg:gap-16 xl:gap-[133px] max-w-[1140px] mx-auto max-xl:px-4">
                <div className="w-full">
                    <div className='gap-[9px] flex items-center py-5 md:py-[30px] border-y border-[#CCCCCC] '>
                        <img className='size-10 rounded-full ' src={HostImage} alt="img" />
                        <div className="flex flex-col">
                            <p className='text-xs leading-[150%] text-[#010101] '>Hosted by </p>
                            <p className='text-lg font-bold leading-[120%] '>Wadhwa Properties</p>
                        </div>
                    </div>
                    <div className="md:pt-[34px] pt-5">
                        <p className='flex items-center gap-2 text-lg font-bold leading-[150%] pb-2 text-[#010101] '><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99944 18.1571L10.6004 17.4799C11.2823 16.699 11.8956 15.958 12.4413 15.2532L12.8918 14.659C14.7728 12.1247 15.7137 10.1132 15.7137 8.62657C15.7137 5.45324 13.1556 2.88086 9.99944 2.88086C6.84325 2.88086 4.28516 5.45324 4.28516 8.62657C4.28516 10.1132 5.22611 12.1247 7.10706 14.659L7.55754 15.2532C8.33605 16.2508 9.15056 17.2187 9.99944 18.1571Z" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.99814 10.9758C11.3131 10.9758 12.3791 9.90978 12.3791 8.59482C12.3791 7.27986 11.3131 6.21387 9.99814 6.21387C8.68318 6.21387 7.61719 7.27986 7.61719 8.59482C7.61719 9.90978 8.68318 10.9758 9.99814 10.9758Z" stroke="#010101" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                            Raj Guru Market</p>
                        <p className='flex items-center gap-2 text-lg font-bold leading-[150%] text-[#010101] '> <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8563 12.0757L14.2363 11.6982L13.3538 10.8116L12.9755 11.1891L13.8563 12.0757ZM15.5105 11.5399L17.103 12.4057L17.6988 11.3074L16.1072 10.4424L15.5105 11.5399ZM17.4088 14.1257L16.2255 15.3032L17.1063 16.1891L18.2897 15.0124L17.4088 14.1257ZM15.5038 15.6816C14.2955 15.7949 11.1705 15.6941 7.78551 12.3291L6.90384 13.2149C10.5972 16.8874 14.113 17.0674 15.6205 16.9266L15.5038 15.6816ZM7.78551 12.3291C4.55968 9.12072 4.02468 6.42322 3.95801 5.25239L2.70968 5.32322C2.79301 6.79655 3.45551 9.78655 6.90384 13.2149L7.78551 12.3291ZM8.93134 7.17905L9.17051 6.94072L8.29051 6.05488L8.05134 6.29239L8.93134 7.17905ZM9.36051 3.91155L8.31051 2.50822L7.30968 3.25822L8.35968 4.66072L9.36051 3.91155ZM4.77634 2.20239L3.46801 3.50239L4.34968 4.38905L5.65718 3.08905L4.77634 2.20239ZM8.49134 6.73572C8.04968 6.29239 8.04968 6.29239 8.04968 6.29405H8.04801L8.04551 6.29738C8.00616 6.33754 7.97073 6.38135 7.93968 6.42822C7.89468 6.49488 7.84551 6.58239 7.80384 6.69322C7.70237 6.97932 7.67709 7.2869 7.73051 7.58572C7.84218 8.30655 8.33884 9.25905 9.61051 10.5241L10.4922 9.63739C9.30134 8.45405 9.01801 7.73405 8.96551 7.39405C8.94051 7.23238 8.96634 7.15239 8.97384 7.13405C8.97801 7.12239 8.97968 7.12155 8.97384 7.12905C8.96649 7.14061 8.95813 7.15148 8.94884 7.16155L8.94051 7.16988C8.93781 7.17248 8.93504 7.17498 8.93218 7.17738L8.49134 6.73572ZM9.61051 10.5241C10.883 11.7891 11.8405 12.2824 12.5622 12.3924C12.9313 12.4491 13.2288 12.4041 13.4547 12.3199C13.581 12.2731 13.6991 12.2068 13.8047 12.1232C13.819 12.1112 13.8329 12.0987 13.8463 12.0857L13.8522 12.0807L13.8547 12.0782L13.8555 12.0766C13.8555 12.0766 13.8563 12.0757 13.4155 11.6324C12.9738 11.1891 12.9763 11.1882 12.9763 11.1882L12.978 11.1866L12.9797 11.1849L12.9847 11.1807L12.993 11.1724C13.003 11.1634 13.0136 11.155 13.0247 11.1474C13.033 11.1416 13.0305 11.1441 13.0188 11.1491C12.998 11.1566 12.9163 11.1824 12.7522 11.1574C12.4072 11.1041 11.6822 10.8207 10.4922 9.63739L9.61051 10.5241ZM8.31051 2.50739C7.46051 1.37405 5.79051 1.19405 4.77634 2.20239L5.65718 3.08905C6.10051 2.64822 6.88718 2.69405 7.30968 3.25822L8.31051 2.50739ZM3.95884 5.25322C3.94218 4.96489 4.07468 4.66322 4.34968 4.38989L3.46718 3.50322C3.01968 3.94822 2.66718 4.57822 2.70968 5.32322L3.95884 5.25322ZM16.2255 15.3032C15.9972 15.5316 15.7505 15.6599 15.5047 15.6824L15.6205 16.9266C16.233 16.8691 16.7338 16.5607 17.1072 16.1899L16.2255 15.3032ZM9.17051 6.94072C9.99134 6.12489 10.0522 4.83572 9.36134 3.91238L8.36051 4.66155C8.69634 5.11072 8.64634 5.69988 8.28968 6.05572L9.17051 6.94072ZM17.1038 12.4066C17.7847 12.7766 17.8905 13.6482 17.4097 14.1266L18.2913 15.0124C19.408 13.9016 19.0638 12.0491 17.6997 11.3082L17.1038 12.4066ZM14.2363 11.6991C14.5563 11.3807 15.0713 11.3024 15.5113 11.5407L16.108 10.4432C15.2047 9.95155 14.0847 10.0874 13.3547 10.8124L14.2363 11.6991Z" fill="#010101" />
                        </svg>
                            012 345 6789</p>
                    </div>
                     <div className='max-w-[674px] max-md:max-w-[unset]'>
                <div className='flex flex-col gap-[20px]'>
                    <p className='text-[#6D6875] max-sm:text-sm leading-[150%]'>For the first time ever, and for just one night, the museum’s iconic clock room will be transformed into a bedroom. I've crafted a unique space that is both romantic and contemporary, intimate yet sumptuous. Surrounded by the works of the greatest Impressionist painters, I invite you to experience the most beautiful night in Paris, watching a truly historic event—the Opening Ceremony of the Olympic Games Paris 2024.</p>
                    <div className='flex flex-col gap-[12px] max-sm:gap-[12px]'>
                        <p className='text-[14px] text-[#010101] leading-[150%] font-semibold'>What you’ll do</p>
                        <p className='text-[#6D6875] max-sm:text-sm leading-[150%]'>Formerly a railway station in the heart of Paris 125 years ago, the Musée d’Orsay is now one of the finest museums in the world, boasting the largest collection of Impressionist paintings. All the original architectural features have been preserved, including the iconic and monumental clock visible from inside and out.</p>
                    </div>
                    <div className='flex flex-col gap-[12px] max-sm:gap-[12px]'>
                        <p className='text-[14px] text-[#010101] leading-[150%] font-semibold'>What you’ll do</p>
                        <p className='text-[#6D6875] max-sm:text-sm leading-[150%]'>Formerly a railway station in the heart of Paris 125 years ago, the Musée d’Orsay is now one of the finest museums in the world, boasting the largest collection of Impressionist paintings. All the original architectural features have been preserved, including the iconic and monumental clock visible from inside and out.</p>
                    </div>
                    <div className='flex flex-col gap-[12px] max-sm:gap-[12px]'>
                        <p className='text-[14px] text-[#010101] leading-[150%] font-semibold'>What you’ll do</p>
                        <p className='text-[#6D6875] max-sm:text-sm leading-[150%]'>Formerly a railway station in the heart of Paris 125 years ago, the Musée d’Orsay is now one of the finest museums in the world, boasting the largest collection of Impressionist paintings. All the original architectural features have been preserved, including the iconic and monumental clock visible from inside and out.</p>
                    </div>
                    <div className='flex flex-col gap-[12px] max-sm:gap-[12px]'>
                        <p className='text-[14px] text-[#010101] leading-[150%] font-semibold'>What you’ll do</p>
                        <p className='text-[#6D6875] max-sm:text-sm leading-[150%]'>Formerly a railway station in the heart of Paris 125 years ago, the Musée d’Orsay is now one of the finest museums in the world, boasting the largest collection of Impressionist paintings. All the original architectural features have been preserved, including the iconic and monumental clock visible from inside and out.</p>
                    </div>
                </div>
            </div>
                    <p className='md:pt-8 py-4 md:pb-6 text-sm font-semibold leading-[150%] text-[#010101] '>Facilities in the Property</p>
                    <div className="flex flex-wrap max-w-[499px] ">
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {FACILITIES_LIST.map((item, index) => (
                            <div key={index} className="flex items-center gap-2.5">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.5C8.98491 15.5 9.96018 15.306 10.8701 14.9291C11.7801 14.5522 12.6069 13.9997 13.3033 13.3033C13.9997 12.6069 14.5522 11.7801 14.9291 10.8701C15.306 9.96018 15.5 8.98491 15.5 8C15.5 7.01509 15.306 6.03982 14.9291 5.12987C14.5522 4.21993 13.9997 3.39314 13.3033 2.6967C12.6069 2.00026 11.7801 1.44781 10.8701 1.0709C9.96018 0.693993 8.98491 0.5 8 0.5C6.01088 0.5 4.10322 1.29018 2.6967 2.6967C1.29018 4.10322 0.5 6.01088 0.5 8C0.5 9.98912 1.29018 11.8968 2.6967 13.3033C4.10322 14.7098 6.01088 15.5 8 15.5ZM7.80667 11.0333L11.9733 6.03333L10.6933 4.96667L7.11 9.26583L5.25583 7.41083L4.0775 8.58917L6.5775 11.0892L7.2225 11.7342L7.80667 11.0333Z" fill="#F4A261" />
                                </svg>

                                <div className="flex gap-1.5 items-center">
                                    <Icons icon={item.icon} />
                                    <span className="text-sm leading-[150%] text-[#010101] ">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-[333px] md:sticky md:top-0 max-md:max-w-[unset] w-full border border-[#E6E5E5] rounded-xl p-[24px_14px_68px_14px]">
                    <p className='flex items-center text-[#57BA47] text-sm leading-[100%] pb-[17px] gap-[5px] '> <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4.5" r="4" fill="#57BA47" />
                    </svg>
                        Available </p>
                    <p className='text-lg font-bold leading-[100%] text-[#010101]'>₹44,000/Square Feet₹44,000/Square Feet</p>
                    <div className="flex items-center gap-1.5 pb-8">
                        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4132 17.8781L17.1382 20.8781C17.7476 21.2625 18.4976 20.6906 18.3195 19.9875L16.9507 14.6063C16.9137 14.4571 16.9196 14.3005 16.9677 14.1546C17.0158 14.0086 17.1042 13.8792 17.2226 13.7813L21.4601 10.2469C22.0132 9.78752 21.732 8.8594 21.0101 8.81252L15.4789 8.45627C15.3279 8.44749 15.1828 8.39494 15.0613 8.30503C14.9398 8.21513 14.847 8.09177 14.7945 7.95002L12.732 2.75627C12.6774 2.60618 12.5779 2.47653 12.4471 2.38491C12.3163 2.29329 12.1604 2.24414 12.0007 2.24414C11.841 2.24414 11.6852 2.29329 11.5544 2.38491C11.4235 2.47653 11.3241 2.60618 11.2695 2.75627L9.20698 7.95002C9.15441 8.09177 9.0617 8.21513 8.94016 8.30503C8.81862 8.39494 8.67353 8.44749 8.5226 8.45627L2.99135 8.81252C2.26948 8.8594 1.98823 9.78752 2.54135 10.2469L6.77885 13.7813C6.89729 13.8792 6.98565 14.0086 7.03375 14.1546C7.08186 14.3005 7.08774 14.4571 7.05073 14.6063L5.7851 19.5938C5.56948 20.4375 6.46948 21.1219 7.19135 20.6625L11.5882 17.8781C11.7115 17.7997 11.8546 17.7581 12.0007 17.7581C12.1468 17.7581 12.2899 17.7997 12.4132 17.8781Z" fill="#FFC700" />
                            <path d="M36.4132 17.8781L41.1382 20.8781C41.7476 21.2625 42.4976 20.6906 42.3195 19.9875L40.9507 14.6063C40.9137 14.4571 40.9196 14.3005 40.9677 14.1546C41.0158 14.0086 41.1042 13.8792 41.2226 13.7813L45.4601 10.2469C46.0132 9.78752 45.732 8.8594 45.0101 8.81252L39.4789 8.45627C39.3279 8.44749 39.1828 8.39494 39.0613 8.30503C38.9398 8.21513 38.847 8.09177 38.7945 7.95002L36.732 2.75627C36.6774 2.60618 36.5779 2.47653 36.4471 2.38491C36.3163 2.29329 36.1604 2.24414 36.0007 2.24414C35.841 2.24414 35.6852 2.29329 35.5544 2.38491C35.4235 2.47653 35.3241 2.60618 35.2695 2.75627L33.207 7.95002C33.1544 8.09177 33.0617 8.21513 32.9402 8.30503C32.8186 8.39494 32.6735 8.44749 32.5226 8.45627L26.9914 8.81252C26.2695 8.8594 25.9882 9.78752 26.5414 10.2469L30.7789 13.7813C30.8973 13.8792 30.9857 14.0086 31.0338 14.1546C31.0819 14.3005 31.0877 14.4571 31.0507 14.6063L29.7851 19.5938C29.5695 20.4375 30.4695 21.1219 31.1914 20.6625L35.5882 17.8781C35.7115 17.7997 35.8546 17.7581 36.0007 17.7581C36.1468 17.7581 36.2899 17.7997 36.4132 17.8781Z" fill="#FFC700" />
                            <path d="M60.4132 17.8781L65.1382 20.8781C65.7476 21.2625 66.4976 20.6906 66.3195 19.9875L64.9507 14.6063C64.9137 14.4571 64.9196 14.3005 64.9677 14.1546C65.0158 14.0086 65.1042 13.8792 65.2226 13.7813L69.4601 10.2469C70.0132 9.78752 69.732 8.8594 69.0101 8.81252L63.4789 8.45627C63.3279 8.44749 63.1828 8.39494 63.0613 8.30503C62.9398 8.21513 62.847 8.09177 62.7945 7.95002L60.732 2.75627C60.6774 2.60618 60.5779 2.47653 60.4471 2.38491C60.3163 2.29329 60.1604 2.24414 60.0007 2.24414C59.841 2.24414 59.6852 2.29329 59.5544 2.38491C59.4235 2.47653 59.3241 2.60618 59.2695 2.75627L57.207 7.95002C57.1544 8.09177 57.0617 8.21513 56.9402 8.30503C56.8186 8.39494 56.6735 8.44749 56.5226 8.45627L50.9914 8.81252C50.2695 8.8594 49.9882 9.78752 50.5414 10.2469L54.7789 13.7813C54.8973 13.8792 54.9857 14.0086 55.0338 14.1546C55.0819 14.3005 55.0877 14.4571 55.0507 14.6063L53.7851 19.5938C53.5695 20.4375 54.4695 21.1219 55.1914 20.6625L59.5882 17.8781C59.7115 17.7997 59.8546 17.7581 60.0007 17.7581C60.1468 17.7581 60.2899 17.7997 60.4132 17.8781Z" fill="#FFC700" />
                            <path d="M84.4132 17.8781L89.1382 20.8781C89.7476 21.2625 90.4976 20.6906 90.3195 19.9875L88.9507 14.6063C88.9137 14.4571 88.9196 14.3005 88.9677 14.1546C89.0158 14.0086 89.1042 13.8792 89.2226 13.7813L93.4601 10.2469C94.0132 9.78752 93.732 8.8594 93.0101 8.81252L87.4789 8.45627C87.3279 8.44749 87.1828 8.39494 87.0613 8.30503C86.9398 8.21513 86.847 8.09177 86.7945 7.95002L84.732 2.75627C84.6774 2.60618 84.5779 2.47653 84.4471 2.38491C84.3163 2.29329 84.1604 2.24414 84.0007 2.24414C83.841 2.24414 83.6852 2.29329 83.5544 2.38491C83.4235 2.47653 83.3241 2.60618 83.2695 2.75627L81.207 7.95002C81.1544 8.09177 81.0617 8.21513 80.9402 8.30503C80.8186 8.39494 80.6735 8.44749 80.5226 8.45627L74.9914 8.81252C74.2695 8.8594 73.9882 9.78752 74.5414 10.2469L78.7789 13.7813C78.8973 13.8792 78.9857 14.0086 79.0338 14.1546C79.0819 14.3005 79.0877 14.4571 79.0507 14.6063L77.7851 19.5938C77.5695 20.4375 78.4695 21.1219 79.1914 20.6625L83.5882 17.8781C83.7115 17.7997 83.8546 17.7581 84.0007 17.7581C84.1468 17.7581 84.2899 17.7997 84.4132 17.8781Z" fill="#FFC700" />
                            <path d="M108.413 17.8781L113.138 20.8781C113.748 21.2625 114.498 20.6906 114.319 19.9875L112.951 14.6063C112.914 14.4571 112.92 14.3005 112.968 14.1546C113.016 14.0086 113.104 13.8792 113.223 13.7813L117.46 10.2469C118.013 9.78752 117.732 8.8594 117.01 8.81252L111.479 8.45627C111.328 8.44749 111.183 8.39494 111.061 8.30503C110.94 8.21513 110.847 8.09177 110.794 7.95002L108.732 2.75627C108.677 2.60618 108.578 2.47653 108.447 2.38491C108.316 2.29329 108.16 2.24414 108.001 2.24414C107.841 2.24414 107.685 2.29329 107.554 2.38491C107.424 2.47653 107.324 2.60618 107.269 2.75627L105.207 7.95002C105.154 8.09177 105.062 8.21513 104.94 8.30503C104.819 8.39494 104.674 8.44749 104.523 8.45627L98.9914 8.81252C98.2695 8.8594 97.9882 9.78752 98.5414 10.2469L102.779 13.7813C102.897 13.8792 102.986 14.0086 103.034 14.1546C103.082 14.3005 103.088 14.4571 103.051 14.6063L101.785 19.5938C101.569 20.4375 102.469 21.1219 103.191 20.6625L107.588 17.8781C107.712 17.7997 107.855 17.7581 108.001 17.7581C108.147 17.7581 108.29 17.7997 108.413 17.8781Z" fill="#FFC700" />
                        </svg>

                        <p className='text-[#010101]/40'>(738)</p>
                    </div>
                    <button className=' w-full cursor-pointer py-3.5 bg-[#1D3557] rounded-xl text-white'>Book Now</button>
                    <div className="flex items-center justify-between py-5">
                        <p className='text-[#010101]/40 leading-[150%] '>Stamp Duty</p>
                        <p className='font-bold leading-[150%] text-[#010101] '>₹380</p>
                    </div>
                    <div className="flex items-center justify-between pb-5">
                        <p className='text-[#010101]/40 leading-[150%] '>Service fee</p>
                        <p className='font-bold leading-[150%] text-[#010101] '>₹50</p>
                    </div>
                    <div className="flex items-center justify-between pt-5 border-t border-[#E6E5E5] ">
                        <p className='text-[#010101]/40 leading-[150%] '>Total</p>
                        <p className='font-bold leading-[150%] text-[#010101] '>₹44,430</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VirtualTourInfo