import React from "react";
import AppContainer from "../../../UI/AppContainer";
import VerticalMenu from "../../../UI/VerticalMenu";

import "./MainFooter.css";

import IconIos from "../../../../assets/img/svg/icon-ios.svg";
import IconAndroid from "../../../../assets/img/svg/icon-android.svg";
import IconFacebook from "../../../../assets/img/svg/icon-facebook.svg";
import IconTwitter from "../../../../assets/img/svg/icon-twitter.svg";
import IconInstagram from "../../../../assets/img/svg/icon-instagram.svg";
import IconPinterest from "../../../../assets/img/svg/icon-pinterest.svg";
import IconYoutube from "../../../../assets/img/svg/icon-youtube.svg";
import Ficon1 from "../../../../assets/img/svg/icon5.svg";
import Ficon2 from "../../../../assets/img/svg/icon4.svg";

const GET_TOUCH = [
  { menuTitle: "help", menuLink: "/" },
  { menuTitle: "update your email preferrence", menuLink: "/" },
];

const SHIP_RETURNS = [
  { menuTitle: "Track Order", menuLink: "/" },
  { menuTitle: "Shipping Info", menuLink: "/" },
  { menuTitle: "Store Pickup", menuLink: "/" },
  { menuTitle: "Same day delivery", menuLink: "/" },
  { menuTitle: "returns", menuLink: "/" },
  { menuTitle: "product recall information", menuLink: "/" },
  { menuTitle: "rebates", menuLink: "/" },
  { menuTitle: "price match promise", menuLink: "/" },
];

const SHOP_TOOLS = [
  { menuTitle: "idea boards", menuLink: "/" },
  { menuTitle: "shop college", menuLink: "/" },
  { menuTitle: "shop movers", menuLink: "/" },
  { menuTitle: "shop catalogs", menuLink: "/" },
  { menuTitle: "shop personalized invitations", menuLink: "/" },
  { menuTitle: "shop by brand", menuLink: "/" },
  { menuTitle: "shop clearance & savings", menuLink: "/" },
  { menuTitle: "shop subscriptions", menuLink: "/" },
  { menuTitle: "buying guides", menuLink: "/" },
  { menuTitle: "guides & advice", menuLink: "/" },
  { menuTitle: "coupons", menuLink: "/" },
];

const SOLUTIONS_MENU = [
  { menuTitle: "events", menuLink: "/" },
  { menuTitle: "gift packaging", menuLink: "/" },
  { menuTitle: "gift cards", menuLink: "/" },
  { menuTitle: "check reward certificate balance", menuLink: "/" },
  { menuTitle: "marketplace", menuLink: "/" },
  { menuTitle: "pay with afterpay", menuLink: "/" },
  { menuTitle: "pay with kalrna", menuLink: "/" },
  { menuTitle: "pay with welcome pay", menuLink: "/" },
];

const REGISTRY_MENU = [
  { menuTitle: "Find a Registry", menuLink: "/" },
  { menuTitle: "Manage Your Registry", menuLink: "/" },
  { menuTitle: "Book an Appointment", menuLink: "/" },
  { menuTitle: "Wedding Registry", menuLink: "/" },
  { menuTitle: "Baby Registry", menuLink: "/" },
  { menuTitle: "Housewarming", menuLink: "/" },
  { menuTitle: "College Registry", menuLink: "/" },
];

const SAVINGS_MENU = [
  { menuTitle: "Sign Up for Coupons", menuLink: "/" },
  { menuTitle: "View My Offers", menuLink: "/" },
  { menuTitle: "Welcome Rewards", menuLink: "/" },
  { menuTitle: "Sign Up for Welcome Rewards+", menuLink: "/" },
  { menuTitle: "My Rewards", menuLink: "/" },
  { menuTitle: "Business Pass", menuLink: "/" },
];

const INFO_MENU = [
  { menuTitle: "Advertise with Us", menuLink: "/" },
  { menuTitle: "Potential Suppliers", menuLink: "/" },
  { menuTitle: "Business Direct", menuLink: "/" },
  { menuTitle: "Environmental Social Governance", menuLink: "/" },
  { menuTitle: "Investor Relations", menuLink: "/" },
  { menuTitle: "Privacy Policy", menuLink: "/" },
  { menuTitle: "Account Security", menuLink: "/" },
  { menuTitle: "Terms of Use", menuLink: "/" },
  { menuTitle: "Find A Store", menuLink: "/" },
  { menuTitle: "Glossary", menuLink: "/" },
  { menuTitle: "Accessibility", menuLink: "/" },
  { menuTitle: "Careers", menuLink: "/" },
  { menuTitle: "Marketplace Sellers", menuLink: "/" },
  { menuTitle: "California Supply Chains Act", menuLink: "/" },
];

const CARD_MENU = [
  { menuTitle: "Apply for credit card", menuLink: "/" },
  { menuTitle: "Pay Your Mastercard Credit Card", menuLink: "/" },
  { menuTitle: "Pay Your Store Credit Card", menuLink: "/" },
];

const SITES_MENU = [
  { menuTitle: "Ideas & Inspiration Blog", menuLink: "/" },
  { menuTitle: "Bed Bath & Beyond TV", menuLink: "/" },
];

const MainFooter = () => {
  const getInTouch = GET_TOUCH.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  const shipReturns = SHIP_RETURNS.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  const shopTools = SHOP_TOOLS.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  const solutionMenu = SOLUTIONS_MENU.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  const registryMenu = REGISTRY_MENU.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  const savingsMenu = SAVINGS_MENU.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  const infoMenu = INFO_MENU.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  const cardMenu = CARD_MENU.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  const sitesMenu = SITES_MENU.map((menu) => (
    <VerticalMenu key={menu.menuTitle} title={menu.menuTitle} link={menu.menuLink} />
  ));

  return (
    <React.Fragment>
      <section className="main-footer">
        <AppContainer>
          <div className="f-colmn">
            <h3 className="fmenu-heading">let's connect</h3>

            <div className="brands-icons">
              <img src={IconFacebook} alt="icon" />
              <img src={IconTwitter} alt="icon" />
              <img src={IconInstagram} alt="icon" />
              <img src={IconPinterest} alt="icon" />
              <img src={IconYoutube} alt="icon" />
            </div>

            <h3 className="fmenu-heading">sign up for emails</h3>
            <p>
              We'll let you know about the latest deals & newest products.
              <span> New subscribers will get 20% off Single Item</span>
            </p>

            <form className="offer-frm">
              <input className="frm-fld" type="email" placeholder="* enter email" />
              <button className="blu-btn">get offer</button>
            </form>

            <div className="f-links">
              <a href="/">Privacy policy</a>
              <a href="/">California Notice of Financial Incentive</a>
            </div>

            <h3 className="fmenu-heading">downloas our app</h3>

            <div className="app-icons-wrap">
              <img className="app-icons" src={IconIos} alt="Appstore" />
              <img className="app-icons" src={IconAndroid} alt="playstore" />
            </div>

            <h3 className="fmenu-heading">get in touch</h3>
            <ul className="fmenu"> {getInTouch} </ul>
          </div>

          <div className="f-colmn">
            <h3 className="fmenu-heading">shipping & returns</h3>
            <ul className="fmenu"> {shipReturns} </ul>
            <h3 className="fmenu-heading">shopping tools</h3>
            <ul className="fmenu"> {shopTools} </ul>
          </div>
          <div className="f-colmn">
            <h3 className="fmenu-heading">services & solutions</h3>
            <ul className="fmenu"> {solutionMenu} </ul>
            <h3 className="fmenu-heading">registry</h3>
            <ul className="fmenu"> {registryMenu} </ul>
            <h3 className="fmenu-heading">savings</h3>
            <ul className="fmenu"> {savingsMenu} </ul>
          </div>
          <div className="f-colmn">
            <h3 className="fmenu-heading">company info</h3>
            <ul className="fmenu"> {infoMenu} </ul>
            <h3 className="fmenu-heading">credit card</h3>
            <ul className="fmenu"> {cardMenu} </ul>
            <h3 className="fmenu-heading">our other sites</h3>
            <ul className="fmenu"> {sitesMenu} </ul>
          </div>
          <div className="clearfix"></div>
        </AppContainer>

        <AppContainer>
          <h4>Explore Our Other Brands</h4>
          <div className="btm-icons">
            <img src={Ficon1} alt="icon" />
            <img src={Ficon2} alt="icon" />
          </div>
          <p className="copy-txt">© 2023 Bed Bath & Beyond Inc. and its subsidiaries.</p>
        </AppContainer>
      </section>
    </React.Fragment>
  );
};

export default MainFooter;
