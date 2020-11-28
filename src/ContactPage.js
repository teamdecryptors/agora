import React from 'react';
import './ContactPage.css';
import contactImg from './contact.jpg';

function ContactPage(props) {
    return (
        <body>
        <div class="row">
            <div class="column1">
                <h1>Contact Us</h1>
                <div className="qccBox">
                    <p>Have comments, questions, or concerns? Let us know!</p>
                    <p>We will get back to you as soon as possible.</p>
                </div>

                <div class="row" style={{marginTop:'15px', marginLeft:'5px'}}>
                    <form className="contactForm">
                        <div class="column">
                            First Name<br/>
                            <input type="text" id="fname" name="fname" style={{width: '90%', marginTop:'10px'}}/>
                        </div>
                        <div class="column">
                            Last Name<br/>
                            <input type="text" id="lname" name="lname" style={{width: '90%', marginTop:'10px'}}/>
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