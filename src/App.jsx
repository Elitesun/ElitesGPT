import "./index.css";
import Sidebar from "./Components/Sider/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="flex relative w-full h-screen overflow-hidden bg-white">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
