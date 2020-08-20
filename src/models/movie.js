import { history } from 'umi';
import { movies, shows } from 'services/movie';

import moviesJson from './movies.json';


export default {
  namespace: 'movie',

  state: {
    movies: []
  },

  effects: {
    // 用户信息
    *movies(_, { call, put }) {
      const response = yield call(movies);

      yield put({
        type: 'updateState',
        payload: {
          movies: response
        }
      });
    },

    *shows({ payload }, { call, put, select }) {
      const response = yield call(shows, payload);
      const movies = yield select(state => {
        return state.movie.movies;
      });

      const { movie } = payload;
      movie.shows = response;

      yield put({
        type: 'updateState',
        payload: {
          movies
        }
      });
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
  },
};
