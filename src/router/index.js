import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import('@/components/Layout/ListLayout.vue'),
    meta: { title: "Filman" },
    redirect: "/",
    children: [
      {
        path: '/',
        name: 'Trending',
        meta: { title: "Trending",  },
        component: () => import('@/views/Home.vue')
      },
      
    ]
  },
  {
    path: '/toprated',
    name: 'Top Rated',
    meta: { title: "Top Rated",  },
    component: () => import('@/views/TopRated/TopRated.vue')
  },
  {
    path: '/popular',
    name: 'Popular',
    meta: { title: "Popular",  },
    component: () => import('@/views/Popular/Popular.vue')
  },
  {
    path: '/nowplaying',
    name: 'Now Playing',
    meta: { title: "Now Playing",  },
    component: () => import('@/views/NowPlaying/NowPlaying.vue')
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    meta: { title: "Upcoming",  },
    component: () => import('@/views/Upcoming/Upcoming.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: { title: "Detail",  },
    component: () => import('@/views/Detail/Detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
