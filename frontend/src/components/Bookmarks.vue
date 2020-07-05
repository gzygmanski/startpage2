<template>
  <section id="bookmarks">
    <h2>Bookmarks</h2>
    <div class="row bookmarks__container">
      <div class="bookmarks__container-type">
        <h3>Social</h3>
        <ul>
          <li><a href="http://www.url.com" target="_blank">Github</a></li>
          <li><a href="http://www.url.com" target="_blank">Gitlab</a></li>
          <li><a href="http://www.url.com" target="_blank">Facebook</a></li>
          <li><a href="http://www.url.com" target="_blank">LinkedIn</a></li>
          <li><a href="http://www.url.com" target="_blank">Trello</a></li>
          <li><a href="http://www.url.com" target="_blank">PyPi</a></li>
        </ul>
      </div>
      <div class="bookmarks__container-type">
        <h3>Channels</h3>
        <ul>
          <li><a href="http://www.url.com" target="_blank">/g/</a></li>
          <li><a href="http://www.url.com" target="_blank">/pol/</a></li>
          <li><a href="http://www.url.com" target="_blank">/a/</a></li>
          <li><a href="http://www.url.com" target="_blank">/w/</a></li>
        </ul>
      </div>
      <div class="bookmarks__container-type">
        <h3>Server</h3>
        <ul>
          <li><a href="http://www.url.com" target="_blank">Openmediavault</a></li>
          <li><a href="http://www.url.com" target="_blank">Transmission</a></li>
          <li><a href="http://www.url.com" target="_blank">Jackett</a></li>
          <li><a href="http://www.url.com" target="_blank">Sonarr</a></li>
          <li><a href="http://www.url.com" target="_blank">Headphones</a></li>
          <li><a href="http://www.url.com" target="_blank">Jellyfin</a></li>
        </ul>
      </div>
      <div class="bookmarks__container-type">
        <h3>Other</h3>
        <ul>
          <li><a href="http://www.url.com" target="_blank">Suckless</a></li>
          <li><a href="http://www.url.com" target="_blank">Deepl</a></li>
          <li><a href="http://www.url.com" target="_blank">Keybr</a></li>
          <li><a href="http://www.url.com" target="_blank">Ncmpcpp</a></li>
          <li><a href="http://www.url.com" target="_blank">Qutebrowser</a></li>
          <li><a href="http://www.url.com" target="_blank">Nyaa</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Bookmarks'
}
</script>

<style scoped>
.bookmarks__container {
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  text-align: left;
}

@media only screen and (max-width: 800px) {
  .bookmarks__container {
    justify-content: space-between;
  }
}

.bookmarks__container-type {
  padding: 2rem;
  margin: 10px 20px;
}
</style>
