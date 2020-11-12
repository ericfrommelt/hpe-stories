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
            <div className={ style.headerType }>
              <svg
              aria-labelledby="title"
              id="svg"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1132 702">
                <title id="title" lang="en">Cyber Crime</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="CYBERCRIME"><polyline className={ style.type } points="211 11 201 1 21 1 1 21 1 281 21 301 201 301 211 291"/><polyline className={ style.type } points="211 411 201 401 21 401 1 421 1 681 21 701 201 701 211 691"/><polyline className={ style.type } points="431 1 431 11 421 11 361 141 331 141 301 141 241 11 231 11 231 1"/><line className={ style.type } x1="331" y1="301" x2="331" y2="141"/><polygon className={ style.type } points="461 131 461 21 481 1 661 1 671 11 671 131 661 141 671 151 671 291 661 301 481 301 461 281 461 151 461 131"/><line className={ style.type } x1="511" y1="71" x2="621" y2="71"/><line className={ style.type } x1="511" y1="221" x2="621" y2="221"/><polyline className={ style.type } points="901 11 891 1 721 1 701 21 701 281 721 301 891 301 901 291"/><line className={ style.type } x1="701" y1="141" x2="891" y2="141"/><polyline className={ style.type } points="1121 411 1111 401 941 401 921 421 921 681 941 701 1111 701 1121 691"/><line className={ style.type } x1="921" y1="541" x2="1111" y2="541"/><polyline className={ style.type } points="921 301 921 21 941 1 1121 1 1131 11 1131 131 1121 141 941 141 931 151"/><polyline className={ style.type } points="1081 151 1121 151 1121 291 1131 301"/><polyline className={ style.type } points="231 701 231 421 251 401 431 401 441 411 441 531 431 541 251 541 241 551"/><polyline className={ style.type } points="391 551 431 551 431 691 441 701"/><polyline className={ style.type } points="481 401 571 401 571 701 661 701"/><line className={ style.type } x1="581" y1="401" x2="661" y2="401"/><line className={ style.type } x1="561" y1="701" x2="481" y2="701"/><polyline className={ style.type } points="691 701 691 691 701 691 701 421 721 401 791 401 791 701"/><polyline className={ style.type } points="901 701 901 691 891 691 891 421 871 401 801 401"/>
                  </g>
                </g>
              </svg>
            </div>
            <h1 className={ style.subtitle }>The Long Road to Recovery</h1>
            <p className={ style.introcopy }>Cyber crime is pervasive. Here are the most frequent types of attacks on business and how long it takes to bounce back, based on our survey of 237 organizations in six countries.</p>
          </div>
        </header>
        <div className={ style.graphContainer }>
          <ParentSize>{({ width, height }) => <BarGraph width={width} height={height} />}</ParentSize>
        </div>
        <div className={ style.graphContainerBottom }>
          <ParentSize>{({ width, height }) => <GraphBottom width={width} height={height} />}</ParentSize>
        </div>
        <footer className={ style.cybercrimeFooter }>
          <div className={style.footerBar}></div>
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