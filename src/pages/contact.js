import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const Contact = () => (
  <div className="section" id="contact">
    <SEO title="Contact" />
    <form name="contact" netlify>
      <h3>let's get in touch</h3>
      <div className="formInputs">
        <div id="name">
          <label>name </label>
          <br/>
          <input type="text" id="name" name="name"  placeholder="name"/>
        </div>
        <div id="email">
          <label for="email">email</label>
          <br/>
          <input type="email" id="email" name="email" placeholder="email"/>
        </div>
        <div id="message">
          <label for="message">message</label>
          <br/>
          <textarea id="message" name="message" placeholder="message"/>
        </div>
      </div>   
      <div className="button">
        <button type="submit">send</button>
      </div>
    </form>
  </div>
)

export default Contact
