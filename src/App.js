import { BrowserRouter as Router } from "react-router-dom";
import "./css/App.css";
import Header from "./components/HeaderComponent";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

require("bootstrap");

function App() {
  return (
    <div className="game-styles">
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
