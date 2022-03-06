<template>
  <div class="detail-container section__padding gradient__bg">
    <div class="detail-poster">
      <div class="poster-container">
          <div class="detail-released">
          <h1>
              {{detailData.release_date | formatDate}}
          </h1>
          <div></div>
          <h5>
              {{detailData.release_date | formatMonthYear}}
          </h5>
      </div>
      <img :src="detailData.poster_path" :alt="detailData.original_title" />
      </div>
    </div>
    <div class="detail-description">
      <h1>
        {{ detailData.original_title }}
      </h1>
      <div class="sub-detail">
        <span class="views">{{ detailData.popularity }} views</span>
        <div class="rating">
          <b-icon class="star" icon="star-fill" variant="warning"></b-icon>
          <p>{{ detailData.vote_average }}</p>
        </div>
       
      </div>
       <div class="genre">
            <p v-for="(item, i) in detailData.genres" :key="item.id">
               {{ `${item.name}` + `${ i !== detailData.genres.length -1 ? '/' : ''}`}}
            </p>
        </div>
      <div class="overview">
          <p>
              {{detailData.overview}}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailData: {},
      imgApi: process.env.VUE_APP_IMG_API,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        this.loading = true;
        let params = {
          api_key: "a2fad2db23782cd1db5fe963718b86a4",
          id: this.$route.query.id,
        };
        const res = await this.$store.dispatch("get/get/getDetail", params);
        this.detailData = res;
        this.detailData.poster_path = this.imgApi + res.poster_path;

        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-container {
  display: flex;
  justify-content: center;
  color: #fff;
  .detail-poster {
    flex: 1;
    display: flex;
    justify-content: center;
    
    .poster-container{
        position: relative;
        max-width: 400px;
    
    img {
      max-width: 400px;
    }
    .detail-released{
        z-index: 2;
        position: absolute;
        background: #ff4820;
        width: 90px;
        height: 120px;
        top: 3rem;
        right: -2.3rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 0.6rem;
        h1{
            font-weight: 800;
            font-size: 32px;
        }
        div{
            background: #fff;
            width: 30px;
            height: 5px;
            margin-bottom: 0.4rem;
        }
        h5{
            font-size: 14px;
        }

    }
  }
  }
  .detail-description {
    flex: 1;
    
    .sub-detail {
      display: flex;
      
      align-items: baseline;
      .views {
        
        margin: 0.3rem 0;
        color: #fff;
        padding: 7px;
        margin-right: 1rem;
        border-radius: 5px;
        border: 1px solid rgba($color: #fff, $alpha: 0.5);
      }

      .rating {
        display: flex;
        margin: 0.3rem 0;
        color: #fff;
        padding: 5px;
        margin-right: 1rem;
        border-radius: 5px;
        border: 1px solid rgba($color: #fff, $alpha: 0.5);
        p {
          margin: 0;
          padding: 2px;
        }
        .star {
          align-content: center;
          margin: 5px 0;
          padding: 2px;
        }
      }
      
    }
    .genre{
          display: flex;
          margin: 1rem 0;
         p{
             color: grey;
         }
      }
    .overview{
        justify-content: space-around;
        display: block;
        max-width: 600px;
    }
  }
}
</style>
