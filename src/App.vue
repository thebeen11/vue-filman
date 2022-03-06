<template>
  <div id="app">
    <div class="gradient__bg">
      <navbar/>
    </div>
      <div v-if="routeName == 'Trending'">
        <Header/>
      </div>
    
      <list-layout/>
      <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'
import ListLayout from './components/Layout/ListLayout.vue'
import Navbar from './components/Navbar/Navbar.vue'
export default {
  components:{
    Navbar,
    ListLayout,
    Header,
    Footer
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
