// TODO: import actions and implement reducer for each action
import initialState from './state'

import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'

export default function reducer(prevState, {action, payload}) {
  switch(action) {
    case ADD_BOOK:
      return {...prevState, favoriteBooks: [...initialState.favoriteBooks, payload]}
    case REMOVE_BOOK:
      return saveToLocalStorage(initialState.favoriteBooks.filter(favBook => favBook !== payload))
    case SEARCH_BOOKS:
      console.log(payload)
      return {...prevState, bookSearchResults: payload}
    default:
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}