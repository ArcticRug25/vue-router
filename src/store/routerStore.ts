import { defineStore } from 'pinia'

export const routerStore = defineStore('routerStore', {
  state: () => ({
    hd: 'aaa',
  }),
  getters: {
    get(state) {
      return state.hd
    },
  },
})
