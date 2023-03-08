import { styles } from "../../style";

export const Description = () => {
  return (
    <div
      className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div>
        <h1 className={`${styles.aboutHeadText} text-white`}>
          Hi, I'm <span className="text-[#915eff]">Sergii</span>
        </h1>
        <p className={`${styles.aboutSubText} mt-2 text-white-100`}>
          A front-end developer who brings <br className="sm:block hidden" />
          your ideas to life
        </p>
      </div>
    </div>
  );
};
