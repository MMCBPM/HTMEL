import React from 'react'
import styles from './styles.module.css';

export default ({ title, children, start, end }) => (
    <div className={styles.root}>
        <div className={styles.details}>
            <h3>{title}</h3>
            <span>{start} - {end}</span>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>
);