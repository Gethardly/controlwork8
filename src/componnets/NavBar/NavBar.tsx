import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-sm bg-secondary">
        <div className="container-fluid">
          <span className="navbar-brand">Quotes central</span>
          <div className="collapse navbar-collapse d-flex justify-content-end">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Quotes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add-post" className="nav-link">
                  Submit new quote
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;