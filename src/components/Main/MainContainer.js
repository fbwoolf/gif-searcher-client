import React from 'react'
import { connect } from 'react-redux'
import MainStyle from './MainStyle'
import GifList from '../Gif/GifList'

/* -----------------    COMPONENT     ------------------ */

const MainContainer = () => {
  return (
    <div>
      <MainStyle>
        <GifList />
      </MainStyle>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(MainContainer)
