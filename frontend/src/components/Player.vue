<template>
  <div class="player__container">
    <aside id="player" class="player" >
      <div class="row player__row">
        <div class="player__bar">
          <div class="player__progress" :style="{width: `${mpdStatus.progress}%`}">
          </div>
        </div>
      </div>
      <div class="row player__row" :class="{player__hidden: playerHidden}">
        <div class="player__change player__previous">
          <img src="../assets/previous.png" alt="previous"/>
        </div>
        <div class="player__cover">
          <div class="player__toggle">
            <img v-if="mpdStatus.state === `play`" src="../assets/pause.png" alt="pause"/>
            <img v-else src="../assets/play.png" alt="play"/>
          </div>
        </div>
        <div class="player__info">
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
        <div class="player__change player__next">
          <img src="../assets/next.png" alt="next"/>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
}

.player__hidden {
  display: none;
  height: 0px !important;
  transition: .2s !important;
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
  height: 20px;
}

.player__info {
  text-align: left;
  flex-grow: 1;
  padding: .5rem;
  white-space: nowrap;
  overflow: hidden;
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
    height: 50px;
  }
  .player__cover {
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
