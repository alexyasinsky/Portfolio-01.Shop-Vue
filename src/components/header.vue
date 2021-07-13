<template>
  <header class=" header padding-site">
    <div class="header__leftbox">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/imgs/logo.png" alt="logo"/>
        </router-link>
        <p>bran<span>d</span></p>
      </div>
      <details class="header__search-config">
        <summary>Browse</summary>
        <div class="menu__mega">
          <div class="menu__megacolumn">
            <ul class="menu__megabox">
              <li>
                <h3>Women</h3>
              </li>
              <li><a href="#">Dresses</a></li>
              <li><a href="#">Tops</a></li>
              <li><a href="#">Sweaters/Knits</a></li>
              <li><a href="#">Jackets/Coats</a></li>
              <li><a href="#">Blazers</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">Legging/Pants</a></li>
              <li><a href="#">Skirts/Shorts</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
            <ul class="menu__megabox">
              <li>
                <h3>Men</h3>
              </li>
              <li><a href="#">Tees/Tank tops</a></li>
              <li><a href="#">Shirts/Polos</a></li>
              <li><a href="#">Sweaters</a></li>
              <li><a href="#">Sweatshirts/Hoodies</a></li>
              <li><a href="#">Blazers</a></li>
              <li><a href="#">Jackets/vest</a></li>
            </ul>
          </div>
        </div>
      </details>
      <form class="header__searchfield" action="#">
        <input type="search" id="search" placeholder="Search for Item..." />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
    <div class="header__rightbox">
      <div class="cartdrop">
        <button @click='showCart = !showCart' class="cartdrop__showButton"></button>
        <!-- cartdrop__box -->
        <cart  v-show="showCart" ref="myCart">
          <router-link to="/cart">Go to Cart</router-link>
          </cart>
      </div>
      <button class="header__button button hover">
        My Account <i class="fas fa-caret-down"></i>
      </button>
    </div>
  </header>
</template>

<script>
import cart from '../components/cart.vue';

export default {
  components: {
    cart, // краткая запись объявления компонента
  },

  data() {
    return {
      showCart: false,
      cartQuantity: null,
    }
  }
}


</script>

<style>

</style>