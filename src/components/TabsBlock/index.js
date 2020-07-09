import React, {Component} from "react";
import s from "./TabsBlock.module.scss";
import TabButton from "../TabButton";


class TabsBlock extends Component {

    render() {
        const { onChosenTab, planetsList, photos } = this.props;
        return(
            <div className={s.container}>
                    <ul className={s.tablist}>
                        {
                            planetsList.map((planet, id) =>
                                <li key={planet.name}>
                                    <TabButton
                                        onTabClick={onChosenTab}
                                        id={id}
                                        photoSrc={photos[id]}
                                        planetName={planet.name}
                                    />
                                </li>
                            )
                        }
                    </ul>
            </div>
        );
    }
};

export default TabsBlock;
