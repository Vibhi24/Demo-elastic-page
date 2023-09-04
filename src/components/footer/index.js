import styles from './index.module.css'

const Footer = () => {
    return (
        <footer className={`${styles.footer_wrapper}`}>
            <div className={`container ${styles.footer_cont}`}>
                <div className={`row ${styles.footer_top}`}>
                    <div className={`${styles.footer_nav}`}>
                        <div className={`${styles.footer_left}`}>
                            <div>
                                <div className={`${styles.logo}`}>
                                    <a href='/'>
                                        <img src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt784552688fae9979/5bbca1d7c863b8e614126af7/logo-elastic-outline-white.svg' className={`${styles.logo_img}`} />
                                    </a>
                                </div>
                            </div>
                            <div className={`${styles.social_icons}`}>
                                <div className={`${styles.follow}`}>
                                    <h2>FOLLOW US</h2>
                                    <ul className={`${styles.social_icons_list}`}>
                                        <li className={`${styles.linkedin}`}>
                                            <a href=''><img src='https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blte7cfb1a091901ce1/5eb00c925751b2150e57a9d6/footer-icon-linkedin.svg' /></a>
                                        </li>
                                        <li className={`${styles.youtube}`}>
                                            <a href=''><img src='https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt7c28b18be98b1af8/5eb00ca908d37e6d82ef7655/footer-icon-youtube.svg' /></a>
                                        </li>
                                        <li className={`${styles.facebook}`}>
                                            <a href=''><img src='https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt75566c5278ad68da/5eb00c59d238e314f259fbea/footer-icon-facebook.svg' /></a>
                                        </li>
                                        <li className={`${styles.twitter}`}>
                                            <a href=''><img src='https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt341fed86979a9fbb/5eb00c76b8a6356e4ddc1180/footer-icon-twitter.svg' /></a>
                                        </li>
                                        <li className={`${styles.github}`}>
                                            <a href=''><img src='https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt6ef5841a45696d80/64ca2a6fc530871313bc3822/icon-footer-github.svg' /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.footer_right}`}>
                            <ul className={`${styles.desktop_nav}`}>
                                <li>
                                    <h2>ABOUT US</h2>
                                    <div className={`${styles.inside_nav}`}>
                                        <a href=''>About Elastic</a>
                                        <a href=''>Our Story</a>
                                        <a href=''>Leadership</a>
                                        <a href=''>DE&I</a>
                                        <a href=''>Blog</a>
                                    </div>
                                </li>
                                <li>
                                    <h2>JOIN US</h2>
                                    <div className={`${styles.inside_nav}`}>
                                        <a href=''>Careers</a>
                                        <a href=''>Career Portal</a>
                                    </div>
                                </li>
                                <li>
                                    <h2>PRESS</h2>
                                    <div className={`${styles.inside_nav}`}>
                                        <a href=''>Press Releases</a>
                                        <a href=''>News Articles</a>
                                    </div>
                                </li>
                            </ul>
                            <ul className={`${styles.desktop_nav}`}>
                                <li>
                                    <h2>PARTNERS</h2>
                                    <div className={`${styles.inside_nav}`}>
                                        <a href=''>Find a Partner</a>
                                        <a href=''>Partner Login</a>
                                        <a href=''>Request Access</a>
                                        <a href=''>Become a Partner</a>
                                    </div>
                                </li>
                                <li>
                                    <h2>TRUST AND SECURITY</h2>
                                    <div className={`${styles.inside_nav}`}>
                                        <a href=''>EthicsPoint portal</a>
                                        <a href=''>Security and privacy</a>
                                        <a href=''>ECCN report</a>
                                        <a href=''>Ethics email</a>
                                    </div>
                                </li>
                            </ul>
                            <ul className={`${styles.desktop_nav}`}>
                                <li>
                                    <h2>INVESTOR RELATIONS</h2>
                                    <div className={`${styles.inside_nav}`}>
                                        <a href=''>Investor resources</a>
                                        <a href=''>Governance</a>
                                        <a href=''>Financials</a>
                                        <a href=''>Stock</a>
                                    </div>
                                </li>
                                <li>
                                    <h2>EXCELLENCE AWARDS</h2>
                                    <div className={`${styles.inside_nav}`}>
                                        <a href=''>Previous winners</a>
                                        <a href=''>ElasticON Tour</a>
                                        <a href=''>Become a sponsor</a>
                                        <a href=''>All events</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${styles.footer_bottom}`}>
                    <div className={`${styles.footer_links}`}>
                        <ul className={`${styles.links}`}>
                            <li><a href=''>Trademarks</a></li>
                            <li><a href=''>Terms of use</a></li>
                            <li><a href=''>Privacy</a></li>
                            <li><a href=''>Sitemap</a></li>
                        </ul>
                        <div className={`${styles.copyright}`}>
                            <p>© 2023. Elasticsearch B.V. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className={`${styles.footer_text}`}>
                        <p>Elastic, Elasticsearch and other related marks are trademarks, logos or registered trademarks of Elasticsearch B.V. in the United States and other countries.</p>
                        <p>Apache, Apache Lucene, Apache Hadoop, Hadoop, HDFS and the yellow elephant logo are trademarks of the <a href=''>Apache Software Foundation</a> in the United States and/or other countries.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer