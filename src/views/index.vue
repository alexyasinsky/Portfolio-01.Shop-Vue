<template>
      <main>
        <section class="banner padding-site">
          <div class="banner__text">
            <h1>THE BRAND</h1>
            <p>OF LUXERIOUS <span>FASHION</span></p>
          </div>
        </section>
        <section class="category__section padding-site">
          <div class="category__column">
            <a href="catalog.html">
              <div class="category category_men">
                <div class="category__text">
                  <h3>Hot deal</h3>
                  <h2>For men</h2>
                </div>
              </div>
            </a>
            <a href="catalog.html">
              <div class="category category_accessories">
                <div class="category__text">
                  <h3>Luxurious & Trendy</h3>
                  <h2>Accessories</h2>
                </div>
              </div>
            </a>
          </div>
          <div class="category__column">
            <a href="catalog.html">
              <div class="category category_women">
                <div class="category__text">
                  <h3>30% Offer</h3>
                  <h2>Women</h2>
                </div>
              </div>
            </a>
            <a href="catalog.html">
              <div class="category category_kids">
                <div class="category__text">
                  <h3>New arrivals</h3>
                  <h2>For Kids</h2>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section class="product__section padding-site">
          <h2>Fetured Items</h2>
          <h3>Shop for items based on what we featured in this week</h3>
          <!-- product__box -->
          <catalog />
          <button
            onClick="location.href='catalog.html'"
            class="product__button hover"
          >
            Browse All Product <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </section>
        <section class="feature__section feature__section_index padding-site">
          <div class="feature__left">
            <h2>30% <span>Offer</span></h2>
            <h3>FOR WOMEN</h3>
          </div>
          <div class="feature__right">
            <figure class="feature__figure_index">
              <div class="feature__img feature__img_index">
                <img src="../assets/imgs/truck.png" alt="truck" />
              </div>
              <figcaption class="feature__desc feature__desc_index">
                <h4>Free Delivery</h4>
                <p>
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </figcaption>
            </figure>
            <figure class="feature__figure_index">
              <div class="feature__img feature__img_index">
                <img src="../assets/imgs/discount.png" alt="discount" />
              </div>
              <figcaption class="feature__desc feature__desc_index">
                <h4>Sales & discounts</h4>
                <p>
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </figcaption>
            </figure>
            <figure class="feature__figure_index">
              <div class="feature__img feature__img_index">
                <img src="../assets/imgs/crown.png" alt="crown" />
              </div>
              <figcaption class="feature__desc feature__desc_index">
                <h4>Quality assurance</h4>
                <p>
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
</template>

<script>
import catalog from '../components/catalog.vue';

export default {
  components: {
    catalog: catalog, // полная запись объявления компонента
  },

};
</script>

<style></style>
