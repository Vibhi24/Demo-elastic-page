import styles from './index.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'next/image';

const TabComponent = () => {
    return (
        <div className={`${styles.tab_comp}`}>
            <div className={`container ${styles.cont}`}>
                <div className='col-md-8 text-center offset-md-2'>
                    <h2>Streamline development with Elasticsearch and the ELK Stack</h2>
                    <a href=''>Go to docs hub →</a>
                </div>
            </div>
            <div className={`container ${styles.tabs}`}>
                <Tabs
                    defaultActiveKey="join"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="join" title="Join it" className={`${styles.tab}`}>
                        <div className={`container ${styles.outer_cont}`}>
                            <div className={`row ${styles.inner_cont}`}>
                            <div className={`col-md-5 col-sm-6 ${styles.tab_content}`}>
                                <h3>Join our community of global devs</h3>
                                <p>Contributors — like you — have helped to ensure that Elasticsearch is more than code. It’s your community. Ask a question, join a conversation, and share your knowledge.</p>
                                <a href=''>Get connected →</a>
                            </div>
                            <div className={`col-sm-6 ${styles.tab_image}`}>
                                <img src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt92c1f5845aef8354/64d52c4aaae0cc5b4959ff9b/illustration-get-search-knn.png' />
                            </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="chat" title="Chat about it" className={`${styles.tab}`}>
                    <div className={`container ${styles.outer_cont}`}>
                            <div className={`row ${styles.inner_cont}`}>
                            <div className={`col-md-5 col-sm-6 ${styles.tab_content}`}>
                                <h3>Stack up your skills with Elk Stack</h3>
                                <p>Look for help, find testers, learn about the latest meetup — it’s all happening in Elastic’s Slack workspace.</p>
                                <a href=''>Start Slacking →</a>
                            </div>
                            <div className={`col-sm-6 ${styles.tab_image}`}>
                                <img src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/bltefd24fd3847ddead/64d52c4adc69d525687cadfa/illustration-elk-stack-support.png' />
                            </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="try" title="Try it" className={`${styles.tab}`}>
                    <div className={`container ${styles.outer_cont}`}>
                            <div className={`row ${styles.inner_cont}`}>
                            <div className={`col-md-5 col-sm-6 ${styles.tab_content}`}>
                                <h3>Learn by doing</h3>
                                <p>Cut through the marketing fluff and dive into the code to discover why millions of developers trust Elastic.</p>
                                <a href=''>Explore docs →</a>
                            </div>
                            <div className={`col-sm-6 ${styles.tab_image}`}>
                                <img src='https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt759473c9edee13cb/64d52c4aabde6a141f51e0fd/illustration-learn-about-elastic.png' />
                            </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default TabComponent