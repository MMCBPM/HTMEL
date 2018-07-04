import React from 'react'
import Intro from '../components/Intro'
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import Education from '../components/Education'

const IndexPage = () => (
  <div style={{height:'100%'}}>
    <Intro />
    <Profile />
    <Experience />
    <Education />
  </div>
)

export default IndexPage
