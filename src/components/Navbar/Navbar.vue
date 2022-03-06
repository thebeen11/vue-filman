<template>
  <div class="filman__navbar">
    <div class="filman__navbar-links">
      <div class="filman__navbar-links_logo">
        <img src="@/assets/filman.png" @click="routeTo('/')" />
      </div>
      <div class="filman__navbar-links_container">
        <p @click="routeTo('/popular')">Populer</p>
        <p @click="routeTo('/nowplaying')">Now Playing</p>
        <p @click="routeTo('/toprated')">Top Rated</p>
        <p @click="routeTo('/upcoming')">Upcoming</p>
      </div>
    </div>

    <div class="filman__navbar-menu">
      <b-icon
        @click="toggleMenu = true"
        v-if="toggleMenu == false"
        icon="three-dots-vertical"
        class="white-color"
        font-scale="2"
      ></b-icon>

      <b-icon
        @click="toggleMenu = false"
        v-if="toggleMenu == true"
        icon="x-circle"
        class="white-color"
        font-scale="2"
      ></b-icon>

      <div v-if="toggleMenu == true">
        <div class="filman__navbar-menu_container scale-up-center">
          <div class="filman__navbar-menu_container-links">
            <p @click="routeTo('/popular')">Populer</p>
            <p @click="routeTo('/nowplaying')">Now Playing</p>
            <p @click="routeTo('/toprated')">Top Rated</p>
            <p @click="routeTo('/upcoming')">Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleMenu: false,
    };
  },
  methods: {
    routeTo(router) {
      if (this.$route.path != router) {
        this.$router.push({
          path: `${router}`,
        });
      }
    },
  },
};
</script>
