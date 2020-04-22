import React from "react"
import { navigate } from 'gatsby-link'
import { Link } from "gatsby"

import SEO from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {

    constructor(props) {
      super(props)
      this.state = { isValidated: false }
    }
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    handleSubmit = e => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error))
    }


  render() {
    return(
      <div className="section" id="contact">
      <SEO title="Contact" />
      <form name="contact" method="post" action="/contact/thanks/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={this.handleChange} />
        </label>
      </div>
        <h3>let's get in touch</h3>
        <div className="formInputs">
          <div id="name">
            <label>name </label>
            <br/>
            <input type="text" id="name" name="name" onChange={this.handleChange}/>
          </div>
          <div id="email">
            <label for="email">email</label>
            <br/>
            <input type="email" id="email" name="email" onChange={this.handleChange}/>
          </div>
          <div id="message">
            <label for="message">message</label>
            <br/>
            <textarea id="message" name="message" onChange={this.handleChange}/>
          </div>
        </div>   
        <div className="button">
          <button type="submit">send</button>
        </div>
      </form>
    </div>
    )

  }
}
