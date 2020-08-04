import { search, searchHistory } from 'services/global';

export default {
  namespace: 'global',

  state: {
    searchResult: {}
  },

  effects: {
    // 搜索历史
    *searchHistory(_, { call, put }) {
      const response = yield call(searchHistory);

      console.log(response);
    },
    // 头部搜索
    *search({ payload }, { call, put }) {
      const response = yield call(search, payload);

      console.log(response);
    },
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
