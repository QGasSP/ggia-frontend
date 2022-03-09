import "./App.css";
import "../node_modules/react-vis/dist/style.css";
// import { AppRoutes } from "./routes/AppRoutes";
// import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import PropTypes from "prop-types";
import { Welcome } from "./components/Welcome";

function App({ user, onLogin, onLogout, onCreateAccount }) {
  return (
    <>
      {
        <Header
          user={user}
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={onCreateAccount}
        />
      }
      {/*  <Welcome/> */}

      {/*  <Router>
        <AppRoutes />
      </Router> */}
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
