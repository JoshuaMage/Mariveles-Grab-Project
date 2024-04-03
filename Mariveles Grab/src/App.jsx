import React, { useState } from "react";
import Menu from "./Header/Menu";
import "./App.css";
import { MENUDETAILS } from "./Header/headerDetails";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [applyGrab, setApplyGrab] = useState(false);
  const [selectedMenu, SetSelectedMenu] = useState(null);

  function handleSelect(menuItem) {
    SetSelectedMenu(menuItem);
    console.log(menuItem);
  }

  function headerMenu() {
    setMenuVisible(!menuVisible);
    setApplyGrab(false);
    SetSelectedMenu(null);
  }

  function handleApplicant() {
    setApplyGrab(!applyGrab);
    setMenuVisible(false);
    SetSelectedMenu(null);
  }

  return (
    <div>
      <section className="Header">
        <button className="menuList" onClick={headerMenu}>
          Menu
        </button>
        <a href="">Mariveles Grab 🏍</a>
        <button className="HeaderLeft" onClick={handleApplicant}>
          Be Our Partner
        </button>
        <button className="HeaderLeft">Help Centre</button>
        <input type="text" placeholder="Search" />
      </section>

      <section id="AboutButton">
        {menuVisible && (
          <menu>
            <Menu onSelect={() => handleSelect("About")}>About</Menu>
            <Menu onSelect={() => handleSelect("Consumer")}>Consumer</Menu>
            <Menu onSelect={() => handleSelect("Driver")}>Driver</Menu>
            <Menu onSelect={() => handleSelect("Merchant")}>Merchant</Menu>
            <Menu onSelect={() => handleSelect("Enterprise")}>Enterprise</Menu>
          </menu>
        )}
      </section>

      {selectedMenu && (
        <div id="aboutGrab">
          {MENUDETAILS[selectedMenu].map((item, index) => (
            <div key={index}>
              <a href="">{item.label}</a>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}

      <section id="ApplyGrab">
        {applyGrab && (
          <>
            <button onClick={() => handleApplicant("GrabRider")}>
              GrabRider
            </button>
            <button onClick={() => handleApplicant("GrabDriver")}>
              GrabDriver
            </button>
            <button onClick={() => handleApplicant("Food / Mart Merchant")}>
              Food / Mart Merchant
            </button>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
