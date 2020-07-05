<template>
  <section id="header">
    <h1>Hello Shisam,<span> it's {{ time }}</span></h1>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      time: null
    }
  },
  methods: {
    getCurrentTime: function () {
      this.time = new Date().toLocaleTimeString()
    }
  },
  created () {
    this.time = new Date().toLocaleTimeString()
    setInterval(() => {
      this.getCurrentTime()
    }, 1000)
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  margin: 0;
  height: 400px;
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

#header h1 {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 50px;
  color: #fff;
  text-align: left;
  animation: slide .5s;
}

#header h1 span {
  font-weight: 200;
}

@keyframes slide {
  from {
    top: 26%;
    opacity: 0%;
  }
  to {
    top: 30%;
    opacity: 100%;
  }
}

</style>
