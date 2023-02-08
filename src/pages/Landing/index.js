import SaleProducts from "../../components/Products/SaleProducts";
import WinterProducts from "../../components/Products/WinterProducts";
import MainBanner from "./MainBanner";

import AppContainer from "../../components/UI/AppContainer";
import HealthyProducts from "../../components/Products/HealthyProducts";
import AvailableProducts from "../../components/Products/AvailableProducts";

import BannerClearance from "../../assets/img/banner-clearance.jpg";
import BannerValentine from "../../assets/img/banner-valentine.jpg";
import TopCategories from "../../components/Products/TopCategories";
import Cta1 from "../../assets/img/cta1.jpg";
import Cta2 from "../../assets/img/cta2.jpg";
import Cta3 from "../../assets/img/cta3.jpg";

export const Landing = () => {

  return (
    <>
      <MainBanner />
      <SaleProducts />
      <WinterProducts />

      <AppContainer>
        <a href="/">
          <img className="banner-clearance" src={BannerClearance} alt="img" />
        </a>
      </AppContainer>

      <HealthyProducts />

      <AppContainer>
        <a href="/">
          <img className="banner-clearance" src={BannerValentine} alt="img" />
        </a>
      </AppContainer>

      <TopCategories />

      <AppContainer>
        <h2 className="section-title">welcome to shopping made easy</h2>

        <div className="cta-wrap">
          <div className="cta-box">
            <img src={Cta1} alt="cta" />
            <p>Delivered right to your doorstep.</p>
          </div>
          <div className="cta-box">
            <img src={Cta2} alt="cta" />
            <p>Ready for free pickup in 1 hour or less!</p>
          </div>
          <div className="cta-box">
            <img src={Cta3} alt="cta" />
            <p>Found a better price? We’ll match it!</p>
          </div>
          <div className="clearfix"></div>
        </div>
      </AppContainer>

      <AvailableProducts />

      <AppContainer>
        <div className="para home-para">
          <p>
            True to its name, Bed Bath & Beyond® is committed to being the
            destination for home goods, offering a wide array of top-quality
            items in bedding, bath, home décor, furniture, beauty & fitness,
            luggage, and more. Whether your aesthetic is traditional, modern,
            boho, rustic, farmhouse, Hollywood glam, or transitional, you'll
            find an impressive assortment to choose from in a wide range of
            unique textures, colors, and materials.
          </p>

          <p>
            In addition to the well-known brands, our competitive lineup of
            owned brands can help you create the ambiance for your every need.
            Luxuriate in a serene oasis with Haven™, sleep happy and stay cozy
            with Nestwell™, attain organized bliss with Squared Away™. Showcase
            your personality with our affordable home collection from Wild
            Sage™. Simply Essential™ has all the essentials for the everyday
            task at hand, and as we approach the holiday season when family and
            friends spend time together, OurTable™ ensures ease of use without
            ever pulling the focus away from the food or who's gathered around
            the table. Also, don't forget to add incredible items from our owned
            brands to your Bed Bath & Beyond wedding registry.
          </p>

          <p>
            With the holiday season quickly approaching, there's no time like
            the present to start gift shopping. Whether you're looking for the
            perfect present for a loved one or want to pick up that particular
            household item you've been eyeing all year long, be sure to check
            out Bed Bath & Beyond's clearance & savings . Encompassing
            everything from bedding, kitchen & home decor, Bed Bath & Beyond is
            a one-stop-shop for the best deals. Not to mention, if you're
            struggling for gift ideas this year, look no further than Bed Bath &
            Beyond’s top gifts for 2022 to make the upcoming holiday season a
            lot less stressful and the New Year a lot more inviting.
          </p>

          <p>
            Shopping is easy in-store with Bed Bath & Beyond's coast-to-coast
            presence and our user-friendly website. You can order online and use
            our curbside or Store Pickup option or our Same Day Delivery.
            Gifting is a snap with options for gift wrapping. And if you want
            additional perks and benefits, our Welcome Rewards™ program is just
            for you!
          </p>
        </div>
      </AppContainer>
    </>
  );
};
