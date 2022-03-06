<template>
  <div id="app">
    <div class="gradient__bg">
      <navbar/>
    </div>
      <div v-if="routeName == 'Trending'">
        <Header/>
      </div>
    
      <list-layout/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import ListLayout from './components/Layout/ListLayout.vue'
import Navbar from './components/Navbar/Navbar.vue'
export default {
  components:{
    Navbar,
    ListLayout,
    Header
  },
  data() {
    return{
      routeName: this.$route
    }
  },
}
  
</script>

<style lang="scss">
@import './assets/App.scss';
</style>
