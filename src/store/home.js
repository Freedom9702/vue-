export default {
    state: {
      bannerlist: [],
      prolist: []
    },
    getters: {
    },
    actions: {
      getbannerlist (context) {
      },
      getprolist (context) {
      }
    },
    mutations: {
      changebannerlist (state, data) {
        state.bannerlist = data
      },
      changeprolist (state, data) {
        state.prolist = data
      }
    }
  }