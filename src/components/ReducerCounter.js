import React, {useReducer} from 'react'

//2. define args for useReducer outside 
//2.1. define initialState
const initialState = 0

//2.2. define currentState and action params
//2.2.1. currentState
//2.2.2. CompositionEvent action - instruction to the reducer function for perform state transition
const reducer = (state, action) => {
    //2.3. return newState with switch
    switch(action){
        //add
        case 'increment':
            return state + 1
            //substract
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
 }

function ReducerCounter() {
    //1. describe function useReducer(reducer, initialState)
    //3, count - current state 
    //3. dispatch - function - allows execute code correspond to particular action
    //argument for dispatch method  is action specified in reducer f-n
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
        )
    }

export default ReducerCounter
