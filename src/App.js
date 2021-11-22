import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {
  window.onresize = function () {
    const url = window.location;
    if (url.href.includes("#")) {
      url.assign(url);
    }
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
