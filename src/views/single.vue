<template>
  <main>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:parent>
        <router-link to="/catalog">Women</router-link>
        /
      </template>
      <template v-slot:title>
        Banana T-shirt
      </template>
    </breadcrumbs>
    <section id="carouselExampleControls" class="carousel slide single-carousel" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active single-carousel__slide">
          <div class="single-carousel__img">
            <img src="../assets/imgs/product-big.png" alt="product-big">
          </div>
          <div class="single-carousel__desc padding-site">
            <h5>WOMEN COLLECTION</h5>
            <div class="single-carousel__linebox">
              <div class="single-carousel__line"></div>
              <div class="single-carousel__line_red"></div>
              <div class="single-carousel__line"></div>
            </div>
            <h4>Moschino Cheap And Chic</h4>
            <p class="single-carousel__text">Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely
              visualize parallel core competencies rather than exceptional portals.</p>
            <div class="single-carousel__md">
              <p>Material:<span>Cotton</span></p>
              <p>Designer:<span>Binburhan</span></p>
            </div>
            <p class="single-carousel__price">$561</p>
            <div class="single-carousel__hl"></div>
            <div class="single-carousel__selectorbox">
              <div class="single-carousel__selector">
                <p>Choose color</p>
                <select name="color" id="color">
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Choose size</p>
                <select name="size" id="size">
                  <option value="XXS">XXS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  l
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Quantity</p>
                <input type="number" name="quantity" placeholder='1' id="quantity">
              </div>
            </div>
            <button class='single-carousel__button hover' type="button">
              <img src="../assets/imgs/cart-red.png" alt="cart-red">
              <p>Add to cart</p>
            </button>
          </div>
        </div>
        <div class="carousel-item single-carousel__slide">
          <div class="single-carousel__img">
            <img src="../assets/imgs/product-big.png" alt="product-big">
          </div>
          <div class="single-carousel__desc padding-site">
            <h5>WOMEN COLLECTION</h5>
            <div class="single-carousel__linebox">
              <div class="single-carousel__line"></div>
              <div class="single-carousel__line_red"></div>
              <div class="single-carousel__line"></div>
            </div>
            <h4>Moschino Cheap And Chic</h4>
            <p class="single-carousel__text">Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely
              visualize parallel core competencies rather than exceptional portals.</p>
            <div class="single-carousel__md">
              <p>Material:<span>Cotton</span></p>
              <p>Designer:<span>Binburhan</span></p>
            </div>
            <p class="single-carousel__price">$561</p>
            <div class="single-carousel__hl"></div>
            <div class="single-carousel__selectorbox">
              <div class="single-carousel__selector">
                <p>Choose color</p>
                <select name="color" id="color">
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Choose size</p>
                <select name="size" id="size">
                  <option value="XXS">XXS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  l
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Quantity</p>
                <input type="number" name="quantity" placeholder='1' id="quantity">
              </div>
            </div>
            <button class='single-carousel__button hover' type="button">
              <img src="assets/imgs/cart-red.png" alt="cart-red">
              <p>Add to cart</p>
            </button>
          </div>
        </div>
        <div class="carousel-item single-carousel__slide">
          <div class="single-carousel__img">
            <img src="../assets/imgs/product-big.png" alt="product-big">
          </div>
          <div class="single-carousel__desc padding-site">
            <h5>WOMEN COLLECTION</h5>
            <div class="single-carousel__linebox">
              <div class="single-carousel__line"></div>
              <div class="single-carousel__line_red"></div>
              <div class="single-carousel__line"></div>
            </div>
            <h4>Moschino Cheap And Chic</h4>
            <p class="single-carousel__text">Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely
              visualize parallel core competencies rather than exceptional portals.</p>
            <div class="single-carousel__md">
              <p>Material:<span>Cotton</span></p>
              <p>Designer:<span>Binburhan</span></p>
            </div>
            <p class="single-carousel__price">$561</p>
            <div class="single-carousel__hl"></div>
            <div class="single-carousel__selectorbox">
              <div class="single-carousel__selector">
                <p>Choose color</p>
                <select name="color" id="color">
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Choose size</p>
                <select name="size" id="size">
                  <option value="XXS">XXS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  l
                </select>
              </div>
              <div class="single-carousel__selector">
                <p>Quantity</p>
                <input type="number" name="quantity" placeholder='1' id="quantity">
              </div>
            </div>
            <button class='single-carousel__button hover' type="button">
              <img src="assets/imgs/cart-red.png" alt="cart-red">
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev single-carousel__control" type="button"
              data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-control-next single-carousel__control" type="button"
              data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <i class="fas fa-chevron-right"></i>
      </button>
    </section>
    <section class="also">
      <h3>You may like also</h3>
      <women class="product__box padding-site"/>
    </section>
  </main>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs.vue';
import women from '../components/women.vue';

export default {
  components: {
    breadcrumbs,
    women
  },
};
</script>

<style></style>
