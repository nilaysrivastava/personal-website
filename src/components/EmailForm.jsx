import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextSpan from "../utils/textSpan";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const EmailForm = () => {
  const heading = "Let's get in touch!".split("");

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_asd9u2u",
        "template_odtq3pn",
        form.current,
        "qOBmYqpsDoyYylW0x"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSent(true);
        setError(false);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError(true);
        setSent(false);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 lg:px-20 py-20">
        <div className="w-full max-w-5xl md:w-3/4 bg-black/80 rounded-3xl shadow-[0px_12px_32px_0px_purple] border border-purple-500 p-6 sm:p-8 lg:p-10">
          {/* Title */}
          <motion.div
            className="flex flex-col gap-2 text-center"
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className="text-3xl font-bold md:text-4xl lg:text-5xl text-purple-500 pb-4">
              {heading.map((letter, index) => (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              ))}
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 pb-4">
              Leave your details and a short message below
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className="bg-black text-purple-500 rounded-2xl p-6 sm:p-4">
              <div className="flex flex-col md:flex-row md:gap-6">
                <div className="flex flex-col w-full">
                  <label className="font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="from_name" // ✅ Important for EmailJS
                    className="w-full h-12 md:h-14 p-4 mb-4 rounded-lg placeholder:text-sm placeholder:italic bg-[#1a1a1a] focus:outline-purple-500"
                    placeholder="Enter your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="from_email" // ✅ Important for EmailJS
                    className="w-full h-12 md:h-14 p-4 mb-4 rounded-lg placeholder:text-sm placeholder:italic bg-[#1a1a1a] focus:outline-purple-500"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mt-4">
                <label className="font-medium mb-1">Message</label>
                <textarea
                  name="message" // ✅ Already correct
                  className="w-full h-32 md:h-40 p-4 rounded-lg mb-4 placeholder:text-sm placeholder:italic bg-[#1a1a1a] focus:outline-purple-500"
                  placeholder="What would you like to ask me?"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Styled Send Button */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
              >
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-5 py-2 border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-black rounded-full transition-all duration-300 text-center font-medium"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </motion.div>

              {/* Success/Error Messages */}
              {sent && (
                <p className="mt-4 text-green-500 text-center">
                  Sent with success!
                </p>
              )}
              {error && (
                <p className="mt-4 text-red-500 text-center">
                  Error sending message. Try later!
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
