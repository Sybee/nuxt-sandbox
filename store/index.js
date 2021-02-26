export const state = () => ({
  query: [],
})

export const getters = {
  executing(state) {
    return Boolean(state.query.length)
  },
}

export const mutations = {
  ADD_REQUEST(state, payload) {
    state.query.push(payload)
    console.log(state.query)
    // console.log(payload)
  },
  REMOVE_REQUEST(state, payload) {
    // if (state.query.includes(payload)) {
      // state.query = state.query.filter(item => item !== payload)
    // }
  },
}

export const actions = {
  // ADD_REQUEST({ commit }, payload) {
  //   let arr = []
  //   arr.push(...state.query)
  //   arr.push(payload)
  //   commit('ADD_REQUEST', payload)
  // },
  // REMOVE_REQUEST({ commit }, payload) {
  //   commit('REMOVE_REQUEST', payload)
  // },
}
