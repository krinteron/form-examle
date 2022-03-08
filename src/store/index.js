import { createStore } from 'vuex';

export default createStore({
  state: {
    person: {
      name: 'tor',
      age: '80',
    },
    children: {
      345: {
        id: '345',
        name: 'gerald',
        age: 45,
      },
    },
  },
  getters: {
  },
  mutations: {
    saveForm(state, { personData, childrenData }) {
      state.person = personData;
      state.children = childrenData;
    },
  },
  actions: {
  },
  modules: {
  },
});
