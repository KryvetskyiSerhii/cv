import { motion } from "framer-motion";
import { styles } from "../../style";
import { staggerContainer } from "../../utils/motion";
import { AboutDescription } from "./AboutDescription";
import { ServiceCards } from "./ServiceCards";

export const About: React.FC = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id="about"
      >
        <AboutDescription />
        <ServiceCards />
      </motion.section>
    </>
  );
};
