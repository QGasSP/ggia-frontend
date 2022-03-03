import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/header.css";

export const SuperHeader = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <header>
      <div className="wrapper">
        <div></div>

        <div>
          {user ? (
            <Button size="very-small" onClick={onLogout} label="Log out" />
          ) : (
            <>
              <Button size="very-small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="very-small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

SuperHeader.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

SuperHeader.defaultProps = {
  user: null,
};
