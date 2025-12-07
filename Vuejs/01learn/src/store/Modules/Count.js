export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increasecount(state) {
      state.count++
    }
  }
}
