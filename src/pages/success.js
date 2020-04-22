import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"

const Success = () => (
    <Layout>
        <div className="container">
            <SEO title="Thank You" />
            <h3>Thanks for getting in touch!</h3>
            <Link to="/">Home</Link>
        </div>
    </Layout>
  
)

export default Success
