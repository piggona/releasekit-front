import Vue from "vue";
import Vuex from "vuex";
import releaser from "./modules/releaser";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    releaser
  }
});
