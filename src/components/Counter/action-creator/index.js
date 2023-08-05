export const COUNTER_INCREMENT = '@COUNTER/INCREMENT';
export const COUNTER_DECREMENT = '@COUNTER/DECREMENT';

export const increment = () => ({
    type: COUNTER_INCREMENT
});

export const decrement = () => ({
    type: COUNTER_DECREMENT
});
