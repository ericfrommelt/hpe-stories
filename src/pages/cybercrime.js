import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import style from './cybercrime.module.css'
import BackgroundImage from 'gatsby-background-image'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import BarGraph from '../components/graph'
import GraphBottom from '../components/graph-bottom'
import CybercrimeTitle from '../components/cybercrime-title'
import PrimaryNav from '../components/primary-nav'
import StoryFooter from '../components/story-footer'

const CyberCrime = (props) => (
  <Layout backgroundColor="#000">
   <Helmet>
      <meta charSet="utf-8" />
      <title>Cybercrime: The Long Road to Recovery</title>
    </Helmet>
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
        <StoryFooter
          ctaCopy="Get the details on how to raise your security profile and drive innovation. Download the full report from Ponemon Institute:"
          linkCopy="Cost of Cyber Crime Study &amp; the Risk of Business Innovation"
        />
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