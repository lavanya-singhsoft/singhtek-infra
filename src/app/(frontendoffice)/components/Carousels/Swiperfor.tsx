"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Featuresdown from '../cards/Featuresdown';

const Swiperfor = () => {
    return (
        <div>
            <Swiper  modules={[Autoplay, Pagination]}
            spaceBetween={0}
            loop={true}
            cssMode={true}
            pagination={{
                clickable:true,
            }}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1440:{
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
              }}
            autoplay={{
                delay: 1500
            }} className="mySwiper">
            <SwiperSlide>
                <div className='flex justify-center flex-wrap'>
                    <Featuresdown
                        img={<img src='professional_card/profecard1.jpg' />}
                        role={'Archicture'}
                        name={'Bunty'}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center flex-wrap'>
                    <Featuresdown
                        img={<img src='professional_card/profecard2.jpg' />}
                        role={'Archicture'}
                        name={'Bunty'}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center flex-wrap'>
                    <Featuresdown
                        img={<img src='professional_card/profecard3.jpg' />}
                        role={'Archicture'}
                        name={'Bunty'}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center flex-wrap'>
                    <Featuresdown
                        img={<img src='professional_card/profecard4.jpg' />}
                        role={'Archicture'}
                        name={'Bunty'}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center flex-wrap'>
                    <Featuresdown
                        img={<img src='professional_card/profecard5.jpg' />}
                        role={'Archicture'}
                        name={'Bunty'}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center flex-wrap'>
                    <Featuresdown
                        img={<img src='professional_card/profecard6.jpg' />}
                        role={'Archicture'}
                        name={'Bunty'}
                    />
                </div>
            </SwiperSlide>
        </Swiper>
        </div >
    )
}

export default Swiperfor
