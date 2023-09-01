import React from 'react'
import "./FormStyle.css";
function Form() {
    return (
        <div className="form">
         
         <form className='Form-area'>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your Name" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="Your Email" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required placeholder="Your Message"></textarea>
    </div>
    <button type="submit" className="animated-button">Submit</button>
</form>

        </div>
    )
}

export default Form