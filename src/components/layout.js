import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "../css/fonts.css"

const Layout = ({ children, backgroundColor }) => {

  return (
    <>
      <div
        style={{
          backgroundColor: backgroundColor,
          margin: `0 auto`,
          maxWidth: 1800,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
