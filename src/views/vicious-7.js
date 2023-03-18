import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import './vicious-7.css'

const Vicious7 = (props) => {
  return (
    <div className="vicious7-container">
      <Helmet>
        <title>Vicious-7 - OnConf template1</title>
        <meta property="og:title" content="Vicious-7 - OnConf template1" />
      </Helmet>
      <div className="vicious7-hero">
        <h1 className="vicious7-text">THE VICIOUS 7</h1>
        <button className="vicious7-button button">Get Started</button>
      </div>
      <div className="vicious7-features">
        <div className="vicious7-container1">
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/C1.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/c2.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/C3.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/C4.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/C5.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/C6.jpg"
          ></FeatureCard1>
          <div class="card">
            <div class="content">
              <div class="back">
                <div class="back-content">
                  <strong>"Unveil the hidden!" </strong>
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                  <div class="circle">
                  </div>
                  <div class="circle" id="right">
                  </div>
                  <div class="circle" id="bottom">
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      


    </div>
  )
}

export default Vicious7
