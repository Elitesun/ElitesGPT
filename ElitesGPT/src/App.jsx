import "./index.css";
import Sidebar from "./Components/Sider/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <Main className="flex-1" />
    </div>
  );
};

export default App;
