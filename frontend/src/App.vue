<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1.2;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  background: #ffffff;
  color: #2e3440;
  font-weight: 300;
  font-family: "M+ 2m", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 18pt;
  font-weight: 500;
}

h2 {
  text-align: center;
  margin: 0 auto;
  font-size: 16pt;
  font-weight: 500;
}

h1:before, h2:before {
  content: ":: ";
}

h1:after, h2:after {
  content: "\005F";
}

h3 {
  font-size: 12pt;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: 500;
}

section {
  padding: 3rem 0;
}

a {
  font-size: 10pt;
  color: #5e81ac;
  text-decoration: none;
}

.router-link-exact-active {
  color: #81a1c1;
}

a:hover, .router-link-active:hover {
  transition: 0.1s;
  color: #81a1c1;
}

#app {
  text-align: center;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

</style>
