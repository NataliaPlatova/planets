import React from "react";
import "./App.scss";
import MainBlock from "./components/MainBlock";
import TextBlock from "./components/TextBlock";
import AboutPlanets from "./components/AboutPlanets";
import HeaderBlock from "./components/HeaderBlock";
import Footer from "./components/Footer";

class App extends React.Component {
    smoothSlide = (e) => {
        e.preventDefault();
        const blockID = e.target.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
           behavior: 'smooth',
           block: 'center'
        });
    };

    render() {
        return (
            <>
                <HeaderBlock onAnchorClick={this.smoothSlide}/>
                <main>
                    <MainBlock onAnchorClick={this.smoothSlide}/>
                    <TextBlock sectionName="solarSystem">
                        <a id="SolarSystem">
                            <h2>Solar System</h2>
                        </a>
                        <p className="solarSystem__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                        <p className="solarSystem__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                    </TextBlock>
                    <AboutPlanets onAnchorClick={this.smoothSlide}/>
                    <TextBlock>
                        <a id="AboutPluto">
                            <h2>About Pluto</h2>
                        </a>
                        <p className="solarSystem__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                        <p className="solarSystem__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                    </TextBlock>
                </main>
                <Footer/>
            </>
        );
    }
}

export default App;
