import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from '../dist/testData'

interface userPropos {
  isLogin: boolean,
  name?: string,
  id?: number
}

export interface GlobalDataProps {
  columns: ColumnProps[],
  posts: PostProps[],
  user: userPropos
}

export default createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login (state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'kiana'
      }
    }
  },
  getters: {
    biggerColumnsLen (state) {
      return state.columns.filter(item => item.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(item => item.id == id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(item => item.columnId == cid)
    }
  },
  actions: {},
  modules: {}
})
