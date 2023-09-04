import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import ElasticBanner from '@/components/elastic-search'
import ResultSection from '@/components/results'
import Cards from '@/components/cards'
import FooterCTA from '@/components/footer-cta'
import Footer from '@/components/footer'
import TabComponent from '@/components/tab-component'
import Header from '@/components/header'
import Contentstack from 'contentstack';

<script src="https://cdn.jsdelivr.net/npm/contentstack@latest/dist/web/contentstack.min.js"></script>

const API_KEY = 'blt2260b25d78f02c35';
const DELIVERY_TOKEN = 'cs58fb72625764c334e0fd165d'
const CONTENT_TYPE = 'home_page'

export default function Home() {

  const [herodata, setHerodata] = useState([])
  const [logodata, setlogodata] = useState([])

  const Stack = Contentstack.Stack({ "api_key": API_KEY, "delivery_token": DELIVERY_TOKEN, "environment": "development" });
  const Query = Stack.ContentType(CONTENT_TYPE).Query();

  const getContent = async () => {
    Query
      .where("title")
      .includeCount()
      .toJSON()
      .find()
      .then(function success(result) {
        setHerodata(result[0][0].homepage_components[0].hero_banner)
        setlogodata(result[0][0].homepage_components[1].logos)
      },
        function error(err) {
        });
  }
  useEffect(() => {
    getContent();
  })

  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <div className={`${styles.bluebg}`}>
          <div className={`container ${styles.content}`}>
            <div className='row align-items-center justify-content-center'>
              <div className='col-12 col-sm-8'>
                <div className={`${styles.maincontent}`}>
                  <h1 className={`${styles.title}`}>{herodata.title}</h1>
                  <p className={`${styles.desc}`} dangerouslySetInnerHTML={{ __html: herodata.description }}></p>
                  <div className={`${styles.btns}`}>
                    <a href='https://www.elastic.co/what-is/elasticsearch-machine-learning' className={`btn btn-primary ${styles.btn1}`}>Drive Result with AI</a>
                    <a href='https://www.elastic.co/cloud/cloudtrial-overview' className={`btn btn-secondary ${styles.btn2}`}>Test Drive Free</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className={`${styles.patterncontainer}`}>
                  <div className={`${styles.leftpattern}`}></div>
                  <div className={`${styles.rightpattern}`}></div>
                </div>
                <div className={`${styles.image}`}>
                  <img src='https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt343417cc4bf97e0b/64ce77bb148a0b760a0c9d0d/home_hero--optimized.png' className={`${styles.mainimage}`} />
                </div>
                <div className={`${styles.logocontainer}`}>
                  <h2>{logodata.title}</h2>
                  <div className={`row ${styles.logos}`}>
                    {logodata && logodata.logo_item && logodata.logo_item.map((logo) => {
                      return (
                      <>
                        <div className={`col-6 col-md-max-width ${styles.logo}`}>
                          <a href={logo.logo_link.href}>
                            <img src={logo.logo_image.url} alt='dish' className={`${styles.logoimg}`} />
                          </a>
                        </div>
                      </>
                      )
                    })}
                  </div>
                  <div className='align-items-center justify-content-center text-center d-flex flex-column'>
                    <a href='https://www.elastic.co/customers/?elektra=home&storm=logo-bar' className={`${styles.seecs}`}>see all customers stories →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.elasticsearch}`}>
          <div className='container'>
            <div className='row'>
              <div className={`col-md-8 offset-md-2 text-center ${styles.titlesection}`}>
                <h2 className={`${styles.estitle}`}>Three solutions built on Elasticsearch </h2>
                <p className={`${styles.esdesc}`}>Get relevant results at unprecedented speed with open and flexible enterprise solutions — powered by Elasticsearch Platform and AI. You can… Minimize downtime. Accelerate root cause analysis. Respond to threats at scale.</p>
                <div className='align-items-center justify-content-center text-center d-flex flex-column'>
                  <a href='https://www.elastic.co/customers/?elektra=home&storm=logo-bar' className={`${styles.seecs}`}>Explore Elasticsearch Platform →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-2'></div>
        <ElasticBanner />
        <ResultSection />
        <TabComponent />
        <Cards />
        <FooterCTA />
        <Footer />
      </main>
    </>
  )
}
