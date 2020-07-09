import React from "react";

import s from "./MainBlock.module.scss";

class MainBlock extends React.Component{
    render() {
        const { onAnchorClick } = this.props;
        return (
            <section className={`MainBlock ${s.mainBlock}`}>
                <div className={`container ${s.container}`}>
                    <h1>Planets</h1>
                    <span className={s.subtitle}>of our Solar System</span>
                    <a className={s.mainButton} href="#AboutPlanets" onClick={(e)=>{onAnchorClick(e)}}>Read about the planets</a>
                </div>
            </section>
        );
    }
};

export default MainBlock;
