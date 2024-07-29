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
        <div className="col-8 offset-2">
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name:</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <br />
            <label htmlFor="">Your email:</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <br />
            <label htmlFor="">Write your message here:</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
            <br />
            <button
              className="contact-submit col-3 form-contact "
              type="submit"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
