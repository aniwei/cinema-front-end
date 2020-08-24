import { history } from 'umi';
import { movies, shows } from 'services/movie';

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
          movies: response.map((movie, index) => {
            movie.index = index;
            return movie;
          })
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

      movies.some((m, index) => {
        if (m.objectId === movie.objectId) {
          movies[index] = {
            ...movie
          }
          return true;
        }
      })

      yield put({
        type: 'updateState',
        payload: {
          movies: [...movies].map((movie, index) => {
            movie.index = index;
            return movie;
          })
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
