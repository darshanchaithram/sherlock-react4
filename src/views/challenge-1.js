import React from 'react'

import { Helmet } from 'react-helmet'

import './challenge-1.css'

const Challenge1 = (props) => {
  return (
    <div className="challenge1-container">
      <Helmet>
        <title>Challenge-1 - OnConf template1</title>
        <meta property="og:title" content="Challenge-1 - OnConf template1" />
      </Helmet>
      <div className="challenge1-banner">
        <h1 className="challenge1-text">It&apos;s not what you see!</h1>
      </div>
      <div className="challenge1-blog">
        <img
          alt="image"
          src="/playground_assets/frame%201-1400w.png"
          className="challenge1-image"
        />
        <img
          alt="image"
          src="/playground_assets/screenshot%201-1400w.png"
          className="challenge1-image1"
        />
      </div>
    </div>
  )
}

export default Challenge1
