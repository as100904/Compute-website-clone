import React, { useEffect } from 'react'
import '../App.css'
import './Header.css'
import 'aos/dist/aos.css'

function Header() {
  let slides = document.querySelectorAll('.slide')
  let index = 0

  useEffect( () => {
    slides = document.querySelectorAll('.slide')
    index = 0
  },[])

  const nextSlide = () => {
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length
    slides[index].classList.add('active')
  }

  const prevSlide = () => {
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
  }

    // setInterval(nextSlide , 6000)
  
  return (
    <header className='header' id='head'>
        <div className='slider'>
          
          <div className='slide active' id='slide1'>
            <div className='slidetext'>
              <h1>We can change<br/>your digital world</h1>
              <p>Bold enough to blow a hole in your next marketing campaign.</p>
            </div>
          </div>

          <div className='slide' id='slide2'>
            <div className='slidetext'>
              <h1 style={{fontSize:'60px', lineHeight:'3.8rem'}}>You need<br />a good partner</h1>
              <p style={{fontStyle:'italic', lineHeight:'2.6rem'}}>Let us help you realise your true potential</p>
            </div>
          </div>

          <div className='slide' id='slide3'>
            <div className='slidetext'>
              <h1 style={{fontSize:'60px', lineHeight:'3.8rem'}}>Shoot for<br />the hoop!</h1>
              <p style={{fontStyle:'italic', lineHeight:'2.6rem'}}>Aiming low is not an option for us</p>
            </div>
          </div>

          <div className='prev' onClick={prevSlide}></div>
          <div className='next' onClick={nextSlide}></div>

        </div>
    </header>
  )
}

export default Header