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
    <div className={style.flex__wrap}>
      <section className={style.intro}>
        <h1 className={style.intro__title}>Editorial experiences for HPE</h1>
        <p classname={style.intro__copy}>Design and development by <a className={style.home__link} href="http://www.alphanumeric.io">Eric Frommelt</a></p>
        <p className={style.tech}>Gatsby, CSS Modules, GSAP, visx</p>
        <div className={style.colorBar}></div>
      </section> 
      <section className={style.footer}>
        <div className={style.backWrap}>
          <div className={style.back}>
            <div className={style.back__arrow}>
              <svg
              aria-labelledby="backarrow"
              id="backarrow"
              role="link"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.87 15.83">
                <title>backarrow</title>
                <g id="backarrow" data-name="backarrow" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2px">
                  <path d="M21.87 7.91h-20M8.33 14.83L1.41 7.91 8.33 1"/>
                </g>
              </svg>
            </div>
            <div className={style.back__alphanumeric}>
              <a className={style.link__a} href="https://www.alphanumeric.io/">
                <p>Back</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
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
