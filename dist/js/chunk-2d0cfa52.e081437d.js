(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfa52"],{6530:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section__padding"},[n("movie-card",{attrs:{items:e.upcoming,title:e.title,loading:e.loading},on:{loadMore:e.loadMore}})],1)},r=[],o=n("1da1"),i=(n("96cf"),n("b0c0"),n("d3b7"),n("159b"),n("da26")),c={name:"Home",components:{MovieCard:i["a"]},data:function(){return{loading:!1,upcoming:[],imgApi:"https://image.tmdb.org/t/p/original",title:this.$route.name,page:1}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,n={api_key:"a2fad2db23782cd1db5fe963718b86a4",page:e.page},t.next=5,e.$store.dispatch("get/get/upcoming",n);case 5:a=t.sent,e.upcoming=a.results,e.upcoming.forEach((function(t){t.poster_path=e.imgApi+t.poster_path})),e.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0),e.loading=!1;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},loadMore:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.page+=1,n={api_key:"a2fad2db23782cd1db5fe963718b86a4",page:e.page},t.next=4,e.$store.dispatch("get/get/upcoming",n);case 4:a=t.sent,a.results.forEach((function(t){t.poster_path=e.imgApi+t.poster_path,e.upcoming.push(t)}));case 6:case"end":return t.stop()}}),t)})))()}}},s=c,p=n("2877"),u=Object(p["a"])(s,a,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0cfa52.e081437d.js.map