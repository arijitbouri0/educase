import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen max-w-[500px] justify-end w-full mx-auto bg-[#f7f9fc] border border-gray-300 shadow-sm p-6 gap-4">
      <div>
        <h1 className="text-3xl font-bold">Welcome to PopX</h1>
        <p className="text-gray-500 text-2xl font-extrathin">
          Lorem ipsum dolor sit amet consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full justify-center items-center  flex flex-col gap-3">
        <NavLink className="w-full" to="/register">
          <button className="bg-[#6c25ff] w-full text-white p-2 rounded-lg font-bold cursor-pointer">
            Create Account
          </button>
        </NavLink>
        <NavLink className="w-full" to="/login">
          <button className="w-full p-2 rounded-lg font-bold cursor-pointer">
            Already Registered? Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
