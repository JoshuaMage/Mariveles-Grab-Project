import React, { useState } from "react";
import HeaderMenu from "./Header/HeaderMenu";
import MiddleMenu from "./Middle/MiddleMenu";
import { MiddleDetails } from "./Middle/Middle.js";

function App() {
  const [selectedMiddleMenu, setSelectedMiddleMenu] = useState("Consumer");

  function handleClick(selectedButton) {
    setSelectedMiddleMenu(selectedButton);
    console.log(selectedMiddleMenu); // This will log the previous state
    console.log(selectedButton); // This will log the updated state
  }
  return (
    <div>
      <HeaderMenu />
      <video
        id="Commercial"
        src="./src/assets/delivery.mp4"
        autoPlay
        loop
        muted
      ></video>
      <h2 id="videoAddComment">
        Mage. Making every. <br />
        day better.
      </h2>
      <a href="" id="ReadAbout">
        Read About Us
      </a>
      <a href="" id="Downloadapp">
        Download App
      </a>
      <section className="middle-Container">
        <h2 id="platform">
          From essential services to <br /> earning opportunities. <br /> We're
          an all-in-one platform.
        </h2>

        <section id="button-container">
          <menu>
            <MiddleMenu onSelect={() => handleClick("Consumer")}>
              Consumer
            </MiddleMenu>
            <MiddleMenu onSelect={() => handleClick("Driver")}>
              Driver
            </MiddleMenu>
            <MiddleMenu onSelect={() => handleClick("Merchant")}>
              Merchant
            </MiddleMenu>
            <MiddleMenu onSelect={() => handleClick("Enterprise")}>
              Enterprise
            </MiddleMenu>
          </menu>
        </section>
        <hr className="custom-hr" />

        <div id="middleDetails">
          {MiddleDetails[selectedMiddleMenu]?.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <img src={item.image} />
              <button>{item.label}</button>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <hr className="custom-hr" />

        <div>
          <h2>Newsroom</h2>

          <section id="">
            <a href=""><img src="src\Middle\news-image1.png" alt="driver" /></a>
            <a href=""><img src="src\Middle\enterprise-ads.jpg" alt="mobile" /></a>
            <a href=""><img src="src\Middle\news-image3.png" alt="grab" /></a>
            <a href=""><img src="src\Middle\news-image4.png" alt="delivery" /></a>
          </section>
          <div id="date">
            <label>01/03/24</label>
            <label>25/01/24</label>
            <label>17/01/24</label>
            <label>12/01/24</label>
          </div>
          <div id="">
            <p>A Superapp as Wingman: Grab Helps Thousands of Filipinos with Valentine’s Day Plans</p>
            <p>Grab Outlines New Affordable Solutions So YOU Can Enjoy More for Less</p>
            <p>Grab Launches GrabCar in CDO, Strengthens Economic Empowerment Commitment in the City</p>
            <p>Filipinos increase adoption of online-to-offline dining solutions: Grab 2023 Report</p>
          </div>

          <div id="">
            <p>Read More</p>
            <p>Read More</p>
            <p>Read More</p>
            <p>Read More</p>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
