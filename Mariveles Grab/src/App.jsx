import React, { useState } from "react";
import Menu from "./Header/Menu";
import "./App.css";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [applyGrab, setApplyGrab] = useState(false);

  function handleSelect(menuItem) {
    console.log(`Selected: ${menuItem}`);
  }

  function headerMenu() {
    setMenuVisible(!menuVisible);
    setApplyGrab(false)
    
  }

  function handleApplicant() {
    setApplyGrab(!applyGrab);
    setMenuVisible(false)
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

      <section className="AboutButton">
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
