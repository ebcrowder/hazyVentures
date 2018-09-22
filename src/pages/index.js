import React from 'react'

import Layout from '../components/layout'

import '../styles/styles.css'
import logo from '../images/Component.png'

const IndexPage = () => (
  <Layout>
    <img className="logo" src={logo} alt="logo" />
  </Layout>
)

export default IndexPage
