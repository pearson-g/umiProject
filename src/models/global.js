import { queryNotices } from '@/services/user';
import { getFavMenus, addFavMenu, removeFavMenu } from '@/services/favMenu';

const GlobalModel = {
  namespace: 'global',
  state: {
    collapsed: false,
    notices: [],
    favMenus: [],
  },
  effects: {
    *fetchFavMenus(_, { call, put }) {
      const result = yield call(getFavMenus);
      if (result.success === true) {
        yield put({
          type: 'saveFavMenus',
          payload: result.data,
        });
      }
    },

    *addFavMenu({ payload }, { call, put }) {
      const result = yield call(addFavMenu, payload);
      if (result.success === true) {
        yield put({
          type: 'saveFavMenus',
          payload: result.data,
        });
      }
    },
    *removeFavMenu({ payload }, { call, put }) {
      const result = yield call(removeFavMenu, payload);
      if (result.success === true) {
        yield put({
          type: 'saveFavMenus',
          payload: result.data,
        });
      }
    },

    *fetchNotices(_, { call, put, select }) {
      const data = yield call(queryNotices);
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      const unreadCount = yield select(
        state => state.global.notices.filter(item => !item.read).length,
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: data.length,
          unreadCount,
        },
      });
    },

    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count = yield select(state => state.global.notices.length);
      const unreadCount = yield select(
        state => state.global.notices.filter(item => !item.read).length,
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: count,
          unreadCount,
        },
      });
    },

    *changeNoticeReadState({ payload }, { put, select }) {
      const notices = yield select(state =>
        state.global.notices.map(item => {
          const notice = { ...item };

          if (notice.id === payload) {
            notice.read = true;
          }

          return notice;
        }),
      );
      yield put({
        type: 'saveNotices',
        payload: notices,
      });
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: notices.length,
          unreadCount: notices.filter(item => !item.read).length,
        },
      });
    },
  },
  reducers: {
    changeLayoutCollapsed(
      state = {
        notices: [],
        collapsed: false,
      },
      { payload },
    ) {
      return { ...state, collapsed: payload };
    },

    saveFavMenus(state, { payload }) {
      return {
        ...state,
        favMenus: payload,
      };
    },

    saveNotices(state, { payload }) {
      return {
        collapsed: false,
        ...state,
        notices: payload,
      };
    },

    saveClearedNotices(
      state = {
        notices: [],
        collapsed: false,
      },
      { payload },
    ) {
      return {
        collapsed: false,
        ...state,
        notices: state.notices.filter(item => item.type !== payload),
      };
    },
  },
  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
export default GlobalModel;
