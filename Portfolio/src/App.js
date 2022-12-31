import React from 'react';
import Interest from './components/Interest';

// import components
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Interest />
      <div style={{height: '2000px'}}></div>
    </div>
  )
};

export default App;
