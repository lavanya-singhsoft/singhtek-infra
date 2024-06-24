import React from 'react'
import Cardsservices from './cards/Cardsservices'
import Servicessection from './Servicessection'
import Cardsproject from './cards/Cardsproject'
import Projimages from './Projimages'
import FeatureA from './cards/Features/FeatureA'
import FeatureB from './cards/Features/FeatureB'
import Featuredsection from './Featuredsection'
import Swiperfor from './Carousels/Swiperfor'
import Swiperforhome from './Carousels/Swiperforhome'
import Featurepercent from './Featurepercent'
import Lettersection from './Lettersection'
import { FaAngleRight } from "react-icons/fa";
import Latestnews from './cards/Latestnews'
import 'react-circular-progressbar/dist/styles.css';





export default function Home() {

  return (
    <div>

      {/* Home Section */}
      <section>
        <Swiperforhome />
      </section>


      {/* Services section */}
      <section>
        <div className=''>
          {/* <div className='flex lg:pt-20 lg:px-60 md:pt-20 md:px-24 '>
            <Letter letter='S' />
            <Letter letter='E' />
            <Letter letter='R' />
            <Letter letter='V' />
            <Letter letter='I' />
            <Letter letter='C' />
            <Letter letter='E' />
            <Letter letter='S' />
          </div> */}
        </div>
        <div>
          <div className=' flex flex-col items-center lg:px-80 lg:py-10 md:px-40 sm:px-20'>
            <h1 className=' uppercase text-blue-950 font-bold text-7xl'>Services</h1>
          </div>
          <div className='flex flex-wrap justify-center py-10'>
            <Cardsservices heading={"Explore the Feature"} title={"General Contract"} />
            <Cardsservices heading={"Explore the Feature"} title={"Project Planning"} />
            <Cardsservices heading={"Explore the Feature"} title={"Refurbishment"} />
            <Cardsservices heading={"Explore the Feature"} title={"Interior Design"} />
          </div>
        </div>


      </section>

      {/* After services section */}
      <section>
        <Servicessection />
      </section>


      {/* Project Section */}
      <section className='bg-blue-950 z-50'>
        <div className=''>
          {/* <div className='flex lg:pt-20 lg:px-60 md:pt-20 md:px-10 '>
            <Letter letter='P' />
            <Letter letter='R' />
            <Letter letter='O' />
            <Letter letter='J' />
            <Letter letter='E' />
            <Letter letter='C' />
            <Letter letter='T' />
            <Letter letter='S' />
          </div> */}
        </div>
        <div className='flex flex-col items-center lg:px-80 lg:py-10 md:px-40 sm:px-20'>
          <h1 className=' uppercase text-white font-bold text-7xl'>Projects</h1>
        </div>
        <div className='lg:flex md:flex sm:flex-none sm:px-24 px-2 justify-center '>
          <div className='pt-10' >
            <Cardsproject
              id={1}
              img={<img src='/project_section/p1.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
          <div className='pt-10 '>
            <Cardsproject
              id={2}
              img={<img src='/project_section/p2.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
          <div className='pt-10 '>
            <Cardsproject
              id={3}
              img={<img src='/project_section/p3.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
        </div>
        <div className='lg:flex md:flex sm:flex-none sm:px-24 px-2 justify-center'>
          <div className='pt-10 '>
            <Cardsproject
              id={4}
              img={<img src='/project_section/p4.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
          <div className='pt-10 '>
            <Cardsproject
              id={5}
              img={<img src='/project_section/p5.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
          <div className='pt-10 '>
            <Cardsproject
              id={6}
              img={<img src='/project_section/p6.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
        </div>
      </section>


      {/* Our clients  */}
      <section className=' bg-cover' style={{ backgroundImage: 'url("projdown.jpg")' }}>
        <div className='lg:px-20 lg:py-10 md:px-10 md:py-10 sm:px-8 sm:py-8 p-5'>
          <div className='grid xl:grid-cols-4 xl:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 sm:grid-row-4 gap-10'>
            <Projimages img={<img src='/project_section/Project_down/pd1.png' />} />
            <Projimages img={<img src='/project_section/Project_down/pd2.png' />} />
            <Projimages img={<img src='/project_section/Project_down/pd3.png' />} />
            <Projimages img={<img src='/project_section/Project_down/pd4.png' />} />
            <Projimages img={<img src='/project_section/Project_down/pd5.png' />} />
            <Projimages img={<img src='/project_section/Project_down/pd6.png' />} />
            <Projimages img={<img src='/project_section/Project_down/pd7.png' />} />
            <Projimages img={<img src='/project_section/Project_down/pd8.png' />} />
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className='pt-10 pb-20'>
        <div className=''>
          {/* <div className='flex lg:pt-20 lg:px-60 md:pt-20 md:px-10 '>
            <Letter letter='F' />
            <Letter letter='E' />
            <Letter letter='A' />
            <Letter letter='T' />
            <Letter letter='U' />
            <Letter letter='R' />
            <Letter letter='E' />
            <Letter letter='S' />
          </div> */}
        </div>
        <div className='flex flex-col items-center lg:px-60 lg:py-10 md:px-40 sm:px-20'>
          <h1 className=' uppercase text-blue-950 font-bold text-7xl'>Features</h1>
        </div>
        <div className='mt-12 pb-9 lg:px-0 md:px-52 sm:px-32'>
          <div className='lg:flex md:flex-none justify-center  '>
            <FeatureA img={<img src='Card_features/cardfetb1.jpg' />} />
            <FeatureB
              img={<img src='Card_features/cardfeta1.png' />}
              heading={'Interior Design'} />
            <FeatureA img={<img src='Card_features/cardfetb2.jpg' />} />
          </div>
          <div className='lg:flex md:flex-none justify-center'>
            <FeatureB
              img={<img src='Card_features/cardfeta2.png' />}
              heading={'Graphic Design'} />
            <FeatureA img={<img src='Card_features/cardfetb3.jpg' />} />
            <FeatureB
              img={<img src='Card_features/cardfeta3.png' />}
              heading={'Product Design'} />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className='bg-cover lg:h-[70vh] md:h-[50vh] sm:h-[40vh] h-[30vh]' style={{ backgroundImage: 'url(featuredsection.png)' }}>
        <div>
          <Featuredsection />
        </div>
      </section>


      {/* Our users Section */}
      <section className='pt-20'>
        <Swiperfor />
      </section>


      {/* Section of our users */}
      <section>
        <div className='lg:flex justify-around p-20 '>
          <Featurepercent title={'designed'} heading={'Codes'} value = {66} color='#FF602E'/>
          <Featurepercent title={'our happy'} heading={'Clients'} value = {71} color='#FF602E'/>
          <Featurepercent title={'completed'} heading={'Projects'} value = {36} color='#FF602E'/>
        </div>
      </section>



      <section className='py-40 px-2 '>
        <Lettersection />
      </section>


      {/* Latest News Section */}
      <section className='bg-blue-950 relative'>
        <div>

          <div className=' flex justify-between'>
            {/* <div className='flex relative pt-10 ml-[270px]'>
              <Letter letter={"L"} />
              <Letter letter={"A"} />
              <Letter letter={"T"} />
              <Letter letter={"E"} />
              <Letter letter={"S"} />
              <Letter letter={"T"} />
            </div> */}
            <div className='flex flex-col items-center xl:pl-80 lg:pl-72 lg:py-10 md:pl-10 sm:pl-20'>
              <h1 className=' uppercase text-white font-bold text-7xl'>Latest News</h1>
            </div>
            <div>
              <div className='flex gap-3 xl:mr-52 lg:mt-14 lg:mr-16 md:mt-4 md:mr-2 sm:mt-4 sm:mr-4 mt-4' >
                <div className=''>
                  <h1 className='hidden md:block text-lg font-semibold text-white'>View All News</h1>
                </div>
                <div className=''>
                  <button className='p-2 rounded-lg bg-[#FF602E] text-white'>
                    <FaAngleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center mt-20 '>
            <Latestnews img={<img src='latest_card/latestcard1.jpg' />} />
            <Latestnews img={<img src='latest_card/latestcard2.jpg' />} />
            <Latestnews img={<img src='latest_card/latestcard3.jpg' />} />
          </div>

        </div>
      </section>


    </div>
  )
}
