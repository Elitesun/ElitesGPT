import { useState, useContext } from "react";
import { BsChatRightDots } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { Context } from "../../context/Context";
import React from "react";
import Top from "./Top";
import History from "./History";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { newChat } = useContext(Context);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`sidebar fixed lg:relative min-h-screen ${
          open ? "w-64 translate-x-0" : "w-16 lg:translate-x-0 -translate-x-full lg:flex lg:flex-col lg:items-center"
        } p-5 bg-[#f0f4f9] transition-all duration-300 z-50 shadow-lg lg:shadow-none`}
      >
        <div className="lg:hidden absolute -right-10 top-5 bg-[#f0f4f9] p-2 rounded-r-lg shadow-lg cursor-pointer"
          onClick={handleToggle}
        >
          <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-600 my-1 ${open ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
        {/* -------------------------Top ----------------------------*/}

        <div onClick={handleToggle}>
          <Top />
        </div>

        {/* -------------------------Start a new chat section ----------------------------*/}

        <div
          className="inline-flex items-center gap-2 mt-13 ml-1 bg-gray-200 rounded-xl p-3 hover:bg-neutral-400 cursor-pointer"
          onClick={() => newChat()}
        >
          <BsChatRightDots className="text-black size={20} " />
          {open && <h3 className="font-Poppins">New Chat</h3>}
        </div>

        {/* -------------------------Recent History ----------------------------*/}

        {open && <History />}

        {/* -------------------------Page Bottom ----------------------------*/}
        <div className="fixed top-155">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <IoMdHelpCircleOutline size={20} /> {open && <span>Help</span>}
            </div>
            <div className="flex items-center gap-2">
              <FaClockRotateLeft size={20} /> {open && <span>Activity</span>}
            </div>
            <div className="flex items-center gap-2">
              <CiSettings size={20} /> {open && <span>Settings</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
