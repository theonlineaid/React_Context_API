import { useContext } from 'react'
import { CounterContext } from '../context/counterV1'

export default function CounterV1() {
    const counterContext = useContext(CounterContext)

    // Destructure the context values with default values
    const { counter, setCounter } = counterContext ?? { counter: 0, setCounter: () => {} };

    // Increment counter
    const incrementCounter = () => {
        setCounter?.(counter + 1); 
    };

    // Decrement counter
    const decrementCounter = () => {
        setCounter?.(counter - 1);
    };


    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}
