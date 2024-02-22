import React from 'react'
import img1 from '../photos/facebook.jpg'
import img2 from '../photos/twitter.jpg'
import img3 from '../photos/instagram.jpg'
import './Contact.css'
const Contact = () => {
  return (
    <div>
    <div id='margin'>
      <h1 id='contact'>Contact</h1>
        </div>
        <div id='margin1'>
  <h3>Questions, Comments, or Concerns?</h3>
  <p>Use the form below to get in touch. Our office hours are Monday through Friday,9 am to 5 pm <br></br>Eastern, and we attempt to respond to support requests within 1 business day.</p></div>
  <input
        type="text" id='comment'
        placeholder="Please Write Your Comments..."/>
        <div >
          <a href='https://www.facebook.com/'>
        <img src={img1} alt="contact" id='logo' width={80} height={60}  /></a>
        <a href='https://twitter.com/?lang=en'>
        <img src={img2} alt="contact" id='logo1' width={80} height={60} /></a>
        <a href='https://www.instagram.com/?hl=enn'>
        <img src={img3} alt="contact" id='logo2' width={80} height={60} /></a>
        </div>
        </div>
  )
}

export default Contact