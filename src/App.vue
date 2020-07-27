<template>
  <div class="app" :class="(mode === 'dark') ? 'dark' : ''">
    <Header :mode="mode" />
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  data () {

    return {
      mode: 'dark'
    }
  },
  components: {
    Header
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
