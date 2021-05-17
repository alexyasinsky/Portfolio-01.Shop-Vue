<template>
  <main>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:parent>
        <router-link to="/catalog">Men</router-link>
        /
      </template>
      <template v-slot:title>
        New Arrivals
      </template>
    </breadcrumbs>
    <section class="catalog padding-site">
      <div class="catalog__left">
        <details open>
          <summary>Category</summary>
          <ul>
            <li><a href="#"> Accessories</a></li>
            <li><a href="#"> Bags</a></li>
            <li><a href="#"> Denim</a></li>
            <li><a href="#"> Hoodies & Sweatshirts</a></li>
            <li><a href="#"> Jackets & Coats</a></li>
            <li><a href="#"> Pants</a></li>
            <li><a href="#"> Polos</a></li>
            <li><a href="#"> Shirts</a></li>
            <li><a href="#"> Shoes</a></li>
            <li><a href="#"> Shorts</a></li>
            <li><a href="#"> Sweaters & Knits</a></li>
            <li><a href="#"> T-Shirts</a></li>
            <li><a href="#"> Tanks</a></li>
          </ul>
        </details>
        <details>
          <summary>Brand</summary>
          <ul>
            <li><a href="#"> Accessories</a></li>
            <li><a href="#"> Bags</a></li>
            <li><a href="#"> Denim</a></li>
            <li><a href="#"> Hoodies & Sweatshirts</a></li>
            <li><a href="#"> Jackets & Coats</a></li>
            <li><a href="#"> Pants</a></li>
            <li><a href="#"> Polos</a></li>
            <li><a href="#"> Shirts</a></li>
            <li><a href="#"> Shoes</a></li>
            <li><a href="#"> Shorts</a></li>
            <li><a href="#"> Sweaters & Knits</a></li>
            <li><a href="#"> T-Shirts</a></li>
            <li><a href="#"> Tanks</a></li>
          </ul>
        </details>
        <details>
          <summary>Designer</summary>
          <ul>
            <li><a href="#"> Accessories</a></li>
            <li><a href="#"> Bags</a></li>
            <li><a href="#"> Denim</a></li>
            <li><a href="#"> Hoodies & Sweatshirts</a></li>
            <li><a href="#"> Jackets & Coats</a></li>
            <li><a href="#"> Pants</a></li>
            <li><a href="#"> Polos</a></li>
            <li><a href="#"> Shirts</a></li>
            <li><a href="#"> Shoes</a></li>
            <li><a href="#"> Shorts</a></li>
            <li><a href="#"> Sweaters & Knits</a></li>
            <li><a href="#"> T-Shirts</a></li>
            <li><a href="#"> Tanks</a></li>
          </ul>
        </details>
      </div>
      <div class="catalog__right">
        <form class="filter">
          <div class="filter__trending">
            <h3 class="filter__name">Trending now</h3>
            <fieldset class="radio">
              <div class="radio__btn">
                <input
                    id="radio-1"
                    type="radio"
                    name="radio"
                    value="Bohemian"
                    checked
                />
                <label for="radio-1">Bohemian</label>
              </div>
              <div class="radio__btn">
                <input id="radio-2" type="radio" name="radio" value="Floral"/>
                <label for="radio-2">Floral</label>
              </div>
              <div class="radio__btn">
                <input id="radio-3" type="radio" name="radio" value="Lace"/>
                <label for="radio-3">Lace</label>
              </div>
              <div class="radio__btn">
                <input id="radio-4" type="radio" name="radio" value="Lace"/>
                <label for="radio-4">Lace</label>
              </div>
              <div class="radio__btn">
                <input id="radio-5" type="radio" name="radio" value="Floral"/>
                <label for="radio-5">Floral</label>
              </div>
              <div class="radio__btn">
                <input
                    id="radio-6"
                    type="radio"
                    name="radio"
                    value="Bohemian"
                />
                <label for="radio-6">Bohemian</label>
              </div>
            </fieldset>
          </div>
          <div class="filter__size">
            <h3 class="filter__name">Size</h3>
            <fieldset>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xxs"/>
                  <label for="xxs">xxs</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="l"/>
                  <label for="l">l</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xs"/>
                  <label for="xs">xs</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xl"/>
                  <label for="xl">xl</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="s"/>
                  <label for="s">s</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xxl"/>
                  <label for="xxl">xxl</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="m"/>
                  <label for="m">m</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="filter__price">
            <h3 class="filter__name">Price</h3>
            <fieldset oninput="userPrice.value=(price.value)" action="#">
              <input
                  type="range"
                  name="range"
                  id="price"
                  max="400"
                  value="100"
              />
              <p>$
                <output name="userPrice" for="price">100</output>
              </p>
            </fieldset>
          </div>
        </form>
        <form action="#" class="selector">
          <div class="selector__variant">
            <label for="sortBy">Sort By</label
            ><select name="sortBy" id="sortBy">
            <option value="name" selected>Name</option>
            <option value="brand">Price</option>
            <option value="name">Popularity</option>
          </select>
          </div>
          <div class="selector__variant">
            <label for="show">Show</label
            ><select name="show" id="show">
            <option value="04" selected>04</option>
            <option value="09">09</option>
            <option value="16">16</option>
          </select>
          </div>
        </form>
        <men/>
        <div class="catalog__controls">
          <p class="catalog__pages">
            <i class="fas fa-chevron-left"></i>
            &nbsp;
            <a href="#">1</a>
            &nbsp;
            <a href="#">2</a>
            &nbsp;
            <a href="#">3</a>
            &nbsp;
            <a href="#">4</a>
            &nbsp;
            <a href="#">5</a>
            &nbsp;
            <a href="#">6</a>
            &nbsp;...&nbsp;
            <a href="#">20</a>
            &nbsp;
            <i class="fas fa-chevron-right"></i>
          </p>
          <button type="button" class="catalog__button hover">View All</button>
        </div>
      </div>
    </section>
    <section class="feature__section feature__section_catalog padding-site">
      <figure class="feature__figure_catalog">
        <div class="feature__img feature__img_catalog">
          <img src="../assets/imgs/truck.png" alt="truck">
        </div>
        <figcaption class="feature__desc feature__desc_catalog">
          <h4>Free Delivery</h4>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
      <figure class="feature__figure_catalog">
        <div class="feature__img feature__img_catalog">
          <img src="../assets/imgs/discount.png" alt="discount">
        </div>
        <figcaption class="feature__desc feature__desc_catalog">
          <h4>Sales & discounts</h4>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
      <figure class="feature__figure_catalog">
        <div class="feature__img feature__img_catalog">
          <img src="../assets/imgs/crown.png" alt="crown">
        </div>
        <figcaption class="feature__desc feature__desc_catalog">
          <h4>Quality assurance</h4>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </figcaption>
      </figure>
    </section>
  </main>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue';
import men from '../components/men.vue';

export default {
  components: {
    men,
    breadcrumbs,
  },
};
</script>

<style></style>
