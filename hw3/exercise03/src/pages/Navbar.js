import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
import Houses from "./Houses";
import Home from "./Home";

export const Navbar = (props) => {
  const { gameOfThronesData } = props;
  return (
    <>
      <nav className="navbar navbar-expand text-align-center bg-dark">
        <ul className="navbar-nav d-flex flex-wrap">
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/">
              Home{" "}
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/houses">
              Houses
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/search">
              Search
            </a>
          </li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route
            path="/houses"
            element={<Houses gameOfThronesData={gameOfThronesData} />}
          />
          <Route
            path="/search"
            element={<Search gameOfThronesData={gameOfThronesData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
