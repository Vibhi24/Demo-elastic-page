import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Contentstack from 'contentstack';
import { api, delivery_key, environment } from '../../../config/helper';

<script src="https://cdn.jsdelivr.net/npm/contentstack@latest/dist/web/contentstack.min.js"></script>

const API_KEY = api;
const DELIVERY_TOKEN = delivery_key;
const ENVIRONMENT = environment;
const CONTENT_TYPE = 'contact'

const FormComp = () => {

    const [contact, setContact] = useState([])

    const Stack = Contentstack.Stack({ "api_key": API_KEY, "delivery_token": DELIVERY_TOKEN, "environment": ENVIRONMENT });
    const Query = Stack.ContentType(CONTENT_TYPE).Query();

    const getContent = async () => {
        Query
            .where("title")
            .includeCount()
            .toJSON()
            .find()
            .then(function success(result) {
                setContact(result[0][0].page_components[0].section_with_html_code)

            },
                function error(err) {
                });
    }
    useEffect(() => {
        getContent();
    })

    return (
        <div className={`${styles.form_comp}`}>
            <div className='container'>
                <div className={`row justify-content-center ${styles.sections}`}>
                    <div className={`col-md-5 col-lg-4 m-t-standard ${styles.section1}`} dangerouslySetInnerHTML={{ __html: contact.description }}></div>
                    <div className={`col-sm-8 col-md-5 col-lg-4 offset-lg-1 ${styles.section2}`} dangerouslySetInnerHTML={{__html: contact.form}}></div>
                </div>
            </div>
        </div>
    )
}

export default FormComp