import React, { FunctionComponent, RefObject } from 'react';

import style from './style/style.module.css';
import { IntersectionObserverHelper } from '../../helper/intersection-observer.helper';

const buildThresholdArray = Array.from(Array(100).keys(), i => i / 100);

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.09.07
 */
const HeaderComponent: FunctionComponent = () => {
    const [ref, intersect] = IntersectionObserverHelper({
        threshold: buildThresholdArray
    });
      
    return (
        <>
            <div className={style.background} />
            <div className={style.row} ref={ref as unknown as RefObject<HTMLDivElement>} />
            <div
                className={style.heading}
                style={{
                    width: intersect ? 'inherit' : '100vw',
                    boxShadow: intersect ? '0 8px 16px -2px rgba(0, 0, 0, 0.1)' : '0 8px 24px -4px rgba(0, 0, 0, 0.1)'
                }}
            >
                <img src="https://i.ibb.co/bBTTVbp/logo.png" alt="logo pokemon" />
                <p><b>Pokemon</b> Dex</p>
            </div>
        </>
    );
};

export default HeaderComponent;