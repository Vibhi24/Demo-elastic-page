import React from 'react'
import styles from './index.module.css'

const trialBanner = () => {
  return (
    <div className={`container ${styles.banner}`}>
        <div className={`${styles.content}`}>
            <div className={`${styles.description}`}>
                <h4>See everything Elastic can do for you</h4>
            </div>
            <div className={`${styles.buttons}`}>
            <a className={`btn btn-secondary ${styles.btnsecondary}`}>Start free trial</a>
            <a className={`btn btn-tertiary ${styles.btntertiary}`}>View Pricing →</a>
            </div>
        </div>
    </div>
  )
}

export default trialBanner