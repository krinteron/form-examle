import { createStore } from 'vuex';

export default createStore({
  state: {
    person: {},
    children: {},
  },
  getters: {
  },
  mutations: {
    saveForm(state, { personData, childrenData }) {
      state.person = JSON.parse(JSON.stringify(personData));
      state.children = JSON.parse(JSON.stringify(childrenData));
    },
  },
  actions: {
  },
  modules: {
  },
});
