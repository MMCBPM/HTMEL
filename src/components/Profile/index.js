import React from 'react'
import styles from './styles.module.css';
import profileImage from './profile-image.jpg';
import Skill from './components/Skill';

export default () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1 className={styles.heading}>
        About Me
      </h1>
      <div className={styles.personalStatement}>
        <img src={profileImage} />
        <p>
          Marketing maven with extensive experience in strategy, business development,
          partner marketing and field marketing. Stumbled into SQL, HTML, CSS and a little Javascript
          along the way. Currently based in the Silicon Valley and looking for my next marketing challenge!
        </p>
      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
        <Skill title="Email marketing" abilityLevel="90%" />
        <Skill title="SEO" abilityLevel="60%" />
        <Skill title="Social media advertising" abilityLevel="70%" />
        <Skill title="Content writing" abilityLevel="90%" />
        <Skill title="Strategy" abilityLevel="90%" />
      </div>
    </div>
  </div>
);