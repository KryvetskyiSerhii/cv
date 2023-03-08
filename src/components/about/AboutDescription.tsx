import { motion } from "framer-motion";
import { styles } from "../../style";
import { textVariant, fadeIn } from "../../utils/motion";

export const AboutDescription = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in React, React Native, Redux, Node.js,
        Three.js. I'm a fast learner and collaborate closely with clients to
        create effecient and user-friendly solutions.{" "}
      </motion.p>
    </>
  );
};
