import React from 'react'
import styles from './index.module.css'

const LogoContainer = (props) => {
    const logodata = props.data
    return (
        <>
            <div className={`container ${styles.content}`}>
                <div className='row'>
                    <div className='col-12'>
                        <div className={`${styles.logocontainer}`}>
                            {logodata.title ? <h2>{logodata.title}</h2> : ''}
                            <div className={`row ${styles.logos}`}>
                                {logodata && logodata.logo_item && logodata.logo_item.length > 0 && logodata.logo_item.map((logo) => {
                                    return (
                                        <>
                                            <div className={`col-6 col-md-max-width ${styles.logo}`}>
                                                <a href={logo.logo_link.url}>
                                                    <img src={logo.logo_image.url} alt='dish' className={`${styles.logoimg}`} />
                                                </a>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <div className='align-items-center justify-content-center text-center d-flex flex-column'>
                                {logodata && logodata.link ? <a href={logodata.link.url} className={`${styles.seecs}`}>{logodata.link.title} →</a> : ""}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoContainer