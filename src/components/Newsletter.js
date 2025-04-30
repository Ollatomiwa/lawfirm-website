import React from 'react'



const Newsletter = () => {
  return (
    <section id='newsletter' className='bg-accent pt-[54px] pb-[74px]'>
        <div className='container mx-auto px-8 text-center'>
            <h3 className='font-primary text-[40px] font-extrabold leading-[1.2] text-white mb-[12px]'>
                Read The Latest Blog News
            </h3>
            <p className='mb-[40px] text-white text-[20px]'>Be first to get the latest news about us.</p>
            <div className='max-w-[600px] mx-auto flex flex-col lg:text-center '>
                <a href="https://eaadesinaandco-blog.vercel.app" target="_blank" rel="noopener noreferrer" className='btn bg-primary hover:bg-primary-hover lg:text-[30px] '>
                    GO TO BLOG PAGE
                </a>
            </div>
        </div>
    </section>
  )
}

export default Newsletter