import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Contact | Coding Blog"
          metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
        />
        <Header />
        <div className="contact-container">

          . . .

        </div>
        <Footer />
      </div>
    )
  }
}