import React from 'react'
import trialBanner from '../trialBanner'
import styles from './index.module.css'

const ResultSection = () => {
    return (
        <div className={` ${styles.resultscont}`}>
            <div className={`container ${styles.titlewrapper}`}>
                <h2>Want Results like these?</h2>
                <h2>Try Elastic.</h2>
            </div>
            <div className={`container ${styles.reswrapper}`}>
                <div className={`${styles.faster}`}>
                    <div className={`${styles.title}`}>
                        <span className={`${styles.statistics}`}>10</span>
                        <span className={`${styles.statistics}`}>X</span>
                    </div>
                    <p>faster at half the price of other observability solutions</p>
                </div>
                <div className={`${styles.reduction}`}>
                    <div className={`${styles.title}`}>
                        <span className={`${styles.statistics}`}>62</span>
                        <span className={`${styles.percent}`}>%</span>
                    </div>
                    <p>reduction in overall risk to stop ransomware and advanced threats</p>
                </div>

            </div>
            <div className={`container ${styles.banner}`}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.description}`}>
                        <h4>See everything Elastic can do for you</h4>
                    </div>
                    <div className={`${styles.buttons}`}>
                        <a href='https://www.elastic.co/cloud/cloudtrial-overview' className={`btn btn-secondary ${styles.btnsecondary}`}>Start free trial</a>
                        <a href='https://www.elastic.co/pricing/' className={`btn btn-tertiary ${styles.btntertiary}`}>View Pricing →</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultSection