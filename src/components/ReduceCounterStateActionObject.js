import React, {useReducer} from 'react'

//2. define args for useReducer outside 
//2.1. define initialState
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

//2.2. define currentState and action params
//2.2.1. currentState
//2.2.2. CompositionEvent action - instruction to the reducer function for perform state transition
const reducer = (state, action) => {
    //2.3. return newState with switch
    switch(action.type){
        //add
        case 'increment':
            //override only changed parameters (return all params? and what is cvhanged arre ovverriden)
            return {...state, firstCounter: state.firstCounter + action.value} 
            //substract
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value} 
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value} 
            //substract
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value} 
        case 'reset':
            return initialState
        default:
            return state
    }
 }

function ReduceCounterStateActionObject() {
    //1. describe function useReducer(reducer, initialState)
    //3, count - current state 
    //3. dispatch - function - allows execute code correspond to particular action
    //argument for dispatch method  is action specified in reducer f-n
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First counter - {count.firstCounter}</div>
            <div>Second counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <div>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Counter 2 </button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement Counter 2</button>
            </div>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
        )
    }

export default ReduceCounterStateActionObject
