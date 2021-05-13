<template>
  <main>
    <breadcrumbs>
      <router-link to="/">Home</router-link>
      <template v-slot:parent>
        <router-link to="/cart">Cart</router-link> /
      </template>
      <template v-slot:title>
        Checkout
      </template>
    </breadcrumbs>
    <section class="checkout padding-site">
      <details open>
        <summary>
          01. Shipping Adress
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          02. Billing Information
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          03. Shipping Information
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover" >Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          04. Shipping Method
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          05. Payment Method
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
      <details>
        <summary>
          06. Order Reviev
        </summary>
        <div class="checkout__formbox">
          <form action="#" class="checkout__newuser">
            <h4>Check as a guest or register</h4>
            <p>Register with us for future convenience</p>
            <input type="radio" checked name="newuser" id="guest"><label for="guest">checkout as guest</label>
            <br>
            <input type="radio" name="newuser" id="register"><label for="register">register</label>
            <h4>register and save time!</h4>
            <p>Register with us for future convenience</p>
            <div class="checkout__list">
              <p>&#187; Fast and easy checkout</p>
              <p>&#187; Easy access to your order history and status</p>
            </div>
            <button type="button" class="hover">Continue</button>
          </form>
          <form action="#" class="checkout_olduser">
            <h4>Already registed?</h4>
            <p>Please log in below</p>
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="text" name="email" id="email" required>
            <h4>Password <span>*</span></h4>
            <input type="password" name="password" id="password" required>
            <p class="p_red">* Required Fields</p>
            <div class="checkout__button-block">
              <button type="button" class="hover">Log In</button>
              <p class="p_black">Forgot password?</p>
            </div>
          </form>
        </div>
      </details>
      <div class="checkout__hl"></div>
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
