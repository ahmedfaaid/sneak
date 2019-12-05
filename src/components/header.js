import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar/Navbar'

const Header = ({ siteTitle }) => (
    <header>
        <Navbar />
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header
