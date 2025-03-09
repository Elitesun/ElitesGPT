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
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* -------------------------Nav ---------------------------- */}
        <div className="sticky top-0 bg-white z-10 border-b border-b-gray-200">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-lg md:text-xl font-anton">ElitesGPT</h2>
            </div>
            <img
              src={avatar}
              alt="avatar"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
        </div>

        {/* -------------------------Main Content ---------------------------- */}
        <div className="flex-1 overflow-y-auto">
          {!showResult ? (
            <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
              {/* -------------------------Greeting ---------------------------- */}
              <div className="text-[#c4c7c5] mb-8">
                <h2 className="bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 bg-clip-text text-3xl md:text-5xl font-bold text-transparent">
                  Hello, Dev.
                </h2>
                <p className="text-2xl md:text-4xl mt-2">
                  How can ElitesGPT help you today?
                </p>
              </div>

              {/* -------------------------Suggestions ---------------------------- */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-30 suggestions">
                <div className="bg-neutral-200 rounded-lg p-4 relative min-h-[100px] cursor-pointer hover:bg-neutral-300 transition-colors">
                  <p className="text-sm md:text-base pr-6">
                    Suggest beautiful places to go on vacation
                  </p>
                  <FaQuestionCircle
                    size={16}
                    className="absolute bottom-4 right-4"
                  />
                </div>
                <div className="bg-neutral-200 rounded-lg p-4 relative min-h-[100px] cursor-pointer hover:bg-neutral-300 transition-colors">
                  <p className="text-sm md:text-base pr-6">
                    Need some inspiration for your project?
                  </p>
                  <FaLightbulb
                    size={16}
                    className="absolute bottom-4 right-4"
                  />
                </div>
                <div className="bg-neutral-200 rounded-lg p-4 relative min-h-[100px] cursor-pointer hover:bg-neutral-300 transition-colors">
                  <p className="text-sm md:text-base pr-6">
                    Want to learn more about AI capabilities?
                  </p>
                  <FaRobot size={16} className="absolute bottom-4 right-4" />
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto px-4 py-6">
              <div className="result-title flex items-center gap-3 mb-6">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm md:text-base font-medium">
                  {recentPrompt}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <img src={logo} alt="logo" className="w-6 h-6 mt-1" />
                {loading ? (
                  <div className="flex-1 space-y-2">
                    <hr className="loader-hr" />
                    <hr className="loader-hr" />
                    <hr className="loader-hr" />
                  </div>
                ) : (
                  <div
                    className="ai-response text-sm md:text-base flex-1"
                    dangerouslySetInnerHTML={{ __html: resultData }}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* -------------------------Input ---------------------------- */}
        <div className="sticky bottom-0 bg-white border-t py-4 border-t-gray-200">
          <div className="max-w-3xl mx-auto px-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSent();
              }}
              className="relative"
            >
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Ask ElitesGPT Anything"
                className="w-full p-3 pl-4 pr-12 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-yellow-200 transition-all duration-300 placeholder:text-neutral-400 text-sm md:text-base"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-indigo-500 transition-colors p-2"
              >
                <FaPaperPlane size={16} />
              </button>
            </form>
            <div className="mt-2 text-center text-xs md:text-sm text-neutral-500">
              <p>
                ElitesGPT can make mistakes, always verify the information...
                <br />
                <span className="text-[10px] md:text-xs">
                  &copy; 2025 All rights reserved. Elitesun.dev
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
