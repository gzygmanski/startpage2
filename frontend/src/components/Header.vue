<template>
  <section id="header" :style="{ height: size + 'px' }">
    <div class="header_greeter">
      <h1>Hello Shiss</h1>
      <span> it's {{ time }}</span>
      <a href="#bookmarks" class="">
        
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      time: null,
      size: window.innerHeight
    }
  },
  methods: {
    getCurrentTime: function () {
      this.time = new Date().toLocaleTimeString()
    }
  },
  created () {
    window.addEventListener('resize', () => {
      this.size = window.innerHeight
    })
    this.time = new Date().toLocaleTimeString()
    setInterval(() => {
      this.getCurrentTime()
    }, 1000)
  },
  destroyed () {
    window.removeEventListener('resize')
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  margin: 0;
  max-width: 100%;
  background: #bf616a;
  background-image: url("../assets/header.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  position: relative;
  transition: background-size 1s;
}

.header_greeter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 50px;
  color: #fff;
  text-align: left;
  animation: slide .5s;
  text-shadow: 0px 0px 5px #d08770;
  font-family: "TeX Gyre Adventor", "mononoki Nerd Font", sans-serif;
}

.header_greeter > h1 {
  font-size: 30px;
}

.header_greeter > a {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 60px;
  color: #fff;
}

#header h1 span {
  font-weight: 200;
}

@keyframes slide {
  from {
    top: 48%;
    opacity: 0%;
  }
  to {
    top: 50%;
    opacity: 100%;
  }
}

</style>
