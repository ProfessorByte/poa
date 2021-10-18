import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HeaderBibliografia from "./components/HeaderBibliografia";
import Header from "./components/HeaderComponent";
import AppRouter from "./routers/AppRouter";


function App() {
  return (
    <div classname="fondoBibliografia">
      <Router>
        <HeaderBibliografia>
          
        </HeaderBibliografia>
      </Router>
    </div>
  );
}

export default App;
