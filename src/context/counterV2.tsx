import React, { Dispatch, createContext, useReducer } from 'react';

// Define types for context value and action types
export type CounterContextType = {
    counter: number;
    dispatch: Dispatch<Action>;
};


type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

export const CounterContext = createContext<CounterContextType | null>(null);

const initialState = { counter: 0 };

const reducer = (state: typeof initialState, action: Action): typeof initialState => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

export const CounterProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Create context value object
    const contextValue: CounterContextType = {
        counter: state.counter,
        dispatch: dispatch, // Ensure that dispatch is included in the context value
    };
    return (
        <CounterContext.Provider value={contextValue}>
            {children}
        </CounterContext.Provider>
    )
}
