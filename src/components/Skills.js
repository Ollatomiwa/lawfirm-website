import React from 'react'

// import skills data
import { skills } from '../data';
const Skills = () => {
  return (
    <section id='skills' className='section bg-[#f8f3eca1] pb-32'>
        <div className='containermx-auto text-center'>
            <h2 className='text-5xl font-primary font-extrabold mb-4'>What we do</h2>
            <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* skills grid*/}
            <div className='lg:grid lg:grid-cols-3 gap-12'>
                {skills.map((item, index) => {
                    const {icon, title, description} = item;
                    return(
                         <div className='flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0'> 
                        <img className='mb-6' src={icon} alt='' />
                        <h4 className='text-2xl mb-2 font-primary font-bold'>{title}</h4>
                        <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills