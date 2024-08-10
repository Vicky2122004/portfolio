import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id='contact'>
        <div className='contact-head'>
            <h1>Contact <span className='contact-me'>Me</span></h1>
        </div>

        <div className='contact-cont'>
            <form className='form-cont'>
                <input type='text' placeholder='Enter Your Name' required  className='name-type' /><br/>
                <input type='email' placeholder='Enter Your E-Mail' required className='email-type'/><br/>
                <input type='number' placeholder='Enter Your Mobile' required className='number-type'/><br/>
                <textarea className='text-area' placeholder='Write your Queries'></textarea><br />
                <div className='but-cont'>
                <button type='submit' className='submit-but'>Submit</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact