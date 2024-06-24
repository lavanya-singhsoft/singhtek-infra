"use client"

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

export default function Lettersectioncontent({ questionsAnswers }:any) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index:any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto ">
            {questionsAnswers?.map(({ question, answer }:any, index:any) => (
                <div key={index} className={`border-b border-gray-300 ${activeIndex === index ? "shadow-lg rounded-2xl scale-110 z-50 transition-all duration-500" : ""}`}>
                    <div
                        className="w-full text-left px-4 py-2 text-sm font-medium text-blue-950 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <p className={`text-2xl flex justify-between  font-semibold py-3 ${activeIndex === index ? "text-[#FF602E]" : "text-blue-950"}`}>
                            {question}
                            {activeIndex === index ? <IoIosArrowBack /> : <IoIosArrowDown />}
                        </p>
                    </div>
                    {activeIndex === index && (
                        <div className="px-4 py-2 text-start pb-5">
                            {answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
