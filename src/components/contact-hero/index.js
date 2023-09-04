import React from 'react'
import styles from './index.module.css'

const Contact_hero = () => {
  return (
    <div>
        <div className={`d-none d-md-block ${styles.patterns}`}>
            <div className={`${styles.patternleft}`}>
                <img className={`${styles.leftimg}`} src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt8d8a47b0bda71e1e/60412d88c7198e3af48f726d/generic-top-left.svg' />
            </div>
            <div className={`${styles.patternright}`}>
                <img className={`${styles.rightimg}`} src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt9f40c83ad2785983/6011c55b3e567f1011da3dce/generic-bottom-right.svg' />
            </div>
        </div>
        <div className={`container ${styles.hero_content}`}>
            <div className='row align-items-center'>
                <div className='m-b-sm-20 col-12 col-sm-8 offset-sm-2'>
                    <div className={`${styles.content}`}>
                        <h1 className={`${styles.head}`}>Get in touch</h1>
                        <p className={`${styles.descr}`}>We love a good query. Complete the form and we'll make sure to reach out.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_hero