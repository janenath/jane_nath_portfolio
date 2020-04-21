import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "./landing"
import Resume from "./resume"
import Contact from "./contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Landing />
      <Resume />
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
