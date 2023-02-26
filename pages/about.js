import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
         <HeadMetadata
          title="About Me | Coding Blog"
          metaDescription="Nick Major is a full stack software developer that also writes about modern NodeJS and JavaScript."
        />
        <Header />
        <div className="about-container">
          <div className="about-section">
            <h1>About Me</h1>
            <p>I’m Inzimam ul haq, a full stack software developer and technical writer.</p>
            <p>As a full-stack developer specializing in backend development, 
              I've spent years honing my skills and crafting exceptional digital 
              experiences for clients across a variety of industries. 
              Whether it's building custom software solutions, optimizing database performance, 
              or designing scalable architectures, I'm passionate about using technology to solve
               complex problems and drive business success.
               </p>
            <p>
            But my work isn't just about writing code. I believe that the best development projects are grounded in clear communication, collaboration, and a deep understanding of a client's needs and goals. That's why I always take the time to listen carefully, ask questions, and ensure that I'm delivering solutions that are tailored to each client's unique needs.
            </p>
            <p>
            Thank you for visiting my blog, and I hope you find the information and resources here useful. If you have any questions or would like to discuss a project, please don't hesitate to get in touch. I'd love to hear from you!
            </p>
          </div>
          <div className="about-section">
            <h2>My Projects</h2>
            <ul>
              <li><a href="https://github.com/discourse/discourse">Discourse</a> – A platform for community discussion. Free, open, simple.</li>
              <li><a href="https://github.com/nmajor25/seconds-converter">Seconds Converter</a> – Convert milliseconds or seconds to days, hours, minutes, and seconds in node.js.</li>
              <li><a href="https://github.com/showdownjs/showdown">Showdown</a> – A bidirectional Markdown to HTML to Markdown converter written in Javascript.</li>
              <li><a href="https://github.com/node-schedule/node-schedule">Node Schedule</a> –A cron-like and not-cron-like job scheduler for Node.</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Currently Using</h2>
            <ul>
              <li><strong>Computer</strong>: Custom Linux Desktop</li>
              <li><strong>Hosting</strong>: <a href="https://m.do.co/c/ce20017d8588">DigitalOcean</a></li>
              <li><strong>Editor</strong>: <a href="https://atom.io">Atom</a></li>
              <li><strong>Coding Framework</strong>: <a href="https://nextjs.org">Next.js</a></li>
              <li><strong>Syntax Highlighting</strong>: <a href="https://prismjs.com">PrismJS</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}