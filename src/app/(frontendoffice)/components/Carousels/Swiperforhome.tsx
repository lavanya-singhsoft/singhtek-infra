"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard , Autoplay} from 'swiper/modules';
import Homesection from '../Homesection';

const Swiperforhome = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={false}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={false}
                keyboard={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay , Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Homesection 
                          img = 'url("Home/Homebg1.svg")'
                          heading = 'welcome to singhtek'
                          title = 'Build a better tomorrow'
                          para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio perspiciatis cupiditate esse id impedit, quaerat nobis dicta aliquam voluptatem. '
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Homesection 
                          img = 'url("Home/homesection-background.svg")'
                          heading = 'welcome to singhtek'
                          title = 'Build a better tomorrow'
                          para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio perspiciatis cupiditate esse id impedit, quaerat nobis dicta aliquam voluptatem. '
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Homesection 
                          img = 'url("Home/Homebg3.svg")'
                          heading = 'welcome to singhtek'
                          title = 'Build a better tomorrow'
                          para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio perspiciatis cupiditate esse id impedit, quaerat nobis dicta aliquam voluptatem. '
                    />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Swiperforhome
