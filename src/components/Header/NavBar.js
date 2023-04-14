import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className={`navbar bg-orange flex align-center`}>
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center">
            <Link to="/" className="navbar-brand fw-3 fs-22 flex align-center">
              <MdFoodBank />
              <span className="navbar-brand-text fw-7">FastEat...</span>
            </Link>

            <div className="navbar-btns flex align-end">
              <button type="button" className="navbar-show-btn text-white">
                <IoMdMenu size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
