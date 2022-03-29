<template>
  <div>
    <div class="search-container">
      <b-form-input
        v-model="text"
        placeholder="Search Movie"
        @input="getData"
      ></b-form-input>
      <div class="result-container gradient__bg scale-up-center" v-if="searchResult.length > 0 && text != ''">
        <div
          class="result-content"
          v-for="(item, i) in searchResult"
          :key="item.id"
          
        >
          <div class="image" v-if="i < 5" @click="viewDetail(item)">
            <img :src="item.poster_path" :alt="item.original_title" />
          </div>
          <div class="text" v-if="i < 5" @click="viewDetail(item)">
            <p class="title">
              {{ item.original_title }}
            </p>
            <p class="year">
              {{ item.release_date | formatYear }}
            </p>
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
      searchResult: [],
      imgApi: process.env.VUE_APP_IMG_API,
      loading: false,
      text: null,
    };
  },
  methods: {
    async getData() {
      if (this.text !== null && this.text !== '') {
          try {
        this.loading = true;
        let params = {
          api_key: "a2fad2db23782cd1db5fe963718b86a4",
          query: this.text,
        };
        const res = await this.$store.dispatch("get/get/search", params);
        this.searchResult = res.results;
        this.searchResult.forEach((el) => {
          el.poster_path = this.imgApi + el.poster_path;
        });
        
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
      }
    },
    viewDetail(item){
        this.$emit('viewDetail', item)
    }
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  flex-direction: column;
  position: relative;
  .result-container {
    z-index: 7;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    padding: 1rem;
    position: absolute;
    top: 2.4rem;
    right: 0.3rem;
    margin-top: 1rem;
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 0 5 rgba(0, 0, 0, 1);
    .result-content {
      display: flex;
      flex-direction: row;
      background: #010c20;
      width: 300px;
      margin: 5px 0;
      border-radius: 5px;
      overflow: hidden;
      cursor: pointer;
      .image {
        display: flex;
        width: 70px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 70px;
        }
      }
      .text {
        display: flex;
        flex-direction: column;
        margin: 0.2rem 1rem;
        .title {
          color: #fff;
          font-weight: 500;
          font-size: 18px;
          line-height: 25px;
          text-transform: capitalize;

          margin: 1rem 0;
        }
        .year {
          color: #fff;
          font-weight: 300;
          font-size: 13px;

          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
