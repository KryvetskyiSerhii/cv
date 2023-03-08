import { Link } from "react-router-dom";
import { photoMe } from "../../assets";

interface Props {
  setActiveLink: (title: string) => void;
}

export const Logo: React.FC<Props> = ({ setActiveLink }) => {
  const handleScrollToTheTop = () => {
    setActiveLink("");
    window.scrollTo(0, 0);
  };
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={handleScrollToTheTop}
    >
      <img
        src={photoMe}
        alt="personal photo"
        className="w-12 h-12 object-contain"
      />
      <div>
        <p className="text-white text-[18px] font-bold cursor-pointer">
          Sergii Kryvetskyi
        </p>
        <p className="text-[10px] text-white">+49 170 272 08 03</p>
        <p className="text-[10px] text-white">kryvetskyis@gmail.com</p>
      </div>
    </Link>
  );
};
