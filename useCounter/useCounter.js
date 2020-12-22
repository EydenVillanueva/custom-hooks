import { useState } from 'react';


export const useCounter = ( initState = 10 ) => {
    const [counter, setCounter] = useState(initState);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = (value = 100) => {
        setCounter(value);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}