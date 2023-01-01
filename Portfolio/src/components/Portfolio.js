import React from 'react'

import TestimonialSlider from '../components/Testimonials';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-secondary min-h-[600px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
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
