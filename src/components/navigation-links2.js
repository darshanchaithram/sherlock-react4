import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links2-navlink">
        {props.text}
      </Link>
      <Link to="/challenge-1" className="navigation-links2-navlink1">
        {props.text1}
      </Link>
      <Link to="/vicious-7" className="navigation-links2-navlink2">
        {props.text2}
      </Link>
      <span className="navigation-links2-text">{props.text3}</span>
      <span className="navigation-links2-text1">{props.text4}</span>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text4: 'Blog',
  rootClassName: '',
  text2: 'V7',
  text: 'Home',
  text3: 'Team',
  text1: 'C1',
}

NavigationLinks2.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks2
