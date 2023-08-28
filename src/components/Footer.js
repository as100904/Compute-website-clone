import React from 'react'
import './Footer.css'
import 'aos/dist/aos.css'

function Footer() {
  return (
    <footer id='footer'>
        <div className='footer-content' data-aos='fade-out'>
          <div className='footer-row'>
            
            <div className='logo'>
              <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527f403715879bc5767fce1_hipster-white.png' alt='brand-logo'></img>
            </div>

            <div className='info'>
              <h2>MENU</h2><br />
              <p className='footer-text'>
                <a href='#about'>ABOUT</a><br />
                <a href='#services'>SERVICES</a><br />
                <a href='#portfolio'>PORTFOLIO</a><br />
                <a href='#contact'>CONTACT</a><br />
              </p>
            </div>

            <div className='info'>
              <h2>ADDRESS</h2><br />
              <p className='footer-text'>
              Suite #913<br />
              Corporation Building<br />
              Tibb Street <br />
              Manchester <br />
              M1 1TA
              </p>
            </div>

            <div className='info'>
              <h2>CONTACT</h2><br />
              <p className='footer-text'>
              E: info(at)youragency.com<br />
              T: +44 800 123 456<br />
              F: +44 800 123 400 <br />
              </p>
            </div>
            
          </div>
        </div>
    </footer>
  )
}

export default Footer