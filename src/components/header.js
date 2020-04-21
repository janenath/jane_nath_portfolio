import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default class Header extends React.Component {
  state = {
    navActive: false
  }
  toggleNav = (e) => {
    this.setState({navActive: !this.state.navActive})
  }

  render() {
    return(
      <header>
        <h1>
          <Link to="/">
            Jane Nath
          </Link>
        </h1>
        <h3>software engineer</h3>
        <div className="hamburger">
          <FontAwesomeIcon icon={faBars} onClick={this.toggleNav}/>
        </div>
        <nav className={`navbar + ${this.state.navActive}`}> 
          <a href="#landing">home</a>
          <a href="#resume">resume</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav> 
    </header>
    )
  }
}


