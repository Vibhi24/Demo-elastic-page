import React from 'react'
import styles from './index.module.css'
// {`${styles.main}`}
const ElasticBanner = () => {
  return (
    <>
      <div className={`container ${styles.elasticbanner}`}>
        <div className='row d-flex justify-content-between'>
          <div className='content col-12 col-md-5 col-sm-6 align-self-center position-relative textContainer'>
            <h2 className=''>Observability</h2>
            <p className=''>Accelerate problem resolution with open, flexible and unified observability powered by advanced ML and analytics.</p>
            <div className='justify-content-start text-start d-flex flex-column'>
              <a href='/observability' className={`${styles.elasticlink}`}>Observability overview →</a>
            </div>
          </div>
          <div className='col-12 col-sm-6'>
            <iframe className={`${styles.video}`} src='https://play.vidyard.com/QcGv8o83bUf4xQWAFNVaTy?disable_popouts=1&v=4.3.13&chapter=1&type=inline&referring_url=&autoplay=1&hidden_controls=1&muted=1&loop=1&disable_analytics=1'></iframe>
          </div>
        </div>
      </div>

      <div className={`container ${styles.elasticbanner}`}>
        <div className='row d-flex justify-content-between'>
          <div className='content col-12 col-md-5 col-sm-6 align-self-center position-relative textContainer'>
            <h2 className=''>Security</h2>
            <p className=''>Automate protection, investigation, and response at scale using a unified solution with SIEM, EDR, and cloud security.</p>
            <div className='justify-content-start text-start d-flex flex-column'>
              <a href='/observability' className={`${styles.elasticlink}`}>Security overview →</a>
            </div>
          </div>
          <div className='col-12 col-sm-6'>
            <iframe className={`${styles.video}`} src='https://play.vidyard.com/m8D7dHwo55A7mjD5E5E3To?disable_popouts=1&v=4.3.13&chapter=1&type=inline&referring_url=&autoplay=1&hidden_controls=1&muted=1&loop=1&disable_analytics=1'></iframe>
          </div>
        </div>
      </div>

      <div className={`container ${styles.elasticbanner}`}>
        <div className='row d-flex justify-content-between'>
          <div className='content col-12 col-md-5 col-sm-6 align-self-center position-relative textContainer'>
            <h2 className=''>Search</h2>
            <p className=''>Build powerful AI and machine learning enabled search applications for your customers and employees.</p>
            <div className='justify-content-start text-start d-flex flex-column'>
              <a href='/observability' className={`${styles.elasticlink}`}>Search overview →</a>
            </div>
          </div>
          <div className='col-12 col-sm-6'>
            <iframe className={`${styles.video}`} src='https://play.vidyard.com/pTtipACA8JokjDwUyewNCg?disable_popouts=1&v=4.3.13&chapter=1&type=inline&referring_url=&autoplay=1&hidden_controls=1&muted=1&loop=1&disable_analytics=1'></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default ElasticBanner