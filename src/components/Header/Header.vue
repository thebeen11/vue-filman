<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="5000"
      indicators
      background="#fff"
     
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide v-for="item in trending" :key="item.id">
        <template #img>
          <div class="carousel-container">
            <div class="carousel-title">
              <h1>
                {{ item.original_title }}
              </h1>
              <span class="views">{{ item.popularity }} views</span>
              <p>
                {{ item.overview }}
              </p>
            </div>
          </div>
          <img class="d-block img-fluid w-100" :src="item.backdrop_path" :alt="item.original_title" />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      imgApi: process.env.VUE_APP_IMG_API,
      trending: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    async getData() {
      let params = {
        api_key: "a2fad2db23782cd1db5fe963718b86a4",
      };
      const res = await this.$store.dispatch("get/get/trending", params);
      this.trending = res.results;
      this.trending.forEach((el) => {
        el.backdrop_path = this.imgApi + el.backdrop_path;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 600px;
  object-fit: cover;
  opacity: 0.9;
}

.carousel-container {
  position: absolute;
  z-index: 2;
  top: 7rem;
  left: 5rem;
  max-width: 600px;
  
  .carousel-title {
    color: #fff;
  }

  .views {
    display: inline-block;
    margin: 1rem 0;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgba($color: #fff, $alpha: 0.5);
  }
}
</style>
