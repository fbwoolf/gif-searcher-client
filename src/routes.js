import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { fetchSearches, fetchTrendingGifs } from './store'
import App from './App'
import { MainContainer, GifList } from './components'

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    return (
      <Router history={history}>
        <App>
          <Switch>
            <Route path='/home' component={MainContainer} />
            <Route path='/searches/:searchId' component={GifList} />
            <Route component={MainContainer} />
          </Switch>
        </App>
      </Router>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchSearches())
      dispatch(fetchTrendingGifs())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/* -----------------    PROPTYPES     ------------------ */

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
}
