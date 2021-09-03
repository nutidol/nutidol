import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/Header"

const IndexPage = () => (
  <div>
    <Header></Header>
    <div>
      <h1>
        Hi nats, moving to bootstrap!
        <Link to="/page-2">Navigate to page2</Link>
      </h1>
      <h2>
        <a href="/page-2"> go to page 2</a>
      </h2>
    </div>
  </div>
)

export default IndexPage
