import { history } from 'umi';
import { sellingMovies, trading } from 'services/admin/ticket';

export default {
  namespace: 'AdminTicket',

  state: {
    movies: []
  },

  effects: {
    // 用户信息
    *movies(_, { call, put }) {
      const response = yield call(sellingMovies);
      const { data } = response;

      yield put({
        type: 'updateState',
        payload: {
          movies: data
        }
      });
    },

    *trading({ payload }, { call, put }) {
      yield call(trading, payload);
    }
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
