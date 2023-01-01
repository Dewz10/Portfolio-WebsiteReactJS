import React from 'react'

import {social} from '../data';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                {/*social icon*/}
                <div className='flex'>
                    {social.map((item, index)=> {
                        const {href, icon, title} = item;
                        return (
                            <div>
                                <a className='text-accent text-base' href={href} key={index}>
                                    {title}
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <p>&copy; 2022</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer