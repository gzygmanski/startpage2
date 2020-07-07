<template>
  <div>
    <Navigation />
    <Header />
    <Bookmarks />
    <Playlist />
    <Player />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import Bookmarks from '../components/Bookmarks.vue'
import Playlist from '../components/Playlist.vue'
import Player from '../components/Player.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Navigation,
    Bookmarks,
    Playlist,
    Player
  }
}
</script>

<style scoped>
</style>
