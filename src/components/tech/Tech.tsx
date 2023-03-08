import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../../constants";
import { styles } from "../../style";
import { staggerContainer, textVariant } from "../../utils/motion";
import { BallCanvas } from "../canvas/BallCanvas";

export const Tech = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <h2 className={styles.sectionHeadText}>Technology stack</h2>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {TECHNOLOGIES.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};
