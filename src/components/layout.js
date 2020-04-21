/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./main.scss"
import Header from "./header"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="siteContainer">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main">{children}</div>
      <footer>
        <div className="footerContainer">
          <div className="iconContainer">
            <a href="mailto:jane.e.nath@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
            <a href="https://www.linkedin.com/in/janenath" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://www.github.com/janenath" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://medium.com/@jane.e.nath" target="_blank"><FontAwesomeIcon icon={faMedium}/></a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} jane nath
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
