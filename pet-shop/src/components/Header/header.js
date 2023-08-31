import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bd-navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active home">
                <Link className="nav-link" aria-current="page" to="/">
                  Pet Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dogs">
                  Dogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cats">
                  Cats
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/volunteer">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
//
