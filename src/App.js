import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/HeaderComponent";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
