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
    <SEO title="Home" />
    <Landing />
    <Resume />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
