<template>
  <div class="filman__navbar-links_container">
    <p @click="routeTo('/popular')">Populer</p>
    <p @click="routeTo('/nowplaying')">Now Playing</p>
    <p @click="routeTo('/toprated')">Top Rated</p>
    <p @click="routeTo('/upcoming')">Upcoming</p>
    
  </div>
</template>

<script>
export default {
  data() {
      return{
          
      }
  },
  methods:{
      routeTo(router){
        if(this.$route.path != router){
        this.$router.push({
        path: `${router}`,
        
      })
        }
      }
  }
};
</script>
