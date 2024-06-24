import React from 'react'

export default function Letter({letter}:any) {
  return (
    <div>
      <div className=''>
            <span className=''>
                <span className=' font-bold text-orange-500
                 text-9xl tracking-widest animate-appear transition-all delay-150'
                    style={{
                        textShadow: '1px 1px lightgrey, -1px -1px lightgrey, 1px -1px lightgrey, -1px 1px lightgrey, 1px 1px lightgrey, -1px -1px lightgrey, 1px -1px lightgrey, -1px 1px lightgrey',
                        color: 'transparent',
                        fontSize: '120px'
                    }}>
                    {letter}
                </span>
            </span>
        </div >
    </div>
  )
}
