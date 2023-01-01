import React from 'react'

import {skills} from '../data';

const Skills = () => {
  return (
    <section id='skills' className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-8 md:grid-flow-row-dense'>
                {skills.map((skill, index)=> {
                    return (
                        <div className='md:pb-5 md:pt-1'>
                            <img src={skill.image} alt=''/>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills
