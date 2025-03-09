import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";

const History = () => {
  const { onSent, history, setRecentPrompt } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <>
      <div className="mt-20">
        <div className=" text-xl border-b border-gray-300 font-poppins">
          Recent
        </div>
        <br />
        <div className=" flex flex-col ml-5">
          {history.map((item, index) => {
            return (
              <div onClick={() => loadPrompt(item)} className="cursor-pointer">
                <h4> {item.slice(0, 10)}...</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default History;
