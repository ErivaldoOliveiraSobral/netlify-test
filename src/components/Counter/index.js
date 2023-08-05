import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './action-creator';

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div>
            <p>Counter is {count}</p>
            <button onClick={onIncrement}>Add</button>
            <button onClick={() => onDecrement()}>Rem</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state?.counter?.count
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
