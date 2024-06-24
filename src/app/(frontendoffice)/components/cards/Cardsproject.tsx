'use client'
import React, {useState} from 'react'

export default function Cardsproject({img,id,heading}:any) {

    const [hoveredId, setHoveredId] = useState(null);

    return (

        <div className='p-5 z-10'>
            <div
                className="p-2 group max-w-[400px] bg-blue-950 border border-transparent text-white transition-all duration-500 group-hover:bg-blue-950"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}>
                <div className={`max-w-lg transition-all duration-500  ${hoveredId === id ? "group-hover:opacity-1" : "opacity-50"}`}>
                    {img}
                </div>
                <h1 className='pt-5 uppercase text-sm'>Construction</h1>
                <p className='pt-3 text-2xl font-bold'>{heading}</p>
                <p className='pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, aspernatur vero quos sit nisi facere ipsum quae adipisci dolorem impedit? </p>
                <div className='flex pt-4'>
                    <p className='pt-5 mr-3'>Find Out More</p>
                    <button className="mt-2 px-4 py-3 rounded-lg text-xl text-center transition-all duration-500 group-hover:bg-[#FF602E] group-hover:text-white">
                        +
                    </button>
                </div>
            </div>
        </div>

    )
}
