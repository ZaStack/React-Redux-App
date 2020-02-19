import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { trumpReducer as reducer } from './reducers/trump-reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import TrumpButton from './components/trump-button';
import TrumpCard from './components/trump-card';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TrumpButton />
        <TrumpCard />
      </div>
    </Provider>
  );
}

export default App;
