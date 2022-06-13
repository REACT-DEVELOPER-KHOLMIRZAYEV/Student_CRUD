import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './redux/reducers';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import "react-toastify/dist/ReactToastify.css";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
const App = lazy(() => import("./App"));

const store = createStore(persistedReducer);
let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1 className='loading'>Loading.....</h1>}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);