import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EchoAlerts
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item mx-4">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/finance"
                >
                  Finance
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link active" aria-current="page" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link active" aria-current="page" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link active" aria-current="page" to="/business">
                  Business
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                name="search"
                value={""}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
