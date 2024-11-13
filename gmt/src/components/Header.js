import React from "react";
import Search from "./Search";

const Header = ({ name }) => {
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-5xl text-white">{name}</h1>
        <Search />
      </div>
    </>
  );
};

export default Header;