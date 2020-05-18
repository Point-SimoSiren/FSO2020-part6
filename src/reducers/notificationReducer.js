const notificationReducer = (state = 'Welcome to the world of programming anecdotes!', action) => {
    switch (action.type) {
        case 'SET':
            return action.payload.message
        case 'EMPTY':
            return null
        default:
            return state
    }
}
// ---------Action creator for notifications------

export const notificationAction = (message) => {

    return dispatch => {
        dispatch({
            type: 'SET',
            payload: {
                message: message
            }
        })
    }
}

export const emptyAction = () => {

    return dispatch => {
        dispatch({
            type: 'EMPTY'
        })
    }
}


export default notificationReducer