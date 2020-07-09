import React, {Component} from "react";

import s from "./PlanetBlock.module.scss";


class PlanetBlock extends Component {
    render() {
        const { planetId, photos, planetsList } = this.props;
        const currentPlanet = planetsList[planetId];
        const characteristics = Object.keys(currentPlanet.numbers);
        return(
            <div className={s.container}>
                <div className={s.info}>
                    <a name="PlanetBlock">
                        <h3 className={s.planetName}>{currentPlanet.name}</h3>
                    </a>
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
                <div className={s.planetPhoto}>
                    <img src={photos[planetId]} alt={currentPlanet.name}/>
                </div>
            </div>
        );
    }
}

export default PlanetBlock;
