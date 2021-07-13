<template>
  <div>
    <template v-if="type == 'cart'">
      <div class="cartdrop__product">
        <a href="single_page.html">
          <img :src="item.img" :alt="'product-' + item.id" />
        </a>
        <div class="cartdrop__product-desc">
          <h4>{{ item.name }}</h4>
          <p class="cartdrop__product-rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <p class="cartdrop__product-pq">
            {{ item.quantity }} <span>x</span> ${{ item.price }}
          </p>
        </div>
        <div class="cartdrop__product-cancel">
          <button type="button" @click="$emit('remove', item)">
            <i class="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
    </template>
    <template v-if="type == 'catalog'">
      <div class="product">
        <img :src="item.img" class="product__img" :alt="'product-' + item.id" />
        <router-link to="/single" class="product__name">{{ item.name }}</router-link>
        <p class="product__price">${{ item.price }}</p>
        <button class="product__cart" @click="$parent.$emit('add', item)">
          <img src="../assets/imgs/cart-white.png" alt="cart-white" />
          Add to Cart
        </button>
      </div>
    </template>
  </div>
</template>

<script>
export default {

   props: {                        // props - входные параметры компонента. Здесь 2 входных параметра - type и item. 
        type: {                    // Задаются в верстке в теге размещения компонента.
            type: String,          // В компонент нужно пробросить в виде параметров все данные, которые будут использоваться в
            default: 'catalog'     // в нем. Поэтому мы пробрасываем объект item из API сюда. Названия пропсов в коде могут быть 
        },                         // в стиле camelCase, но в верстке они обязательно должны быть kebab-case (HTML 
        item: { type: Object }     // регистронезависим)!!! 
    }
};
</script>

<style lang="scss">

@import '../layout/styles/_variables.scss';

.product {
  &__section {
    padding-top: 100px;

    h2 {
      font-size: 30px;
      font-weight: bold;
      color: #222222;
      text-align: center;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 14px;
      color: #9f9f9f;
      text-align: center;
    }
  }

  &__box {
    margin-top: 55px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 25px;
  }

  padding-bottom: 20px;
  position: relative;
  margin-bottom: 35px;
  transition: all 0.5s;

  &__name {
    display: block;
    padding: 19px 14px 16px 14px;
    font-size: 13px;
    color: #222222;
    text-transform: uppercase;
    overflow: hidden;
  }

  &__price {
    padding-left: 14px;
    padding-right: 14px;
    font-size: 16px;
    font-weight: bold;
    color: $colorOfElements;
    text-transform: uppercase;
  }

  &__cart {
    position: absolute;
    top: 97px;
    left: 70px;
    height: 39px;
    width: 123px;
    border: 1px solid #ffffff;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    display: none;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    background-color: Transparent;
    background-repeat:no-repeat;
    overflow: hidden;

    img {
      height: 22px;
      width: 23px;
      margin-right: 8px;
    }

    &:hover {
      transform: scale(1.1);
      color: #ffffff;
    }
  }

  &:hover .product__cart {
    display: flex;
  }

  &:hover .product__img {
    filter: brightness(0.4);
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
    transform: scale(1.05);
  }
  

  &__button {
    display: block;
    margin: 0 auto;
    height: 48px;
    width: 212px;
    background-color: $colorOfElements;
    font-size: 16px;
    font-weight: bold;
    
    text-align: center;
    
    a {
      color: #ffffff;
      line-height: 54px;
      display: block;
    }
  }
}
</style>
