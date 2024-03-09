import { useContext } from 'react'
import { CounterContext } from '../context/counterV2';

export default function CounterV2() {
    const {dispatch} = useContext<any>(CounterContext)

    // Increment counter
    const incrementCounter = () => {
        dispatch({ type: 'INCREMENT' });

        // console.log(dispatch)
    };

    // Decrement counter
    const decrementCounter = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}
