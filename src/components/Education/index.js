import React from 'react'
import styles from './styles.module.css';
import Qualification from './components/Qualification';

export default () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h2> Education </h2>
     
      
      <Qualification 
        title="MSc Global Marketing"
        date="Graduated 2015"
        institution="University of Liverpool, UK"/>

    </div>
  </div>
);