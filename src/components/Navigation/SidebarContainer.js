import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logout} from '../../store'
import SidebarStyle from './SidebarStyle'
import SearchList from '../Search/SearchList'

/* -----------------    COMPONENT     ------------------ */

const SidebarContainer = (props) => {
  return (
    <SidebarStyle />
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(SidebarContainer)
