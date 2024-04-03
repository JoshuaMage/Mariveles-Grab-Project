import React, { useState } from "react";
import HeaderMenu from "./Header/HeaderMenu";
import MiddleMenu from "./Middle/MiddleMenu";
import { MiddleDetails } from "./Middle/Middle.js";

function App() {
  const [selectedMiddleMenu, setSelectedMiddleMenu] = useState(null);

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
      </section>
    </div>
  );
}

export default App;
