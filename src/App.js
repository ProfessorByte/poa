import "./App.css";
import Header from "./components/HeaderComponent";
import Biblioteca from "./paginas/Biblioteca";
import Repositorio from "./paginas/Repositorio";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
            <Route path="/biblioteca" component ={Biblioteca}/>
            <Route path="/repositorio" component ={Repositorio}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
