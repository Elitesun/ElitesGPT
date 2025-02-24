import { useState, useContext } from "react";
import { BsChatRightDots } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { Context } from "../../context/Context";
import Top from "./Top";
import History from "./History";

const SidebarTemp = () => {
  const [open, setOpen] = useState(false);
  const { newChat } = useContext(Context);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`sidebar min-h-screen ${
          open ? "w-full md:w-1/6" : "w-16 flex flex-col items-center"
        } p-2 md:p-5 bg-[#f0f4f9] transition-all duration-300`}>
        {/* -------------------------Top ----------------------------*/}
        <div onClick={handleToggle}>
          <Top />
        </div>

        {/* -------------------------Start a new chat section ----------------------------*/}
        <div
          className="inline-flex items-center gap-2 mt-4 md:mt-13 ml-1 bg-gray-200 rounded-xl p-2 md:p-3 hover:bg-neutral-400 cursor-pointer"
          onClick={() => newChat()}
        >
          <BsChatRightDots className="text-black size={20}" />
          {open && <h3 className="font-Poppins text-sm md:text-base">New Chat</h3>}
        </div>

        {/* -------------------------Recent History ----------------------------*/}
        {open && <History />}

        {/* -------------------------Page Bottom ----------------------------*/}
        <div className="fixed bottom-5 md:top-[90vh]">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="flex items-center gap-2">
              <IoMdHelpCircleOutline size={20} /> {open && <span className="text-sm md:text-base">Help</span>}
            </div>
            <div className="flex items-center gap-2">
              <FaClockRotateLeft size={20} /> {open && <span className="text-sm md:text-base">Activity</span>}
            </div>
            <div className="flex items-center gap-2">
              <CiSettings size={20} /> {open && <span className="text-sm md:text-base">Settings</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarTemp;
