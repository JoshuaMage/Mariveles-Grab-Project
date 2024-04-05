import HeaderMenu from "./Header/HeaderContainer.jsx";
import MiddleContainer from "./Middle/MiddleContainer.jsx";

function App() {
  return (
    <div>
      <HeaderMenu />
      <MiddleContainer />
      <div id="button-Container">
        <section id="Mage-grab">
          <h1>Mage-Grab</h1>
          <h4>Forward Together</h4>
          <p>
            Level 27F/28F Exquadra Tower, Lot 1A Exchange Road corner Jade
            Street, Ortigas Center, Pasig City, Philippines
          </p>
          <p>Follow us and keep updated!</p>
          <a href="">FaceBook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
          <a href="">Tiktok</a>
        </section>

        <section id="About">
          <h2>About</h2>
          <button>About Us</button>
          <button>Inside Mage</button>
          <button>Investor Relations</button>
          <button>Locations</button>
          <button>Trust & Safety</button>
          <button>Social Impact</button>
          <button>Newsroom</button>
          <button>Careers</button>
          <button>MageForGood Fund</button>
        </section>

        <section id="Consumer">
          <h2>Consumer</h2>
          <button>What's New</button>
          <button>Airport Guides</button>
          <button>Transport</button>
          <button>MageFood</button>
          <button>MageMart</button>
          <button>MageExpress</button>
          <button>MagePay</button>
          <button>MageRewards</button>
          <button>MageGifts</button>
        </section>

        <section id="Driver">
          <h2>Driver</h2>
          <button>What's New</button>
          <button>Drive with us</button>
          <button>Deliver with us</button>
          <button>Driver Centre</button>
          <button>MageFinance</button>
        </section>

        <section id="Merchant">
          <h2>Merchant</h2>
          <button>Guides</button>
          <button>Blog</button>
          <button>MagePay</button>
          <button>MageFood</button>
          <button>Financial Services</button>
          <button>Financial Resources</button>
        </section>

        <section id="Enterprise">
          <h2>Enterprise</h2>
          <button>Mage for Business</button>
          <button>MageAds</button>
          <button>MageGifts</button>
          <button>MageExpress</button>
          <button>MageMaps</button>
          <button>Business Delivery Service</button>
        </section>

        <section id="Quick-Links">
          <h2>Quick Links</h2>
          <button>Help Centre</button>
          <button>Food Menu</button>
          <button>Developer Portal</button>
        </section>
      </div>
    </div>
  );
}

export default App;
