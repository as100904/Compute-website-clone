import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import AOS from 'aos';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  },[])
  
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <div className='numbers' data-aos='fade-out'>
        
        <div className='numbercontainer'>
          <h1 className='customheading'>342</h1>
          <p className='italic'>Cups of coffee</p>
        </div>

        <div className='numbercontainer'>
          <h1 className='customheading'>756</h1>
          <p className='italic'>Bicycle kilometres</p>
        </div>

        <div className='numbercontainer'>
          <h1 className='customheading'>419</h1>
          <p className='italic'>Brainstorm sessions</p>
        </div>

        <div className='numbercontainer'>
          <h1 className='customheading'>284</h1>
          <p className='italic'>Video hours</p>
        </div>

      </div>
      <Services />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
