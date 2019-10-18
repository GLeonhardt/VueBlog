<template>
  <div id="app">
    <div id="nav">
      <strong>VueBlog</Strong>
      <span class="spacer"></span>
      <router-link to="/">Home </router-link> |
      <router-link to="/newPost">Novo Post </router-link> |
      <a href="https://docs.google.com/document/d/18CPsnH31Uql8cF7_etSc3lcsUA5eUzoPt5hh0CRRzJ4/edit?usp=sharing" target="_blank">
        PDF
      </a>
    </div>
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}
#nav {
  padding: 16px;
  display: flex;
  background-color: #e8e9eb;
}

#nav span{
  color: #42b983;
  font-family: cursive;
  font-size: 24px;
}

.spacer {
  flex-grow: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
