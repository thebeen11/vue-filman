<template>
    <div class="gradient__bg section__padding">
        <div class="footer">
            <img src="@/assets/filman.png" @click="routeTo" />
            <div class="made">
                <p>Made by</p>
                <b-icon class="icon" icon="github" variant="white"></b-icon>
            <a href="https://github.com/thebeen11"> thebeen11</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    methods:{
        routeTo() {
      if (this.$route.path != "/") {
        this.$router.push({
          path: `/`,
        });
      }
    },
    }
}
</script>

<style lang="scss" scoped>
.footer{
    display: flex;
    justify-content:center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width: 200px;
    }
    .made{
        display: flex;
        
        align-content: flex-end;
        p{
        color: #fff;
        margin-right: 0.5rem;

    }
    .icon{
        margin: 0.3rem;
    }
    a{
        text-align: right;
        text-decoration: none;
        color: #fff;
    }
    }
}
</style>