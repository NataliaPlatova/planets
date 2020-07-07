import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.pageFooter}>
            <div className={`container ${s.container}`}></div>
        </footer>
    )
};

export default Footer;
