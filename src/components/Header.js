import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnline from "../hooks/useOnline";

const Header = () => {
  const [btnTextReact, setBtnTextReact] = useState("Login");
  const onlineStatus = useOnline();
  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg">
      <img src={LOGO_URL} className="w-32" />
      <ul className="flex items-center">
        <li className="px-4">Online: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-4">
          <Link to="/recepies">Recepies</Link>
        </li>
        <li className="px-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
            onClick={() => {
              if (btnTextReact === "Login") {
                setBtnTextReact("Logout");
              } else {
                setBtnTextReact("Login");
              }
            }}
          >
            {btnTextReact}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
