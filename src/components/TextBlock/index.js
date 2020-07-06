import React from "react";
import s from "./TextBlock.module.scss";

const TextBlock = ({sectionName, children}) => {
    return (
        <section className={sectionName}>
            <div className={`container ${s.container}`}>
                {children}
            </div>
        </section>
    );
};
export default TextBlock;
