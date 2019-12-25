/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import './layout.css'

import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Helmet>
                <link rel='icon' href={favicon} />
                <script
                    src='https://kit.fontawesome.com/163b6190b4.js'
                    crossorigin='anonymous'
                ></script>
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className='container md:flex push-footer'>
                <main className='md:w-4/5 mx-auto mr-4'>{children}</main>
                <Sidebar />
            </div>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
