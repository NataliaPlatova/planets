import React, {Component} from "react";

import Planets from '../../Planets';
import s from "./PlanetInfo.module.scss";

class PlanetInfo extends Component {
    render() {
        const planetsList = Planets.planets;
        const { planetId } = this.props;
        const currentPlanet = planetsList[planetId];
        const caracteristics = Object.keys(currentPlanet.numbers);
        return(
            <div className={s.planetDescription}>
                <div className={s.info}>
                    <h3 className={s.planetName}>{currentPlanet.name}</h3>
                    <p>{currentPlanet.p1}</p>
                    <div className={s.infoInNumbers}>
                        {
                            caracteristics.map((item, id) => {
                                const value = currentPlanet.numbers[item];
                                let measure = 'km^2';
                                if(id===1) {
                                    measure = 'kg';
                                } else if (id===2) {
                                    measure = 'g';
                                }
                                return (
                                    <div className={s.numbersBlock} key={item}>
                                        <span className={s.valueDescription}>{item}</span>
                                        <span className={s.value}>{value}<span className={s.measure}>{measure}</span></span>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <p>{currentPlanet.p2}</p>
                    <p>{currentPlanet.p3}</p>
                    </div>
            </div>
        );
    }
};

export default PlanetInfo;
