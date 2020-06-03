import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import style from "./cloud-cliff.module.css"
import Logo from "../svg/logo.inline.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={style.logo}><Logo /></div>
    <h1 className={style.title}>Master the Cloud Cliff: <span className={style.subtitle}>Three Critical Business Concerns</span></h1>
    <p className={style.introcopy}>Many executives acknowledge the benefits of public cloud services, but say it's important to navigate the "Cloud Cliffs" that can create barriers for enterprises changing strategic direction.</p>
    <ul>
      <li>
        <h2 className={style.listheader}>Cloud Cliff #1</h2>
        <h3>Performance</h3>
        <p className={style.listcopy}>Even the most efficient and well-designed cloud environments can be limited by performance shortcomings such as:</p>
        <ul>
          <li>Latency</li>
          <li>Scalability</li>
          <li>Responsiveness</li>
        </ul>
        <blockquote>
          <p>Scaling is better on-prem for some things, as our IT guys can make that happen through virtualizion.</p>
          <cite>&mdash; Healthcare IT executive</cite>
        </blockquote>
      </li>

      <li>
        <h2 className={style.listheader}>Cloud Cliff #2</h2>
        <h3>Cost</h3>
        <p className={style.listcopy}>Many executives expected rock-bottom pricing from unmanaged, commodity cloud offering and instead experienced issues such as:</p>
        <ul>
          <li>High-than-expected costs</li>
          <li>Issues with economies of scale</li>
          <li>Inconsistent and/or confusing billing</li>
        </ul>
        <blockquote>
          <p>With on-prem solutions, you know what you buy, how much is being depreciated, and the cost for labor to run it all.</p>
          <cite>&mdash; Public sector IT executive</cite>
        </blockquote>
      </li>

      <li>
        <h2>Cloud Cliff #3</h2>
        <h3>Security &amp; Control Risks</h3>
        <p className={style.listcopy}>A loss of control is often one of the main drawbacks for public cloud deployments, raising issues such as:</p>
        <ul>
          <li>Lack of flexibility and customization</li>
          <li>Limited security and compliance</li>
          <li>Cloud sprawl and vendor lock-in</li>
        </ul>
        <blockquote>
          <p>For organizations like ours that deploy IoT solutions, security is not optional; it's essential.</p>
          <cite>&mdash; Healthcare IT executive</cite>
        </blockquote>
      </li>
    </ul>

    <footer>
      <p className={style.ctacopy}>Get the details on how HPE can help you find your right mix of hybrid IT, including lessons from companies that have successfully faced cloud challenges. Download the full report:</p>
      <a href="">Master the Cloud Cliff: How hybrid IT helps companies balance performance, cost, and control</a>
    </footer>
  </Layout>
)

export default IndexPage
