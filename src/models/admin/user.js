import { history } from 'umi';
import { viewer, logIn } from 'services/admin/user';

const token = window.localStorage.getItem('token');

export default {
  namespace: 'AdminUser',

  state: {
    token,
    user: null
  },

  effects: {
    *viewer (_, { call, put }) {
      const response = yield call(viewer);
      const { user } = response;

      yield put({
        type: 'updateState',
        payload: { user }
      });
    },

    *signIn ({ payload }, { call, put }) {
      const response = yield call(logIn, payload);
      const { viewer } = response;

      window.localStorage.setItem('token', viewer.sessionToken);

      yield put({
        type: 'updateState',
        payload: {
          user: viewer.user,
          token: viewer.sessionToken
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
