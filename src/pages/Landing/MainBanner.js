import "./MainBanner.css";
import BannerImage from "../../assets/img/banner2.jpg";
import React from "react";
import AppContainer from "../../components/UI/AppContainer";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <AppContainer>
      <div className="banner-wrapper">
        <Link to="/shop">
          <img src={BannerImage} className="banner-img" alt="main-banner" />
        </Link>
        <p className="banner-quote">Valid thru 1/22. Assortment varies by store. Reward points are valid for Welcome Rewards™ members only. Exclusions apply.</p>
      </div>
    </AppContainer>
  );
};

export default MainBanner;
