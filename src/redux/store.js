import { configureStore } from '@reduxjs/toolkit';
import reducer from './missions/missions';

const store = configureStore({
  reducer: {
    missions: reducer,
  },
});

export default store;
