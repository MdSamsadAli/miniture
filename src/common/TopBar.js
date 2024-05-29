import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const TopBar = () => {
  return (
    <div className="border-b p-2">
      <div className="w-10/12 m-auto">
        <ul className="flex place-content-between items-center">
          <li className="flex">
            <Icon />
            <Link className="mr-2 text-sm capitalize pr-4 pl-4">
              Get Express Delivery All over Nepal
            </Link>
          </li>
          <li>
            <Link className="mr-5 text-sm capitalize border-r-2 pr-4 pl-4">
              Our Stores
            </Link>
            <Link className="mr-2 text-sm capitalize border-r-2 pr-4">
              Privacy Policy
            </Link>
            <Link className="mr-2 text-sm capitalize pr-4 pl-4">FAQs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
