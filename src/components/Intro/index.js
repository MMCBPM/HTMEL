import React from 'react'
import styles from './styles.module.css';

export default () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1 className={styles.heading}>
        Hi, I'm Melissa
      </h1>
      <div className={styles.subHeading}>
        <span>Email Marketing</span>
        <span>Strategy</span>
        <span>Digital Marketing</span>
      </div>
    </div>
  </div>
);