import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import { social } from '../data';

const Contact = () => {
  const form = useRef(null);
  const [message, setMessage] = useState(null); // State for notification

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setMessage({ type: 'success', text: 'Message sent successfully!' });
          form.current.reset(); // Clear form after success
        },
        (error) => {
          setMessage({ type: 'error', text: 'Failed to send message. Try again!' });
        }
      );
  };
  useEffect(() => {
      if (message) {
        const timer = setTimeout(() => setMessage(null), 4000);
        return () => clearTimeout(timer); // Cleanup function
      }
    }, [message]);

  return (
    <section id="contact" className="bg-primary text-white min-h-[732px] section">
    <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">Contact us</h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
                    179, Igbosere Road, Lagos.
        </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]"
      >

        {/* Notification Message */}
        {message && (
          <div
            className={`mb-4 p-3 text-white rounded ${
              message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {message.text}
          </div>
        )}

        
        <input
          type="text"
          name="user_name"
          placeholder='  Full Name'
          required
          className="form_control h-[70px] text-black"
        />

        
        <input
          type="email"
          name="user_email"
          placeholder='  Email address'
          required
          className="form_control h-[70px] text-black "
        />

        
        <textarea
          name="message"
          required
          placeholder="Message"
          className="textarea text-black"
        />

         <button
                  type="submit"
                  value="Send"
                  className="btn bg-accent hover:bg-accent-hover transition-all">
                  Send message
              </button>
              </form>
              <div className="flex items-center justify-between max-w-[205px] mx-auto">
                                  {social.map((item, index) => (
                                      <button href="#" key={index}>
                                          <img src={item.icon} alt="" />
                                      </button>
                                  ))}
                              </div>
    </div>
    </section>
  );
};

export default Contact;
