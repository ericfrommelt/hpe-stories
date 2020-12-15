import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import style from './cloud-cliff.module.css'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import PrimaryNav from '../components/primary-nav'
import CtaButton from '../components/cta-button'

const CloudCliff = (props) => (
  <Layout>
   <Helmet>
      <meta charSet="utf-8" />
      <title>Master the Cloud Cliff</title>
    </Helmet>
    <header>
      <BackgroundImage
        fluid={ props.data.headerImage.childImageSharp.fluid }
      >
        <PrimaryNav></PrimaryNav>
        <div className={ style.masthead}>
          <h1 className={style.title}>Master the Cloud Cliff: <span className={style.subtitle}>Three Critical Business Concerns</span></h1>
        </div>
      </BackgroundImage>
    </header>
    <p className={style.introcopy}>Many executives acknowledge the benefits of public cloud services, but say it's important to navigate the "Cloud Cliffs" that can create barriers for enterprises changing strategic direction.</p>
    <div className={ style.cloudCliffOne }>
      <Img 
        fluid={ props.data.imageOne.childImageSharp.fluid }
        className={ style.cloudCliffOneImage }
      >
      </Img>
      <div className={ style.cloudCliffOneContent }>
        <h2 className={style.listheader}>Cloud Cliff #1</h2>
        <h3>Performance</h3>
        <p className={style.listcopy}>Even the most efficient and well-designed cloud environments can be limited by performance shortcomings such as:</p>
        <ul className={style.contentList}>
          <li>Latency</li>
          <li>Scalability</li>
          <li>Responsiveness</li>
        </ul>
      </div>
      <blockquote className={ style.cloudCliffOneQuote }>
        <p>Scaling is better on-prem for some things, as our IT guys can make that happen through virtualizion.</p>
        <cite>&mdash; Healthcare IT executive</cite>
      </blockquote>
      <Img 
        fluid={ props.data.imageTwo.childImageSharp.fluid }
        className={ style.cloudCliffTwoImage }
        >
      </Img>
      <div className={ style.cloudCliffTwoContent }>
        <h2 className={style.listheader}>Cloud Cliff #2</h2>
        <h3>Cost</h3>
        <p className={style.listcopy}>Many executives expected rock-bottom pricing from unmanaged, commodity cloud offering and instead experienced issues such as:</p>
        <ul className={style.contentList}>
          <li>Higher-than-expected costs</li>
          <li>Issues with economies of scale</li>
          <li>Inconsistent and/or confusing billing</li>
        </ul>
      </div>
      <blockquote className={ style.cloudCliffTwoQuote }>
        <p>With on-prem solutions, you know what you buy, how much is being depreciated, and the cost for labor to run it all.</p>
        <cite>&mdash; Public sector IT executive</cite>
      </blockquote>
      <Img 
        fluid={ props.data.imageThree.childImageSharp.fluid }
        className={ style.cloudCliffThreeImage }
        >
      </Img>
      <div className={ style.cloudCliffThreeContent }>
        <h2>Cloud Cliff #3</h2>
        <h3>Security &amp; Control Risks</h3>
        <p className={style.listcopy}>A loss of control is often one of the main drawbacks for public cloud deployments, raising issues such as:</p>
        <ul className={style.contentList}>
          <li>Lack of flexibility and customization</li>
          <li>Limited security and compliance</li>
          <li>Cloud sprawl and vendor lock-in</li>
        </ul>
      </div>
      <blockquote className={ style.cloudCliffThreeQuote }>
        <p>For organizations like ours that deploy IoT solutions, security is not optional; it's essential.</p>
        <cite>&mdash; Healthcare IT executive</cite>
      </blockquote>
    </div>
    <footer className={style.cloudCliffFooter}>
      <div className={style.ctaWrapper}>
        <div className={style.ctaButton}>
          <CtaButton></CtaButton>
        </div>
        <p className={style.ctacopy}>Get the details on how HPE can help you find your right mix of hybrid IT, including lessons from companies that have successfully faced cloud challenges. Download the full report:<br />
        <a href="">Master the Cloud Cliff: How hybrid IT helps companies balance performance, cost, and control</a></p>
      </div>
    </footer>
  </Layout>
)

export default CloudCliff

export const pageQuery = graphql`
  query {
    headerImage: file(relativePath: { eq: "cliff-crop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageOne: file(relativePath: { eq: "engine.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "money-crop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "skier.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
