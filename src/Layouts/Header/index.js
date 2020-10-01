import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light mb-4">
          <a className="navbar-brand" href="#">
            E-Learning
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  activeStyle={{ color: "blue" }}
                  exact
                  to="/"
                  className="nav-link"
                >
                  Trang Chủ
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  activeStyle={{ color: "blue" }}
                  exact
                  to="/sign-up"
                  className="nav-link"
                >
                  Đăng Ký
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Đăng Nhập</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}