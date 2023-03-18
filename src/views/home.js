import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks2 from '../components/navigation-links2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>OnConf template1</title>
        <meta property="og:title" content="OnConf template1" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background">
          <img
            alt="image"
            src="/playground_assets/frame%2034-04%2012-1500h.jpg"
            className="home-image"
          />
        </div>
        <div className="home-hero-content">
          <h1 className="home-text">SHERLOCK</h1>
          <h1 className="home-text01">The Vicious Seven</h1>
        </div>
      </section>
      <div className="home-banner">
        <h2 className="home-text02">
          &quot;The most important moments are the ones that make you realize
          there&apos;s no turning back&quot;
        </h2>
      </div>
      <div className="home-hero1">
        <h1 className="home-text03">PROLOGUE</h1>
        <span className="home-text04">
          <span>
            You play as the newest member of the team , The Vicious 7. You are
            assigned to gather the intel behind a former member , Joseph Kurian
            and to move forward with the current operation to arrest the
            notorious drug trafficking channel rumoured to be actively working
            in the campus.
          </span>
          <br className="home-text06"></br>
          <br></br>
          <span>
            FYI : Joseph Kurian is known to be an integral part of the
            investigative world, having contributed to bring major drug
            trafficking cases to the limelight and is also known for his calm
            demeanour even in the trickiest of situations. He is said to be
            popular among the ladies for his good looks which he cherishes a lot
            from time to time by carrying a mirror with him always. He is also a
            food freak who loves reading books . he usually carries around an
            ancient chronometer with him too.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text09"></br>
          <br></br>
        </span>
        <Link to="/challenge-1" className="home-navlink button">
          I&apos;m ready to become a part of Vicious7
        </Link>
      </div>
      <footer className="home-footer">
        <img
          alt="logo"
          src="/playground_assets/dyuksha%20d%20colour-1500h.png"
          className="home-image1"
        />
        <span className="home-text11">Dept. of ECE, Dyuksha&apos;23</span>
      </footer>
      <header data-role="Accordion" className="home-header">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="home-image2"
        />
        <div className="home-separator"></div>
        <nav className="home-nav">
          <NavigationLinks2 rootClassName="rootClassName19"></NavigationLinks2>
        </nav>
        <div data-role="AccordionHeader" className="home-accordion-header">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="home-accordion-content">
          <div className="home-nav1">
            <NavigationLinks2 rootClassName="rootClassName20"></NavigationLinks2>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
