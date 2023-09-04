import styles from './index.module.css'

const FooterCTA = () => {
  return (
    <div className={`${styles.footercta}`}>
        <div className={`d-none d-md-block ${styles.patterns}`}>
            <div className={`${styles.patternleft}`}>
                <img className={`${styles.leftimg}`} src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt4e21713edfb8ae51/64b0ffa6bd5d8a2cc9723322/footer-cta-pattern-left.svg' />
            </div>
            <div className={`${styles.patternright}`}>
                <img className={`${styles.rightimg}`} src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blta9d833677e4f8f38/64b0ffaff122ca5c02e6c7f6/footer-cta-pattern-right.svg' />
            </div>
        </div>
        <div className={`container`}>
            <div className='row'>
                <div className={`col-md-8 offset-md-2 ${styles.footer_cta_content}`}>
                    <div className={`${styles.content_title}`}>
                        <h3>Ready to put your data to work?</h3>
                    </div>
                    <div className={`${styles.cta_buttons}`}>
                        <a href='https://www.elastic.co/cloud/cloudtrial-overview' className={`btn btn-secondary ${styles.ctasecondary}`}>Start Free Trial</a>
                        <a href='https://www.elastic.co/contact?baymax=rtp&rogue=eswt-1165-a&baymax=rtp&rogue=eswt-1165-b&utm_technology=rtp&utm_page=home&utm_placement=hero&utm_cta=eswt-1329-a#sales' className={`btn btn-tertiary ${styles.ctatertiary}`}>Get In Touch →</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FooterCTA