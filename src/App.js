import React from "react";
import "./App.scss";
import MainBlock from "./components/MainBlock";
import TextBlock from "./components/TextBlock";
import AboutPlanets from "./components/AboutPlanets";
import HeaderBlock from "./components/HeaderBlock";
import Footer from "./components/Footer";

import Pluto from "./img/pluto-1315109_1920.jpg";
import Solar from "./img/solar-system.jpg";

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
                    <TextBlock sectionName="solarSystem" image={Solar}>
                        <a id="SolarSystem">
                            <h2>Solar System</h2>
                        </a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                    </TextBlock>
                    <AboutPlanets onAnchorClick={this.smoothSlide}/>
                    <TextBlock sectionName="About Pluto" image={Pluto}>
                        <a id="AboutPluto">
                            <h2>About Pluto</h2>
                        </a>
                        <p>Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar system. It is also one of the largest known members of the Kuiper Belt, a shadowy zone beyond the orbit of Neptune thought to be populated by hundreds of thousands of rocky, icy bodies each larger than 62 miles (100 kilometers) across, along with 1 trillion or more comets. </p>
                        <p>In 2006, Pluto was reclassified as a dwarf planet, a change widely thought of as a demotion. The question of Pluto's planet status has attracted controversy and stirred debate in the scientific community, and among the general public, since then. In 2017, a science group (including members of the New Horizon mission) proposed a new definition of planethood based on "round objects in space smaller than stars," which would make the number of planets in our solar system expand from 8 to roughly 100.</p>
                        <p>Since Pluto is so far from Earth, little was known about the dwarf planet's size or surface conditions until 2015, when NASA's New Horizons space probe made a close flyby of Pluto. New Horizons showed that Pluto has a diameter of 1,473 miles (2,370 km), less than one-fifth the diameter of Earth, and only about two-thirds as wide as Earth's moon.</p>
                        <p>Pluto's surface is also covered in an abundance of methane ice, but New Horizons scientists have observed significant differences in the way the ice reflects light across the dwarf planet's surface. The dwarf planet also possesses ice ridge terrain that appears to look like a snakeskin; astronomers spotted similar features to Earth's penitentes, or erosion-formed features on mountainous terrain. The Pluto features are much larger; they are estimated at 1,650 feet (500 m) tall, while the Earth features are only a few meters in size.</p>
                    </TextBlock>
                </main>
                <Footer/>
            </>
        );
    }
}

export default App;
