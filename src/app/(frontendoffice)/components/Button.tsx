import React from 'react'

export default function Button( {color, title} :any ) {
    return (
        <div>
            <button className={`${color} px-8 py-3 text-white text-base tracking-wider hover:shadow-xl shadow-orange-500 rounded-full font-semibold `}>{title}</button>
        </div>
    )
}
