import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavbarStyle from './NavbarStyle'

/* -----------------    COMPONENT     ------------------ */

const NavbarContainer = (props) => {
  return (
    <NavbarStyle>
      <div className='nav-header'>
        <h1>GIF SEARCHER</h1>
      </div>
    </NavbarStyle>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(NavbarContainer)
