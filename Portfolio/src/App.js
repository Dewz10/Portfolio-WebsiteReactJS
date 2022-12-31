import React from 'react';


// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Interest from './components/Interest';
import About from './components/About';
const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Interest />
      <About />
      <div style={{height: '2000px'}}></div>
    </div>
  )
};

export default App;
