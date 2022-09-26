import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { filterReducer } from './contacts/filter-Slice';
import { contactsReducer } from './contacts/contact-Slice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  // filter: filterReducer,
});

// const persistedItemsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
