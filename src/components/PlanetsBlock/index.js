import React, {Component} from "react";
import s from "./PlanetsBlock.module.scss";
import PlanetInfoComponent from "../PlanetInfoCompoent";

class PlanetsBlock extends Component {
    render() {
        return(
            <section>
                <div className={`container ${s.container}`}>
                    <div className="tabs"></div>
                    <PlanetInfoComponent/>
                </div>
            </section>
        );
    }
};

export default PlanetsBlock;
