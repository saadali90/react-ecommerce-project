import React from "react";
import { NavLink } from "react-router-dom";
import AppContainer from "../../../UI/AppContainer";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    // width="container-fluid"
    <section className="main-navigation-section">
      <AppContainer>
        <ul className="main-navigation">
          <li>
            <NavLink to="/shop">shop</NavLink>
          </li>
          <li>
            <a href="/">bath</a>
          </li>
          <li>
            <a href="/">kitchen</a>
          </li>
          <li>
            <a href="/">dining</a>
          </li>
          <li>
            <a href="/">storage & cleaning</a>
          </li>
          <li>
            <a href="/">home decor</a>
          </li>
          <li>
            <a href="/">curtains & window</a>
          </li>
          <li>
            <a href="/">furniture</a>
          </li>
          <li>
            <a href="/">health & beauty</a>
          </li>
          <li>
            <a href="/">outdoor</a>
          </li>
          <li>
            <a href="/">luggage pet & more</a>
          </li>
          <li>
            <a href="/">gifts</a>
          </li>
          <li>
            <a href="/">baby & kids</a>
          </li>
          <li>
            <a href="/">shop by brand</a>
          </li>
          <li>
            <a href="/">college</a>
          </li>
        </ul>
        <div className="clearfix"></div>
      </AppContainer>
    </section>
  );
};

export default MainNavigation;
