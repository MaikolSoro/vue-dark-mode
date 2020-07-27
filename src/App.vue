<template>
  <div class="app" :class="(mode === 'dark') ? 'dark' : ''">
    <Header :mode="mode" @toggle="toggle"/>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  data () {

    return {
      mode: 'light'
    }
  },
  components: {
    Header
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode ="light"
      } else {
          this.mode = "dark"
      }
    }
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #F3F3F3;
  color: #152028;

}
.dark{
  background: #192734;
  color: #F3F3F3;
}

</style>
