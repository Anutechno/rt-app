import React from "react";
import "./Header.css";
import Logo from "../logo/Logo";
import Searchbar from "../searchbar/Searchbar";
import SearchbarMobile from "../searchbar/SearchbarMobile";
import Navbar from "../navbar/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { setHideSearchBar } from "../../actions/actions";

function Header() {
  const hideSearchBar = useSelector((state) => state.hideSearchBar);
  const dispatch = useDispatch();

  if (!hideSearchBar) {
    return <HeaderContainer />;
  } else {
    return (
      <header className="header container-ns">
        <SearchbarMobile />
        <button className="transparent-btn button-close">
          <i
            class="bi bi-x"
            onClick={() => dispatch(setHideSearchBar(false))}
          ></i>
        </button>
      </header>
    );
  }
}

const HeaderContainer = () => {
  return (
    <header className="header-container">
      <div className="header container-ns">
        <Logo />
        <Searchbar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
