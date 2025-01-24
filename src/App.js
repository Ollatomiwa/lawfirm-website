import React from 'react';

// import components
import Header from './components/Header';
import Banner from './components/Banner';
import Appointment from './components/Appointment';

const App = () => {
  return <div>
    <Header />
    <Banner />
    
    <div className='h-[2000px]'></div>
  </div>;
};

export default App;
