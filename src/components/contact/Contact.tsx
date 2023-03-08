import { motion } from "framer-motion";

import { styles } from "../../style";
import { slideIn, staggerContainer } from "../../utils/motion";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      id="contact"
    >
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
};
