import React from 'react'
import Homesection from './Homesection'
import Type1 from '../Cards/Type1'
import Type2 from '../Cards/Type2'


export default function Blog() {
    return (
        <div>


            {/* Home section */}
            <section>
                <Homesection
                    img='url("Blog/Homesection.svg")'
                    heading='explore the features'
                    title='Contact us'
                    para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio perspiciatis cupiditate  esse id impedit, quaerat nobis dicta aliquam voluptatem. '
                />
            </section>

            {/* Cards */}
            <section className='sm:p-10 flex gap-10 flex-wrap sm:ml-10'>
                <Type1 
                    img = {<img src="Blog/Type1/a.jpg" />}
                    title = 'High Tech Machinery'
                />
                <Type1 
                    img = {<img src="Blog/Type2/a.jpg" />}
                    title = 'High Tech Machinery'
                />
                <Type1 
                    img = {<img src="Blog/Type1/b.jpg" />}
                    title = 'High Tech Machinery'
                />
                <Type1 
                    img = {<img src="Blog/Type2/b.jpg" />}
                    title = 'High Tech Machinery'
                />
                    <Type1 
                        img = {<img src="Blog/Type2/c.jpg" />}
                        title = 'High Tech Machinery'
                    />
                <Type1 
                    img = {<img src="Blog/Type1/c.jpg" />}
                    title = 'High Tech Machinery'
                />
                <Type1 
                    img = {<img src="Blog/Type1/d.jpg" />}
                    title = 'High Tech Machinery'
                />
                <Type1 
                    img = {<img src="Blog/Type2/d.jpg" />}
                    title = 'High Tech Machinery'
                />
                <Type1 
                    img = {<img src="Blog/Type2/e.jpg" />}
                    title = 'High Tech Machinery'
                />


                <Type2 
                    color = "bg-blue-950"
                />
            </section>
        </div>
    )
}
