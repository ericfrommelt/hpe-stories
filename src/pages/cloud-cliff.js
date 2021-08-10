import React, { useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import style from './cloud-cliff.module.css'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import PrimaryNav from '../components/primary-nav'
import StoryFooter from '../components/story-footer'
import { gsap } from 'gsap'
import { TimelineLite } from 'gsap'
import CustomEase from 'gsap/CustomEase.js'
gsap.registerPlugin(CustomEase)

const CloudCliff = (props) => {
  const svgWrapper = useRef(null)

  useEffect(() => {
    const [svgElements] = svgWrapper.current.children
    const master = gsap.timeline()
    CustomEase.create("typeEase", ".9,.03,.04,.99")
    const dur = 2;

    function bulletArrowsOne() {
      const tl = new TimelineLite({
        scrollTrigger: {
          trigger: "#performance-copy",
          start: "bottom bottom",
          end: "#b3",
          markers: false,
          scrub: 1
        },
      });
      tl.from("#b1", {y: +60, ease: "typeEase", opacity: "0"});
      tl.from("#b2", {y: +60, ease: "typeEase", opacity: "0"});
      tl.from("#b3", {y: +60, ease: "typeEase", opacity: "0"});
      return tl
    }

    function bulletArrowsTwo() {
      const tl = new TimelineLite({
        scrollTrigger: {
          trigger: "#cost-copy",
          start: "bottom bottom",
          end: "#b6",
          markers: false,
          scrub: 1
        },
      });
      tl.from("#b4", {y: +60, ease: "typeEase", opacity: "0"});
      tl.from("#b5", {y: +60, ease: "typeEase", opacity: "0"});
      tl.from("#b6", {y: +60, ease: "typeEase", opacity: "0"});
      return tl
    }

    function bulletArrowsThree() {
      const tl = new TimelineLite({
        scrollTrigger: {
          trigger: "#headlineThree",
          start: "bottom bottom",
          end: "#b9",
          markers: false,
          scrub: 1
        },
      });
      tl.from("#b7", {y: +60, ease: "typeEase", opacity: "0"});
      tl.from("#b8", {y: +60, ease: "typeEase", opacity: "0"});
      tl.from("#b9", {y: +60, ease: "typeEase", opacity: "0"});
      return tl
    }

    master.add(bulletArrowsOne());
    master.add(bulletArrowsTwo());
    master.add(bulletArrowsThree());
  }, [])

  return (
    <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Master the Cloud Cliff</title>
      </Helmet>
      <div ref={svgWrapper}>
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
            <p id="performance-copy" className={style.listcopy}>Even the most efficient and well-designed cloud environments can be limited by performance shortcomings such as:</p>
            <ul className={style.contentList}>
              <li id="b1">Latency</li>
              <li id="b2">Scalability</li>
              <li id="b3">Responsiveness</li>
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
            <p id="cost-copy" className={style.listcopy}>Many executives expected rock-bottom pricing from unmanaged, commodity cloud offering and instead experienced issues such as:</p>
            <ul className={style.contentList}>
              <li id="b4">Higher-than-expected costs</li>
              <li id="b5">Issues with economies of scale</li>
              <li id="b6">Inconsistent and/or confusing billing</li>
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
            <h2 id="headlineThree">Cloud Cliff #3</h2>
            <h3>Security &amp; Control Risks</h3>
            <p id="security-copy" className={style.listcopy}>A loss of control is often one of the main drawbacks for public cloud deployments, raising issues such as:</p>
            <ul className={style.contentList}>
              <li id="b7">Lack of flexibility and customization</li>
              <li id="b8">Limited security and compliance</li>
              <li id="b9">Cloud sprawl and vendor lock-in</li>
            </ul>
          </div>
          <blockquote className={ style.cloudCliffThreeQuote }>
            <p>For organizations like ours that deploy IoT solutions, security is not optional; it's essential.</p>
            <cite>&mdash; Healthcare IT executive</cite>
          </blockquote>
        </div>
        <StoryFooter
          ctaCopy="Get the details on how HPE can help you find your right mix of hybrid IT, including lessons from companies that have successfully faced cloud challenges. Download the full report:"
          linkCopy="Master the Cloud Cliff: How hybrid IT helps companies balance performance, cost, and control"
        />
      </div>
    </Layout>
  )

} 



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
