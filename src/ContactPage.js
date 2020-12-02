import React from 'react';
import './ContactPage.css';
import contactImg from './contact.jpg';

function ContactPage(props) {
    return (
        <body>
        <div class="row">
            <div class="column1">
                <h1 style={{fontWeight:'550'}}>Contact Us</h1>
                <div className="qccBox">
                    <p style={{fontSize:'20px',fontWeight:'550'}}>Have comments, questions, or concerns? Let us know!</p>
                    <p>We will get back to you as soon as possible.</p>
                </div>

                <div class="row" style={{marginTop:'15px', marginLeft:'5px'}}>
                    <form className="contactForm">
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
                            <input type="text" id="email" name="email" className="contactEmail"/>
                        </div>
                        <div >
                            <label style={{marginTop:'10px'}}>Message</label><br/>
                            <textarea name="message" className="contactMessage"/>
                        </div>
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