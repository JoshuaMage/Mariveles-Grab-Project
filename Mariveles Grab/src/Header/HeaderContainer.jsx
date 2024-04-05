import React, { useState } from "react";
import Menu from "./Menu.jsx";  // Corrected file extension
import "./../App.css";  // Corrected path for App.css
import "./header.css";
import { MENUDETAILS } from "./headerDetails.js";  // Corrected path

export default function HeaderMenu() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [applyGrab, setApplyGrab] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
  
    function handleSelect(menuItem) {
      setSelectedMenu(menuItem);
      console.log(menuItem);
    }
  
    function headerMenu() {
      setMenuVisible(!menuVisible);
      setApplyGrab(false);
      setSelectedMenu(null);
    }
  
    function handleApplicant() {
      setApplyGrab(!applyGrab);
      setMenuVisible(false);
      setSelectedMenu(null);
    }

    return(
        <div>
        <section className="Header">
          <button className="menuList" onClick={headerMenu}>
            Menu
          </button>
          <a href="">Mage Grab 🏍</a>
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
              <button onClick={handleApplicant}>
                GrabRider
              </button>
              <button onClick={handleApplicant}>
                GrabDriver
              </button>
              <button onClick={handleApplicant}>
                Food / Mart Merchant
              </button>
            </>
          )}
        </section>
      </div>
    );
}