(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216d79"],{c3d7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section__padding"},[a("movie-card",{attrs:{items:e.NowPlaying,title:e.title,loading:e.loading},on:{loadMore:e.loadMore}})],1)},r=[],o=a("1da1"),i=(a("96cf"),a("b0c0"),a("d3b7"),a("159b"),a("da26")),s={name:"Home",components:{MovieCard:i["a"]},data:function(){return{loading:!1,NowPlaying:[],imgApi:"https://image.tmdb.org/t/p/original",title:this.$route.name,page:1}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,a={api_key:"a2fad2db23782cd1db5fe963718b86a4",page:e.page},t.next=5,e.$store.dispatch("get/get/nowPlaying",a);case 5:n=t.sent,e.NowPlaying=n.results,e.NowPlaying.forEach((function(t){t.poster_path=e.imgApi+t.poster_path})),e.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0),e.loading=!1;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},loadMore:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.page+=1,a={api_key:"a2fad2db23782cd1db5fe963718b86a4",page:e.page},t.next=4,e.$store.dispatch("get/get/nowPlaying",a);case 4:n=t.sent,n.results.forEach((function(t){t.poster_path=e.imgApi+t.poster_path,e.NowPlaying.push(t)}));case 6:case"end":return t.stop()}}),t)})))()}}},c=s,p=a("2877"),d=Object(p["a"])(c,n,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d216d79.5fb71a89.js.map