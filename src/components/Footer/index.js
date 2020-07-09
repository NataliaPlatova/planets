import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.pageFooter}>
            <div className={`container ${s.container}`}>
                <span className={s.logo} href="#">LearnPlanets</span>
                <span className={s.copyright}>Texts and information from <a href="https://www.space.com/">space.com</a></span>
            </div>
        </footer>
    )
};

export default Footer;
