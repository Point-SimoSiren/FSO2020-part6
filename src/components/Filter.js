import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAction } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const handleFilterChange = (event) => {
        dispatch(filterAction(event.target.value))
    }

    return (
        <h3 style={{ background: 'darkorange', marginLeft: '30px', marginBottom: '20px', padding: '10px' }}>
            Search <input onChange={handleFilterChange} />
        </h3>
    )
}

export default Filter