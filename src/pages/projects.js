import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import fourth_trimester from "../images/fourth_trimester.png"
import capsule from "../images/capsule.png"
import plot_master from "../images/plot_master.png"
import em from "../images/em.png"

const Projects = () => (
  <div className="projects" id="projects">
    <h2>Selected Projects</h2>
    <div className="projectsGrid">
      <div className="project one">
        <a href="https://github.com/janenath/fourth_trimester" target="_blank">
          <h5><span>Fourth Trimester</span> | Full-Stack App with React, Ruby on Rails</h5>
          <br/>
          <img src={fourth_trimester} alt="fourth trimester logo"></img>
        </a>
      </div>
      <div className="project two">
        <a href="https://github.com/janenath/capsule" target="_blank">
          <h5><span>Capsule</span> | RESTful API with React, Ruby on Rails</h5>
          <br/>
          <img src={capsule} alt="capsule logo"></img>
        </a>
      </div>
      <div className="project three">
        <a href="https://github.com/janenath/plot-master" target="_blank">
          <h5><span>Plot Master</span> | Full-Stack App with React, Node.js</h5>
          <br/>
          <img src={plot_master} alt="plot master logo"></img>
        </a>
      </div>
      <div className="project four">
        <a href="https://github.com/janenath/elias_miller" target="_blank">
          <h5><span>EM Portfolio</span> | Jamstack App with Gatsby, Contentful</h5>
          <br/>
          <img src={em} alt="elias miller portfolio"></img>
        </a>
      </div>
    </div>
  </div>
)

export default Projects
