import React from 'react';
import styles from './statusBar.module.css';

function StatusBar() {
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours and ensure two digits
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and ensure two digits
    return `${hours}:${minutes}`;
  }

  const currentTime = getCurrentTime();
  console.log(currentTime);

  return (
    <div className={styles.main}>
      <div className={styles.time}>{currentTime} </div>
      <div>
        <img src="/assets/levels.png" alt="levels" />
      </div>
    </div>
  );
}

export default StatusBar;
