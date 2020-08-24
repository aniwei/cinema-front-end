import { history } from 'umi';
import { movies } from 'services/admin/Movie';

export default {
  namespace: 'AdminMovie',

  state: {
    movies: []
  },

  effects: {
    // 用户信息
    *movies(_, { call, put }) {
      const response = yield call(movies);
      const { edges } = response;

      yield put({
        type: 'updateState',
        payload: {
          movies: edges.map(data => {
            return data.node;
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
