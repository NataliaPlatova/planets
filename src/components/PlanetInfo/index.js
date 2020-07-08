import React, {Component} from "react";

import Planets from '../../Planets';
import s from "./PlanetInfo.module.scss";

import {ReactComponent as Mercury} from "./img/Mercury.svg";
import {ReactComponent as Venus} from "./img/Venus.svg";
import {ReactComponent as Earth} from "./img/Earth.svg";
import {ReactComponent as Mars} from "./img/Mars.svg";
import {ReactComponent as Jupiter} from "./img/Jupiter.svg";
//import {ReactComponent as Saturn} from "./img/Saturn.svg";
import {ReactComponent as Uranus} from "./img/Uranus.svg";
import {ReactComponent as Neptune} from "./img/Neptune.svg";

class PlanetInfo extends Component {
    render() {
        const planetsList = Planets.planets;
        const { planetId } = this.props;
        const currentPlanet = planetsList[planetId];
        const characteristics = Object.keys(currentPlanet.numbers);
        return(
            <div className={s.planetDescription}>
                <Mercury/>
                <div className={s.info}>
                    <h3 className={s.planetName}>{currentPlanet.name}</h3>
                    <p>{currentPlanet.p1}</p>
                    <div className={s.infoInNumbers}>
                        {
                            characteristics.map((item, id) => {
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
                <div>
                </div>
            </div>
        );
    }
};

export default PlanetInfo;
