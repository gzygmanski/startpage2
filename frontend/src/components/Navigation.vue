<template>
  <nav id="navigation" >
    <div class="row">
      <div class="links">
        <div class="links-bar title" :class="{hidden: onTop, remove: !onTop}">
          <span>{{ currentSong.title }}</span>
        </div>
      </div>
      <div class="links">
        <div class="links-bar" :class="{hidden: onTop, remove: !onTop}">
          <span v-if="mpdStatus.state === `play`"><button class="toggle" v-on:click="toggle()">Pause</button></span>
          <span v-else ><button class="toggle" v-on:click="toggle()">Play</button></span>
        </div>
        <!-- <div class="links-bar" :class="{hidden: onTop}"> -->
        <!--   <span><router-link to="/">Home</router-link></span> -->
        <!--   <span><a href="localhost:5000/api/library">Library</a></span> -->
        <!--   <span><a href="localhost:5000/api/playing">Current Song</a></span> -->
        <!-- </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  name: 'Navigation',
  data: function () {
    return {
      onTop: true
    }
  },
  computed: {
    ...mapGetters(['currentSong', 'mpdStatus', 'connection'])
  },
  methods: {
    ...mapActions(['toggle'])
  },
  created () {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        this.onTop = true
      } else {
        this.onTop = false
      }
    })
  }
}
</script>

<style scoped>
#navigation {
  position: fixed;
  z-index: 100;
  width: 100%;
}

.hidden {
  background: none !important;
  transition: .2s ease-in-out;
  margin-top: 5% !important;
}

.remove {
  opacity: 0;
  top: -100%;
  z-index: -1;
}

.links-bar {
  padding: 14px 5px;
  transition: .2s ease-in-out;
  margin: 10px 10px 0 0;
}

.title {
  color: #fff;
  font-size: 12px;
  padding: 12px 25px;
}

.toggle {
  background: #bf616a !important;
}

.row {
  justify-content: space-between;
}

.links {
  display: flex;
  flex-wrap: nowrap;
}

.links button {
  border: none;
  padding: 12px 25px;
  color: #fff;
  background: #434c5e;
  font-size: 12px;
}

.router-link-active {
  background: #4c566a;
}

.router-link-active:visited {
  color: #fff;
}

</style>
