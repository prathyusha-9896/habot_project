import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section2/>
    <Section3/>
    <Footer/>
      {/* Other components */}
    </div>
  );
}

export default App;
