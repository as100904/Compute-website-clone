import React from 'react'
import './About.css'
import 'aos/dist/aos.css'

function About() {
  return (
    <>
      <section id='about'>
        <div className='about-row1'>
          <div className='row1-1'/>
          <div className='row1-2'>
            <div className='textbox'>
              <h1 className='customheading' data-aos='fade-up'>Creative<br />& fresh</h1>
              <p className='subheading' data-aos='fade-right' data-aos-delay='800'>Our digital agency</p>
              <br />
              <p style={{color:'#5c5c5c'}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
              <a href='#portfolio' className='button'>VIEW PORTFOLIO</a>
            </div>
          </div>
        </div>
        
        <div className='about-row2'>
          <div className='row2-1'>
            <div className='textbox'>
              <h1 className='customheading' data-aos='fade-up'>Hip<br />& Funky</h1>
              <p className='subheading' data-aos='fade-right'  data-aos-delay='800'>We try new things</p>
              <br />
              <p style={{color:'#5c5c5c'}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement. </p>
              <a href='#services' className='button'>OUR SERVICES</a>
            </div>
          </div>
          <div className='row2-2'/>
        </div>
    </section>
    <div className='about-row3'></div>
    </>
  )
}

export default About