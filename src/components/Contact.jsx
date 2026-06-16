import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        },
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Contact Me</h2>

          <p className="text-gray-400 mt-4">
            Let's build something amazing together.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="mt-12 space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-[#121212] border border-gray-700 rounded-lg p-4 focus:outline-none focus:border-yellow-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-[#121212] border border-gray-700 rounded-lg p-4 focus:outline-none focus:border-yellow-500"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="w-full bg-[#121212] border border-gray-700 rounded-lg p-4 focus:outline-none focus:border-yellow-500"
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
