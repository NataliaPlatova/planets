import React, {Component} from "react";

import Planets from '../../Planets';
import s from "./PlanetInfo.module.scss";

import Mercury from "./img/Mercury.png";
import Venus from "./img/Venus.png";
import Earth from "./img/Earth.png";
import Mars from "./img/Mars.png";
import Jupiter from "./img/Jupiter.png";
//import {ReactComponent as Saturn} from "./img/Saturn.png";
import Uranus from "./img/Uranus.png";
import Neptune from "./img/Neptune.png";

class PlanetInfo extends Component {
    render() {
        const planetsList = Planets.planets;
        const { planetId } = this.props;
        const currentPlanet = planetsList[planetId];
        const characteristics = Object.keys(currentPlanet.numbers);
        return(
            <div className={s.planetDescription}>
                <div className={s.info}>
                    <h2 className={s.planetName}>{currentPlanet.name}</h2>
                    <p>{currentPlanet.p1}</p>
                    <div className={s.infoInNumbers}>
                        {
                            characteristics.map((item, id) => {
                                const value = currentPlanet.numbers[item];
                                let measure = 'km²';
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
                <div className={planetId===0? s.planetPhoto:s.invisible}>
                    <img src={Mercury}/>
                </div>
                <div className={planetId===1? s.planetPhoto:s.invisible}>
                    <img src={Venus}/>
                </div>
                <div className={planetId===2? s.planetPhoto:s.invisible}>
                    <img src={Earth}/>
                </div>
                <div className={planetId===3? s.planetPhoto:s.invisible}>
                    <img src={Mars}/>
                </div>
                <div className={planetId===4? s.planetPhoto:s.invisible}>
                    <img src={Jupiter}/>
                </div>
                <div className={planetId===5? s.planetPhoto:s.invisible}>
                    <img src={Uranus}/>
                </div>
                <div className={planetId===6? s.planetPhoto:s.invisible}>
                    <img src={Uranus}/>
                </div>
                <div className={planetId===7? s.planetPhoto:s.invisible}>
                    <img src={Neptune}/>
                </div>
            </div>
        );
    }
};

export default PlanetInfo;
