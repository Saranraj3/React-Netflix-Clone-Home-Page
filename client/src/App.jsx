import React from "react";
import background from "./Assets/Background-Image.jpg";
import logo from "./Assets/Logo.png";
import { MdArrowDropDown } from "react-icons/md";

const App = () => {
  return (
    <div className="relative">
      {/* Background Image with Low Brightness */}
      <img className="w-full brightness-50" src={background} alt="Background" />

      {/* Logo with High Brightness */}
      <div className="absolute top-0 left-0 brightness-150 mt-4 ml-[9rem] w-[10rem]">
        <img src={logo} alt="Logo" />
      </div>

      {/* Text and Button with Proper Positioning */}
      <div className="flex end-[11rem] absolute top-4 text-white">
        <h4 className="text-lg border flex pl-2 bg-black">
          English <MdArrowDropDown className="mt-1" />
        </h4>
        <button className="bg-red-600 text-white w-[4.5rem] h-[1.8rem] ml-2">
          Signup
        </button>
      </div>
    </div>
  );
};

export default App;
