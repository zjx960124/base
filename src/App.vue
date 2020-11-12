<template>
    <div class="App">
        Hello {{msg}} {{ $store.state.login.userName }}
        <div>
            <router-link to="/page1">go page1</router-link>
            <router-link to="/page2">go page2</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        msg: "diyVue",
      };
    }
  };
</script>

<style lang="scss" scoped>
    .App {
        color: red;
    }
</style>
