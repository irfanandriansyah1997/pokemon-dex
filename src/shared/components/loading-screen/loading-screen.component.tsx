import React, { FunctionComponent,  } from 'react';

import style from './style/style.module.css';
import { LoadingScreenPropsInterface } from './interface/component.interface';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.09.09
 */
const LoadingScreenComponent: FunctionComponent<
    LoadingScreenPropsInterface
> = ({
    show
}) => {
    return (
        <div
            className={style.div}
            style={
                {
                    opacity: show ? 1 : 0,
                    transform: show ? 'translateY(0%)' : 'translateY(-100%)'
                }
            }
        >
            <img className={style.image} src="https://i.ibb.co/bBTTVbp/logo.png" alt="logo pokemon" />
            <h1 className={style.heading}>Loading</h1>
            <p className={style.desc}>
                Please Wait Data
                <span className={style.loading} />
                <span className={style.loading} />
                <span className={style.loading} />
            </p>
        </div>
    );
};

export default LoadingScreenComponent;
