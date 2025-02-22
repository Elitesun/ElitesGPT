import React from "react";
import avatar from "../assets/avatar.svg";
import "../index.css";
import logo from "../assets/elitesgpt.svg";
import { useContext } from "react";
import { Context } from "../context/Context";
import {
  FaQuestionCircle,
  FaLightbulb,
  FaRobot,
  FaPaperPlane,
} from "react-icons/fa";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      {/* -------------------------Nav ---------------------------- */}
      <div className="mt-1 flex-1 justify-between min-h-screen relative p-2">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo" className="size-[30px]" />
            <h2 className="ml-3 text-xl font-anton font-normal">ElitesGPT</h2>
          </div>

          <div className="">
            <img src={avatar} alt="avatar" className="size-[50px]" />
          </div>
        </div>

        {!showResult ? (
          <>
            {/* -------------------------Greeting ---------------------------- */}
            <div className="m-auto max-w-[900px]">
              <div className="my-[50px]  text-[#c4c7c5] font-[500px] ">
                <h2 className="bg-linear-[25deg,red_5%,indigo_95%] bg-clip-text text-5xl font-bold text-transparent ">
                  Hello, Dev.
                </h2>
                <p className="text-[40px]">How can ElitesGPT help you today?</p>
              </div>

              {/* -------------------------Suggestions ---------------------------- */}
              <div className="grid grid-cols-3 gap-5 text-[#000000] p-20">
                <div className="h-[140px] p-3 bg-neutral-200 rounded-[10px] relative cursor-pointer hover:bg-neutral-300">
                  <p>Suggest beautiful places to go on vacation</p>
                  <FaQuestionCircle
                    size={20}
                    className="absolute bottom-4 right-4"
                  />
                </div>
                <div className="h-[140px] p-2 bg-neutral-200 rounded-[10px] relative cursor-pointer hover:bg-neutral-300">
                  <p>Need some inspiration for your project?</p>
                  <FaLightbulb
                    size={20}
                    className="absolute bottom-4 right-4"
                  />
                </div>
                <div className="h-[140px] p-2 bg-neutral-200 rounded-[10px] relative cursor-pointer hover:bg-neutral-300">
                  <p>Want to learn more about AI capabilities?</p>
                  <FaRobot size={20} className="absolute bottom-4 right-4" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                src={avatar}
                alt="avatar"
                className="w-[40px] rounded-[50%]"
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap[20px] ">
              <img src={logo} alt="logo" className="size-[30px] mr-1 " />
              {loading ? (
                <div className="w-[100%] flex flex-col gap[10px]">
                  <hr className="loader-hr" />
                  <hr className="loader-hr" />
                  <hr className="loader-hr" />
                </div>
              ) : (
                <div
                  className="ai-response"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                />
              )}
            </div>
          </div>
        )}

        {/* -------------------------Input ----------------------------*/}

        <div>
          <div className="absolute bottom-0 max-w-[900px] w-screen">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSent();
              }}
            >
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Ask ElitesGPT Anything"
                className="w-full p-3 pl-4 pr-24 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-yellow-200 transition-all duration-300 placeholder:text-neutral-400 bg-white shadow-sm hover:shadow-md"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2 border-l border-neutral-300">
                <span className="text-neutral-400"></span>
                <button
                  type="submit"
                  className="text-neutral-500 hover:text-indigo-500"
                >
                  <FaPaperPlane size={20} />
                </button>
              </div>
            </form>
          </div>
          <div className="mb-4 mt-4 text-sm text-neutral-500 text-center">
            <p>
              ElitesGPT can make mistakes, always verify the information...
              <br />
              <span className="text-[12px]">
                &copy; 2025 All rights reserved. Elitesun.dev
              </span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Main;
