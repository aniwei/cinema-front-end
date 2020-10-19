import { history } from 'umi';
import { movies, shows, trading, code, tickets } from 'services/movie';

export default {
  namespace: 'movie',

  state: {
    movies: []
  },

  effects: {
    // 用户信息
    *code({ payload }, { call, put }) {
      const response = yield call(code, payload);

      return response;
    },

    *tickets({ payload }, { call, put }) {
      const response = yield call(tickets, payload);

      return response;
    },

    *trading({ payload }, { call, put }) {
      const response = yield call(trading, payload);

      if (response) {
        return response;
      }

      return false;
    },

    // 用户信息
    *movies({ payload }, { call, put }) {
      const response = yield call(movies, payload);

      if (response && response.length > 0){
        const movies = response.slice();
        const groups = new Map();

        const composes = response.filter(movie => {
          return movie.compose;
        });

        composes.forEach(movie => {
          let movies = groups.get(movie.composeId);

          if (!movies) {
            groups.set(movie.composeId, movies = []);
          }

          movies[movie.composeIndex - 1] = movie;

          if (movie.composeIndex - 1 === 0) {
            movie.groups = movies;
          }
        });

        response.forEach((movie, index) => {
          if (movie.compose) {
            if (movie.composeIndex - 1 > 0) {
              const indexOf = movies.indexOf(movie);
              movies.splice(indexOf, 1);
            }
          }
        });
  
        return movies.map((movie, index) => {
          movie.index = index;
          return movie;
        });
      }

      return [];
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
