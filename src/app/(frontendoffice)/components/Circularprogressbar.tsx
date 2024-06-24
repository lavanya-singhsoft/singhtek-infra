"use client"

import React from 'react'
import { CircularProgress } from "@nextui-org/progress";

export default function Circularprogressbar({ val }: any) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => {
                if (v >= val) {
                    clearInterval(interval); // Clear the interval when value reaches 80
                    return v; // Stop at 80
                }
                return v + 1; // Increment value by 10
            });
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <CircularProgress
            aria-label="Loading..."
            size="lg"
            value={value}
            color="default"
            showValueLabel={true}
            className='bg-gray-500 z-50'
        />
    );
}
