webpackJsonp([0],{"/Z6q":function(t,a){},"09tX":function(t,a){},ANRe:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAN1JREFUOI2t1DFqAkEUh/FvzB5AcwYD9oKFlmII5B7eR0Maj2Cp2Ki5QC6QQHIGSZ3ms9mFZdmF3Z157cz7zePPY7C+pnQs9UHdkAJUR+pFNes6SQ02Bo7ABGAQia2AzwKLAtU1cAJG1YNOGaqZum3o65ah+gjsgWXTndag+gQcKOVVV60yVJ+phN8bLIU/bPN41Nr0AkMIO+AV+EsC5ugZmAHfScAc/QEWwEcSMEdvwAvw1nip72+jrtX/amPU96Wu1FsyMEfH6lfRGL2HIYRfYA5cixeiJixNmqnvdy7gN2/6YPN9AAAAAElFTkSuQmCC"},"GkM+":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAChJREFUOI1j+I8f1DMggf///9fjU8zEQEUwatioYaOGjRo2ahitDQMAmoA+5zelpuYAAAAASUVORK5CYII="},KBZJ:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAGlJREFUOI3N1LENgDAMRNGDxWgYjNEoYK5Pg5SCyHLiK/gDPCmJYwEXsMsVLQ/MtxrcAWtwAM7BCXAMHgBz8AQYwwWwCy8A6QuPuyUdqwlruY/8i0exjY1tsG1fz7YcbOvLtmBPYCtDbw/sZME+yc4BnwAAAABJRU5ErkJggg=="},LwSB:function(t,a){},d68Z:function(t,a){},j7e0:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"Home",data:function(){return{time:null}},methods:{getCurrentTime:function(){this.time=(new Date).toLocaleTimeString()}},created:function(){var t=this;this.time=(new Date).toLocaleTimeString(),setInterval(function(){t.getCurrentTime()},1e3)}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("section",{attrs:{id:"header"}},[a("h1",[this._v("Hello Shisam,"),a("span",[this._v(" it's "+this._s(this.time))])])])},staticRenderFns:[]};var i=e("VU/8")(s,r,!1,function(t){e("LwSB")},"data-v-b0d1c26c",null).exports,l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{attrs:{id:"navigation"}},[a("router-link",{attrs:{to:"/"}},[this._v("Home")]),this._v(" |\n  "),a("a",{attrs:{href:"localhost:5000/api/library"}},[this._v("Library")]),this._v(" |\n  "),a("a",{attrs:{href:"localhost:5000/api/playing"}},[this._v("Current Song")])],1)},staticRenderFns:[]},n=e("VU/8")(null,l,!1,null,null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"bookmarks"}},[e("h2",[t._v("Bookmarks")]),t._v(" "),e("div",{staticClass:"row bookmarks__container"},[e("div",{staticClass:"bookmarks__container-type"},[e("h3",[t._v("Social")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Github")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Gitlab")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("LinkedIn")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Trello")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("PyPi")])])])]),t._v(" "),e("div",{staticClass:"bookmarks__container-type"},[e("h3",[t._v("Channels")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("/g/")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("/pol/")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("/a/")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("/w/")])])])]),t._v(" "),e("div",{staticClass:"bookmarks__container-type"},[e("h3",[t._v("Server")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Openmediavault")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Transmission")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Jackett")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Sonarr")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Headphones")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Jellyfin")])])])]),t._v(" "),e("div",{staticClass:"bookmarks__container-type"},[e("h3",[t._v("Other")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Suckless")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Deepl")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Keybr")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Ncmpcpp")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Qutebrowser")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.url.com",target:"_blank"}},[t._v("Nyaa")])])])])])])}]};var c=e("VU/8")({name:"Bookmarks"},_,!1,function(t){e("vXxH")},"data-v-5ca30126",null).exports,A=e("Dd8w"),o=e.n(A),v=e("NYxO"),u={name:"Player",computed:o()({},Object(v.b)(["playlists","playlist","connection"]))},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"playlist"}},[e("h2",[t._v("Playlist")]),t._v(" "),e("div",{staticClass:"row playlist__container"},[e("div",{staticClass:"playlist__list"},[e("ul",t._l(t.playlists,function(a){return e("li",{key:a.playlist},[e("a",{attrs:{href:"#"}},[t._v(t._s(a.playlist))])])}),0)]),t._v(" "),e("div",{staticClass:"playlist__content"},[e("div",{staticClass:"row"},t._l(t.playlist,function(a){return e("div",{key:a.pos,staticClass:"playlist__item"},[e("div",{staticClass:"playlist__item-cover"},[e("div",{staticClass:"playlist_item-header row"},[e("div",{staticClass:"playlist__item-index"},[t._v("#"+t._s(a.pos))]),t._v(" "),e("div",{staticClass:"playlist__item-remove"},[t._v("Remove")])])]),t._v(" "),e("div",{staticClass:"playlist__item-info"},[e("div",{staticClass:"scroll"},[e("div",{staticClass:"info-title"},[t._v(t._s(a.title))]),t._v(" "),e("div",{staticClass:"info-album"},[t._v(t._s(a.album))]),t._v(" "),e("div",{staticClass:"info-artist"},[t._v(t._s(a.artist))])])])])}),0)])])])},staticRenderFns:[]};var p=e("VU/8")(u,h,!1,function(t){e("d68Z")},"data-v-3001856e",null).exports,w={name:"Player",computed:o()({},Object(v.b)(["currentSong","mpdStatus","connection"]))},m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("aside",{staticClass:"player",attrs:{id:"player"}},[s("div",{staticClass:"row player__row"},[s("div",{staticClass:"player__bar"},[s("div",{staticClass:"player__progress",style:{width:t.mpdStatus.progress+"%"}})])]),t._v(" "),s("div",{staticClass:"row player__row"},[t._m(0),t._v(" "),s("div",{staticClass:"player__cover"},[s("div",{staticClass:"player__toggle"},["play"===t.mpdStatus.state?s("img",{attrs:{src:e("GkM+"),alt:"pause"}}):s("img",{attrs:{src:e("KBZJ"),alt:"play"}})])]),t._v(" "),s("div",{staticClass:"player__info"},[s("div",{staticClass:"player__title"},[s("span",[t._v(t._s(t.currentSong.title))])]),t._v(" "),s("div",{staticClass:"player__album"},[t._v("\n          "+t._s(t.currentSong.album)+"\n        ")]),t._v(" "),s("div",{staticClass:"player__artist"},[t._v("\n          by "+t._s(t.currentSong.artist)+"\n        ")])]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"player__change player__previous"},[a("img",{attrs:{src:e("ANRe"),alt:"previous"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"player__change player__next"},[a("img",{attrs:{src:e("liws"),alt:"next"}})])}]};var d={name:"Home",components:{Header:i,Navigation:n,Bookmarks:c,Playlist:p,Player:e("VU/8")(w,m,!1,function(t){e("/Z6q")},"data-v-16e4d574",null).exports}},g={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Header"),this._v(" "),a("Bookmarks"),this._v(" "),a("Player"),this._v(" "),a("Playlist")],1)},staticRenderFns:[]};var f=e("VU/8")(d,g,!1,function(t){e("09tX")},"data-v-4c8c7a9d",null);a.default=f.exports},liws:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAOJJREFUOI2tlD2OwjAQhb+JoNySE0ADLdUiaKgXLsBBOAkFcAhW2hsA4ucCbAMnoIMW6VEkSFGU4MluXmNLtj/PmycbSXNJdUpKUlc5IhnXkhpVAKNkfQDsJLXLVppVlJq3gKOkr6qAAB/At6Tpn4l5fUi0eBdWKJQibYrCCoVSpD6wl9TxOg4BAZrAQdKoKiDEYa08YXmBbtWc++7AxMx+qgBegLGZnTw3hyxvgU8vLARcAkMzu3phQO5LeXjS9L6Um5yfQxEwHcqZuPm/pSxm9OrhBuj9FwaApFmmUu+5XMtPuOtKT/Dv4iQAAAAASUVORK5CYII="},vXxH:function(t,a){}});
//# sourceMappingURL=0.3e9de396a980eca771dd.js.map