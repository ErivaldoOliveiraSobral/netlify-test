import { configureStore } from '@reduxjs/toolkit';
import counter from '../../src/components/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter,
  },
});