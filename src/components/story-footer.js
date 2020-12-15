import React from 'react'
import style from './story-footer.module.css'
import CtaButton from '../components/cta-button'

const StoryFooter = (props) => (
  <footer className={style.storyFooter}>
    <div className={style.footerBar}></div>
    <div className={style.ctaWrapper}>
      <div className={style.ctaButton}><CtaButton /></div>
      <div className={style.ctaCopy}>
        <p>{props.ctaCopy}</p>
        <a href="">{props.linkCopy}</a>
      </div>
    </div>
  </footer>
)

export default StoryFooter