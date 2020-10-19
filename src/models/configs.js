import { configs } from 'services/configs';

export default {
  namespace: 'configs',

  state: {
    config: {
      home: null
    }
  },

  effects: {
    // 用户信息
    *configs ({ payload }, { call, put, select }) {
      const response = yield call(configs, payload);
      const state = yield select(({ configs }) => {
        return configs;
      })

      yield put({
        type: 'updateState',
        payload: {
          config: {
            ...state.config,
            home: response
          }
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
