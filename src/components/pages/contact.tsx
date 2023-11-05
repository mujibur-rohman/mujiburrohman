import useInView from "@/hooks/useInView";
import { bottomToTop } from "@/services/constant/animate";
import { motion } from "framer-motion";

function Contact() {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section ref={ref} id="contact" className="min-h-screen py-20">
      <div className="px-10 lg:px-[7rem] flex flex-col">
        <div className="text-[1.75rem] lg:text-[2rem] font-bold inline">
          <span>Contact</span>
        </div>
        <motion.h2
          variants={bottomToTop}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="font-semibold text-lg mt-5"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={bottomToTop}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </motion.p>
        <motion.form
          variants={bottomToTop}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="flex flex-col gap-3 mt-5"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <input
              required
              type="email"
              placeholder="Email"
              className="outline-none focus:ring-2 w-full bg-neutral-light-600/40 dark:bg-neutral-400 p-3 rounded-md"
            />
            <input
              required
              type="text"
              placeholder="Name"
              className="outline-none focus:ring-2 w-full bg-neutral-light-600/40 dark:bg-neutral-400 p-3 rounded-md"
            />
          </div>
          <textarea
            required
            rows={10}
            placeholder="Message"
            className="outline-none focus:ring-2 w-full bg-neutral-light-600/40 dark:bg-neutral-400 p-3 rounded-md"
          />
          <div className="flex justify-end">
            <button className="bg-primary-purple-500 hover:bg-primary-purple-600 transition-colors text-white px-4 py-2 rounded-lg">
              Lets Collaborate
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
