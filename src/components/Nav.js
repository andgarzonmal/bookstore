import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="bookstore-main-links">
          <h1 className="logo">Bookstore CMS</h1>
          <ul>
            <li className="nav-link">
              <NavLink to="/">Books</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/Categories">Categories</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
