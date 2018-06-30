import React from 'react';
import styles from './styles.module.css';

export default ({ title, abilityLevel }) => (
  <div className={styles.root}>
    <h3 className={styles.heading}>{title}</h3>
    <div className={styles.progressBar}>
      <div className={styles.progressBarFill} style={{width: abilityLevel}}></div>
    </div>
  </div>
);