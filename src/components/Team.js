import React from 'react'

//import team data
import {team} from '../data';

const Team = () => {
  return (
    <section id='team' className='section bg-[#28272A]'>
        <div className='container mx-auto text-center'>
            <h2 className='text-5xl text-[#eea93b] font-extrabold mb-9 '>Our Team</h2>


            {/* team members grid */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-[30px]  w-full'>
           {team.map((item, index) => {
            const {name, position, image, description} = item;
            return <div className='text-center lg:text-center mb-12' key={index}>
                <img src={image} alt='lawyer' className='mx-auto lg:mx-0 mb-6 h-[200px] w-[197px] rounded-full border-accent' />
                <h4 className='text-2xl mb-2 text-[#C9C0A5] font-bold lg:text-left '>{name}</h4>
                <p className='text-md uppercase tracking-[0.3px] mb-4 opacity-[0.8] lg:text-left  lg:pl-7 text-accent font-bold'>{position}</p>
                <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0'>{description}</p>
            </div>
           })}

            </div>
        </div>
    
    </section>
  )
}

export default Team