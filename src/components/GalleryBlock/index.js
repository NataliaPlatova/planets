import React, {Component} from "react";
import s from "./GalleryBlock.module.scss";

class GalleryBlock extends Component {
    render() {
        return(
            <section className={s.galleryBlock}>
                <div className={`container ${s.container}`}>
                    <div className={s.gallery}></div>
                </div>
            </section>
        );
    }
};

export default GalleryBlock;
