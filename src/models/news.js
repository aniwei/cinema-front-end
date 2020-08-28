import { news } from 'services/news';

export default {
  namespace: 'news',

  state: {
    news: []
  },

  effects: {
    // 用户信息
    *news ({ payload }, { call, put }) {
      const response = yield call(news, payload);

      yield put({
        type: 'updateState',
        payload: {
          news: response.map((news, index) => {
            news.index = index;
            return news;
          })
        }
      });
    },

    *single ({ payload }, { call, put }) {
      const response = yield call(news, payload);

      return response;
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
