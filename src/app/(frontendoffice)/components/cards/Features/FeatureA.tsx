import React from 'react'

export default function FeatureA({img}:any) {
  return (
<div className='lg:p-4 md:p-1 sm:p-5 p-5 '>
        <div className=' max-w-sm border border-transparent w-80 h-80 object-cover hover-overlayf'>
            {img}
        </div>
      
    </div>
  )
}
