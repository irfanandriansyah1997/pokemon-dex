import React, { FunctionComponent } from 'react';

import style from './style/style.module.css';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.09.07
 */
const HeaderComponent: FunctionComponent = () => {
    return (
        <>
            <div className={style.background} />
            <div className={style.heading} />
        </>
    );
};

export default HeaderComponent;