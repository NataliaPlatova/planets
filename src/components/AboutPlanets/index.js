import React, {Component} from "react";
import s from "./AboutPlanets.module.scss";
import PlanetInfo from "../PlanetBlock";
import TabsBlock from "../TabsBlock";

import Mercury from "./img/Mercury.png";
import Venus from "./img/Venus.png";
import Earth from "./img/Earth.png";
import Mars from "./img/Mars.png";
import Jupiter from "./img/Jupiter.png";
//import {ReactComponent as Saturn} from "./img/Saturn.png";
import Uranus from "./img/Uranus.png";
import Neptune from "./img/Neptune.png";

import Planets from '../../Planets';

//const planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

class AboutPlanets extends Component {
    state = {
        chosenPlanetId: 0,
    };

    chooseNewPlanet = (id) => {
        this.setState({
            chosenPlanetId: id,
        })
    };
    render() {
        const planetsList = Planets.planets;
        const photos = [Mercury, Venus, Earth, Mars, Jupiter, Uranus, Uranus, Neptune];
        const { chosenPlanetId } = this.state;
        return(
            <section className="AboutPlanets">
                <div className={`container ${s.container}`}>
                    <a name="AboutPlanets">
                        <h2>About planets</h2>
                    </a>
                    <TabsBlock photos={photos} planetsList={planetsList} onChosenTab={this.chooseNewPlanet}/>
                    <PlanetInfo photos={photos} planetsList={planetsList} planetId={chosenPlanetId}/>
                </div>
            </section>
        );
    }
};

export default AboutPlanets;
