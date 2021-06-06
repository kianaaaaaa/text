import { createStore } from 'vuex'
import axios from 'axios'
import { testData, testPosts, PostProps } from '../dist/testData'

interface userPropos {
  isLogin: boolean,
  name?: string,
  id?: number,
  columnId?: number
}

interface ImageProps {
  _id?: string,
  url?: string,
  createdAt?: string
}

export interface ColumnProps {
  _id: string,
  title: string,
  active: ImageProps,
  description: string
}

export interface GlobalDataProps {
  columns: ColumnProps[],
  posts: PostProps[],
  user: userPropos,
}

export default createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: testPosts,
    user: {
      isLogin: false,
      name: 'kiana',
      columnId: 1
    }
  },
  mutations: {
    login (state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'kiana'
      }
    },
    createPost (state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns (state, rewData) {
      state.columns = rewData.data.list
    }
  },
  getters: {
    biggerColumnsLen (state) {
      return state.columns.filter(item => item._id > '2').length
    },
    getColumnById: (state) => (id: string) => {
      return state.columns.find(item => item._id == id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(item => item.columnId == cid)
    }
  },
  actions: {
    fetchColumns (context) {
      axios.get('/api/columns', { params: { key: 'hello' } }).then(res => {
        context.commit('fetchColumns', res.data)
      })
    }
  },
  modules: {}
})
