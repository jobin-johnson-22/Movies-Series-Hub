(this["webpackJsonpmovies-series-hub"]=this["webpackJsonpmovies-series-hub"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(13),r=a.n(s),i=(a(110),a(222)),o=a(72),l=a(15),d=(a(111),a(112),a(2)),u=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:"\ud83c\udfac Entertainment Hub \ud83c\udfa5"})})},j=a(10),b=a(211),p=a(214),f=a(216),O=a(94),h=a.n(O),m=a(95),v=a.n(m),g=a(68),x=a.n(g),_=a(96),y=a.n(_),w=Object(b.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function S(){var e=w(),t=c.a.useState(0),a=Object(j.a)(t,2),s=a[0],r=a[1],i=Object(l.f)();return Object(n.useEffect)((function(){0===s?i.push("/"):1===s?i.push("/movies"):2===s?i.push("/series"):3===s&&i.push("/search")}),[s,i]),Object(d.jsxs)(p.a,{showLabels:!0,className:e.root,value:s,onChange:function(e,t){r(t)},children:[Object(d.jsx)(f.a,{style:{color:"white"},label:"Trending",icon:Object(d.jsx)(h.a,{})}),Object(d.jsx)(f.a,{style:{color:"white"},label:"Movies",icon:Object(d.jsx)(v.a,{})}),Object(d.jsx)(f.a,{style:{color:"white"},label:"TV Series",icon:Object(d.jsx)(y.a,{})}),Object(d.jsx)(f.a,{style:{color:"white"},label:"Search",icon:Object(d.jsx)(x.a,{})})]})}var k=a(14),N=a.n(k),C=a(20),P=a(21),T=a.n(P),M=a(99),E=a(217),G=a(225),I=Object(M.a)({palette:{type:"dark"}}),U=function(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?10:a;return Object(d.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(d.jsx)(E.a,{theme:I,children:Object(d.jsx)(G.a,{count:n,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},color:"primary"})})})},B=a(220),z="https://image.tmdb.org/t/p/w300",D="https://image.tmdb.org/t/p/w500",F="https://www.movienewz.com/img/films/poster-holder.jpg",V=(a(139),a(226)),A=a(218),J=a(178),L=(a(140),a(219)),q=a(98),H=a.n(q),R=a(97),W=a.n(R),K=(a(174),a(175),function(e){return e.preventDefault()}),Q=function(e){var t=e.id,a=e.media_type,c=Object(n.useState)([]),s=Object(j.a)(c,2),r=s[0],i=s[1],o=r.map((function(e){return Object(d.jsxs)("div",{className:"carouselItem",children:[Object(d.jsx)("img",{src:e.profile_path?"".concat(z,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:K,className:"carouselItem__img"}),Object(d.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),l=function(){var e=Object(C.a)(N.a.mark((function e(){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=").concat("81a9386adede644bb42dcf3ffb9c69fa","&language=en-US"));case 2:n=e.sent,c=n.data,i(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),Object(d.jsx)(W.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:o,autoPlay:!0})},X=Object(b.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));function Y(e){var t=e.children,a=e.media_type,c=e.id,s=X(),r=Object(n.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)(),b=Object(j.a)(u,2),p=b[0],f=b[1],O=Object(n.useState)(),h=Object(j.a)(O,2),m=h[0],v=h[1],g=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"?api_key=").concat("81a9386adede644bb42dcf3ffb9c69fa","&language=en-US"));case 2:t=e.sent,n=t.data,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"/videos?api_key=").concat("81a9386adede644bb42dcf3ffb9c69fa","&language=en-US"));case 2:n=e.sent,s=n.data,v(null===(t=s.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g(),x()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){l(!0)},children:t}),Object(d.jsx)(V.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:o,onClose:function(){l(!1)},closeAfterTransition:!0,BackdropComponent:A.a,BackdropProps:{timeout:500},children:Object(d.jsx)(J.a,{in:o,children:p&&Object(d.jsx)("div",{className:s.paper,children:Object(d.jsxs)("div",{className:"ContentModal",children:[Object(d.jsx)("img",{src:p.poster_path?"".concat(D,"/").concat(p.poster_path):F,alt:p.name||p.title,className:"ContentModal__portrait"}),Object(d.jsx)("img",{src:p.backdrop_path?"".concat(D,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.name||p.title,className:"ContentModal__landscape"}),Object(d.jsxs)("div",{className:"ContentModal__about",children:[Object(d.jsxs)("span",{className:"ContentModal__title",children:[p.name||p.title," (",(p.first_air_date||p.release_date||"-----").substring(0,4),")"]}),p.tagline&&Object(d.jsx)("i",{className:"tagline",children:p.tagline}),Object(d.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(d.jsx)("div",{children:Object(d.jsx)(Q,{id:c,media_type:a})}),Object(d.jsx)(L.a,{variant:"contained",startIcon:Object(d.jsx)(H.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(m),children:"Watch the Trailer"})]})]})})})})]})}var Z=function(e){var t=e.id,a=e.poster,n=e.title,c=e.date,s=e.media_type,r=e.vote_average;return Object(d.jsxs)(Y,{media_type:s,id:t,children:[Object(d.jsx)(B.a,{badgeContent:r,color:r>6?"primary":"secondary"}),Object(d.jsx)("img",{className:"poster",src:a?"".concat(z).concat(a):F,alt:n}),Object(d.jsx)("b",{className:"title",children:n}),Object(d.jsxs)("span",{className:"subTitle",children:["tv"===s?"TV Series":"Movie",Object(d.jsx)("span",{className:"subTitle",children:c})]})]})},$=(a(176),function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],l=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("81a9386adede644bb42dcf3ffb9c69fa","&page=").concat(a));case 2:t=e.sent,n=t.data,o(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[a]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pageTitle",children:"Trending"}),Object(d.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(d.jsx)(Z,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(d.jsx)(U,{setPage:c})]})}),ee=a(74),te=a(227),ae=function(e){var t=e.selectedGenres,a=e.setSelectedGenres,c=e.genres,s=e.setGenres,r=e.setPage,i=e.type,o=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/genre/".concat(i,"/list?api_key=").concat("81a9386adede644bb42dcf3ffb9c69fa","&language=en-US"));case 2:t=e.sent,a=t.data,s(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return o(),function(){s({})}}),[]),Object(d.jsxs)("div",{style:{padding:"6px 0"},children:[t&&t.map((function(e){return Object(d.jsx)(te.a,{label:e.name,style:{margin:2},size:"small",color:"primary",clickable:!0,onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),s([].concat(Object(ee.a)(c),[e])),r(1)}(e)}},e.id)})),c&&c.map((function(e){return Object(d.jsx)(te.a,{label:e.name,style:{margin:2},size:"small",clickable:!0,onClick:function(){return function(e){a([].concat(Object(ee.a)(t),[e])),s(c.filter((function(t){return t.id!==e.id}))),r(1)}(e)}},e.id)}))]})},ne=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},ce=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(),u=Object(j.a)(l,2),b=u[0],p=u[1],f=Object(n.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)([]),g=Object(j.a)(v,2),x=g[0],_=g[1],y=ne(h),w=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("\n    https://api.themoviedb.org/3/discover/movie?api_key=".concat("81a9386adede644bb42dcf3ffb9c69fa","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(y));case 2:t=e.sent,n=t.data,o(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w()}),[a,y]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pageTitle",children:"Movies"}),Object(d.jsx)(ae,{type:"movie",selectedGenres:h,setSelectedGenres:m,genres:x,setGenres:_,setPage:c}),Object(d.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(d.jsx)(Z,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),b>1&&Object(d.jsx)(U,{setPage:c,numOfPages:b})]})},se=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(),u=Object(j.a)(l,2),b=u[0],p=u[1],f=Object(n.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)([]),g=Object(j.a)(v,2),x=g[0],_=g[1],y=ne(h),w=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("\n    https://api.themoviedb.org/3/discover/tv?api_key=".concat("81a9386adede644bb42dcf3ffb9c69fa","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(y));case 2:t=e.sent,n=t.data,o(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w()}),[a,y]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pageTitle",children:"TV Series"}),Object(d.jsx)(ae,{type:"tv",selectedGenres:h,setSelectedGenres:m,genres:x,setGenres:_,setPage:c}),Object(d.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(d.jsx)(Z,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),b>1&&Object(d.jsx)(U,{setPage:c,numOfPages:b})]})},re=a(223),ie=a(224),oe=a(221),le=function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(1),u=Object(j.a)(l,2),b=u[0],p=u[1],f=Object(n.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),g=Object(j.a)(v,2),_=g[0],y=g[1],w=Object(M.a)({palette:{type:"dark",primary:{main:"#fff"}}}),S=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("81a9386adede644bb42dcf3ffb9c69fa","&language=en-US&query=").concat(i,"&page=").concat(b,"&include_adult=false"));case 3:t=e.sent,n=t.data,m(n.results),y(n.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),S()}),[a,b]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(E.a,{theme:w,children:[Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(re.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)(L.a,{onClick:S,variant:"contained",style:{marginLeft:10},children:Object(d.jsx)(x.a,{fontSize:"large"})})]}),Object(d.jsxs)(ie.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),p(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(d.jsx)(oe.a,{style:{width:"50%"},label:"Search Movies"}),Object(d.jsx)(oe.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(d.jsxs)("div",{className:"trending",children:[h&&h.map((function(e){return Object(d.jsx)(Z,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),i&&!h&&(a?Object(d.jsx)("h2",{children:"No Series Found"}):Object(d.jsx)("h2",{children:"No Movies Found"}))]}),_>1&&Object(d.jsx)(U,{setPage:p,numOfPages:_})]})};var de=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",component:$,exact:!0}),Object(d.jsx)(l.a,{path:"/movies",component:ce}),Object(d.jsx)(l.a,{path:"/series",component:se}),Object(d.jsx)(l.a,{path:"/search",component:le})]})})}),Object(d.jsx)(S,{})]})};r.a.render(Object(d.jsx)(de,{}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.35cb2328.chunk.js.map