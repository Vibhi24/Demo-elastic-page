import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Stack } from '../../../config/helper';

<script src="https://cdn.jsdelivr.net/npm/contentstack@latest/dist/web/contentstack.min.js"></script>

const ContactCard = () => {

  const [contact, setContact] = useState([])

  const Query = Stack.ContentType('contact').Query();

  const getContent = async () => {
    Query
      .where("url", '/contact')
      .includeCount()
      .toJSON()
      .find()
      .then(function success(result) {
        setContact(result[0][0].card)

      },
        function error(err) {
          return null
        });
  }
  useEffect(() => {
    getContent();
  })


  return (
    <>
      <h1 className={`${styles.heading}`}>Looking for something else?</h1>
      <div className={`container ${styles.cc_container}`}>
        {contact && contact.length>0 && contact.map((contcard) => {
          return (
            <div className={`${styles.cc_card}`}>
              {contcard.card_title ? <h1 className={`${styles.head}`}>{contcard.card_title}</h1> : ''}
              {contcard.card_description ? <p className={`${styles.para}`}>{contcard.card_description}</p> : ''}
              {contcard.card_link && contcard.card_link.href ? <a className={`${styles.link}`} href={contcard.card_link.href}>→</a> : ''}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ContactCard