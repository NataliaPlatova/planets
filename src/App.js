import React from "react";
import "./App.scss";
import MainBlock from "./components/MainBlock";
import TextBlock from "./components/TextBlock";
import AboutPlanets from "./components/AboutPlanets";
import GalleryBlock from "./components/GalleryBlock";
import HeaderBlock from "./components/HeaderBlock";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <HeaderBlock />
        <main>
          <MainBlock/>
          <TextBlock sectionName="solarSystem">
            <a name="SolarSystem">
                <h2>Solar System</h2>
            </a>
            <p className="solarSystem__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="solarSystem__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </TextBlock>
          <AboutPlanets/>
          <GalleryBlock/>
        </main>
        <Footer/>
      </>
  );
}

export default App;
