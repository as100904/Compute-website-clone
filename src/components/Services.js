import React from 'react'
import './Services.css'
import 'aos/dist/aos.css'

function Services() {
  return (
    <div id='services'>
      <div className='inforow'>
        <div className='col1'>
        </div>

        <div className='col2'>
          <div className='servicetextbox'>
              <h1 className='customheading' data-aos='fade-up' >Things<br />we do</h1>
              <p className='subheading' data-aos='fade-right' data-aos-delay='800'>We exist to create</p>
              <br />
              <p style={{color:'#5c5c5c'}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
              <a href='#contact' className='button'>GET IN TOUCH</a>
            </div>
        </div>
      </div>

      <div className='infotiles'>
        <div className='tile tile1' data-aos='fade-up' >
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290faf53ab13dd4effe909_interface34.svg' alt='branding'/>
          <h1 className='customheading'>Branding</h1>
          <p style={{color:'#5c5c5c'}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        </div>

        <div className='tile tile2' data-aos='fade-up' data-aos-delay='800'>
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55290fdd3869f6db4ed16c7a_microwave.svg' alt='webdesign'/>
          <h1 className='customheading'>Web Design</h1>
          <p style={{color:'#5c5c5c'}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        </div>

        <div className='tile tile3' data-aos='fade-up' data-aos-delay='1600'>
          <img src='https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/55299a803b36ca374dffd8d3_picture.svg' alt='graphicdesign'/>
          <h1 className='customheading'>Graphic Design</h1>
          <p style={{color:'#5c5c5c'}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        </div>
      </div>

      <div className='reviews'>
      <h1 className='customheading' data-aos='fade-up'>Our clients<br />love our work</h1>
      <p className='subheading' data-aos='fade-right' data-aos-delay='800'>But don’t just take our word for it...</p>
      <br />
      <br />
      <div className='quotes'>
         <div className='quote1'>
          <p>
            <em>“I don’t like people, but I make an exception for ABC&nbsp;Agency. They’re pretty damn cool.”</em>
            <br />Brian&nbsp;Jones, &nbsp;America Big Corporation
            
          </p>
         </div>

         <div className='quote2'>
          <p>
            <em>“ABC&nbsp;Agency our the best.&nbsp;Not only did they deliver my work on time, they even walked my dog when I was out of town”</em>
            <br />A&nbsp;Smith – Neighbour
          </p>
         </div>


        </div>
      </div>

    </div>
  )
}

export default Services