import React from "react";

import s from "./MainBlock.module.scss";

const MainBlock = () => {
    return (
        <section className={s.mainBlock}>
            <div className={`container ${s.container}`}>
                <h1>Planets</h1>
                <span className={s.subtitle}>of our Solar System</span>
                <a className={s.mainButton} href="#AboutPlanets">Read about the planets</a>
            </div>
        </section>
    );
};

export default MainBlock;
