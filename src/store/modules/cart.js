import { get, post, put, del } from '../../utils/reqs.js';

export default {

  state: () => ({
    items: [],
    url: 'api/cart',
  }),

  mutations: {
    SET_CART_DATA (state, data) {
      state.items = [...data];
    },
    POST_NEW_CART_ITEM (state, item) {
      state.items.push(item);
    },
    INCREASE_QTY_OF_ITEM (state, item) {
      state.items[state.items.indexOf(item)].quantity += 1;
    },
    DELETE_CART_ITEM (state, item) {
      state.items.splice(state.items.indexOf(item), 1);
    }
  },

  actions: {
    getCartData({ commit, state }) {
      get(state.url).then((cart) => {
        commit('SET_CART_DATA', cart.content);
      });
    },
    addCartItem({ commit, state }, item) {
      let find = state.items.find((el) => el.id == item.id);
      if (!find) {
        let newItem = Object.assign({}, item, { quantity: 1 });
        post(state.url, newItem).then((res) => {
          if (res.status) {
            commit('POST_NEW_CART_ITEM', newItem);
          } else {
            console.log('Server err');
          }
        });
      } else {
        put(`${state.url}/${item.id}`, 1).then((res) => {
          if (res.status) {
            commit('INCREASE_QTY_OF_ITEM', find);
          } else {
            console.log('Server err');
          }
        });
      }
    },
    deleteCartItem({ commit, state }, item) {
      let find = state.items.find((el) => el.id == item.id);
      del(`${state.url}/${item.id}`)
      .then((res) => {
        if (res.status) {
          commit('DELETE_CART_ITEM', find);
        } else {
          console.log('Server err');
        }
      });
    },
    // add(item) {
    //   let find = this.items.find((el) => el.id == item.id);
    //   if (!find) {
    //     let newItem = Object.assign({}, item, {
    //       quantity: 1,
    //     });
    //     post(this.url, newItem).then((res) => {
    //       if (res.status) {
    //         this.items.push(newItem);
    //       } else {
    //         console.log('Server err');
    //       }
    //     });
    //   } else {
    //     put(`${this.url}/${item.id}`, 1).then((res) => {
    //       if (res.status) {
    //         find.quantity++;
    //       } else {
    //         console.log('Server err');
    //       }
    //     });
    //   }
    // },
    // remove(item) {
    //   let find = this.items.find((el) => el.id == item.id);
    //   if (find.quantity > 1) {
    //     put(`${this.url}/${item.id}`, -1).then((res) => {
    //       if (res.status) {
    //         find.quantity--;
    //       } else {
    //         console.log('Server err');
    //       }
    //     });
    //   } else {
    //     del(`${this.url}/${item.id}`).then((res) => {
    //       if (res.status) {
    //         this.items.splice(this.items.indexOf(find), 1);
    //       } else {
    //         console.log('Server err');
    //       }
    //     });
    //   }
    // },
  },

  getters: {
    showCartData(state) {
      return state.items;
    }
  },
}
