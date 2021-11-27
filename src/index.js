import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
} from "reactfire";
import { auth, db, firebaseConfig } from "./server/firebaseConfig";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={db}>
          <App />
        </FirestoreProvider>
      </AuthProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
