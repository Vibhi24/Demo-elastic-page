import React from 'react'
import styles from './index.module.css'

const HeroBanner = (props) => {
    const herodata = props.data
    return (
        <>
            <div className={`container ${styles.content}`}>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-12 col-sm-8'>
                        <div className={`${styles.maincontent}`}>
                            {herodata.title ? <h1 className={`${styles.title}`}>{herodata.title}</h1> : ''}
                            {herodata.description ? <p className={`${styles.desc}`} dangerouslySetInnerHTML={{ __html: herodata.description }}></p> : ''}
                            <div className={`${styles.btns}`}>
                                <a href='https://www.elastic.co/what-is/elasticsearch-machine-learning' className={`btn btn-primary ${styles.btn1}`}>Drive Result with AI</a>
                                <a href='https://www.elastic.co/cloud/cloudtrial-overview' className={`btn btn-secondary ${styles.btn2}`}>Test Drive Free</a>
                            </div>
                        </div>
                        {console.log(herodata.hero_image)}
                        {herodata && herodata.hero_image ?
                            <div className={`${styles.image}`}>
                                <img className={`${styles.mainimage}`} src={herodata.hero_image?.url} />
                            </div>
                            : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner