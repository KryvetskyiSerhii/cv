import { styles } from "../../style";
import { useState } from "react";

import { Links } from "./Links";
import { Logo } from "./Logo";
import { HiddenMenu } from "./HiddenMenu";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const handleMenuVisible = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleActiveLink = (title: string) => {
    setActiveLink(title);
    if (isMenuVisible) setIsMenuVisible(false);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Logo setActiveLink={setActiveLink} />
        <Links activeLink={activeLink} handleActiveLink={handleActiveLink} />
        <HiddenMenu
          isMenuVisible={isMenuVisible}
          handleActiveLink={handleActiveLink}
          handleMenuVisible={handleMenuVisible}
          activeLink={activeLink}
        />
      </div>
    </nav>
  );
};
