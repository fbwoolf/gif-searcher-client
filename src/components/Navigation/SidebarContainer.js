import React from 'react'
import { connect } from 'react-redux'
import SidebarStyle from './SidebarStyle'
import SearchList from '../Search/SearchList'

/* -----------------    COMPONENT     ------------------ */

const SidebarContainer = (props) => {
  return (
    <SidebarStyle>
      <SearchList />
    </SidebarStyle>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(SidebarContainer)
