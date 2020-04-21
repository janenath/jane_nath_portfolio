import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const Contact = () => (
  <div className="section">
    <SEO title="Contact" />
    <form name="contact" netlify>
      <h3>let's get in touch</h3>
      <div id="name">
        <label>name </label>
        <input type="text" id="name" name="name" />
      </div>
      <div id="email">
        <label for="email">email address</label>
        <input type="email" id="email" name="email" />
      </div>
      <div id="message">
        <label for="message">message</label>
        <textarea id="message" name="message"/>
      </div>
      <div className="button">
        <button type="submit">send</button>
      </div>
    </form>
  </div>
)

export default Contact
