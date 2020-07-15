<template>
  <div class="player__container">
    <aside id="player" class="player" >
      <div class="row player__row">
        <div class="player__bar">
          <div class="player__progress" :style="{width: `${mpdStatus.progress}%`}">
          </div>
        </div>
      </div>
      <div class="row player__row" >
        <div :class="{player__hidden: playerHidden}" v-on:click="previous()" class="player__change player__previous">
          <img class="player__controls" src="../assets/previous.png" alt="previous"/>
        </div>
        <div :class="{player__hidden: playerHidden}" v-on:click="toggle()" class="player__cover">
          <div class="player__toggle">
            <img v-if="mpdStatus.state === `play`" src="../assets/pause.png" alt="pause"/>
            <img v-else src="../assets/play.png" alt="play"/>
          </div>
        </div>
        <div :class="{player__hidden: playerHidden}" class="player__info">
          <div class="player__title">
            <span>{{ currentSong.title }}</span>
          </div>
          <div class="player__album">
            {{ currentSong.album }}
          </div>
          <div class="player__artist">
            by {{ currentSong.artist }}
          </div>
        </div>
        <div :class="{player__hidden: playerHidden}" v-on:click="next()" class="player__change player__next">
          <img class="player__controls" src="../assets/next.png" alt="next"/>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  name: 'Player',
  data: function () {
    return {
      playerHidden: true
    }
  },
  computed: {
    ...mapGetters(['currentSong', 'mpdStatus', 'connection'])
  },
  methods: {
    ...mapActions(['toggle', 'previous', 'next'])
  },
  created () {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        this.playerHidden = true
      } else {
        this.playerHidden = false
      }
    })
  }
}
</script>

<style scoped>
#player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #434c5e;
  color: #eceff4;
  font-weight: 500;
  z-index: 100;
  transition: .2s;
}

.player__hidden {
  height: 0px !important;
  padding: 0 !important;
  transition: .2s;
}

.player__hidden img {
  height: 0px !important;
  display: none;
}

.player__hidden span {
  height: 0px !important;
  display: none;
}

.player__container {
  height: 100px;
}

.player__bar {
  width: 100%;
  background: #3b4252;
}

.player__progress {
  height: 5px;
  border-radius: 0 2px 2px 0;
  background: #bf616a;
  transition: width .5s;
  transition-timing-function: ease-in-out;
}

.player__cover {
  width: 100px;
  height: 100px;
  background: #2e3440;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.player__toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
}

.player__cover > .player__toggle > img {
  height: 30px;
}

.player__info {
  text-align: left;
  flex-grow: 1;
  padding: .5rem;
  white-space: nowrap;
  overflow: hidden;
}

.player__controls {
  width: 20px;
  height: 20px;
}

@media only screen and (min-width: 800px) {
  #player, .player__cover, .player__toggle {
    transition: .5s;
    transition-timing-function: ease-in-out;
  }
}
@media only screen and (max-width: 800px) {
  #player, .player__cover, .player__toggle {
    transition: .5s;
    transition-timing-function: ease-in-out;
  }
  .player__toggle {
    height: 50px;
  }
  .player__cover {
    height: 50px;
    background-image: none;
  }
  .player__cover > img {
    display: none;
  }
  .player__info {
    display: none;
  }
  .row {
    justify-content: center;
  }
}

.player__title {
  margin-bottom: 10px;
  font-size: 10pt;
}

.player__album {
  font-size: 14pt;
  color: #bf616a;
}

.player__artist {
  font-size: 8pt;
  padding: .2rem 0;
}

.player__change {
  width: 70px;

}
</style>
