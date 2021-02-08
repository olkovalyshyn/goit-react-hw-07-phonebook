import { createStore, combineReducers } from "redux";
import logger from "redux-logger";
import {
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./reducers";

import selectors from "./contacts-selectors";
// console.log("!!!getVisibleContacts", selectors.getVisibleContacts());
// import server from "../../db.json";

// import { ADDCONTACT, DELCONTACT, FINDCONTACT } from "./contact-types";
// import { composeWithDevTools } from "redux-devtools-extension";

// console.log(server.contacts);

// const itemReducer = (state = contacts.items, { type, payload }) => {
//   switch (type) {
//     case ADDCONTACT:
//       return [payload, ...state];
//     case DELCONTACT:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = contacts.filter, { type, payload }) => {
//   switch (type) {
//     case FINDCONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const rootRedusers = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// });

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

export default store;
