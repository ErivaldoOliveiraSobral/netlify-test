import { configureStore } from '@reduxjs/toolkit';
import counter from '../../components/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter,
  },
});