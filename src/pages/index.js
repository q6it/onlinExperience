import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainBackground from "../components/MainBackground"
import Experiences from "../components/Experiences"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainBackground />
    <Experiences />
  </Layout>
)

export default IndexPage
