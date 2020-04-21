import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <h3>software engineer</h3>
      <FontAwesomeIcon icon={faBars}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
