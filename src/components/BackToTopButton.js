import React, { useEffect } from 'react'
import { useState } from 'react';

// IMPORT REACT SCROLL
import { animateScroll as scroll } from 'react-scroll';

//import icon
import {FaChevronUp} from 'react-icons/fa';

const BackToTopButton = () => {
const [show, setShow] = useState(false);

useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            setShow(true)
        } else {
            setShow(false)
        }
    })
})

const scrollToTop = () => {
    scroll.scrollToTop();
}
  return (
    show && (
    <button onClick={() => scrollToTop()} className='flex justify-center items-center bg-primary-hover text-white w-12 h-12 fixed x-10 
        right-8 bottom-16 lg:bottom-8 rounded-sm cursor-pointer text-sm'>
        <FaChevronUp/>
    </button>
    )
  )
}

export default BackToTopButton;