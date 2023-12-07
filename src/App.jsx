import React from 'react';
import './index.css';
import styles from './style.js';

import  Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/stats.jsx'



const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden' >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* hero*/}
      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
      </div>
      {/*main body - Components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats/>
      </div>
    </div>
    </div>
  );
}

export default App
