import React from 'react'
import './Portfolio.css'
import 'aos/dist/aos.css'

function Portfolio() {
  return (
    <section className='portfolio-container' id='portfolio'>
      <div className='row'>
        <div className='portfolioInfo'>
          <h1 className='customheading' data-aos='fade-up'>Latest<br/>creations</h1>
          <p className='subheading' data-aos='fade-right' data-aos-delay='800'>We make beautiful things</p>
          <br />
          <p style={{color:'#5c5c5c'}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking.</p>
        </div>

        <div className='portfolioImg'>
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa53c0108cf394df63840_port1-small.jpg' alt='portfolioimg'>

          </img>
        </div>
        <div className='portfolioImg'>
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa5cc0108cf394df63845_port2-small.jpg' alt='portfolioimg'>

          </img>
        </div>
        <div className='portfolioImg' i>
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aacfa416f90126f4e8596_port3-small.jpg' alt='portfolioimg'>

          </img>
        </div>
      </div>


      <div className='row'>
        <div className='portfolioImg'>
         <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b90eaede1286e5f007d06_port4-small.jpg' alt='portfolioimg'>
         </img>

        </div>
        <div className='portfolioImg' >
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b9102ede1286e5f007d0b_port5-small.jpg' alt='portfolioimg'>

          </img>
        </div>
        <div className='portfolioImg'>
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b9118ede1286e5f007d0f_port6-small.jpg' alt='portfolioimg'>

          </img>
        </div>
        <div className='portfolioImg' >
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b912a18c4f26f5f653ab3_port7-small.jpg' alt='portfolioimg'>

          </img>
        </div>
      </div>

    </section>
  )
}

export default Portfolio