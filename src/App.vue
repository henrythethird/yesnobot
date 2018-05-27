<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    * {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-smoothing: antialiased;
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
        border: 0;
    }

    body, html, #app {
        height: 100%;
    }
</style>
