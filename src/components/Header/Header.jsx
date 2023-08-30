import "./Header.scss";
import { useEffect, useState } from "react";
import { Search } from "./Search/Search";

// Icons
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { Context } from "../../utils/context";

const Header = () => {
  const [scrollY, setScrollY] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrollY ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="ham-menu">
            <GiHamburgerMenu />
          </div>
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">E-STORE.</div>
          <div className="right">
            <TbSearch />
            <span className="cart-icon">
              <CgShoppingCart />
              <span>5</span>
            </span>
            <span className="cart-inco">
              <AiOutlineHeart />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
