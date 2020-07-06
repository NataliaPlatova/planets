import React from "react";
import s from "./MainBlock.module.scss";

const MainBlock = () => {
    return (
        <section className={s.mainBlock}>
            <div className={`container ${s.container}`}>
                <h1>Planets</h1>
                <h2>of our Solar System</h2>
                <button>About the planets</button>
            </div>
        </section>
    );
};

export default MainBlock;
