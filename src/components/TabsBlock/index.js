import React, {Component} from "react";
import s from "./TabsBlock.module.scss";

class TabsBlock extends Component {
    render() {
        const { onChosenTab, planetsList } = this.props;
        return(
            <ul className={s.tablist}>
                {
                    planetsList.map((planet, id) =>
                        <li><button onClick={() => {onChosenTab(id);}} key={planet} id={id}>{planet}</button></li>
                    )
                }
            </ul>
        );
    }
};

export default TabsBlock;
