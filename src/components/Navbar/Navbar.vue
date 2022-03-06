<template>
  <div class="filman__navbar">
    <div class="filman__navbar-links">
      <div class="filman__navbar-links_logo">
        <img src="@/assets/filman.png" @click="routeTo" />
      </div>
      <Menu />
    </div>
    <!-- <div class="filman__navbar-sign">
      <p>Sign in</pç
      <button type="button">Sign up</button>
    </div> -->
    <!-- <div class="filman__navbar-menu">
      <b-button @click="toggleMenu = true" v-if="toggleMenu == false">
        <b-icon
          icon="three-dots-vertical"
          class="white-color"
          font-scale="2"
        ></b-icon>
      </b-button>
      <b-button @click="toggleMenu = false" v-if="toggleMenu == true">
        <b-icon icon="x-circle" class="white-color" font-scale="2"></b-icon>
      </b-button>
      <div v-if="toggleMenu == true">
        <div class="filman__navbar-menu_container scale-up-center">
          <div class="filman__navbar-menu_container-links">
            <Menu />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  components: { Menu },
  data() {
    return {
      toggleMenu: false,
    };
  },
  methods: {
    routeTo() {
      if (this.$route.path != "/") {
        this.$router.push({
          path: `/`,
        });
      }
    },
  },
};
</script>
