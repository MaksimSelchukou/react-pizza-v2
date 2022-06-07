import React from 'react';
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>Smail </span>
                <br/>
                Error 404
            </h1>
            <p className={styles.description}>Данная страница отсутствует на данном портале</p>
        </div>
    );
};

