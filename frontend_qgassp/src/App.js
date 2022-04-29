import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import { AppRoutes } from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import PropTypes from "prop-types";

function App({ user, onLogin, onLogout, onCreateAccount }) {
  return (
    <>
      <Router>
      {
        <Header
          user={user}
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={onCreateAccount}
        />
      }
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
App.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
};
