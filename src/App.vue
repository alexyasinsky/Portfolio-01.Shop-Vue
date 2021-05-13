<template>
  <div>
    <div class="wrapper">
      <myHeader />
      <naviBar>
        <template v-slot:home>
          <router-link to="/" class="menu__link">Home</router-link>
        </template>
        <template v-slot:men>
          <router-link to="/catalog" class="menu__link">Men</router-link>
        </template>
        <template v-slot:women>
          <router-link to="/catalog" class="menu__link">Women</router-link>
        </template>
        <template v-slot:kids>
          <router-link to="/catalog" class="menu__link">Kids</router-link>
        </template>
        <template #accessories>
          <router-link to="/catalog" class="menu__link">Accessories</router-link>
        </template>
        <template #featured>
          <router-link to="/catalog" class="menu__link">Featured</router-link>
        </template>
        <template #hotDeals>
          <router-link to="/catalog" class="menu__link">Hot Deals</router-link>
        </template>
      </naviBar>

      <router-view />

      <subscribeSection />
      <div class="clr"></div>
    </div>
    <myFooter />
  </div>
</template>

<script>
import myHeader from './components/header.vue';
import myFooter from './components/footer.vue';
import naviBar from './components/naviBar.vue'; // расширение дописываем обязательно, иначе webserver не сработает
import subscribeSection from './components/subscribeSection.vue';

export default {
  components: {
    myHeader,
    myFooter,
    naviBar,
    subscribeSection,
  },

  methods: {
    // parentGetData(url) {
    //   // можно методы сохранять в родительском компоненте. Обращаемся к нему в cart,vue
    //   return fetch(url).then((data) => data.json());
    // },
  },
};
</script>

<style lang="scss"></style>
