import React from "react";

const Card = ({ children }) => {
    return <div className="w-full h-full rounded-md relative p-8 border-1 bg-[#ffffff] border-neutral-100">{children}</div>;
};

export default Card;