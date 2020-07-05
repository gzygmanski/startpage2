<template>
  <section id="playlist">
    <h2>Playlist</h2>
    <div class="row playlist__container">
      <div class="playlist__list">
        <ul>
          <li v-for="playlist in playlists" :key="playlist.playlist" ><a href="#">{{ playlist.playlist }}</a></li>
        </ul>
      </div>
      <div class="playlist__content">
        <div class="row">
          <div class="playlist__item" v-for="item in playlist" :key="item.pos">
            <div class="playlist__item-cover">
              <div class="playlist_item-header row">
                <div class="playlist__item-index">#{{ item.pos }}</div>
                <div class="playlist__item-remove">Remove</div>
              </div>
            </div>
            <div class="playlist__item-info">
              <div class="scroll">
                <div class="info-title">{{ item.title }}</div>
                <div class="info-album">{{ item.album }}</div>
                <div class="info-artist">{{ item.artist }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  name: 'Player',
  computed: {
    ...mapGetters(['playlists', 'playlist', 'connection'])
  }
}
</script>

<style scoped>
#playlist {
  background: #eceff4;
}

.row {
  justify-content: space-between;
}

.playlist__item-index, .playlist__item-remove {
  padding: .5rem;
  color: #fff;
}

.playlist__list ul li {
  background: #e5e9f0;
  padding: 10px 25px;
  margin-bottom: 5px;
  border-radius: 25px;
  cursor: pointer;
}

.playlist__list ul li:hover {
  background: #81a1c1;
  transition: .2s;
  transition-timing-function: ease;
}

.playlist__list ul li:hover a {
  transition: .2s;
  transition-timing-function: ease;
  color: #fff;
}

.playlist__list-active {
  background: #81a1c1;
  border-radius: 25px;
}

.playlist__list-active:hover {
  background: #81a1c1 !important;
}

.playlist__list > ul {
  width: 200px;
}

.playlist__container {
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: space-between;
  text-align: left;
}

.playlist__list {
  flex-grow: 1;
  padding: 2rem;
}

.playlist__content {
  padding: 2rem;
}

.playlist__content > .row {
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
}

.playlist__item {
  width: 200px;
  margin: 0 10px 20px 10px;
  background: #fff;
  box-shadow: 0 2px 5px #d8dee9;
}

.playlist__item:hover {
  transition: .5s;
  box-shadow: 0 2px 10px #d8dee9;
}

.playlist__item-cover {
  width: 200px;
  height: 200px;
  background: #8fbcbb;
}

@media only screen and (max-width: 800px) {
  .playlist__list ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .playlist__list ul li {
    margin: 5px;
  }
  .playlist__container {
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .playlist__item, .playlist__item-cover {
    width: 150px;
  }
  .playlist__item-cover {
    height: 150px;
  }
  .playlist__content .row {
    justify-content: space-evenly;
  }
}

.playlist__item-info {
  position: relative;
  padding: 1rem 0;
  overflow: hidden;
  height: 100px;
  width: 90%;
  margin: 0 auto;
  font-weight: 500;
}

.scroll {
  position: absolute;
  white-space: nowrap;
}

.info-title {
  font-size: 10pt;
  font-weight: 200;
  margin-bottom: 10px;
}

.info-album {
  font-size: 14pt;
  margin-bottom: 5px;
  color: #bf616a;
}

.info-artist {
  font-size: 8pt;
  color: #d8dee9;
}

.playlist__item-info:hover .scroll {
  animation: 4s linear infinite scroll;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>
