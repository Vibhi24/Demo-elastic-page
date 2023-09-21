import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import ElasticBanner from '@/components/elastic-search'
import ResultSection from '@/components/results'
import Cards from '@/components/cards'
import FooterTop from '@/components/footer-top'
import TabComponent from '@/components/tab-component'
import HomepageBanner from '@/components/homepage-banner'

export default function Home() {

  return (
    <>
      <main className={`${styles.main}`}>
        <HomepageBanner />
        <ElasticBanner />
        <ResultSection />
        <TabComponent />
        <Cards />
        <FooterTop />
      </main>
    </>
  )
}
