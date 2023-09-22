import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Contentstack from 'contentstack';
import { Stack } from '../../../config/helper';

<script src="https://cdn.jsdelivr.net/npm/contentstack@latest/dist/web/contentstack.min.js"></script>

const FormComp = () => {

    const [contact, setContact] = useState([])

    const Query = Stack.ContentType('contact').Query();

    const getContent = async () => {
        Query
            .where("url", '/contact')
            .includeCount()
            .toJSON()
            .find()
            .then(function success(result) {
                setContact(result[0][0].form_section)

            },
                function error(err) {
                    return null
                });
    }
    useEffect(() => {
        getContent();
    })

    return (
        <div className={`${styles.form_comp}`}>
            <div className='container'>
                <div className={`row justify-content-center ${styles.sections}`}>
                    {contact && contact.description ? <div className={`col-md-5 col-lg-4 m-t-standard ${styles.section1}`} dangerouslySetInnerHTML={{ __html: contact.description }}></div> : ''}
                    {contact && contact.form ? <div className={`col-sm-8 col-md-5 col-lg-4 offset-lg-1 ${styles.section2}`} dangerouslySetInnerHTML={{__html: contact.form}}></div> : ''}
                </div>
            </div>
        </div>
    )
}

export default FormComp