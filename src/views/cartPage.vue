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
          <tr>
            <td>
              <figure class="cart__product">
                <a href="#"
                  ><img
                    src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-1.png"
                    alt="man-1"
                /></a>
                <figcaption>
                  <h5>Mango People T-shirt</h5>
                  <p>Color: <span>Red</span></p>
                  <p>Size: <span>XL</span></p>
                </figcaption>
              </figure>
            </td>
            <td>150</td>
            <td><input type="number" /></td>
            <td>FREE</td>
            <td>300</td>
            <td>
              <button type="button"><i class="fas fa-times-circle"></i></button>
            </td>
          </tr>
          <tr>
            <td>
              <figure class="cart__product">
                <a href="#"
                  ><img
                    src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-2.png"
                    alt="man-2"
                /></a>
                <figcaption>
                  <h5>Mango People T-shirt</h5>
                  <p>Color: <span>Red</span></p>
                  <p>Size: <span>XL</span></p>
                </figcaption>
              </figure>
            </td>
            <td>150</td>
            <td><input type="number" /></td>
            <td>FREE</td>
            <td>300</td>
            <td>
              <button type="button"><i class="fas fa-times-circle"></i></button>
            </td>
          </tr>
          <tr>
            <td>
              <figure class="cart__product">
                <a href="#"
                  ><img
                    src="https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/man-3.png"
                    alt="man-3"
                /></a>
                <figcaption>
                  <h5>Mango People T-shirt</h5>
                  <p>Color: <span>Red</span></p>
                  <p>Size: <span>XL</span></p>
                </figcaption>
              </figure>
            </td>
            <td>150</td>
            <td><input type="number" /></td>
            <td>FREE</td>
            <td>300</td>
            <td>
              <button type="button"><i class="fas fa-times-circle"></i></button>
            </td>
          </tr>
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

export default {
  components: {
    breadcrumbs,
  },
};
</script>

<style></style>
