import React from "react";

const Card = ({ children }) => {
    return (
        <div className="w-full h-full rounded-md relative p-8 border-[1px] border-[##BDA475] bg-[#00011295]">
            {children}
        </div>
    );
};

export default Card;
