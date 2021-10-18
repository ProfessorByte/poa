import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/HeaderComponent";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <Router>
        <Header />
        
        <h1>hola</h1>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
