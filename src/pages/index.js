import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import BackgroundImage from 'gatsby-background-image'
import style from './index.module.css'

const IndexPage = (props) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>HPE Stories</title>
    </Helmet>
    <section className={style.stories}>
      <div className={style.story}>
        <div className={style.column}>
          <Link to="/cloud-cliff/">
            <BackgroundImage className={style.bgImage} fluid={props.data.engineImage.childImageSharp.fluid}>
              <h1 className={style.story__titleCloudCliff}>Master the Cloud Cliff</h1>
              <div className={style.overlay}></div>
            </BackgroundImage>
          </Link>
        </div>
      </div>
      <div className={style.story}>
        <div className={style.column}>
          <Link to="/genomic-basics/">
            <BackgroundImage className={style.bgImage} fluid={props.data.genomeImage.childImageSharp.fluid}>
                <h1 className={style.story__titleGenomic}>Genomic Basics for CIOs</h1>
                <div className={style.overlay}></div>
            </BackgroundImage>
          </Link>
        </div>
      </div>
      <div className={style.story}>
        <div className={style.column}>
          <Link to="/cybercrime/">
            <BackgroundImage className={style.bgImage} fluid={props.data.hackerImage.childImageSharp.fluid}>
                <h1 className={style.story__title}>Cybercrime: The Long Road to Recovery</h1>
                <div className={style.overlay}></div>
            </BackgroundImage>
          </Link>
        </div>
      </div>
      <div className={style.bar__cloudCliff}></div>
      <div className={style.bar__genomic}></div>
      <div className={style.bar__cyberCrime}></div>
    </section>
    <section className={style.intro}>
      <h1 className={style.intro__title}>Editorial experiences for HPE</h1>
      <p classname={style.intro__copy}>Design and development by Eric Frommelt</p>
      <p className={style.tech}>React/Gatsby, CSS Modules, GSAP, visx</p>
      <div className={style.colorBar}></div>
    </section> 
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    hackerImage: file(relativePath: { eq: "hacker.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    engineImage: file(relativePath: { eq: "cliff-crop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    genomeImage: file(relativePath: { eq: "genome-face.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
