import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <div className='nav'>
        <div className='nav-container'>
            <a className='nav-link nav-menu nav-brand' href='#head'><img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527f403715879bc5767fce1_hipster-white.png' alt='brandlogo'/></a>
            <a className='nav-link nav-menu' href='#head'>HOME</a>
            <a className='nav-link nav-menu' href='#about'>ABOUT</a>
            <a className='nav-link nav-menu' href='#services'>SERVICES</a>
            <a className='nav-link nav-menu' href='#portfolio'>PORTFOLIO</a>
            <a className='nav-link nav-menu' href='#contact'>CONTACT</a>
        </div>
    </div>
  )
}

export default Navigation