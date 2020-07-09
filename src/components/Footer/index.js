import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.pageFooter}>
            <div className={`container ${s.container}`}>
                <a className={s.homeLink} href="#">LearnPlanets</a>
                <span>Text from space.com</span>
            </div>
        </footer>
    )
};

export default Footer;
