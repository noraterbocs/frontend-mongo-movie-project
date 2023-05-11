import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Main } from 'Main';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movies } from 'reducers/movies';
import { ui } from 'reducers/ui';

export const App = () => {
  const reducer = combineReducers({
    movies: movies.reducer,
    ui: ui.reducer
  });

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
