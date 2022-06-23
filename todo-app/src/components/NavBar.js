import React from "react";
// import { useLocation } from "react-router-dom";
// import { AiOutlineCalendar } from "react-icons/md";
import "./NavBar.scss";

const NavBar = () => {
  // const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <ul className="nav_list_wrap">
        <h3 className="nav_title">My Todo List</h3>
        <li className="nav_list">
          {/* <AiOutlineCalendar /> */}
          All Tasks
        </li>
        <li className="nav_list">Works</li>
        <li className="nav_list">All Tasks</li>
        <li className="nav_list">All Tasks</li>
        <li className="nav_list">All Tasks</li>
        <li className="nav_list">All Tasks</li>
      </ul>
    </nav>
  );
};

export default NavBar;
