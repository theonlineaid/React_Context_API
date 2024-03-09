import React, { createContext, useState } from 'react';

// Define types for context value and setter function
type CounterContextType = {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [counter, setCounter] = useState<number>(5)

    // Create context value object
    const contextValue: CounterContextType = {
        counter,
        setCounter,
    };

    return (
        <CounterContext.Provider value={contextValue}>
            {children}
        </CounterContext.Provider>
    )
}