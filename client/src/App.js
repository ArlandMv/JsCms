import React from 'react';
import './App.scss';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      {/* <h1>Javascript CMS</h1>
      <p>The best way to let your custumers manage content</p> */}
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;