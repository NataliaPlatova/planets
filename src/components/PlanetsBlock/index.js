import React, {Component} from "react";
import s from "./PlanetsBlock.module.scss";
import PlanetInfoComponent from "../PlanetInfoComponent";
import PlanetsTabs from "../PlanetTabs";


class PlanetsBlock extends Component {
    state = {
        chosenPlanetId: 1,
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
                    <PlanetsTabs onChosenTab={this.chooseNewPlanet}/>
                    <PlanetInfoComponent planetId={chosenPlanetId}/>
                </div>
            </section>
        );
    }
};

export default PlanetsBlock;
