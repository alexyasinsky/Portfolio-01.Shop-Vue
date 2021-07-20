export default {

  state: () => ({
    cartData: [],
  }),
  mutations: {
    SET_CART_DATA (state, data) {
      state.cartData = [...data];
    }
  },
  actions: {
    fetchCartData({ commit }) {
      fetch('api/cart').then(data => data.json()).then((cart) => {
        commit('SET_CART_DATA', cart.content);
      });
    }
  },
  getters: {
    getCartData(state) {
      return state.cartData;
    }
  },
}
