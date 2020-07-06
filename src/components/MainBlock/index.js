import React from 'react';
import s from './MainBlock.module.scss';

const MainBlock = ({children}) => {
    return (
        <div className={s.mainBlock}>
            <h1>Hi!</h1>
        </div>
    );
};

export default MainBlock;
