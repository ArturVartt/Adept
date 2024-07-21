import { configureStore } from '@reduxjs/toolkit';
import dataSource from '../../entities/company/model/slices/slice-data-sourse';

const store = configureStore({
  reducer: {
    dataSources: dataSource,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;

export default store;
