import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>南港台北國際寵物生活用品&服務展暨寵物嘉年華</h1>
    <p>歡迎來到台北寵物展 Welcome to your new Gatsby site.</p>
    <p>優質寵物商品超值大促銷，飼料、玩具、保健用品、服飾、美容、清潔用品一應俱全！廠商新品全都幫毛小孩準備好囉，廠商銅板商品更挑戰市場最低價，好康優惠絕對讓你搶不完！</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

