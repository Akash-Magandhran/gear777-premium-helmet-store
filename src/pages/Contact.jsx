
import React, { useState, useRef } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3egbqxj",
        "template_outeoxe",
        formRef.current,
        "Mce_FxWq3YuhsY60t"
      )
      .then(() => {
        setSent(true);
      })
      .catch((error) => {
        console.error("Email Error:", error);
        alert("Message send failed!");
      });
  };

  return (
    <section className="section-tight">
      <div className="container">
        <span className="eyebrow">Contact</span>
        <h1 className="title-lg mb-5">Get in touch</h1>

        <div className="row g-5">
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4">

              <div className="d-flex gap-3 align-items-start">
                <div className="icon-btn">
                  <FiMail />
                </div>
                <div>
                  <strong className="d-block">
                    strakash456@gmail.com
                  </strong>
                  <small className="text-muted-soft">
                    24h response
                  </small>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start">
                <div className="icon-btn">
                  <FiPhone />
                </div>
                <div>
                  <strong className="d-block">
                    +91 9876543210
                  </strong>
                  <small className="text-muted-soft">
                    Mon - Fri
                  </small>
                </div>
              </div>

              <div className="d-flex gap-3 align-items-start">
                <div className="icon-btn">
                  <FiMapPin />
                </div>
                <div>
                  <strong className="d-block">
                    Chennai, India
                  </strong>
                  <small className="text-muted-soft">
                    Available Online
                  </small>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-8">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="glass-card p-4"
            >
              {sent ? (
                <div className="text-center py-4">
                  <h3 className="text-accent">
                    Message Sent!
                  </h3>
                  <p className="text-muted-soft">
                    Thanks for contacting us.
                  </p>
                </div>
              ) : (
                <div className="row g-3">

                  <div className="col-md-6">
                    <input
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-accent"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>

                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

