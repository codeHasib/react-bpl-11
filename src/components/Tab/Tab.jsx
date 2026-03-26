import React from "react";

const Tab = ({ toggleTab, selectedTab }) => {
  return (
    <div className="my-3 p-5 flex justify-between items-center gap-4 border-b border-black">
      <h3 className="text-2xl font-bold">
        {" "}
        {selectedTab === "available"
          ? "Available Players"
          : "Selected Players"}{" "}
      </h3>
      <div>
        <button
          onClick={toggleTab}
          className={
            selectedTab === "available"
              ? "btn bg-green-900 mr-2"
              : "btn bg-green-600 mr-2"
          }
          value={"available"}
        >
          Available
        </button>
        <button
          onClick={toggleTab}
          className={
            selectedTab === "selected" ? "btn bg-green-900" : "btn bg-green-600"
          }
          value={"selected"}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default Tab;
