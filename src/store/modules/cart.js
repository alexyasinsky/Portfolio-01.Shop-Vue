

export default {

  state: () => ({
    cartData: [],
  }),
  mutations: {
    SET_CART_DATA (state, data) {
      state.cartData = [...data];
    },
    REMOVE_CART_ITEM (state, item) {
      state.cartData.splice(state.cartData.indexOf(item), 1);
                    // this.items.splice(this.items.indexOf(find), 1);
    }
  },
  actions: {
    fetchCartData({ commit }) {
      fetch('api/cart').then(data => data.json()).then((cart) => {
        commit('SET_CART_DATA', cart.content);
      });
    },
    removeCartItem({ commit, state }, item) {
      let find = state.cartData.find((el) => el.id == item.id);
      fetch(`api/cart/${item.id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    .then(status => status.json()).then((res) => {
            if (res.status) {
              commit('REMOVE_CART_ITEM', find);
            } else {
              console.log('Server err');
            }
          });
      // remove(item) {
      //   let find = this.items.find((el) => el.id == item.id);
      //   del(`${this.url}/${item.id}`).then((res) => {
      //       if (res.status) {
      //         this.items.splice(this.items.indexOf(find), 1);
      //       } else {
      //         console.log('Server err');
      //       }
      //     });
      // }
    }
  },
  getters: {
    getCartData(state) {
      return state.cartData;
    }
  },
}
