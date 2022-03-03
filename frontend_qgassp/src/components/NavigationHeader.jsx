import React from "react";
import PropTypes from "prop-types";
import { TabsEmission } from "./TabsEmission";
import "../css/header.css";

export const NavigationHeader = () => {
  return (
    <header>
      <div className="wrapper">
        <div></div>
        <div>
          {" "}
          <TabsEmission />
        </div>
      </div>
    </header>
  );
};

NavigationHeader.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

NavigationHeader.defaultProps = {
  user: null,
};
