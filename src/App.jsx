import "./index.css";
import Sidebar from "./Components/Sider/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="flex gap-2">
      <div className="flex relative w-full h-screen overflow-hidden bg-white">
        <Sidebar />
        <Main className="flex-1" />
      </div>
    </div>
  );
};

export default App;
