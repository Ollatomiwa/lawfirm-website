import { useRef, useState, useEffect } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

const Appointment = () => {
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
          setMessage({ type: "success", text: "Message sent successfully!" });
          form.current.reset(); // Clear form after success
        },
        (error) => {
          setMessage({
            type: "error",
            text: "Failed to send message. Try again!",
          });
        }
    );
};
  // Automatically remove message after 4 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 4000);
      return () => clearTimeout(timer); // Cleanup function
    }
  }, [message]);

return (
    <div className="bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto">
      <h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">
        Get an Appointment
      </h3>
      <div className="w-[54px] h-[3px] bg-white my-6 mx-auto"></div>
      {/* input group */}
      <div className="space-y-[24px]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]"
        >
          {/* Notification Message */}
          {message && (
            <div
              className={`mb-4 p-3 text-white rounded ${
                message.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {message.text}
            </div>
          )}

          <input
            type="text"
            name="user_name"
            placeholder="  Full Name"
            required
            className="form_control h-[70px]"
          />

          <input
            type="email"
            name="user_email"
            placeholder="  Email address"
            required
            className="form_control h-[70px]"
          />

          <textarea
            className="resize-none w-full h-[132px] outline-none rounded-sm p-4 
            font-body text-sm text-gray focus:ring-1 focus:ring-primary"
            placeholder="Your message"
            name="message"
          />
          <button
            type="submit"
            className="btn bg-primary hover:bg-primary-hover transition-all"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
