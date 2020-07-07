import React from "react";
import s from "./MainBlock.module.scss";

const MainBlock = () => {
    return (
        <section className={s.mainBlock}>
            <div className={`container ${s.container}`}>
                <h1>Planets</h1>
                <span className={s.subtitle}>of our Solar System</span>
                <button className={s.mainButton}>Read about the planets</button>
            </div>
        </section>
    );
};

export default MainBlock;
