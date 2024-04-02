import React, { createContext, useContext, useEffect, useState } from 'react';
import { persistStore } from 'redux-persist'; // Import persistor if using persistence
import { createStore } from 'redux'; 
import todoReducer from './store';
const StoreContext = createContext(null);

export const useStore = () => useContext(StoreContext);

export const Provider = ({ children }) => {
  const [store, setStore] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    async function initStore() {
      const persistedStore = await persistStore(createStore(todoReducer));
      setStore(persistedStore);
      setIsLoading(false);
    }

    initStore();
  }, []);

  if (!isLoading) return <div>Loading...</div>;

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
