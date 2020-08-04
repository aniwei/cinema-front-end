import { history } from 'umi';
import { oauth, viewer, accounts, createAccount, updateAccount } from 'services/user';

export default {
  namespace: 'user',

  state: {
    accounts: [],
    currentUser: {},
  },

  effects: {
    // 三方验证
    *oauth({ payload }, { call, put }) {
      const response = yield call(oauth, payload);

      localStorage.setItem('token', response.sessionToken);
      yield put({
        type: 'updateCurrentState',
        payload: {
          currentUser: response.user,
        }
      });
      yield put({ type: 'viewer' });
      yield put({
        type: 'accounts',
        payload: { redirectToIBConnectIfNeeded: true }
      });
    },
    // 用户信息
    *viewer(_, { call, put }) {
      const response = yield call(viewer);

      yield put({
        type: 'updateCurrentState',
        payload: {
          currentUser: response.user
        }
      });
    },
    // 所有账户
    *accounts({ payload }, { call, put }) {
      const { redirectToIBConnectIfNeeded } = payload || {};
      const response = yield call(accounts);

      if (redirectToIBConnectIfNeeded) {
        // Login successfully
        history.replace(response.length ? '/' : '/user/connect-IB');
      } else {
        yield put({
          type: 'updateCurrentState',
          payload: {
            accounts: response
          }
        });
      }

      return response;
    },
    // 添加账户
    *createAccount({ payload }, { call, put }) {
      const response = yield call(createAccount, payload);

      console.log(response);
    },
    // 更新账户
    *updateAccount({ payload }, { call, put }) {
      const response = yield call(updateAccount, payload);

      console.log(response);
      yield put({ type: 'accounts' });
    }
  },

  reducers: {
    updateCurrentState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
  },
};
