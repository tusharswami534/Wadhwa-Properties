import React, { useState } from "react";
import { FAQ_LIST } from "../../utils/helper";

const Faq = () => {
    const [open, setOpen] = useState(0);
    const FaqHandler = (index) => {
        setOpen(open === index ? null : index);
    };
    return (
        <div className="py-[96px]">
            <div className="w-full max-w-[964px] mx-auto max-lg:px-4">
                <h2 className="text-[40px] leading-[100%] font-semibold text-center">
                    Frequently Asked Questions
                </h2>
                <p className="max-w-[714px] mx-auto text-center pt-4 leading-[150%] text-[#6D6875] text-base font-normal">
                    Etiam dolor vivamus viverra urna lacus tortor. Commodo id iaculis
                    metus egestas neque neque arcu tellus tellus. Morbi tincidunt neque.
                </p>
                <div className="pt-[50px] flex flex-col gap-5">
                    {FAQ_LIST.map((obj, i) => (
                        <div
                            key={i}
                            className={`w-full border rounded-[10px] px-5 ${open === i
                                    ? "border-[#F4A261] shadow-[0px_0px_25px_1px_#00000014]"
                                    : "border-[#1D355733]"
                                }`}
                        >
                            <div
                                onClick={() => FaqHandler(i)}
                                className={` cursor-pointer duration-300 ease-linear ${open === i ? "pt-[22px] pb-2" : "pt-[19px] pb-[18px]"
                                    }`}
                            >
                                <h3 className="flex items-center text-[#000C03] text-xl font-semibold leading-[100%] gap-2 max-lg:text-lg max-md:text-base">
                                    <span> {(i + 1).toString().padStart(2)}.</span> {obj.question}{" "}
                                </h3>
                            </div>
                            <div
                                className={` overflow-hidden max-w-[826px] w-full duration-300 ease-linear pl-5 max-md:overflow-auto ${open === i ? "max-h-20 pb-5" : "max-h-0"
                                    }`}
                            >
                                <p className="text-[#6D6875] text-base font-normal max-md:text-sm">
                                    {obj.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;