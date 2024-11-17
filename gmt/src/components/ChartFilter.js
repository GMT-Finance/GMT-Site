import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
                active ? "bg-[#BDA475] text-[#000112]" : "border-indigo-300 text-white"
            }`}
        >
            {text}
        </button>
    );
};

export default ChartFilter;
