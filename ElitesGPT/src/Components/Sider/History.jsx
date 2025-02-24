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
        </div>{" "}
        <br />
        <div className="flex ml-5 hover:bg-neutral-300 rounded-full">
          {history.map((item, index) => {
            return (
              <h4 onClick={() => loadPrompt(item)}>
                🗯 {item.slice(0, 10)}...
                <br />
              </h4>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default History;
