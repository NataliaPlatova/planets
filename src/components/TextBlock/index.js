import React from "react";
import s from "./TextBlock.module.scss";

const TextBlock = ({image, sectionName, children}) => {
    const withImage = image? true:false;
    if (withImage) {
        return (
            <section className={`${s.textBlock} ${sectionName}`}>
                <div className={`container ${s.container}`}>
                    <div className={s.text}>{children}</div>
                    <div className={s.image}>
                        <img src={image} alt={`${sectionName} image`}/>
                    </div>
                </div>
            </section>
        );
    }
    return(
        <section className={`${s.textBlock} ${sectionName}`}>
            <div className={`container ${s.container}`}>
                <div className={s.text_noImage}>{children}</div>
            </div>
        </section>
    );
};

export default TextBlock;
