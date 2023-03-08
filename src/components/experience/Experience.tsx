import { motion } from "framer-motion";
import { styles } from "../../style";
import { staggerContainer, textVariant } from "../../utils/motion";

import "react-vertical-timeline-component/style.min.css";
import { TimeLine } from "./TimeLine";

export const Experience = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id="work"
      >
        <motion.div variants={textVariant(0.1)}>
          <h2 className={styles.sectionHeadText}>Work experience</h2>
        </motion.div>
        <TimeLine />
      </motion.section>
    </>
  );
};
