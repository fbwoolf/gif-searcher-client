import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchSearchWordGifs, removeSearch, fetchTrendingGifs } from '../../store'
import RemoveSearchButton from './RemoveSearchButton'
import history from '../../history'

/* -----------------    COMPONENT     ------------------ */

const SearchItem = (props) => {
  const { search, handleClick, handleRemove } = props

  return (
    <div>
      <li>
        <NavLink activeClassName='active' to={`/searches/${search.word}`} onClick={handleClick}>
          { search.word }
        </NavLink>
        <RemoveSearchButton onClick={handleRemove}>
          <i className='fa fa-times fa-pull-right' />
        </RemoveSearchButton>
      </li>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = (dispatch, ownProps) => {
  return {
    handleClick (evt) {
      evt.stopPropagation()
      const word = ownProps.search.word
      dispatch(fetchSearchWordGifs(word))
    },
    handleRemove (evt) {
      evt.stopPropagation()
      const { search } = ownProps
      dispatch(removeSearch(search.word))
      dispatch(fetchTrendingGifs())
      history.push('/')
    }
  }
}

export default connect(mapState, mapDispatch)(SearchItem)
