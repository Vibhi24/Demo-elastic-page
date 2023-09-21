import React, { useState, useEffect } from 'react'
import { Stack } from '../../../config/helper'
import styles from './index.module.css'
import HeroBanner from '../hero-banner'
import LogoContainer from '../logos-container'

const renderTemplateSection = (switchData, modules, index) => {
    const{
        hero_banner,
        logos
    } = modules
    switch (switchData[0]) {
        case 'hero_banner':
            return(
                <HeroBanner data = {hero_banner} />
            )
        case 'logos':
            return(
                <LogoContainer data = {logos} />
            )
        default: return null
    }
}

const HomepageBanner = () => {
    const [data, setData] = useState([])

    const Query = Stack.ContentType('home_page').Query();

    const getContent = async () => {
        Query
            .where('url', '/')
            .includeCount()
            .toJSON()
            .find()
            .then(function success(result) {
                setData(result[0][0].homepage_components)
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
        <div className={`${styles.bluebg}`}>
            {
                data && data.length > 0
                && data?.map((ele, index) => (
                    <React.Fragment key={`mblock${index.toString()}`}>
                        {renderTemplateSection(Object.keys(ele), ele, index)}
                    </React.Fragment>
                ))
            }
            </div>
        </>
    )
}

export default HomepageBanner