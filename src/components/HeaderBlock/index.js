import React from "react";
import s from "./HeaderBlock.module.scss";

const HeaderBlock = () => {
    return (
        <header className={s.pageHeader}>
            <div className={`container ${s.container}`}>
                <a className={s.homeLink} href="#">LearnPlanets</a>
                <ul className={s.links}>
                    <li><a href="#">Solar System</a></li>
                    <li><a href="#">Planets</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
            </div>
        </header>
    );
};

export default HeaderBlock;
