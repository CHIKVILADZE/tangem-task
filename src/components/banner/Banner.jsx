import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';

function Banner() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem('isBannerClosed');
    if (isBannerClosed) {
      setIsHidden(true);
    }
  }, []);

  const handleHide = () => {
    setIsHidden(true);
    localStorage.setItem('isBannerClosed', 'true');
  };

  return (
    !isHidden && (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contantHeader}>
            <img
              src="/assets/Close.png"
              alt="close"
              onClick={handleHide}
              className={styles.closeButton}
            />
          </div>
          <div className={styles.contentTitleBox}>
            <h1>Black Friday</h1>
            <p className={styles.golden}>10%OFF</p>
            <p className={styles.contentParagraph}>
              Use code <span className={styles.paragraphSpan}>10FRIDAY</span> at
              checkout
            </p>
            <button className={styles.contentButton}>Shop now</button>
          </div>

          {/* <button className={styles.contentButton}>
            Shop now through Monday
          </button> */}
        </div>
      </div>
    )
  );
}

export default Banner;
