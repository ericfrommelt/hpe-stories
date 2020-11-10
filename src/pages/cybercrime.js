import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import style from "./cybercrime.module.css"
import Logo from "../svg/logo.inline.svg"
import BackgroundImage from "gatsby-background-image"
import ParentSize from "@visx/responsive/lib/components/ParentSize"
import BarGraph from "../components/graph"
import GraphBottom from "../components/graph-bottom"

const CyberCrime = (props) => (
  <Layout>
    <BackgroundImage
      fluid={ props.data.hackerImage.childImageSharp.fluid }
      >
        <header>
          <div className={ style.masthead }>
            <div className={ style.logo }><Logo /></div>
            <h1 className={ style.title }>Cyber Crime: <span className={ style.subtitle }>The Long Road to Recovery</span></h1>
            <p className={ style.introcopy }>Cyber crime is pervasive. Here are the most frequent types of attacks on business and how long it takes to bounce back, based on our survey of 237 organizations in six countries.</p>
          </div>
        </header>
        <div className={ style.graphContainer }>
          <ParentSize>{({ width, height }) => <BarGraph width={width} height={height} />}</ParentSize>
        </div>
        <div className={ style.graphContainer }>
          <ParentSize>{({ width, height }) => <GraphBottom width={width} height={height} />}</ParentSize>
        </div>
        <footer className={ style.cybercrimeFooter }>
        <div className={style.btnWrapper}>
          <div className={ style.btnArrow }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.24 82.83">
              <title>transformationCTA_Arrow</title>
              <g id="Layer_2" data-name="Layer 2"><g id="Content"><polyline className={ style.cls1 } points="1.41 1.41 41.41 41.41 1.41 81.41"/></g></g></svg>
          </div>
        </div>
        <div className={style.ctaWrapper}>
          <p className={style.ctacopy}>Get the details on how to raise your security profile and drive innovation. Download the full report from Ponemon Institute:</p>
          <a href="">Cost of Cyber Crime Study &amp; the Risk of Business Innovation</a>
        </div>
      </footer>
      </BackgroundImage>
  </Layout>
)

export default CyberCrime

export const pageQuery = graphql`
  query {
    hackerImage: file(relativePath: { eq: "hacker.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`