import Contact_hero from '@/components/contact-hero'
import React from 'react'
import styles from './index.module.css'
import FormComp from '@/components/form-component'
import ContactCard from '@/components/contact-cards'
import Footer from '@/components/footer'

const Contact = () => {
  return (
    <>
    <div className={`${styles.contact}`}>
        <Contact_hero />
        <FormComp />
        <ContactCard />
    </div>
    </>
  )
}

export default Contact