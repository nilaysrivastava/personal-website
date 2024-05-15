import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextSpan from "../utils/textSpan";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const EmailForm = () => {
  const heading = "Let's get in touch!".split("");

  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      "service_ovqgs3v",
      "template_odtq3pn",
      form.current,
      templateParams,
      "qOBmYqpsDoyYylW0x"
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setError(true);
    })
    .finally(() => {
      setSending(false);
    });

    const templateParams={
      from_name: name,
      from_email: email,
      to_name: "Nilay Srivastava",
      message: message
    }
  };

  return (
    <section >
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen gap-4 mx-5"
        variants={fadeIn("down", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        
      >
        <div style={{
          backgroundColor: "black",
          backdropFilter: 'blur(5px)',
          borderRadius: '20px',
          boxShadow: '0px 12px 32px 0px purple',
          padding: '1rem',
          border: '1px solid #8B5CF6',
        }}>
        {/*title*/}
        <div className="flex flex-col gap-2" >
          <div className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-purple-500 pb-4 px-4">
            {heading.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </div>
          <p className="text-sm text-center md:text-md lg:text-lg text-neutral-300 pb-8">
            Leave your details and a short message below
          </p>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          {/*container*/}
          <div className="w-full mx-auto bg-black rounded-lg shadow-lg p-7 text-purple-500">
            {/*name and email*/}
            <div className="flex flex-col md:flex-row md:justify-between md:gap-4">
              <div className="flex flex-col">
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  className="w-full h-12 p-5 mb-2 font-light rounded-lg md:h-14 placeholder:text-sm placeholder:opacity-80 placeholder:italic focus:outline-purple-500"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{backgroundColor:"#1a1a1a"}}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  className="w-full h-12 p-5 mb-2 font-light rounded-lg md:h-14 placeholder:text-sm placeholder:opacity-80 placeholder:italic focus:outline-purple-500"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{backgroundColor:"#1a1a1a"}}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full">
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  className="w-full p-5 mb-3 font-light rounded-lg md:h-48 placeholder:text-sm placeholder:opacity-80 placeholder:italic focus:outline-purple-500 "
                  placeholder="What would you like to ask me?"
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{backgroundColor:"#1a1a1a"}}
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="w-full py-2 text-sm font-semibold text-black border-b-4 rounded-full bg-purple-500 hover:bg-purple-800 border-purple-800 hover:border-purple-500"
                disabled={sending}
              >
                {sending ? "Sending Message..." : "Send Message"}
              </button>
              {sent && <p className="mt-2 text-green-500">Sent with success!</p>}
              {error && (
                <p className="mt-2 text-red-500">Error sending message. Try later!</p>
              )}
            </div>
          </div>
        </form>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailForm;
