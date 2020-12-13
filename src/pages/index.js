import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/cloud-cliff/">Cloud Cliff</Link>
    <Link to="/genomic-basics/">Genomic Basics</Link>
    <Link to="/cybercrime/">Cybercrime: The Long Road to Recovery</Link>
  </Layout>
)

export default IndexPage
