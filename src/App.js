import React, { useEffect } from 'react'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initAction } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initAction())
    }, [dispatch])


    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <h1>Programming anecdotes</h1>
            <AnecdoteForm />
            <Notification />
            <Filter />
            <AnecdotesList />
        </div>
    )
}
export default App

