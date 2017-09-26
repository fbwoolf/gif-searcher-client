import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { NavbarContainer, NewSearchEntry, SidebarContainer, GifList } from './components'

const App = (props) => {
  const {children} = props

  return (
    <div id='main'>
      <NavbarContainer />
      <div>
        <NewSearchEntry />
        <SidebarContainer />
        <GifList />
      </div>
      { children }
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default withRouter(connect(mapState, mapDispatch)(App))

/* -----------------    PROPTYPES     ------------------ */

App.propTypes = {
  children: PropTypes.object
}
