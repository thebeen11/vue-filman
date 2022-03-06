<template>
  <div>
    <div class="title">
      <h4>{{ title }}</h4>
      <div class="search">
          <SearchBar @viewDetail="viewDetail"/>
      </div>
    </div>
    <div class="movie-card-container" v-if="loading">
      <div class="movie-card" v-for="a in 20" :key="a">
        <b-skeleton-img height="400px"></b-skeleton-img>
      </div>
    </div>
    <div v-else class="movie-card-container">
      <div
        class="movie-card"
        v-for="item in items"
        :key="item.id"
        @click="viewDetail(item)"
      >
        <img :src="item.poster_path" />
        <div class="rating">
          <b-icon class="star" icon="star-fill" variant="warning"></b-icon>
          <p>{{ item.vote_average }}</p>
        </div>
        <div class="des-container">
          <div class="content">
            <h1>{{ item.title }}</h1>
            <span class="views">{{ item.popularity }} views</span>
            <p>{{ item.overview }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="button" v-if="noMore != true">
      <b-button @click="loadMore" variant="outline-primary">Load More</b-button>
    </div>
  </div>
</template>

<script>
import SearchBar from '../SearchBar/SearchBar.vue';
export default {
  components: { SearchBar },
  props: {
    items: Array,
    title: String,
    loading: Boolean,
    noMore: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    loadMore() {
      this.$emit("loadMore");
    },
    viewDetail(item) {
      this.$router.push({
        path: `/detail`,
        query: {
          id: item.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
display: flex;
justify-content: space-between;
  margin-bottom: 1.5rem;
  h4 {
    color: #fff;
    flex: 1;
  }
  .search{
      align-items: flex-end;
  }
}

.movie-card-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .movie-card {
    width: 230px;
    height: 330px;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    margin: 0 0 3rem 0;
    cursor: pointer;
    img {
      width: 230px;
      height: 330px;
    }
    .rating {
      position: absolute;
      z-index: 3;
      top: 0;
      right: 0;
      margin: 1rem;
      width: 50px;
      height: 25px;
      background: rgba($color: #000, $alpha: 0.7);
      border-radius: 0.4rem;
      display: flex;
      align-content: center;
      .star {
        margin: 0.2rem;
      }
      p {
        color: #fff;
        font-size: 11px;
        margin: 0.2rem;
      }
    }
    &:hover {
      z-index: 3;
      -webkit-animation: scale-up-center 0.4s
        cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

      .des-container {
        z-index: 3;
        position: absolute;
        width: 240px;
        bottom: 0;
        background-blend-mode: multiply;
        background: linear-gradient(0deg, #000 60%, transparent);
        .content {
          margin: 1rem;
          h1 {
            color: #fff;
            font-size: 16px;
          }

          span {
            font-size: 11px;
          }
          .views {
            display: inline-block;
            margin: 0.3rem 0;
            color: #fff;
            padding: 5px;

            border-radius: 5px;
            border: 1px solid rgba($color: #fff, $alpha: 0.5);
          }
          p {
            color: #fff;
            font-size: 9px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    .movie-card {
      width: 210px;
      height: 310px;
      margin-right: 0.2rem;
      img {
        width: 210px;
        height: 310px;
      }
      .des-container {
        z-index: 3;
        position: absolute;
        width: 210px;
        bottom: 0;
        background-blend-mode: multiply;
        background: linear-gradient(0deg, #000 60%, transparent);
        .content {
          margin: 1rem 1rem;
          h1 {
            color: #fff;
            font-size: 16px;
          }

          span {
            font-size: 11px;
          }
          .views {
            display: inline-block;
            margin: 0.3rem 0;
            color: #fff;
            padding: 5px;

            border-radius: 5px;
            border: 1px solid rgba($color: #fff, $alpha: 0.5);
          }
          p {
            color: #fff;
            font-size: 9px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 770px) {
  .movie-card-container {
    justify-content: space-around;
    .movie-card {
      width: 230px;
      height: 330px;
      img {
        width: 230px;
        height: 330px;
      }
      .des-container {
        width: 230px;
      }
    }
  }
}

@media screen and (max-width: 770px) {
  .movie-card-container {
    justify-content: space-around;
    .movie-card {
      width: 100%;

      img {
        width: 100%;
        object-fit: cover;
      }
      .des-container {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 300px) {
  .title{
      flex-direction: column;
  }
}
</style>
