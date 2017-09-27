/* -----------------    ACTION TYPES ------------------ */

const CREATE = 'CREATE_SEARCH'
const REMOVE = 'REMOVE_SEARCH'

/* ------------   ACTION CREATORS     ------------------ */

export const addSearch = search => ({ type: CREATE, search })

export const removeSearch = word => ({ type: REMOVE, word })

/* ------------       REDUCER     ------------------ */

export default function reducer (searches = [], action) {
  switch (action.type) {
    case CREATE:
      return searches.concat(action.search)
    case REMOVE:
      return searches.filter(search => search.word !== action.word)
    default:
      return searches
  }
}
