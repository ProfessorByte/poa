import React from "react";
import "../css/LogIn.css";
import LogInComponent from "../components/LogInComponent";
import Header from "../components/HeaderLogIn";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="contenedor-log-in ">
          <LogInComponent />
        </div>
      </div>
    );
  }
}

export default LogIn;
