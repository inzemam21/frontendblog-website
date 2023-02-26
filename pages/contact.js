import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

//import initGoogleAnalytics from "../utils/googleAnalytics.js"

export default class extends Component {
  // componentDidMount() {
  //   initGoogleAnalytics()
  // }
  
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Contact | Coding Blog"
          metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
        />
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>Hi, I’m Inzimam, a full stack software engineer based out of peshawar. I write about modern JavaScript.</p>
            <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to send me an email at inzemamsmile2@gmail.com!</p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li><strong>Email</strong>: inzemamsmile2@gmail.com</li>
              <li><strong>GitHub</strong>: <a href="https://github.com/inzemam21">Inzimam Ul Haq</a></li>
              <li><strong>Twitter</strong>: <a href="https://twitter.com/Inzemam34679020">My Twitter Page</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
