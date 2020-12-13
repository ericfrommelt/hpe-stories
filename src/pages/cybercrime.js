import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import style from "./cybercrime.module.css"
import Logo from "../svg/logo.inline.svg"
import BackgroundImage from "gatsby-background-image"
import ParentSize from "@visx/responsive/lib/components/ParentSize"
import BarGraph from "../components/graph"
import GraphBottom from "../components/graph-bottom"
import CybercrimeTitle from "../components/cybercrime-title"
import CtaButton from "../components/cta-button"
import PrimaryNav from "../components/primary-nav"

const CyberCrime = (props) => (
  <Layout backgroundColor="#000">
    <BackgroundImage
      fluid={ props.data.hackerImage.childImageSharp.fluid }
      >
        <header>
          <PrimaryNav></PrimaryNav>
          <div className={ style.masthead }>
            <div className={ style.headerType }>
              <CybercrimeTitle />
            </div>
            <h1 className={ style.subtitle }>The Long Road to Recovery</h1>
            <p className={ style.introcopy }>Cyber crime is pervasive. Here are the most frequent types of attacks on business and how long it takes to bounce back, based on our survey of 237 organizations in six countries.</p>
          </div>
        </header>
        <div className="graphWrapper">
          <div className={ style.graphContainer }>
            <ParentSize>{({ width, height }) => <BarGraph width={width} height={height} />}</ParentSize>
          </div>
          <div className={ style.graphContainerBottom }>
            <ParentSize>{({ width, height }) => <GraphBottom width={width} height={height} />}</ParentSize>
          </div>
        </div>
        <footer className={ style.cybercrimeFooter }>
          <div className={style.footerBar}></div>
          <div className={style.ctaButton}><CtaButton /></div>
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