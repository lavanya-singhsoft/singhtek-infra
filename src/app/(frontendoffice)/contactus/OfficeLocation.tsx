import React from 'react'
import Button from '../components/Button'

export default function OfficeLocation() {
    return (
        <div className='py-20'>
            <div className='flex flex-wrap gap-20 2xl:pl-80 xl:pl-40 lg:pl-52 md:pl-20 sm:pl-3'>
                <div>
                    <iframe className='sm:h-[600px] sm:w-[600px] h-[350px] w-[350px] object-cover' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.7491791403248!2d75.74483913215819!3d26.893350079288933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4925fb12825%3A0xb522774967322f7c!2sSinghtek%20BizGroup%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1715925658551!5m2!1sen!2sin" 
                    loading="lazy">
                    </iframe>
                </div>
                <div className='flex-col xl:pt-20 '>
                    <div className='py-2'>
                        <h6  className='text-xl py-2'>Enter your <span className='text-[#FF602E]'>Name</span></h6>
                        <input className='border-b-2' size={38} type="text" />
                    </div>
                    <div className='py-2'>
                        <h6 className='text-xl py-2'>Enter your <span className='text-[#FF602E]'>Email</span></h6>
                        <input className='border-b-2' size={38} type="text" />
                    </div>
                    <div  className='py-2'>
                        <h6 className='text-xl'>Message</h6>
                        <textarea className='border-b-2 max-h-[130px] max-w-[500px]' id="message" rows={8} cols={42}></textarea>
                    </div>
                    <div>
                    <Button color='bg-[#FF602E]' title='Send' />
                    </div>
                </div>
            </div>
        </div>
    )
}
