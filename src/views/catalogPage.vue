<template>
  <main>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:parent>
        <router-link to="/catalog">Men</router-link> /
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
                <input id="radio-2" type="radio" name="radio" value="Floral" />
                <label for="radio-2">Floral</label>
              </div>
              <div class="radio__btn">
                <input id="radio-3" type="radio" name="radio" value="Lace" />
                <label for="radio-3">Lace</label>
              </div>
              <div class="radio__btn">
                <input id="radio-4" type="radio" name="radio" value="Lace" />
                <label for="radio-4">Lace</label>
              </div>
              <div class="radio__btn">
                <input id="radio-5" type="radio" name="radio" value="Floral" />
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
                  <input type="checkbox" name="size" id="xxs" />
                  <label for="xxs">xxs</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="l" />
                  <label for="l">l</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xs" />
                  <label for="xs">xs</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xl" />
                  <label for="xl">xl</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="s" />
                  <label for="s">s</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="xxl" />
                  <label for="xxl">xxl</label>
                </div>
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" name="size" id="m" />
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
              <p>$<output name="userPrice" for="price">100</output></p>
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
        <div class="product__box">
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-1.png"
              class="product__img"
              alt="man-1"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-2.png"
              class="product__img"
              alt="man-2"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-3.png"
              class="product__img"
              alt="man-3"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-4.png"
              class="product__img"
              alt="man-4"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-5.png"
              class="product__img"
              alt="man-5"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-6.png"
              class="product__img"
              alt="man-6"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-7.png"
              class="product__img"
              alt="man-7"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-8.png"
              class="product__img"
              alt="man-8"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
          <div class="product">
            <img
              src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-9.png"
              class="product__img"
              alt="man-9"
            />
            <a href="single_page.html" class="product__name"
              >Mango People T-shirt</a
            >
            <p class="product__price">$52.00</p>
            <div class="product__cart">
              <img src="assets/imgs/cart-white.png" alt="cart-white" />
              <p>Add to Cart</p>
            </div>
          </div>
        </div>
        <div class="catalog__controls">
          <p class="catalog__pages">
            <i class="fas fa-chevron-left"></i>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>...<a href="#">20</a>
            <i class="fas fa-chevron-right"></i>
          </p>
          <button type="button" class="catalog__button hover">View All</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue';

export default {
  components: {
    breadcrumbs,
  },
};
</script>

<style></style>
