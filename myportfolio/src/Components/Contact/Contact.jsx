import React from "react";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "81edbe99-0648-4dae-9a22-686acdeeb6c6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact-body">
      <div className="container row">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <form onSubmit={onSubmit} className="contact-form">
            <h2>Get in Touch</h2>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
            <label htmlFor="message">Your Message:</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message"
              required
            ></textarea>
            <button className="contact-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
