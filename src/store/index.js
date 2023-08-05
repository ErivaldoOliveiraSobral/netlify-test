import { configureStore } from '@reduxjs/toolkit';
import counter from '../../src/components/Counter/reducer';

export const store = configureStore({
  reducer: {
    counter,
  },
});