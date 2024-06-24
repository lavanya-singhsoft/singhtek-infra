import React from 'react'
import Homesection from './Homesection'
import Officeadd from './Officeadd'
import OfficeLocation from './OfficeLocation'

export default function ContactUs() {
    return (
        <div>

            {/* Homesection */}
            <section>
                <Homesection
                    img='url("Contactus/homesection.jpg")'
                    heading='explore the features'
                    title='Contact us'
                    para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio perspiciatis cupiditate  esse id impedit, quaerat nobis dicta aliquam voluptatem. '
                />
            </section>

            {/* office address
            <section>
                <Officeadd />
            </section> */}

            {/* Office Location */}
            <section>
                <OfficeLocation />
            </section>


        </div>

    )
}
