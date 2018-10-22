import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>台北國際<br />寵物嘉年華</h1>
        <p>歡迎來到台北寵物展</p>
        <p>優質寵物商品超值促銷！</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>  
    </div>
    <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
            <Card 
              title="DesignSystem"
              text="10 sections"
              image={require('../images/wallpaper.jpg')} />
            <Card 
              title="React for Designers"
              text="11 sections"
              image={require('../images/wallpaper2.jpg')} />
            <Card 
              title="Sound Design"
              text="5 sections"
              image={require('../images/wallpaper3.jpg')} />
            <Card 
              title="ARKit 2"
              text="10 sections"
              image={require('../images/wallpaper4.jpg')} />
        </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="台北寵物展"
      text="歡迎來到台北寵物展！優質寵物商品超值促銷！"
    />
  </Layout>
)

export default IndexPage

