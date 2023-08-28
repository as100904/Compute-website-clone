import React, { useState } from 'react'
import './Contact.css'
import 'aos/dist/aos.css'

function Contact() {
  
  const emptymsg = {
    name : '',
    email: '',
    message: ''
  }

  const [msg , setmsg] = useState({
    name : '',
    email: '',
    message: ''
  })
  

  const submitHandler = (event) => {
    console.log(msg)
    setmsg(emptymsg)
  }

  return (
    <section id='contact'>
      <div className='contact-container'>
        <h1 className='customheading' data-aos='fade-up'>Write us a letter</h1>
        <h5 className='subheading' data-aos='fade-right' data-aos-delay='800'>We appreciate your ideas</h5>
        <br />
        <br />
        <br />
        <form onSubmit={submitHandler}>
          <label className='contactlabel' for='name'>NAME</label>
          <input 
            className='txtbox' 
            type='text'  
            id='name' 
            value={msg.name} 
            onChange={(e) => {setmsg({...msg , name: e.target.value})}}
            placeholder='Enter your name' 
            required/>

          <label className='contactlabel' for='email'>EMAIL ADDRESS</label>
          <input 
            className='txtbox' 
            type='email' 
            id='email' 
            value={msg.email} 
            onChange={(e) => {setmsg({...msg , email: e.target.value})}}
            placeholder='Enter your email address' 
            required/>

          <label className='contactlabel' for='message'>YOUR MESSAGE</label>
          <textarea 
            className='txtbox textarea' 
            type='text'  
            id='message' 
            placeholder='Your message' 
            value={msg.message}
            onChange={(e) => {setmsg({...msg , message: e.target.value})}} 
            required />

          <button type='submit' className='button'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact