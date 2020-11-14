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
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1201.41 950">
              <title id="title" lang="en">Cyber Crime</title>
              <g id="blocks-01" fill="#2ad2c9">
                <rect x="45" y="284" width="8" height="8"/>
                <rect x="57" y="284" width="8" height="8"/>
                <rect x="69" y="284" width="8" height="8"/>
                <rect x="81" y="284" width="8" height="8"/>
                <rect x="93" y="284" width="8" height="8"/>
                <rect x="105" y="284" width="8" height="8"/>
                <rect x="117" y="284" width="8" height="8"/>
                <rect x="129" y="284" width="8" height="8"/>
                <rect x="45" y="296" width="8" height="8"/>
                <rect x="57" y="296" width="8" height="8"/>
                <rect x="69" y="296" width="8" height="8"/>
                <rect x="81" y="296" width="8" height="8"/>
                <rect x="93" y="296" width="8" height="8"/>
                <rect x="105" y="296" width="8" height="8"/>
                <rect x="117" y="296" width="8" height="8"/>
                <rect x="129" y="296" width="8" height="8"/>
                <rect x="45" y="308" width="8" height="8"/>
                <rect x="57" y="308" width="8" height="8"/>
                <rect x="69" y="308" width="8" height="8"/>
                <rect x="81" y="308" width="8" height="8"/>
                <rect x="93" y="308" width="8" height="8"/>
                <rect x="105" y="308" width="8" height="8"/>
                <rect x="117" y="308" width="8" height="8"/>
                <rect x="129" y="308" width="8" height="8"/>
                <rect x="45" y="320" width="8" height="8"/>
                <rect x="57" y="320" width="8" height="8"/>
                <rect x="69" y="320" width="8" height="8"/>
                <rect x="81" y="320" width="8" height="8"/>
                <rect x="93" y="320" width="8" height="8"/>
                <rect x="105" y="320" width="8" height="8"/>
                <rect x="117" y="320" width="8" height="8"/>
                <rect x="129" y="320" width="8" height="8"/>
                <g>
                  <rect x="1087" y="376" width="8" height="8"/>
                  <rect x="1099" y="376" width="8" height="8"/>
                  <rect x="1111" y="376" width="8" height="8"/>
                  <rect x="1123" y="376" width="8" height="8"/>
                  <rect x="1135" y="376" width="8" height="8"/>
                  <rect x="1147" y="376" width="8" height="8"/>
                  <rect x="1159" y="376" width="8" height="8"/>
                  <rect x="1171" y="376" width="8" height="8"/>
                  <rect x="1087" y="388" width="8" height="8"/>
                  <rect x="1099" y="388" width="8" height="8"/>
                  <rect x="1111" y="388" width="8" height="8"/>
                  <rect x="1123" y="388" width="8" height="8"/>
                  <rect x="1135" y="388" width="8" height="8"/>
                  <rect x="1147" y="388" width="8" height="8"/>
                  <rect x="1159" y="388" width="8" height="8"/>
                  <rect x="1171" y="388" width="8" height="8"/>
                  <rect x="1087" y="400" width="8" height="8"/>
                  <rect x="1099" y="400" width="8" height="8"/>
                  <rect x="1111" y="400" width="8" height="8"/>
                  <rect x="1123" y="400" width="8" height="8"/>
                  <rect x="1135" y="400" width="8" height="8"/>
                  <rect x="1147" y="400" width="8" height="8"/>
                  <rect x="1159" y="400" width="8" height="8"/>
                  <rect x="1171" y="400" width="8" height="8"/>
                  <rect x="1087" y="412" width="8" height="8"/>
                  <rect x="1099" y="412" width="8" height="8"/>
                  <rect x="1111" y="412" width="8" height="8"/>
                  <rect x="1123" y="412" width="8" height="8"/>
                  <rect x="1135" y="412" width="8" height="8"/>
                  <rect x="1147" y="412" width="8" height="8"/>
                  <rect x="1159" y="412" width="8" height="8"/>
                  <rect x="1171" y="412" width="8" height="8"/>
                </g>
                <g>
                  <rect x="862" y="609" width="8" height="8"/>
                  <rect x="874" y="609" width="8" height="8"/>
                  <rect x="886" y="609" width="8" height="8"/>
                  <rect x="898" y="609" width="8" height="8"/>
                  <rect x="910" y="609" width="8" height="8"/>
                  <rect x="862" y="621" width="8" height="8"/>
                  <rect x="874" y="621" width="8" height="8"/>
                  <rect x="886" y="621" width="8" height="8"/>
                  <rect x="898" y="621" width="8" height="8"/>
                  <rect x="910" y="621" width="8" height="8"/>
                </g>
                <g>
                  <rect x="1073" y="897" width="8" height="8"/>
                  <rect x="1085" y="897" width="8" height="8"/>
                  <rect x="1097" y="897" width="8" height="8"/>
                  <rect x="1073" y="909" width="8" height="8"/>
                  <rect x="1085" y="909" width="8" height="8"/>
                  <rect x="1097" y="909" width="8" height="8"/>
                  <rect x="1073" y="921" width="8" height="8"/>
                  <rect x="1085" y="921" width="8" height="8"/>
                  <rect x="1097" y="921" width="8" height="8"/>
                </g>
                <g>
                  <rect x="333" y="373" width="8" height="8"/>
                  <rect x="345" y="373" width="8" height="8"/>
                  <rect x="357" y="373" width="8" height="8"/>
                  <rect x="333" y="385" width="8" height="8"/>
                  <rect x="345" y="385" width="8" height="8"/>
                  <rect x="357" y="385" width="8" height="8"/>
                  <rect x="333" y="397" width="8" height="8"/>
                  <rect x="345" y="397" width="8" height="8"/>
                  <rect x="357" y="397" width="8" height="8"/>
                </g>
                <g>
                  <rect x="189" y="765" width="8" height="8"/>
                  <rect x="201" y="765" width="8" height="8"/>
                  <rect x="213" y="765" width="8" height="8"/>
                  <rect x="225" y="765" width="8" height="8"/>
                  <rect x="237" y="765" width="8" height="8"/>
                  <rect x="249" y="765" width="8" height="8"/>
                  <rect x="261" y="765" width="8" height="8"/>
                  <rect x="273" y="765" width="8" height="8"/>
                  <rect x="189" y="777" width="8" height="8"/>
                  <rect x="201" y="777" width="8" height="8"/>
                  <rect x="213" y="777" width="8" height="8"/>
                  <rect x="225" y="777" width="8" height="8"/>
                  <rect x="237" y="777" width="8" height="8"/>
                  <rect x="249" y="777" width="8" height="8"/>
                  <rect x="261" y="777" width="8" height="8"/>
                  <rect x="273" y="777" width="8" height="8"/>
                  <rect x="189" y="789" width="8" height="8"/>
                  <rect x="201" y="789" width="8" height="8"/>
                  <rect x="213" y="789" width="8" height="8"/>
                  <rect x="225" y="789" width="8" height="8"/>
                  <rect x="237" y="789" width="8" height="8"/>
                  <rect x="249" y="789" width="8" height="8"/>
                  <rect x="261" y="789" width="8" height="8"/>
                  <rect x="273" y="789" width="8" height="8"/>
                  <rect x="189" y="801" width="8" height="8"/>
                  <rect x="201" y="801" width="8" height="8"/>
                  <rect x="213" y="801" width="8" height="8"/>
                  <rect x="225" y="801" width="8" height="8"/>
                  <rect x="237" y="801" width="8" height="8"/>
                  <rect x="249" y="801" width="8" height="8"/>
                  <rect x="261" y="801" width="8" height="8"/>
                  <rect x="273" y="801" width="8" height="8"/>
                </g>
              </g>
              <g id="greenBars" fill="#01a982">
                <rect y="243" width="230" height="160"/>
                <rect x="1020" y="693" width="50" height="140"/>
              </g>
              <g id="_01-cyber-c" data-name="01-cyber-c" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="30 403 30 443 50 463 230 463 240 453"/>
                <polyline points="240 173 230 163 50 163 30 183 30 243"/>
                <line x1="80" y1="243" x2="80" y2="403"/>
              </g>
              <g id="_01-cyber-y" data-name="01-cyber-y" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="408.34 263.25 390 303 360 303 330 303 270 173 260 173 260 163"/>
                <polyline points="460 163 460 173 450 173 439.74 195.24"/>
                <line x1="360" y1="363" x2="360" y2="303"/>
                <line x1="360" y1="463" x2="360" y2="433"/>
                <polyline points="474.87 195.24 459.02 229.57 443.48 263.25"/>
                <polyline points="380 433 380 413 380 363"/>
              </g>
              <g id="_01-cyber-b" data-name="01-cyber-b" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="600 463 510 463 490 443 490 423"/>
                <polyline points="700 243 700 293 690 303 700 313 700 453 690 463 640 463"/>
                <polyline points="650 163 690 163 700 173 700 193"/>
                <polyline points="490 333 490 313 490 293 490 183 510 163 610 163 650 143"/>
                <line x1="540" y1="233" x2="650" y2="233"/>
                <line x1="540" y1="383" x2="650" y2="383"/>
                <polyline points="470 423 470 383 470 333"/>
                <polyline points="640 473 620 473 600 473"/>
              </g>
              <g id="_01-cyber-e" data-name="01-cyber-e" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="880 463 920 463 930 453"/>
                <polyline points="730 403 730 443 750 463 850 463"/>
                <polyline points="800 163 750 163 730 183 730 343"/>
                <polyline points="930 173 920 163 820 163"/>
                <line x1="880" y1="303" x2="920" y2="303"/>
                <line x1="730" y1="303" x2="790" y2="303"/>
                <polyline points="750 193 750 213 750 243"/>
                <polyline points="790 353 820 353 880 353"/>
                <polyline points="820 153 810 153 800 153"/>
                <polyline points="850 473 860 473 880 473"/>
                <polyline points="770 343 770 373 770 403"/>
              </g>
              <g id="_01-cyber-r" data-name="01-cyber-r" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="960 313 970 303 1150 303 1160 293 1160 263 1200 223"/>
                <polyline points="1040 163 1150 163 1160 173 1160 203"/>
                <polyline points="950 343 950 183 970 163 1000 163"/>
                <line x1="950" y1="463" x2="950" y2="413"/>
                <polyline points="1110 313 1150 313 1150 453 1160 463"/>
                <polyline points="970 413 970 383 970 343"/>
                <polyline points="1000 133 1020 133 1040 133"/>
              </g>
              <g id="_01-crime-c" data-name="01-crime-c" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="30 803 30 843 50 863 230 863 240 853"/>
                <polyline points="160 563 50 563 30 583 30 713"/>
                <polyline points="240 573 230 563 210 563"/>
                <polyline points="50 713 50 763 50 803"/>
                <polyline points="210 533 190 533 160 533"/>
              </g>
              <g id="_01-crime-r" data-name="01-crime-r" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="470 663 470 693 460 703 280 703 270 713" fill="none"/>
                <polyline points="340 563 460 563 470 573 470 593 530 653" fill="none"/>
                <polyline points="260 863 260 583 280 563 310 563" fill="none"/>
                <polyline points="460 833 460 853 470 863" fill="none"/>
                <polyline points="420 713 460 713 460 813" fill="none"/>
                <polyline points="480 813 480 823 480 833" fill="none"/>
                <polyline points="310 533 320 533 340 533" fill="#ff8d6d"/>
              </g>
              <g id="_01-crime-i" data-name="01-crime-i" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <line x1="680" y1="863" x2="690" y2="863"/>
                <polyline points="600 813 600 863 620 863"/>
                <line x1="600" y1="623" x2="600" y2="743"/>
                <polyline points="570 563 600 563 600 603"/>
                <line x1="510" y1="563" x2="530" y2="563"/>
                <line x1="610" y1="563" x2="690" y2="563"/>
                <line x1="590" y1="863" x2="510" y2="863"/>
                <polyline points="610 743 610 783 610 813"/>
                <polyline points="620 603 620 613 620 623"/>
                <polyline points="530 533 550 533 570 533"/>
                <polyline points="620 883 650 883 680 883"/>
              </g>
              <g id="_01-crime-m" data-name="01-crime-m" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <line x1="820" y1="673" x2="820" y2="863"/>
                <polyline points="730 703 730 583 750 563 820 563 820 603"/>
                <polyline points="720 863 720 853 730 853 730 793"/>
                <polyline points="920 733 920 583 900 563 830 563"/>
                <polyline points="930 863 930 853 920 853 920 793"/>
                <polyline points="710 793 710 743 710 703"/>
                <polyline points="810 603 810 633 810 673"/>
                <polyline points="900 793 900 763 900 733"/>
              </g>
              <g id="_01-crime-e" data-name="01-crime-e" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="1030 863 1140 863 1150 853"/>
                <polyline points="1060 563 970 563 950 583 950 843 970 863 1000 863"/>
                <polyline points="1150 573 1140 563 1100 563 1060 533"/>
                <line x1="1070" y1="703" x2="1140" y2="703"/>
                <line x1="950" y1="703" x2="1020" y2="703"/>
                <polyline points="1020 683 1050 683 1070 683"/>
                <polyline points="1000 883 1010 883 1030 883"/>
              </g>
              <g id="blueBars" fill="#2ad2c9">
                <rect x="30" y="723" width="60" height="60"/>
                <rect x="310" y="703" width="390" height="90"/>
                <rect x="1000" y="133" width="40" height="130"/>
              </g>
              <g id="circles" fill="#ff8d6d">
                <circle cx="85" cy="648" r="5"/>
                <circle cx="245" cy="108" r="15"/>
                <circle cx="1175" cy="788" r="5"/>
              </g>
              <g id="bluelines" fill="#2ad2c9">
                <rect x="570" y="263" width="4" height="4"/>
                <rect x="591" y="263" width="4" height="4"/>
                <rect x="612" y="263" width="4" height="4"/>
                <rect x="633" y="263" width="4" height="4"/>
                <rect x="654" y="263" width="4" height="4"/>
                <rect x="675" y="263" width="4" height="4"/>
                <rect x="696" y="263" width="4" height="4"/>
                <rect x="717" y="263" width="4" height="4"/>
                <rect x="738" y="263" width="4" height="4"/>
                <g>
                  <rect x="955" y="490" width="4" height="4"/>
                  <rect x="976" y="490" width="4" height="4"/>
                  <rect x="997" y="490" width="4" height="4"/>
                  <rect x="1018" y="490" width="4" height="4"/>
                  <rect x="1039" y="490" width="4" height="4"/>
                  <rect x="1060" y="490" width="4" height="4"/>
                  <rect x="1081" y="490" width="4" height="4"/>
                  <rect x="1102" y="490" width="4" height="4"/>
                  <rect x="1123" y="490" width="4" height="4"/>
                </g>
                <g>
                  <rect x="137" y="637" width="4" height="4"/>
                  <rect x="158" y="637" width="4" height="4"/>
                  <rect x="179" y="637" width="4" height="4"/>
                  <rect x="200" y="637" width="4" height="4"/>
                  <rect x="221" y="637" width="4" height="4"/>
                  <rect x="242" y="637" width="4" height="4"/>
                  <rect x="263" y="637" width="4" height="4"/>
                  <rect x="284" y="637" width="4" height="4"/>
                  <rect x="305" y="637" width="4" height="4"/>
                </g>
              </g>
              <g id="triangles" fill="#2ad2c9">
                <polygon points="1165 543 1160 553 1170 553 1165 543"/>
                <polygon points="1165 54 1160 64 1170 64 1165 54"/>
                <polygon points="1165 694 1160 704 1170 704 1165 694"/>
              </g>
              {/* <g id="FF-CYBERCRIME" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4">
                <polyline points="240 173 230 163 50 163 30 183 30 443 50 463 230 463 240 453"/>
                <polyline points="240 573 230 563 50 563 30 583 30 843 50 863 230 863 240 853"/>
                <polyline points="460 163 460 173 450 173 390 303 360 303 330 303 270 173 260 173 260 163"/>
                <line x1="360" y1="463" x2="360" y2="303"/>
                <polygon points="490 293 490 183 510 163 690 163 700 173 700 293 690 303 700 313 700 453 690 463 510 463 490 443 490 313 490 293"/>
                <line x1="540" y1="233" x2="650" y2="233"/>
                <line x1="540" y1="383" x2="650" y2="383"/>
                <polyline points="930 173 920 163 750 163 730 183 730 443 750 463 920 463 930 453"/>
                <line x1="730" y1="303" x2="920" y2="303"/>
                <polyline points="1150 573 1140 563 970 563 950 583 950 843 970 863 1140 863 1150 853"/>
                <line x1="950" y1="703" x2="1140" y2="703"/>
                <polyline points="950 463 950 183 970 163 1150 163 1160 173 1160 293 1150 303 970 303 960 313"/>
                <polyline points="1110 313 1150 313 1150 453 1160 463"/>
                <polyline points="260 863 260 583 280 563 460 563 470 573 470 693 460 703 280 703 270 713"/>
                <polyline points="420 713 460 713 460 853 470 863"/>
                <polyline points="510 563 600 563 600 863 690 863"/>
                <line x1="610" y1="563" x2="690" y2="563"/>
                <line x1="590" y1="863" x2="510" y2="863"/>
                <polyline points="720 863 720 853 730 853 730 583 750 563 820 563 820 863"/>
                <polyline points="930 863 930 853 920 853 920 583 900 563 830 563"/>
              </g> */}
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