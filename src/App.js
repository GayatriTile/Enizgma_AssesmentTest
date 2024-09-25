import React from "react";
import "./App.css";

//components
import NavBar from "./shared/nav-bar";
import Tasks from "./components/tasks";

function App() {

  return (
    <div className="appRoot">
      <NavBar />
      <Tasks />
    </div>
  );
}

export default App;
