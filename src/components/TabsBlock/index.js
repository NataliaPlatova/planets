import React, {Component} from "react";
import s from "./TabsBlock.module.scss";

import Mercury from "./img/Mercury.png";
import Venus from "./img/Venus.png";
import Earth from "./img/Earth.png";
import Mars from "./img/Mars.png";
import Jupiter from "./img/Jupiter.png";
//import {ReactComponent as Saturn} from "./img/Saturn.png";
import Uranus from "./img/Uranus.png";
import Neptune from "./img/Neptune.png";

class TabsBlock extends Component {
    render() {
        const photos = [Mercury, Venus, Earth, Mars, Jupiter, Uranus, Uranus, Neptune];
        const { onChosenTab, planetsList } = this.props;
        return(
            <ul className={s.tablist}>
                {
                    planetsList.map((planet, id) =>
                        <li key={planet}>
                            <button className={s.tab} onClick={() => {onChosenTab(id);}} id={id}>
                                <figure>
                                    <img src={photos[id]} alt={planet}/>
                                    <figcaption>{planet}</figcaption>
                                </figure>
                            </button>
                        </li>
                    )
                }
            </ul>
        );
    }
};

export default TabsBlock;
