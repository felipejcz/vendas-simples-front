<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <a href="#" @click="sair">Sair</a>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    sair: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
