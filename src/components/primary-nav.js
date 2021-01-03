import React from 'react'
import { Link } from 'gatsby'
import Logo from '../svg/logo.inline.svg';
import style from './primary-nav.module.css'

const PrimaryNav = () => (
  <header className={style.gridWrapper}>
    <div className={style.logo}>
      <Logo></Logo>
    </div>
    <div className={ style.backButton }>
      <Link to="/">
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
      </Link>
    </div>
    <nav className={style.storyNav}>
      <ul className={style.navList}>
        <li className={style.navItem}><Link to="/cloud-cliff/" activeStyle={{ borderLeft: "4px solid #01a982" }}>Master the Cloud Cliff</Link></li>
        <li className={style.navItem}><Link to="/genomic-basics/" activeStyle={{ borderLeft: "4px solid #01a982" }}>Genomic Basics</Link></li>
        <li className={style.navItem}><Link to="/cybercrime/" activeStyle={{ borderLeft: "4px solid #01a982" }}>Cybercrime: The Long Road to Recovery</Link></li>
      </ul>
    </nav>
  </header>
)

export default PrimaryNav
