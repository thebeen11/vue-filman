<template>
   <div class="section__padding">
    <movie-card :items="topRated" :title="title" :loading="loading" @loadMore="loadMore"/>
  </div>
</template>

<script>
import MovieCard from '../../components/MovieCard/MovieCard.vue'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  data(){
    return{
      loading: false,
      topRated:[],
      imgApi: process.env.VUE_APP_IMG_API,
      title: this.$route.name,
      page: 1,
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    async getData(){
      try {
        this.loading =true
        let params ={
        api_key: 'a2fad2db23782cd1db5fe963718b86a4',
        page: this.page
      }
      const res = await this.$store.dispatch('get/get/topRated', params)
     this.topRated = res.results;
      this.topRated.forEach((el) => {
        el.poster_path = this.imgApi + el.poster_path;
      });
      this.loading = false
      } catch (error) {
        console.log(error);
        this.loading = false
      }
    },
    async loadMore(){
        this.page += 1
        let params ={
        api_key: 'a2fad2db23782cd1db5fe963718b86a4',
        page: this.page
      }
        const res = await this.$store.dispatch('get/get/topRated', params)
        res.results.forEach((el) =>{
             el.poster_path = this.imgApi + el.poster_path;
             this.topRated.push(el)
        })
        
    }
  }
}
</script>
