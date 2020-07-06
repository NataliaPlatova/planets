import React, {Component} from "react";
import s from "./PlanetTabs.module.scss";

const planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

class PlanetsTabs extends Component {
    render() {
        const { onChosenTab } = this.props;
        return(
            <>
                {
                    planetList.map((planet, id) =>
                        <button onClick={() => {onChosenTab(id+1);}} key={planet} id={id}>{planet}</button>
                    )
                }
            </>
        );
    }
};

export default PlanetsTabs;
