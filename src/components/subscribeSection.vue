<template>
  <section class="subscribe__section padding-site">
    <div class="subscribe-carousel">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators subscribe-carousel__pagiblock">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active hover"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="hover"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="hover"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <figure class="subscribe-carousel__slide">
              <img src="../assets/imgs/avatar.png" alt="avatar" />
              <figcaption class="subscribe-carousel__content">
                <p class="subscribe-carousel__quote">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum a. Aliquam condimentum mattis neque
                  sed pretium”
                </p>
                <p class="subscribe-carousel__author">
                  Bin Burhan
                </p>
                <p class="subscribe-carousel__location">
                  Dhaka, Bd
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure class="subscribe-carousel__slide">
              <img src="../assets/imgs/avatar.png" alt="avatar" />
              <figcaption class="subscribe-carousel__content">
                <p class="subscribe-carousel__quote">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum a. Aliquam condimentum mattis neque
                  sed pretium”
                </p>
                <p class="subscribe-carousel__author">
                  Bin Burhan
                </p>
                <p class="subscribe-carousel__location">
                  Dhaka, Bd
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure class="subscribe-carousel__slide">
              <img src="../assets/imgs/avatar.png" alt="avatar" />
              <figcaption class="subscribe-carousel__content">
                <p class="subscribe-carousel__quote">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum a. Aliquam condimentum mattis neque
                  sed pretium”
                </p>
                <p class="subscribe-carousel__author">
                  Bin Burhan
                </p>
                <p class="subscribe-carousel__location">
                  Dhaka, Bd
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="subscribe__form">
      <h2>subscribe</h2>
      <h3>FOR OUR NEWLETTER AND PROMOTION</h3>
      <form action="#">
        <input
          type="email"
          id="subscribe__email"
          placeholder="Enter Your Email"
        />
        <button type="submit" class="hover">Subscribe</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
