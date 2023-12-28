import React from 'react';
import styles from './header.module.css';
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerBG}></div>
      <div className={styles.headerTextBox}>
        <div className={styles.headerContent}>
          <p>
            Black Friday<span className={styles.hiddenSpanSemicolon}>,</span>
            &nbsp;
            <span className={styles.hiddenSpan}>24-27 Nov</span>{' '}
          </p>
        </div>
        <img src="/assets/dot.png" alt="dot" className={styles.dotImg} />
        <div className={styles.headerContent}>
          <span className={styles.goldenText}>10%OFF</span>{' '}
        </div>
        <img src="/assets/dot.png" alt="dot" className={styles.dotImg} />

        <div className={styles.headerContenthidden}>
          <p>
            Use Code&nbsp; <span className={styles.goldenText}>10FRIDAY</span>{' '}
          </p>
          &nbsp;
          <span className={styles.hiddenSpan}>at checkout</span>{' '}
        </div>
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.headerButton}>shop now</button>
        <img src="/assets/arrow.png" alt="arrow" className={styles.arrow} />
        <img
          src="/assets/Close.png"
          alt="Close"
          className={styles.closeButton}
        />
      </div>
    </div>
  );
}

export default Header;
