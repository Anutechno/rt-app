import React from "react";

import Logo from "../logo/Logo";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6 col-md-4 col-4">
          <Logo />
          </div>
          <div className="col-lg-3 col-md-4 col-8 d-flex align-items-center  justify-content-end justify-content-md-end">
            <p>
              {props.children}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
