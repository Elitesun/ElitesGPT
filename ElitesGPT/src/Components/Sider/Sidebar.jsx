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
      <div
        className={`sidebar fixed md:relative min-h-screen z-50 ${
          open ? "w-[200px] md:w-[300px]" : "w-17"
        } p-2 md:p-4 bg-[#f0f4f9] transition-all duration-300 shadow-lg md:shadow-none`}
      >
        {/* -------------------------Top ----------------------------*/}
        <div onClick={handleToggle} className="cursor-pointer">
          <Top />
        </div>

        {/* -------------------------Start a new chat section ----------------------------*/}
        <div
          className="inline-flex items-center gap-2 mt-6 bg-gray-200 rounded-xl p-2.5 hover:bg-neutral-300 cursor-pointer transition-colors"
          onClick={() => newChat()}
        >
          <BsChatRightDots className="text-black min-w-[20px]" size={20} />
          {open && (
            <h3 className="font-Poppins text-sm whitespace-nowrap overflow-hidden">
              New Chat
            </h3>
          )}
        </div>

        {/* -------------------------Recent History ----------------------------*/}
        {open && (
          <div className="mt-6">
            <History />
          </div>
        )}

        {/* -------------------------Page Bottom ----------------------------*/}
        <div className="absolute bottom-5 left-0 w-full px-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg transition-colors">
              <IoMdHelpCircleOutline size={20} className="min-w-[20px]" />
              {open && <span className="text-sm whitespace-nowrap">Help</span>}
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg transition-colors">
              <FaClockRotateLeft size={20} className="min-w-[20px]" />
              {open && (
                <span className="text-sm whitespace-nowrap">Activity</span>
              )}
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg transition-colors">
              <CiSettings size={20} className="min-w-[20px]" />
              {open && (
                <span className="text-sm whitespace-nowrap">Settings</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarTemp;
