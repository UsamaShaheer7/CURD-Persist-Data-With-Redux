// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Slice from './Slices'; // Assuming your Slices.js exports the reducer directly

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Slice);

const store = configureStore({
  reducer: {
    customer: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
