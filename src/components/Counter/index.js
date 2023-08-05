import React from 'react';

import { increment, decrement, selectCount } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const CounterPresentation = ({ count, onIncrement, onDecrement }) => (
    <>
        <p>Counter is {count}</p>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </>
);

const CounterContainer = () => {
    const dispatch = useDispatch();

    const props = {
        count: useSelector(selectCount),
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    };

    return <CounterPresentation {...props} /> ;
};

export { CounterContainer as Counter };
