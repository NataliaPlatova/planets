import React from "react";
import s from "./HeaderBlock.module.scss";

class HeaderBlock extends React.Component{
    render() {
        const { onAnchorClick } = this.props;
        return (
            <header className={`HeaderBlock ${s.pageHeader}`}>
                <div className={`container ${s.container}`}>
                    <span className={s.logo} href="#">LearnPlanets</span>
                    <ul className={s.links}>
                        <li><a href="#SolarSystem" onClick={(e)=>{onAnchorClick(e)}}>Solar System</a></li>
                        <li><a href="#AboutPlanets" onClick={(e)=>{onAnchorClick(e)}}>About planets</a></li>
                        <li><a href="#AboutPluto" onClick={(e)=>{onAnchorClick(e)}}>About Pluto</a></li>
                    </ul>
                </div>
            </header>
        );
    }
};

export default HeaderBlock;
