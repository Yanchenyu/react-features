import React, { useReducer } from 'react'

function reducer (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + (action.data || 1)
        case 'DECREMENT':
            return state - (action.data || 1)
        default:
            return state
    }
}

export const useCount = (initialState) => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return {
        count,
        dispatch
    }
}