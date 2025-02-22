import "./index.css";
import React from "react";
import Sidebar from "./Components/Sider/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
