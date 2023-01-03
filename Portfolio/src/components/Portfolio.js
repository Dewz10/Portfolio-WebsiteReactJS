import React from 'react'

import TestimonialSlider from '../components/Testimonials';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section min-h-[600px] bg-secondary m-[25px] rounded-2xl'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='text-paragraph section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                    Projects
                </h2>
                <br /><br/>
            </div>
            <TestimonialSlider />
        </div>
    </section>
  )
}

export default Portfolio
