import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children }) => (
  <div style={{ height: '100%' }}>
    <Helmet
      title="Melissa Chong - Marketing professional"
      meta={[
        {
          name: 'description', content: 'Online resume/cv of Melissa Chong, an experienced ' +
            'marketing professional with more than 12 years in email marketing, digital marketing, '+
            'content marketing in both B2B and B2C'
        },
        { name: 'keywords', content: 'Melissa Chong, resume, cv, marketing, email marketing, SEO, digital marketing' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
