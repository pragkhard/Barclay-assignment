import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage

import todoReducer from './store';

const persistConfig = {
  key: 'todo-list',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
