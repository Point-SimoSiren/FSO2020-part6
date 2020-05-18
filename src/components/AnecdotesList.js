import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationAction, emptyAction } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'

const AnecdotesList = () => {

    const dispatch = useDispatch()

    const like = (anecdote) => {
        dispatch(voteAction(anecdote.id))
        dispatch(notificationAction(`You hit Like on ${anecdote.content}"`), 5)

        const timeoutId = setTimeout(() => {
            dispatch(emptyAction())
        }, 5000)

        clearTimeout(timeoutId - 1)
    }

    const anecdotes = useSelector(({ anecdotes, filter }) => {
        return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
            .sort((a, b) => (a.votes > b.votes) ? -1 : 1)
        //.sort((a, b) => b.votes - a.votes) toinen tapa lajitella
    })

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        <h5>_______________________________________________________________________________________________________________________________________________________________________________________</h5>
                        <h4>{anecdote.content}</h4>
                    </div>
                    <div>
                        {anecdote.votes} users has liked this anecdote. {' '}
                        <button onClick={() => like(anecdote)}>
                            L I K E </button>
                    </div>
                </div>
            )}
        </div>
    )
}


export default AnecdotesList