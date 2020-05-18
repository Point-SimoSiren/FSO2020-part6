import anecdotesService from '../services/anecdotes'


const anecdoteReducer = (state = [], action) => {
  let newState = [...state]
  switch (action.type) {

    case 'INITIALS':
      return action.payload
    default: return state

    case 'CREATE':
      return newState.concat(action.payload)

    case 'VOTE':
      const id = action.payload.id
      const found = newState.findIndex((anecdote) => {
        return anecdote.id === id
      })
      newState[found].votes = newState[found].votes + 1
      return newState
  }
}

//------------------ACTION-CREATORS-------------------

export const createAction = submitted => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.create(submitted)
    dispatch({
      type: 'CREATE',
      payload: newAnecdote,
    })
  }
}

export const voteAction = (id) => {
  return dispatch => {
    anecdotesService.patchVotes(id)
    dispatch({
      type: 'VOTE',
      payload: {
        id: id
      }
    })
  }
}

export const initAction = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INITIALS',
      payload: anecdotes
    })
  }
}

export default anecdoteReducer