import React from 'react'
import { connect } from 'react-redux'
import NewSearchStyle from './NewSearchStyle'
import { requestGifs, writeSearchWord, addSearch } from '../../store'
import SearchButton from './SearchButton'
import history from '../../history'

/* -----------------    COMPONENT     ------------------ */

const NewSearchEntry = (props) => {
  const { newSearchEntry, handleSubmit, handleChange } = props

  return (
    <NewSearchStyle>
      <form onSubmit={handleSubmit}>
        <input
          value={newSearchEntry}
          onChange={handleChange}
          type='text'
          name='searchWord'
          placeholder='Search GIPHY. Type a word.'
        />
        <SearchButton type='submit'>Save Search</SearchButton>
      </form>
    </NewSearchStyle>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ newSearchEntry }) => ({ newSearchEntry })

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleChange (evt) {
      dispatch(requestGifs(evt.target.value))
      dispatch(writeSearchWord(evt.target.value))
    },
    handleSubmit (evt) {
      evt.preventDefault()
      const word = evt.target.searchWord.value
      dispatch(addSearch({ word }))
      dispatch(writeSearchWord(''))
      history.push(`/searches/${word}`)
    }
  }
}

export default connect(mapState, mapDispatch)(NewSearchEntry)
