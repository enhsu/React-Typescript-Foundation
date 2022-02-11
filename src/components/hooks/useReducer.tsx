import { useReducer } from "react";

type StateType = {
    count: number;
}

type UpdateType = {
    type: 'increment' | 'decrement';
    payload: number;
}
type ResetType = {
    type: 'reset';
}
type ActionType = UpdateType | ResetType 

const initialState = {
    count: 0
}
function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>useReducer</h2>
            <p>Count - { state.count }</p>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default UseReducer;