import React, { useState } from 'react';
import './ContactUs.css'

const ContactUs = () => {


  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isError, setIsError] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleMessage = (e) => {
    setContactMessage(e.target.value)
  }

  const handleContactEmail = (e) => {
    setContactEmail(e.target.value)
  }

  const handleContactName = (e) => {
    setContactName(e.target.value)
  }

  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (contactName === '' || contactEmail === '' || contactMessage === '' || !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(contactEmail.toLowerCase()))) {

      setIsError(true)

    } else {

      setContactMessage('');
      setContactEmail('');
      setContactName('');
      setIsMessageSent(true);


      fetch('https://react-getting-started-b6430-default-rtdb.asia-southeast1.firebasedatabase.app/inquiry.json',

        {
          method: 'POST',
          body: JSON.stringify(
            {
              id: 'INQ-' + Date.now(),
              Name: contactName,
              Email: contactEmail,
              Message: contactMessage
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        })

    }
  }

  return (
    <section className="Contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, maxime.</p>
      </div>
      <div className="containerContact">
        <div className="ContactInfo">
          <div className="box">
            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>B and P Building, <br />
                843 Antonio Arnaiz Avenue <br />
                Legazpi Village, Makati City <br />
                Metro Manila, Philippines, 1229</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>(02) 7720 2620 <br />
                0917 258 7621 (Globe) <br />
                0998 846 2120 (Smart)</p>
            </div>
          </div>
        </div>
        <div className="ContactForm">

          {isMessageSent

            ?

            <div className="messageSent">Message Sent!</div>

            :

            <form id="contactusForm" onSubmit={handleContactSubmit}>
              <h2>Send Message</h2>
              <div className="InputBox">
                <input
                  className=""
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={contactName}
                  onChange={handleContactName}
                />
                {isError ? <div className='errorHint'>Full Name is required.</div> : null}
              </div>
              <div className="InputBox">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={contactEmail}
                  onChange={handleContactEmail}
                />
                {isError ? <div className='errorHint'>Valid Email is required.</div> : null}
              </div>
              <div className="InputBox">
                <textarea
                  name="message"
                  placeholder="Type Your Message..."
                  value={contactMessage}
                  onChange={handleMessage}
                >
                  {/* Placeholder */}
                </textarea>
                {isError ? <div className='errorHint'>Message is required.</div> : null}
              </div>
              <div className="InputBox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          }
        </div>
      </div>
    </section>
  )
}

export default ContactUs


