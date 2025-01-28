import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { social } from '../data';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        
        const templateForm = {
            from_name: name,
            from_email: email,
            to_name: 'E.A. ADESINA',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateForm, publicKey)
            .then((response) => {
                console.log('Email sent successfully:', response);
                setName('');
                setEmail('');
                setMessage('');
                alert('Your message has been sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending mail:', error.text || error);
                alert('There was an error sending your message. Please try again.');
            });
    };

    return (
        <section id="contact" className="bg-primary text-white min-h-[732px] section">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-primary font-extrabold mb-4">Contact us</h2>
                <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
                    179, Igbosere Road, Lagos.
                </p>
                <form onSubmit={handleSubmit} className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]">
                    <input
                        className="form-control"
                        placeholder="Full name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="form-control"
                        placeholder="Email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className="textarea"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="btn bg-accent hover:bg-accent-hover transition-all">
                        Send message
                    </button>
                </form>
                <div className="flex items-center justify-between max-w-[205px] mx-auto">
                    {social.map((item, index) => (
                        <a href="#" key={index}>
                            <img src={item.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
