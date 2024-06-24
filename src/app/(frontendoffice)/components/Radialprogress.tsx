import React from "react";

interface RadialProgressProps {
    value: number;
    color: string;
}

const RadialProgress: React.FC<RadialProgressProps> = ({ value, color }) => {
    const radius = 47;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / 100) * circumference;

    return (
        <div className="">
            <div className="flex ml-20">
                <svg className="h-44 w-44 -mt-[35px] ">
                    <circle
                        r={radius}
                        cx="50"
                        cy="50"
                        fill="transparent"
                        stroke="#ccc"
                        strokeWidth="5.5"
                        strokeDasharray={circumference}
                        strokeDashoffset="0"
                    />

                    <circle
                        r={radius}
                        cx="50"
                        cy="50"
                        fill="transparent"
                        stroke={color}
                        strokeWidth="5.5"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                        strokeLinecap="round"
                    />

                </svg>
                <div className="-ml-[150px]">
                    <h2 className="text-2xl text-blue-950 font-bold pt-1">{value}%</h2>
                </div>
            </div>
        </div>
    );
};

export default RadialProgress;