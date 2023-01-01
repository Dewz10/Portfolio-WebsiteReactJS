import React from 'react'

import {testimonials, href} from '../data';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

import {Autoplay, Pagination} from 'swiper';

const Testimonials = () => {
  return (
    <>
        <Swiper pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
        >
            {testimonials.map((item, index)=> {
                const {authorImg, authorText, authorName, authorPosition} = item;
                return (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col lg:flex-row gap-12 lgg:gap-32'>
                            <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                                <img className='rounded-2xl' src={authorImg} alt=''/>
                            </div>
                            <div className='flex flex-col max-w-3xl'>
                                <h5 className='text-paragraph font-body text-2xl mb-8 italic font-normal'>{authorText}</h5>
                                <div>
                                    <p className='text-lg text-accent'>{authorName}</p>
                                    <p>{authorPosition}</p>
                                </div>
                                <div>
                                    <br/><br/>
                                    <a href={item.href} class="text-white bg-accent hover:bg-accent-hover focus:ring-4 focus:ring-accent-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-accent-hover dark:hover:bg-accent focus:outline-none dark:focus:ring-offset-accent">More information</a>
                                    <br/><br/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </>
  )
}

export default Testimonials
