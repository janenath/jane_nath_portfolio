import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "./landing"
import Resume from "./resume"
import Projects from "./projects"
import Contact from "./contact"

const IndexPage = () => (
  <Layout>
    <SEO title="portfolio"/>
    <div className="container">
      <Landing />
      <Resume />
      {/* <Projects /> */}
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
