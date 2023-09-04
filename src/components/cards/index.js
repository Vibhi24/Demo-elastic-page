import React from 'react'
import styles from './index.module.css'

const Cards = () => {
  return (
    <>
    <div className={`${styles.heading}`}>
        <h3>Discover everything you can do with Elastic</h3>
    </div>
    <div className={`${styles.cards}`}>
         <div className={`col col-3 ${styles.card}`}>
            <div className={`${styles.cardimgwrapper}`}>
                <img src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt4e5f2bf8fa20b4e8/64d535beabde6a6fc551e154/photo-connect-cell-tower.png' className= {`${styles.cardimg}`}/>
            </div>
            <div className={`${styles.cardbody}`}>
                    <p className={`${styles.cardpara}`}>Stay up to date on all the latest from Elastic</p>
                    <a href='/about/press' className={`btn btn-tertiary${styles.cardlink}`}>Read News →</a>
            </div>
         </div>

         <div className={`col col-3 ${styles.card}`}>
            <div className={`${styles.cardimgwrapper}`}>
                <img src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt2619aaed40aa594c/64d535be26220473f2f71b30/photo-events-with-people.png' className= {`${styles.cardimg2}`}/>
            </div>
            <div className={`${styles.cardbody}`}>
                    <p className={`${styles.cardpara}`}>Expand your expertise</p>
                    <a href='/about/press' className={`btn btn-tertiary${styles.cardlink}`}>Explore events →</a>
            </div>
         </div>

         <div className={`col col-3 ${styles.card}`}>
            <div className={`${styles.cardimgwrapper}`}>
                <img src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt882c00911d2dad16/64d535be2392a05523415ff7/photo-using-mobile-phone-in-transit.png' className= {`${styles.cardimg}`}/>
            </div>
            <div className={`${styles.cardbody}`}>
                    <p className={`${styles.cardpara}`}>Keep up with our growing community</p>
                    <a href='/about/press' className={`btn btn-tertiary${styles.cardlink}`}>View blog →</a>
            </div>
         </div>
    </div>
    </>
  )
}

export default Cards