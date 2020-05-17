let exist = false

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

export const notificationAction = (message, duration) => {
    return dispatch => {
        dispatch({
            type: 'SET',
            payload: {
                message: message
            }
        })

        setTimeout(() => {
            dispatch({
                type: 'EMPTY'
            })
        }, duration * 1000)
    }
}
export default notificationReducer