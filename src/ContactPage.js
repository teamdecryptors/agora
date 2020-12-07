import React, {useState} from 'react';
import './ContactPage.css';
import contactImg from './contact.jpg';
import {contactIds} from './constants';
import emailjs from 'emailjs-com';

function ContactPage(props) {

    const [messageSent, setMessageSent] = useState(false);
    const [messageSuccessful, setMessageSuccessful] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(contactIds.SERVICE_ID, contactIds.TEMPLATE_ID, e.target, contactIds.USER_ID)
          .then((result) => {
              document.getElementById("contactForm").reset();
              setMessageSent(true)
              setMessageSuccessful(true);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
              setMessageSent(true)
              setMessageSuccessful(false);
          });
      }

    return (
        
        <body>
        <div class="row">
            <div class="column1">
                <h1 style={{fontWeight:'550'}}>Contact Us</h1>
                {
                    !messageSent &&
                    <div className="qccBox">
                        <p style={{fontSize:'20px',fontWeight:'550'}}>Have comments, questions, or concerns? Let us know!</p>
                        <p>We will get back to you as soon as possible.</p>
                    </div>
                }
                {
                    messageSent &&
                    messageSuccessful &&
                    <div className="successBox">
                        <p style={{fontSize:'20px',fontWeight:'550'}}>Message Sent!</p>
                        <p>You can expect an email back soon.</p>
                    </div>
                }
                {
                    messageSent &&
                    !messageSuccessful &&
                    <div className="failureBox">
                        <p style={{fontSize:'20px',fontWeight:'550'}}>Something went wrong.</p>
                        <p>You can try reaching out to us directly: decryptersagora@gmail.com</p>
                    </div>
                }
                <div class="row" style={{marginTop:'15px', marginLeft:'5px'}}>
                    <form className="contactForm" onSubmit={sendEmail} id="contactForm">
                        <div class="column">
                            <label>First Name</label><br/>
                            <input type="text" id="fname" name="fname" className="contactName"/>
                        </div>
                        <div class="column">
                            <label>Last Name</label><br/>
                            <input type="text" id="lname" name="lname" className="contactName"/>
                        </div>
                        <div>
                            <label style={{marginTop:'10px'}}>Email</label><br/>
                            <input type="email" id="email" name="email" className="contactEmail"/>
                        </div>
                        <div >
                            <label style={{marginTop:'10px'}}>Message*</label><br/>
                            <textarea name="message" className="contactMessage" required/>
                        </div>
                        <input type="submit" value="Send Message" className="contactSubmit"/>
                    </form>
                </div>
            </div>
            <div class="column2">
                <img src={contactImg} alt="contactImage" className="contactImage"/>
                <a href='https://www.freepik.com/vectors/computer' style={{fontSize: '13px'}}>Computer vector created by stories - www.freepik.com</a>
            </div>
        </div> 
        </body>
        
    );
}

export default ContactPage;