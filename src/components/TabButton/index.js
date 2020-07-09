import React, {Component} from "react";
import s from "./TabButton.module.scss";


class TabButton extends Component {
    render() {
        const { photoSrc, planetName, id, onTabClick } = this.props;
        return(
            <button className={s.tab} onClick={()=>{onTabClick(id)}} id={id}>
                <figure>
                    <img src={photoSrc} alt={planetName}/>
                    <figcaption>{planetName}</figcaption>
                </figure>
            </button>
        );
    }
}

export default TabButton;
