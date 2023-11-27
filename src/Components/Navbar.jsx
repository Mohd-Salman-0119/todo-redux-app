import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around p-4 text-[20px] bg-[#42855B] shadow-lg text-white font-semibold">
     <Link to="/">Todo</Link>
      {/* <Link to="/update">Update Todo</Link>
      <Link to="/addtodo">Add Todo</Link> */}
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
