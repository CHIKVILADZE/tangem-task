import React from 'react';
import styles from './header.module.css';
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerBG}></div>
      <div className={styles.headerTextBox}>
        <div className={styles.sliderBox}>
          <span className={styles.headerText}>Black Friday, </span>

          <span className={styles.goldenText}>10%OFF</span>
        </div>

        <img src="/assets/arrow.png" alt="arrow" className={styles.arrow} />
      </div>
    </div>
  );
}

export default Header;
