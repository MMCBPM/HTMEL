import React from 'react'
import styles from './styles.module.css';

export default ({ title, children, start, end }) => (
    <div className={styles.root}>
        <div className={styles.details}>
            <h4>{title}</h4>
            <span>{start} - {end}</span>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>
);