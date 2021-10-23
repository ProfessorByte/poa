import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
require("bootstrap");

function App() {
  window.onresize = function () {
    window.location.reload();
  };
  return (
    <div className="game-styles">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
