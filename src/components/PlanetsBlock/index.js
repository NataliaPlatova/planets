import React, {Component} from "react";
import s from "./PlanetsBlock.module.scss";
import PlanetInfo from "../PlanetInfo";
import TabsBlock from "../TabsBlock";

const planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

class PlanetsBlock extends Component {
    state = {
        chosenPlanetId: 0,
    };

    chooseNewPlanet = (id) => {
        this.setState({
            chosenPlanetId: id,
        })
    };
    render() {
        const { chosenPlanetId } = this.state;
        return(
            <section>
                <div className={`container ${s.container}`}>
                    <TabsBlock planetsList={planetList} onChosenTab={this.chooseNewPlanet}/>
                    <PlanetInfo planetsList={planetList} planetId={chosenPlanetId}/>
                </div>
            </section>
        );
    }
};

export default PlanetsBlock;
