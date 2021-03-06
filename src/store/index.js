import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import blog from './modules/blog'
import channel from './modules/channel'
import group from './modules/group'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
      permission,
      user,
      blog,
      channel,
      group
  },
  getters
});

export default store
