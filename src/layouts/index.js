import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children }) => (
  <div style={{height:'100%'}}>
    <Helmet
      title="Melissa Chong"
      meta={[
        { name: 'description', content: 'Melissa Chong' },
        { name: 'keywords', content: 'Melissa Chong, resume, cv' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
