import React, {Component} from "react";
import s from "./TabsBlock.module.scss";


class TabsBlock extends Component {
    render() {
        const { onChosenTab, planetsList, photos } = this.props;
        return(
            <div className={s.container}>
                    <ul className={s.tablist}>
                        {
                            planetsList.map((planet, id) =>
                                <li key={planet.name}>
                                    <a href="#PlanetBlock" className={s.tab} onClick={() => {onChosenTab(id);}} id={id}>
                                        <figure>
                                            <img src={photos[id]} alt={planet.name}/>
                                            <figcaption>{planet.name}</figcaption>
                                        </figure>
                                    </a>
                                </li>
                            )
                        }
                    </ul>
            </div>
        );
    }
};

export default TabsBlock;
