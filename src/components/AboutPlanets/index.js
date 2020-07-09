import React, {Component} from "react";
import s from "./AboutPlanets.module.scss";
import PlanetBlock from "../PlanetBlock";
import TabsBlock from "../TabsBlock";

import Mercury from "./img/Mercury.png";
import Venus from "./img/Venus.png";
import Earth from "./img/Earth.png";
import Mars from "./img/Mars.png";
import Jupiter from "./img/Jupiter.png";
import Saturn from "./img/Saturn.png";
import Uranus from "./img/Uranus.png";
import Neptune from "./img/Neptune.png";

import Planets from '../../Planets';


class AboutPlanets extends Component {
    state = {
        chosenPlanetId: null,
    };

    slideToPlanetBlock = () => {
        document.getElementById('PlanetBlock').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    chooseNewPlanet = (id) => {
        this.setState({
            chosenPlanetId: id,
        }, this.slideToPlanetBlock)
    };

    render() {
        const planetsList = Planets.planets;
        const photos = [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune];
        const { chosenPlanetId } = this.state;
        return(
            <section className="AboutPlanets">
                <div className={`container ${s.container}`}>
                    <a id="AboutPlanets">
                        <h2>About planets</h2>
                    </a>
                    <span className={s.subtitle}>Read about the planets of our Solar system</span>
                    <TabsBlock photos={photos} planetsList={planetsList} onChosenTab={this.chooseNewPlanet}/>
                    {
                        chosenPlanetId===null?'':<PlanetBlock photos={photos} planetsList={planetsList} planetId={chosenPlanetId}/>
                    }
                </div>
            </section>
        );
    }
};

export default AboutPlanets;
