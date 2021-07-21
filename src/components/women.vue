<template>
  <div class="product__box">
    <item 
      v-for='item in items' 
      type='catalog'
      :item='item' 
      :key='item.id'
      @add='addCartItem(item)'
    />
  </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/reqs.js';
import { mapActions } from 'vuex';


export default {
  name: 'women',
  components: {
    item, 
  },

  data() {
    return {
      url: 'api/women',
      items: [],
    }
  },

  methods: {
    ...mapActions([
      'addCartItem',
    ]),
  },

  mounted() {
    get(this.url).then(d => {
      this.items = d;
    });
  }
};
</script>

<style></style>
