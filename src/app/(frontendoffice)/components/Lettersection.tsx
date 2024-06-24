import React from 'react'
import Lettersectioncontent from './Lettersectioncontent'

export default function Lettersection() {


    const questionsAnswers = [
        {
          question: "Project Planning",
          answer: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eaque!",
        },
        {
          question: "Refurbishment",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eaque!",
        },
        {
          question: "General Conctracting",
          answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eaque!`,
        },
        {
          question: "Interior Design",
          answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eaque!`,
        },
      ];

    
    return (
        <div className='flex flex-wrap gap-20 justify-center pb-16'>

            <div className="sm:h-[250px] sm:w-[500px] h-[200px] w-[400px] object-cover hover-overlay">
                <img src="/Service_images/Graphic-tablet.avif" alt="Service Section" />
            </div>

            <div className='lg:w-[30%] w-screen px-5 lg:px-0'>
                <Lettersectioncontent questionsAnswers={questionsAnswers}/>
            </div>

        
        </div>

    )
}
