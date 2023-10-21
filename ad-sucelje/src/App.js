import React from "react";
import Topbar from "./components/topbar/Topbar";
import "./style.css";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="privremeno">Ostale stranice - privremeno</div>
      </div>
    </div>
  );
}

export default App;
