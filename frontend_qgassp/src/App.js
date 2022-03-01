import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import { AppRoutes } from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
