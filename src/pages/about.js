import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AboutMe from "../Screens/About/AboutMe/AboutMe"
import Contact from "../Screens/About/Contact/Contact"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutMe />
    <Contact />
  </Layout>
)

export default SecondPage
