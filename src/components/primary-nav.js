import React from 'react'
import { Link } from 'gatsby'
import Logo from '../svg/logo.inline.svg';
import style from './primary-nav.module.css'

const PrimaryNav = () => (
  <header className={style.gridWrapper}>
    <div className={style.logo}>
      <Link to="/">
        <Logo></Logo>
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
