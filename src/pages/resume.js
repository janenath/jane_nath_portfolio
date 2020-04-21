import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const Resume = () => (
  <div className="section">
    <SEO title="Resume" />
   <h3>my top skills include:</h3>
   <ul>
      <li>JavaScript/ES6</li>
      <li>React</li>
      <li>Node.js</li>
      <li>SQL</li>
      <li>Ruby on Rails</li>
      <li>CSS/Sass</li>
      <li>UI/UX design</li>
    </ul>
    <br/>
    <h4>to learn more about my skills and background, <a href="https://drive.google.com/file/d/1OSBHlorantbXMKsWmYvLFzswEfjtb0p_/view?usp=sharing" target="_blank" download>download my resume</a></h4>
  </div>
)

export default Resume
