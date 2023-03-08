import { NAVLINKS } from "../../constants";

interface Props {
  activeLink: string;
  handleActiveLink: (title: string) => void;
}

export const Links: React.FC<Props> = ({ activeLink, handleActiveLink }) => {
  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {NAVLINKS.map((link) => (
        <li
          key={link.id}
          className={`${
            activeLink === link.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => handleActiveLink(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};
