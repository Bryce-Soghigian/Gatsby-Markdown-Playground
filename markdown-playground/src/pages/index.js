import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to the scribe documentation.</h1>
    <p>Click the links below to go to the frontend and backend documentation</p>
    <div>
    <Link to="/docs">Go to the frontend documentation</Link>
    </div>
    <div>
    <Link to ="/docs-be">Go to the backend documentation</Link>
    </div>

  </Layout>
)

export default IndexPage