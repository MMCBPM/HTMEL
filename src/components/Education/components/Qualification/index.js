import React from 'react'
import styles from './styles.module.css';

export default ({title, date, institution}) => (
    <div className={styles.root}>
        <h4>{title}</h4>
        <span>{date}</span>
        <span>{institution}</span>
    </div>
);