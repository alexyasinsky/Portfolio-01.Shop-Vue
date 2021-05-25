<template>
  <div class="cartdrop__box">
    <item v-for="item in items" type="cart" :item="item" :key="item.id" @remove="remove(item)"/>
    <p class="cartdrop__message" v-if="items.length == 0">Корзина пуста</p>
    <div class="cartdrop__total">
      <p>Total</p>
      <p>$500.00</p>
    </div>
    <button class="cartdrop__button cartdrop__button_red hover">
      Checkout
    </button>
    <button class="cartdrop__button hover" @click='$parent.showCart = !$parent.showCart'>
      <slot></slot>
      </button>
  </div>
</template>

<script>
import item from './item.vue';
import { get, put, post, del } from '../utils/reqs.js';

export default {
  components: {
    item,
  },

  data() {
    return {
      url: 'api/cart',
      items: [],
    };
  },

  mounted() {
    get(this.url).then((basket) => {
      this.items = basket.content;
    });
    // this.$parent.$parent.parentGetData(this.url)
    // .then(d => { // обращение к методу из родительского компонента
    //   this.items = d.content;
    //   console.log(this.items);
    //   });
  },

  methods: {
    add(item) {
      let find = this.items.find((el) => el.id == item.id);
      if (!find) {
        let newItem = Object.assign({}, item, {
          quantity: 1,
        });
        post(this.url, newItem).then((res) => {
          if (res.status) {
            this.items.push(newItem);
          } else {
            console.log('Server err');
          }
        });
      } else {
        put(`${this.url}/${item.id}`, 1).then((res) => {
          if (res.status) {
            find.quantity++;
          } else {
            console.log('Server err');
          }
        });
      }
    },
    remove(item) {
      let find = this.items.find((el) => el.id == item.id);
      if (find.quantity > 1) {
        put(`${this.url}/${item.id}`, -1).then((res) => {
          if (res.status) {
            find.quantity--;
          } else {
            console.log('Server err');
          }
        });
      } else {
        del(`${this.url}/${item.id}`).then((res) => {
          if (res.status) {
            this.items.splice(this.items.indexOf(find), 1);
          } else {
            console.log('Server err');
          }
        });
      }
    },
  },
};

</script>

<style></style>
