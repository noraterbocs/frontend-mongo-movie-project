import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const movies = createSlice({
  name: 'movies',
  initialState: {
    allMovies: [],
    page: 1,
    limit: 10

  },
  reducers: {
    setAllMovies: (store, action) => {
      store.allMovies = action.payload.body
      console.log(action.payload)
    },
    setPage: (store, action) => {
      store.page = action.payload
      console.log(action.payload)
    },
    setLimit: (store, action) => {
      store.limit = action.payload
      console.log(action.payload)
    }
  }
});

// a thunk to handle the API request
// two API requests one for the startLabyrinth and one for all the rest
export const fetchMovies = (page) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://project-mongo-api-jbnyu77ahq-lz.a.run.app/movies?page=${page}&limit=9`, options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(movies.actions.setAllMovies(json))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  };
};