/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Homesection from './Homesection'
import Fullproj from './Fullproj'
import Circularprogressbar from '../components/Circularprogressbar'
import Featurepercent from '../components/Featurepercent'
import Projplancard from './cards/Projplancard'
import Faq from './Faq'

export default function Services() {

  const questionsAnswers = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: `Click "Forgot password" from the login page or "Change password" from your profile page. A reset link will be emailed to you.`,
    },
    {
      question: "Can I cancel my subscription?",
      answer: `Yes! Send us a message and we'll process your request no questions asked.`,
    },
    {
      question: "Do you provide additional support?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
  ];

  return (
    <div>

      {/* Homesection */}
      <section>
        <Homesection
          img='url("Services/homesection.svg")'
          heading='explore the features'
          title='Our Services'
          para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio perspiciatis cupiditate  esse id impedit, quaerat nobis dicta aliquam voluptatem. '
        />
      </section>

      {/* Full project cards section */}
      <section className=''>
        <Fullproj />
      </section>


      {/* Section of our users */}
      <section>
        <div className='lg:flex justify-around p-20'>
          <Featurepercent title={'designed'} heading={'Codes'} value = {66} color='#FF602E'/>
          <Featurepercent title={'our happy'} heading={'Clients'} value = {71} color='#FF602E'/>
          <Featurepercent title={'completed'} heading={'Projects'} value = {36} color='#FF602E'/>
        </div>
      </section>




      {/* Project planning cards */}
      <section className='pt-10 pb-20'>
        <div className=''>
          {/* <div className='flex lg:pt-20 lg:px-60 md:pt-20 md:px-10 '>
            <Letter letter='F' />
            <Letter letter='L' />
            <Letter letter='E' />
            <Letter letter='X' />
            <Letter letter='I' />
            <Letter letter='B' />
            <Letter letter='L' />
            <Letter letter='E' />
          </div> */}
        </div>
        <div className='flex flex-col items-center lg:px-60 lg:py-10 md:px-32 sm:px-20'>
          <h1 className=' uppercase text-blue-950 font-bold sm:text-7xl text-5xl'>Pricing plan </h1>
        </div>

        <div className='flex flex-wrap justify-center gap-10'>
          <Projplancard title='Personal' num='17' />
          <Projplancard title='Business' num='31' />
          <Projplancard title='Enterprise' num='51' />
        </div>
      </section>


      {/* FAQ */}
      <section className='w-[70vw] m-auto py-5'>
        <div className=''>
          {/* <div className='flex lg:pt-20 lg:px-60 md:pt-20 md:px-10 '>
            <Letter letter='F' />
            <Letter letter='L' />
            <Letter letter='E' />
            <Letter letter='X' />
            <Letter letter='I' />
            <Letter letter='B' />
            <Letter letter='L' />
            <Letter letter='E' />
          </div> */}
        </div>
        <div className='flex flex-col items-center lg:px-60 lg:py-10 md:px-32 sm:px-20'>
          <h1 className=' uppercase text-blue-950 font-bold sm:text-7xl text-5xl'>FAQ's</h1>
        </div>
        <Faq questionsAnswers={questionsAnswers} />
      </section>
    </div>
  )
}
