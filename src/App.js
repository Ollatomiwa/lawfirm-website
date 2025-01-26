import React from 'react';

// import components

import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Team from './components/Team';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
const App = () => {
  return <div>
    <Banner />
    <Testimonials />
    <Skills />
    <Team />
    <Blog />
    <Newsletter />
    <Contact />
    <Footer />
    <BackToTopButton />
  </div>;
};

export default App;
