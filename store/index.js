export const state = () => ({
  counter: 0,
})

export const getters = {

}

export const mutations = {
  ADD_REQUEST(state) {
    state.counter++
  },
  REMOVE_REQUEST(state) {
    state.counter = state.counter > 0 ? state.counter-1 : 0
  },
}
