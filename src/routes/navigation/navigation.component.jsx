import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CupCakeKingLogo} from "../../assets/icons8-ok.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CupCakeKingLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
