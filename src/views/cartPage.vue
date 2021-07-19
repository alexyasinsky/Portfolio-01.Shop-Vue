<template>
  <div>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:title>
        Cart
      </template>
    </breadcrumbs>
    <section class="cart padding-site">
      <table>
        <thead>
          <th>Product Details</th>
          <th>unit Price</th>
          <th>Quantity</th>
          <th>shipping</th>
          <th>Subtotal</th>
          <th>ACTIOn</th>
        </thead>
        <tbody>
          <item v-for="item in items" type="cartPage" :item="item" :key="item.id" @remove="remove(item)"/>
        </tbody>
      </table>
      <div class="cart__buttonbox">
        <button type="button" class="cart__button hover">
          cLEAR SHOPPING CART
        </button>
        <button type="button" class="cart__button hover">
          cONTINUE sHOPPING
        </button>
      </div>
      <div class="cart__forms-and-total">
        <form action="#">
          <h4>Shipping Adress</h4>
          <div class="select">
            <select name="shipping-contry" id="shipping-contry">
              <option value="bangladesh">Bangladesh</option>
              <option value="russia">Russia</option>
            </select>
          </div>
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Postcode / Zip" />
          <button type="submit" class="hover">Get a Quote</button>
        </form>
        <form action="#">
          <h4>Coupon Discount</h4>
          <p>Enter your coupon code if you have one</p>
          <input type="text" placeholder="State" />
          <button type="submit" class="hover">Apply Coupon</button>
        </form>
        <div class="cart__total">
          <h5>Sub Total <span>$900</span></h5>
          <h3>Grand Total <span>$900</span></h3>
          <button
            type="button"
            class="hover"
          >
            <router-link to="/checkout">Proceed to checkout</router-link>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue';
import item from '../components/item.vue';
import { get, put, del } from '../utils/reqs.js';

export default {
  name: 'cartPage',
  components: {
    item, 
    breadcrumbs,
  },

  data() {
    return {
      url: 'api/cart',
      items: [],
    };
  },
  
  mounted() {
    get(this.url).then((cart) => {
      this.items = cart.content;
      console.log('cartPage mounted');
    });
  },

  // updated() {
  //   get(this.url).then((cart) => {
  //     this.items = cart.content;
  //     console.log('cartPage updated');
  //   });
  // },

  methods: {
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

<style lang="scss">

@import '../layout/styles/_variables.scss';

.cart {
  padding-top: 90px;

  table {
    width: 1140px;
    margin-bottom: 44px;

    tr,
    thead {
      border-bottom: 1px solid #eaeaea;
    }

    thead {
      padding-bottom: 20px;
    }

    th {
      font-size: 13px;
      font-weight: bold;
      color: #222222;
      letter-spacing: -0.01em;
      line-height: 20px;
      text-transform: uppercase;
      text-align: center;
    }

    th:first-child {
      text-align: left;
    }

    th:last-child {
      text-align: right;
    }

    td {
      text-align: center;
      padding: 22px 0;
      font-size: 13px;
      color: #656565;
      line-height: 20px;
    }

    td:last-child {
      text-align: right;

      button {
        background-color: white;
        padding: 15px;
      }

      i {
        font-size: 16px;
        color: #c0c0c0;
      }
    }

    input[type='number'] {
      height: 30px;
      width: 54px;
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      padding: 0 5px;
      text-align: center;
    }

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  &__product {
    display: flex;

    img {
      height: 115px;
      width: 100px;
      margin-right: 21px;
    }

    figcaption {
      margin-top: 13px;
      text-align: left;

      h5 {
        font-size: 13px;
        color: #222222;
        text-transform: uppercase;
        margin-bottom: 38px;
      }

      p {
        font-size: 13px;
        color: #575757;
        line-height: 20px;

        span {
          font-weight: 300;
          color: #6f6e6e;
        }
      }
    }
  }

  &__buttonbox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 63px;
  }

  &__button {
    height: 50px;
    width: 235px;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    font-size: 14px;
    font-weight: bold;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  &__forms-and-total {
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;

    form {
      width: 360px;

      h4 {
        font-size: 16px;
        font-weight: bold;
        color: #222222;
        text-transform: uppercase;
        margin-bottom: 22px;
      }

      select,
      input {
        height: 45px;
        width: 355px;
        background-color: #ffffff;
        border: 1px solid #eaeaea;
        font-size: 13px;
        font-weight: 300;
        color: #b1b1b1;
        padding: 0 18px;
        margin-bottom: 20px;
      }

      .select {
        position: relative;

        &::after {
          content: '\23F7';
          color: #b1b1b1;
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 1;
          pointer-events: none;
        }
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      button {
        margin-top: 3px;
        height: 35px;
        background-color: #ffffff;
        border: 1px solid #eaeaea;
        font-size: 11px;
        font-weight: 900;
        color: #4a4a4a;
        text-transform: uppercase;
        display: block;
        padding: 0 10px;
      }

      p {
        margin-top: 6px;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 300;
        color: #000000;
      }
    }
  }

  &__total {
    height: 214px;
    width: 360px;
    background-color: #f5f3f3;
    text-align: right;
    padding: 40px;

    h5 {
      font-size: 11px;
      color: #4a4a4a;
      text-transform: uppercase;
      margin-bottom: 14px;

      span {
        margin-left: 10px;
      }
    }

    h3 {
      font-size: 16px;
      font-weight: bold;
      color: #222222;
      text-transform: uppercase;
      margin-bottom: 40px;

      span {
        color: #f16d7f;
        margin-left: 15px;
      }
    }

    button {
      height: 50px;
      width: 100%;
      background-color: #f16d7f;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      a {
        color: #ffffff;
      }
    }
  }
}

</style>
