import React from "react"
import PropTypes from "prop-types"
import "./layout-genomic.css"
import "../css/fonts.css"

const LayoutGenomic = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1800,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

LayoutGenomic.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutGenomic
