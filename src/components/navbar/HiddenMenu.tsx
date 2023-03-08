import { NAVLINKS } from "../../constants";
import { close, menu } from "../../assets";

interface Props {
  isMenuVisible: boolean;
  handleMenuVisible: () => void;
  activeLink: string;
  handleActiveLink: (title: string) => void;
}

export const HiddenMenu: React.FC<Props> = ({
  isMenuVisible,
  handleActiveLink,
  handleMenuVisible,
  activeLink,
}) => {
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
        src={isMenuVisible ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={handleMenuVisible}
      />
      <div
        className={`${
          isMenuVisible ? "flex" : "hidden"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end flex-start flex-col gap-4">
          {NAVLINKS.map((link) => (
            <li
              key={link.id}
              className={`${
                activeLink === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => handleActiveLink(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
