import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSolidShoppingBag, BiUser } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const MidHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { totalItems } = useSelector((state) => state.cart);
  return (
    <div>
      <div>
        <div className="p-4">
          <div className="w-10/12 m-auto">
            <ul className="flex place-content-between items-center">
              <li className="flex items-center">
                <Link to="/" className="logo">
                  <img
                    src="./images/obsessions_ecom/obsession_logo.png"
                    alt="logo_img"
                  />
                </Link>

                <div>
                  {navbar.slice(1, 4).map((link, key) => (
                    <Link
                      to={link.path}
                      key={key}
                      className="mr-2 text-base capitalize px-4 hover:text-red-600"
                    >
                      {link.nav}
                    </Link>
                  ))}
                </div>
              </li>
              <li className="flex">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full p-2 border rounded-lg mr-5 outline-none"
                />
                <Link
                  onClick={toggleSidebar}
                  className="relative text-gray-500 mr-5 text-2xl p-2 rounded-full border"
                >
                  <BiSolidShoppingBag />

                  <div className="items_count">
                    <span className="text-white">{totalItems}</span>
                  </div>
                </Link>
                <Link className="relative text-gray-500 mr-5 text-2xl p-2 rounded-full border">
                  <BiUser />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => toggleSidebar()}
      />
    </div>
  );
};

export default MidHeader;
