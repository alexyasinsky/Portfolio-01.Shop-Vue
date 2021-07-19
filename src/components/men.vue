<template>
  <div class="product__box">
    <item 
      v-for='item in items' 
      type='catalog'
      :item='item' 
      :key='item.id'
    />
  </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/reqs.js'


export default {
  name: 'men',
  components: {
    item, 
  },

  data() {
    return {
      url: 'api/men',
      items: [],
    }
  },

  mounted() {
    get(this.url).then(d => {
      this.items = d;
      });
  }
};
</script>

<style></style>
